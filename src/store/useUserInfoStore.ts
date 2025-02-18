import { defineStore } from "pinia";
import type { User } from '@/api/tft/model.tft.ts'

export const useUserInfoStore = defineStore("userInfoStore", {
  state: () => ({
    userInfo: null as User | null,  // 타입 명확하게 지정
  }),
  getters: {
    getUserInfo: state => state.userInfo,
  },
  // 상태값을 바꾸고 싶을 떄!
  // 여기서 this 쓰는거 유의하기!
  actions: {
    setUserInfo(userInfo:User|null) {
      this.userInfo = userInfo
    },
  },
});
