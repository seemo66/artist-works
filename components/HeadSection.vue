<template>
  <header class="py-[13px] px-[16px] flex items-center justify-between border-b border-lighterGrey md:px-[40px]">
    <!-- left section: navigation and branding -->
    <div class="flex items-center gap-6 lg:gap-3">
      <!-- back button (desktop) -->
      <button
        type="button"
        class="hidden lg:block"
        aria-label="Go back"
        @click="handleBack"
      >
        <img
          src="/images/circle-arrow-left.svg"
          class="h-8"
          alt=""
          aria-hidden="true"
        />
      </button>
      
      <!-- section label (desktop) -->
      <p class="hidden lg:block text-section-label text-mediumGrey">
        LESSONS
      </p>
      
      <!-- hamburger menu (mobile) -->
      <button
        type="button"
        class="lg:hidden"
        aria-label="Open menu"
        @click="handleMenuToggle"
      >
        <img
          src="/images/hamburger.svg"
          class="h-6"
          alt=""
          aria-hidden="true"
        />
      </button>
      
      <!-- logo (mobile) -->
      <Logo
        :dark="true"
        class="h-8 lg:hidden"
      />
    </div>

    <!-- right section: search, notifications, and actions -->
    <div class="flex items-center gap-2 lg:gap-6">
      <!-- search bar (desktop) -->
      <SearchBar class="hidden lg:block" />
      
      <!-- notification button -->
      <button
        type="button"
        class="h-[46px] cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="View notifications"
        @click="handleNotificationClick"
      >
        <img
          src="/images/notification.svg"
          class="h-full"
          alt=""
          aria-hidden="true"
        />
      </button>
      
      <!-- submit video button -->
      <SubmitVideoButton @click="handleSubmitVideo" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

/**
 * handles back button click
 */
function handleBack() {
  router.back()
}

/**
 * handles menu toggle (mobile)
 */
function handleMenuToggle() {
  // TODO: implement mobile menu toggle
  console.log('Menu toggle clicked')
}

/**
 * handles notification button click
 */
function handleNotificationClick() {
  // TODO: implement notification panel
  console.log('Notifications clicked')
}

/**
 * handles submit video button click
 */
function handleSubmitVideo() {
  // TODO: implement submit video flow
  console.log('Submit video clicked')
}
</script>

<style scoped>
</style>