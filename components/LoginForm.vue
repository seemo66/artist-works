<template>
  <div class="w-full px-[24px] mt-[48px] md:mt-[80px] max-w-[450px] m-auto">
    <!-- logo -->
    <Logo
      :dark="true"
      class="mb-[24px] h-12"
    />
    
    <!-- heading -->
    <h2 class="text-primary text-form-heading mb-[24px]">Sign in to ArtistWorks</h2>
    
    <!-- sign up prompt -->
    <p class="text-body text-primary pb-[40px]">
      New user?
      <NuxtLink
        to="/signup"
        class="text-pink ml-[8px] cursor-pointer hover:underline"
      >
        Create an account.
      </NuxtLink>
    </p>

    <!-- login form -->
    <form
      @submit.prevent="handleLogin"
      class="flex flex-col gap-[24px] mb-[24px]"
      novalidate
    >
      <!-- username field -->
      <FormField
        id="username"
        v-model="username"
        label="Username"
        type="text"
        autocomplete="username"
        placeholder="Choose a username"
        :required="true"
        :disabled="isLoading"
      />

      <!-- password field -->
      <FormField
        id="password"
        v-model="password"
        label="Password"
        type="password"
        autocomplete="current-password"
        placeholder="Create a password"
        :required="true"
        :disabled="isLoading"
      />

      <!-- submit button -->
      <button
        type="submit"
        class="bg-blue text-white rounded-full w-full text-button px-4 py-4 tracking-normal h-[52px] hover:bg-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="!isFormValid || isLoading"
      >
        {{ isLoading ? 'Signing in...' : 'Continue' }}
      </button>
    </form>

    <!-- forgot password link -->
    <NuxtLink
      to="/forgot-password"
      class="text-pink ml-[8px] text-body cursor-pointer hover:underline"
    >
      Forgot password?
    </NuxtLink>

    <!-- divider -->
    <Divider text="Or sign up with" />

    <!-- social login buttons -->
    <div class="flex gap-4">
      <SocialLoginButton
        provider="Google"
        icon-src="/images/google-icon.svg"
        :disabled="isLoading"
        @click="handleSocialLogin('Google')"
      />
      <SocialLoginButton
        provider="Apple"
        icon-src="/images/apple-icon.svg"
        :disabled="isLoading"
        @click="handleSocialLogin('Apple')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

// form state
const username = ref('')
const password = ref('')
const isLoading = ref(false)

// composables
const router = useRouter()
const auth = useAuthStore()

// computed properties
const isFormValid = computed(() => {
  return username.value.trim().length > 0 && password.value.trim().length > 0
})

/**
 * handles form submission for username/password login
 * currently accepts any credentials for demo purposes
 */
async function handleLogin() {
  if (!isFormValid.value || isLoading.value) {
    return
  }

  isLoading.value = true
  
  try {
    // simulate api call delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    auth.login()
    router.push('/lessonOverview')
  } catch (error) {
    console.error('Login failed:', error)
    // handle error state here if needed
  } finally {
    isLoading.value = false
  }
}

/**
 * handles social login button clicks
 * @param provider - the social provider name (e.g., 'Google', 'Apple')
 */
async function handleSocialLogin(provider: string) {
  if (isLoading.value) {
    return
  }

  console.log(`${provider} login clicked`) // demo logging
  
  isLoading.value = true
  
  try {
    // simulate api call delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    auth.login()
    router.push('/lessonOverview')
  } catch (error) {
    console.error(`${provider} login failed:`, error)
    // handle error state here if needed
  } finally {
    isLoading.value = false
  }
}
</script>
