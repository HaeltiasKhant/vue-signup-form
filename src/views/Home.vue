<template>
  <div class="max-w-4xl h-fit bg-white mx-auto md:my-20 rounded-3xl flex flex-wrap-reverse">
    <div class="md:w-[55%]">
      <h1 class="text-[52px] font-bold md:text-center md:mt-24 mt-2">Stay updated!</h1>
      <div class="md:mx-20 mt-2 text-sm mx-2">
        <p>Join 60000+ product managers receiving monthly updates on:</p>
        <div class="flex flex-row mt-6">
          <img src="../assets/images/icon-list.svg" alt="iconList">
          <p class="pl-3">Product discovery and building what matters</p>
        </div>
        <div class="flex flex-row mt-3">
          <img src="../assets/images/icon-list.svg" alt="iconList">
          <p class="pl-3">Measuring to ensure updates are a success</p>
        </div>
        <div class="flex flex-row mt-3">
          <img src="../assets/images/icon-list.svg" alt="iconList">
          <p class="pl-3">And much more!</p>
        </div>
        <form class="mt-5">
          <p class="text-xs mb-2">Email Address</p>
          <p class="text-red-500 text-end" v-show="showErrMessage">Invalid Email</p>
          <p class="text-red-500 text-end" v-show="showEmailExists">Email already existed</p>
          <input v-model="userEmail" class="w-full px-4 py-3 bg-gray-200 border-0 rounded-md" type="email" name="email"
            id="email" placeholder="example@company.com">
          <!----<input type="submit" value="submit" class="w-full px-4 py-3 bg-slate-800 text-slate-100 mt-5 rounded-md mb-2 md:mb-20 hover:bg-orange-700">-->
        </form>
        <button @click="navigateSubscribe"
          class="w-full px-4 py-3 bg-slate-800 text-slate-100 mt-5 rounded-md mb-2 md:mb-20 hover:bg-orange-700">Subscribe
          to monthly newsletter</button>
      </div>
    </div>
    <div class="md:w-[45%]">
      <img class="p-5" src="../assets/images/illustration-sign-up-desktop.svg" alt="logo">
      <!----<img class="visible md:invisible" src="../assets/images/illustration-sign-up-mobile.svg" alt="mobileLogo">-->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useUserInfosStore } from '../stores/UserInfosStore';

const router = useRouter()
const userEmail = ref("")
const showErrMessage = ref(false)
const showEmailExists = ref(false)
const usersInfosStore = useUserInfosStore()

const navigateSubscribe = () => {
  if (!userEmail.value.includes('@') || userEmail.value === "") {
    showErrMessage.value = true
    return
  }
  router.push(`/success`)
  usersInfosStore.addUserInfos({
    id: Math.floor(Math.random() * 10000),
    email: userEmail
  })
}

</script>