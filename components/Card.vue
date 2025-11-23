<template>
  <div class="bg-white rounded-xl border-[1.5px] border-lighterGrey p-3 lg:p-4 flex flex-col gap-3 lg:relative">
    <!-- Top section: image + text -->
    <div class="flex flex-col gap-3 lg:flex-row lg:gap-4 items-center">
      <!-- Image container -->
      <div class="relative w-full lg:w-[90px] lg:h-[60px] flex-shrink-0  overflow-hidden rounded-lg">
        <img
          :src="image"
          :alt="title"
          class="w-full h-full object-cover aspect-[12/7]"
        />

        <!-- Completed overlay -->
        <div
          v-if="completed"
          class="absolute inset-0 flex items-center justify-center"
        >
          <div class="hidden lg:block absolute inset-0 bg-textMedium opacity-75 rounded-lg"></div>
          <img
            src="/images/check-completed-image.svg"
            alt="completed icon"
            class="h-[26px] z-10"
          />
        </div>
      </div>

      <!-- Title & Subtitle -->
      <div class="flex flex-col gap-3 w-full lg:gap-[10px]">
        <h3 class="text-card-title text-primary">{{ title }}</h3>
        <p class="text-card-subtitle text-textMedium capitalize mb-1 lg:mb-0">{{ subtitle }}</p>
      </div>
    </div>

    <!-- Progress bar + time -->
    <div class="flex gap-3 items-center w-full">
      <div class="w-full h-[10px] bg-bgLight rounded-full overflow-hidden">
        <div
          class="h-full"
          :class="completed ? 'w-full bg-progressBlue' : 'w-0 bg-transparent'"
        ></div>
      </div>

      <div class="text-card-time text-gray-600 hidden lg:block">{{ time }}</div>
    </div>

    <!-- Footer icons -->
    <div class="flex justify-end gap-6 mt-2 lg:absolute lg:top-4 lg:right-4 lg:mt-0">
      <!-- Ribbon icon -->
      <img
        src="/images/ribbon.svg"
        alt="ribbon icon"
        class="h-6"
      />

      <!-- Completed icon -->
      <img
        :src="completed ? '/images/check-completed.svg' : '/images/check.svg'"
        alt="completed icon"
        class="h-6"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: string
  title: string
  subtitle: string
  time: string
  completed: boolean
}

const props = defineProps<Props>()
const { image, title, subtitle, time, completed } = props
</script>

<style scoped>
/* optional extra styling */
</style>
