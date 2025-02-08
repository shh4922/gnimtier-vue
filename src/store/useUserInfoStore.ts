import { defineStore } from "pinia";

export const useUserInfoStore = defineStore("userInfoStore", {
  state: () => ({
    userInfo: { },
  }),
  getters: {
    userInfo: (state) => state.userInfo,

  },
  actions: {

  },
});
