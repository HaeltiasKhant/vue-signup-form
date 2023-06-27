<template>
  <div class="p-5 h-screen md:h-fit mx-auto max-w-[500px] bg-slate-100 md:my-20 rounded-3xl">
    <div class="md:px-16 md:py-10">
      <img class="mb-8" src="../assets/images/icon-success.svg" alt="successLogo">
      <h1 class="font-bold text-5xl mb-8">Thanks for subscribing!</h1>
      <p class="mb-8">A comfirmation message has been sent to the email - <strong>{{ usersInfosStore.userEmail }}</strong>.Please open it and click the button inside to comfirm your subscription.</p>
      <button @click="navigateHome" class="md:w-full px-4 py-3 bg-slate-800 text-slate-100 rounded-md hover:bg-orange-700">Dismiss message</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserInfosStore } from '../stores/UserInfosStore';

const usersInfosStore = useUserInfosStore()
const router = useRouter()

const navigateHome = () => {
  router.push(`/`)
}

</script>