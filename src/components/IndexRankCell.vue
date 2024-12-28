<script setup lang="ts">

</script>

<template>
  <div class="rank-cell-container">
    <p class="rank">1</p>
    <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/106399466_666605147400072_4712699902895585087_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=TxF1kByLe-8Q7kNvgGuVM80&_nc_zt=23&_nc_ht=scontent-ssn1-1.xx&_nc_gid=ANskEC2MuaPaAygVtrpUlzk&oh=00_AYAAQp2BTvR42zf5snui8IizCBfFw_OfJNMw_7WL9k-JuA&oe=679774BE" alt="" />
    <div class="riot-info">
      <p>계정명</p>
      <p>#kr1</p>
    </div>
    <div class="user-info">
      <p>여기서쓰는 닉네임임</p>
      <p>백골부대</p>
    </div>
    <p class="level">Lv. 192</p>
  </div>
</template>

<style scoped>
.rank-cell-container:hover {
  background-color: #1E4747;
  border: 1px solid #02FFFF;
}

.rank-cell-container {
  display: flex;
  align-items: center;
  height: 5rem;
  border: 1px solid transparent;
  border-radius: 1rem;
  gap: 1rem;
  padding: 0.5rem;

  .rank {
    width: 10%;
    background-color: #f2f2f2;
    text-align: center;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: contain;
  }

  .riot-info {
    width: 30%;
    background-color: #f2f2f2;
  }

  .user-info {
    width: 30%;
    background-color: #282828;
  }

  .level {
    width: 20%;
    background-color: #f2f2f2;
  }
}
</style>
