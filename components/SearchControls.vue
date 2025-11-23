<template>
  <div class="flex items-center gap-[10px] justify-between mb-6 lg:mb-[42px]">
    <div class="flex gap-3">
      <SearchBar width="w-[140px] lg:w-[200px]" />
      <div class="relative inline-block">
        <select class="appearance-none border border-lighterGrey text-[#252525] font-semibold rounded-3xl py-2 pl-4 pr-8 text-[14px] leading-[22px] cursor-pointer focus:outline-none focus:ring-0 h-[46px] w-[85px]">
          <option value="">Sort</option>
          <option value="recent">Most Recent</option>
          <option value="popular">Most Popular</option>
          <option value="az">A → Z</option>
        </select>

        <!-- Down Arrow -->
        <svg
          class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-black"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
    <div class="flex gap-3 items-center">
      <p class="hidden lg:block cursor-pointer">View</p>
      <div class="flex items-center justify-center h-[42px] w-[42px] rounded-full lg:border border-lighterGrey cursor-pointer">
        <img
          src="/images/filter.svg"
          alt="filter icon"
          class="h-3 cursor-pointer"
        />
      </div>
      <div class="flex items-center justify-center h-[42px] w-[42px] rounded-full border lg:border-none border-lighterGrey cursor-pointer">
        <img
          src="/images/drag.svg"
          alt="drag icon"
          class="h-3"
        />
      </div>
      <div class="items-center justify-center h-[42px] w-[42px] rounded-full border lg:border-none border-lighterGrey cursor-pointer lg:flex hidden">
        <img
          src="/images/multidrag.svg"
          alt="multi drag icon"
          class="h-3"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// This component just wraps content for now
</script>

<style scoped>
</style>
