<template>
  <header class="py-[13px] px-[16px] flex items-center justify-between border-b border-lighterGrey md:px-[40px]">
    <!-- Left group: hamburger + logo -->
    <div class="
    flex
    items-center
    gap-6 lg:gap-3">
      <img
        src="/images/circle-arrow-left.svg"
        class="hidden lg:block h-8"
        alt="menu"
      />
      <p class="hidden lg:block text-section-label text-mediumGrey">LESSONS</p>
      <img
        src="/images/hamburger.svg"
        class="h-6 lg:hidden"
        alt="menu"
      />
      <Logo
        :dark="true"
        class="h-8 lg:hidden"
      />
    </div>

    <!-- Right group: notification + button -->
    <div class="flex items-center gap-2 lg:gap-6">
      <SearchBar class="hidden lg:block" />
      <img
        src="/images/notification.svg"
        class="h-[46px] cursor-pointer"
        alt="notifications"
      />
      <button
        type="submit"
        class="relative bg-blue text-white rounded-full text-button px-4 tracking-normal h-[42px] flex items-center justify-center gap-2 w-[157px]"
      >
        <img
          src="/images/circle-arrow-up.svg"
          class="h-6"
          alt="arrow icon"
        />
        Submit Video
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
// No logic for now
</script>

<style scoped>
</style>