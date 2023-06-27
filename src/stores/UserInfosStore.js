import { defineStore } from "pinia";

export const useUserInfosStore = defineStore("userInfosStore", {
  state: () => ({
    usersInfos: [{ id: 1, email: "1234RDj@gmail.com" }],
  }),
  actions: {
    addUserInfos(infos) {
      this.usersInfos.push(infos);
    },
  },
  getters: {
    userEmail() {
      return this.usersInfos[this.usersInfos.length - 1].email
    }
  },
});
