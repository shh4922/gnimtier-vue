<script setup lang="ts">

import { useRoute } from 'vue-router'
import { onMounted, ref, type Ref } from 'vue'
import { fetchTftUserByGroup, type tftUserInfo } from '@/api/tft/tft.ts'

const route = useRoute()
const userList: Ref<Array<tftUserInfo>|null> = ref(null); // Ref 타입 명시
const name: Ref<string> = ref<string>("")
const page = ref<number>(Number(route.query.page) || 1);
const totalPage = ref<number>(0)
const groupListRef = ref<HTMLElement | null>(null);
const isLoading = ref(false)

onMounted(()=> {
  name.value = route.query.qroupName
  if (groupListRef.value) {
    groupListRef.value.addEventListener("scroll", handleNotificationListScroll);
  }
  getGroupTftUser()
})

async function getGroupTftUser(page: number = 1) {
  if(isLoading.value) return

  isLoading.value = true
  const resultData = await fetchTftUserByGroup(name.value, page);

  if (page === 1) {
    userList.value = resultData.data; // 첫 로드 시 덮어쓰기
    totalPage.value = resultData.totalPages;
  } else {
    userList.value = [...(userList.value || []), ...resultData.data]; // 추가 데이터
  }
  isLoading.value = false

  return resultData; // 반환 추가!
}


function handleNotificationListScroll(e:Event) {
  const { scrollHeight, scrollTop, clientHeight } = e.target;
  const isAtTheBottom = scrollHeight === scrollTop + clientHeight;
  // 일정 한도 밑으로 내려오면 함수 실행
  if (isAtTheBottom) handleLoadMore();
}

// 내려오면 api 호출하여 아래에 더 추가, total값 최대이면 호출 안함
async function handleLoadMore() {
  if (page.value < totalPage.value) {
    console.log( typeof page.value)
    page.value += 1; // 페이지 증가
    const res = await getGroupTftUser(page.value); // 새 페이지 데이터 가져오기

    if (res && res.data) {
      userList.value = [...(userList.value || []), ...res.data]; // 기존 데이터에 추가
    }
  }
}

// 스크롤을 맨위로 올리고 싶을 때
// function handleClickTitle() {
//   this.$refs["notification-list"].scroll({ top: 0, behavior: "smooth" });
// }
//
// // 새로고침
// function handleClickRefresh() {
//   this.$refs["notification-list"].scroll({ top: 0 });
//   this.dispatchGetNotifications(true);
// }

// 처음 렌더링시 이전 알림 불러오기 or reset=true시 새로고침, false시 이전 목록에 추가
// function dispatchGetNotifications(reset) {
//   this.$store.dispatch("notification/getNotifications", reset);
// }

</script>

<template>
  <h1>그룹리스트임</h1>
  <ul
    ref="groupListRef"
    class="list"
    @scroll="handleNotificationListScroll"
  >
    <li
      v-for="(user, index) in userList"
      :key="`${index}`"
    >
      {{user.summoner.gameName}}
    </li>
  </ul>
</template>

<style scoped>
.list {
  height: 70px;
  overflow: auto;
  background-color: red;
}
li {
  color: white;
}
</style>
