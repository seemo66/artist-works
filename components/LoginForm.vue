<template>
  <div class="w-full px-[24px] mt-[48px] md:mt-[80px] max-w-[450px] m-auto ">
    <Logo
      :dark="true"
      class="mb-[24px] h-12"
    />
    <h2 class="text-primary font-bold text-[24px] leading-[28px] mb-[24px]">Sign in to ArtistWorks</h2>
    <p class="text-[14px] font-medium leading-[22px] text-primary pb-[40px]">
      New user?
      <NuxtLink class="text-pink ml-[8px] cursor-pointer">Create an account.</NuxtLink>
    </p>

    <form
      @submit.prevent="handleLogin"
      class="flex flex-col gap-[24px] mb-[24px]"
    >
      <div>
        <label class="text-primary font-medium text-[12px] inline-block mb-2">Username</label>
        <input
          v-model="username"
          type="text"
          class="border-lightGrey border rounded-lg w-full px-4 py-4 text-[14px] leading-[20px] text-primary placeholder-mediumGrey focus:outline-none focus:none"
          placeholder="Choose a username"
        />
      </div>

      <div>
        <label class="text-primary font-medium text-[12px] inline-block mb-2">Password</label>
        <input
          v-model="password"
          type="password"
          class="border-lightGrey border rounded-lg w-full px-4 py-4 text-[14px] leading-[20px] text-primary placeholder-mediumGrey focus:outline-none focus:none"
          placeholder="Create a password"
        />
      </div>

      <button
        type="submit"
        class="bg-blue text-white rounded-full w-full text-[14px] font-bold leading-4 px-4 py-4 tracking-normal h-[52px]"
      >
        Continue
      </button>
    </form>

    <NuxtLink class="text-pink ml-[8px] text-[14px] font-medium leading-[22px] cursor-pointer">Forgot password?</NuxtLink>

    <!-- divider -->
    <div class="flex items-center gap-3 my-10">
      <div class="h-px bg-lighterGrey flex-1"></div>
      <span class="text-[14px] leading-[22px] text-mediumGrey">Or sign up with</span>
      <div class="h-px bg-lighterGrey flex-1"></div>
    </div>

    <!-- Social Buttons -->
    <div class="flex gap-4">
      <button
        @click="handleSocialLogin('Google')"
        class="font-bold text-[14px] border border-primary rounded-md px-5 py-3 flex items-center justify-center gap-2 w-full"
      >
        <img
          src="/images/google-icon.svg"
          class="h-6"
        />
        Google
      </button>

      <button
        @click="handleSocialLogin('Apple')"
        class="font-bold text-[14px] border border-primary rounded-md px-5 py-3 flex items-center justify-center gap-2 w-full"
      >
        <img
          src="/images/apple-icon.svg"
          class="h-6"
        />
        Apple
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

const username = ref('')
const password = ref('')

const router = useRouter()
const auth = useAuthStore()

function handleLogin() {
  // Fake login: accept any username/password
  auth.login()

  // Redirect to lesson overview
  router.push('/lessonOverview')
}

function handleSocialLogin(provider: string) {
  console.log(`${provider} login clicked`) // just for demo
  auth.login()
  router.push('/lessonOverview')
}
</script>
