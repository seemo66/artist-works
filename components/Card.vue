<template>
  <article
    class="bg-white rounded-xl border-[1.5px] border-lighterGrey p-3 lg:p-4 flex flex-col gap-3 lg:relative hover:shadow-md transition-shadow cursor-pointer"
    @click="handleCardClick"
  >
    <!-- top section: image and text -->
    <div class="flex flex-col gap-3 lg:flex-row lg:gap-4 items-center">
      <!-- image container -->
      <div class="relative w-full lg:w-[90px] lg:h-[60px] flex-shrink-0 overflow-hidden rounded-lg">
        <img
          :src="image"
          :alt="title"
          class="w-full h-full object-cover aspect-[12/7]"
          loading="lazy"
        />

        <!-- completed overlay (desktop) -->
        <div
          v-if="completed"
          class="absolute inset-0 flex items-center justify-center"
        >
          <div class="hidden lg:block absolute inset-0 bg-textMedium opacity-75 rounded-lg"></div>
          <img
            src="/images/check-completed-image.svg"
            alt=""
            class="h-[26px] z-10"
            aria-hidden="true"
          />
        </div>
      </div>

      <!-- title and subtitle -->
      <div class="flex flex-col gap-3 w-full lg:gap-[10px]">
        <h3 class="text-card-title text-primary">
          {{ title }}
        </h3>
        <p class="text-card-subtitle text-textMedium capitalize mb-1 lg:mb-0">
          {{ subtitle }}
        </p>
      </div>
    </div>

    <!-- progress bar and time -->
    <div class="flex gap-3 items-center w-full">
      <ProgressBar :completed="completed" />
      <time
        class="text-card-time text-gray-600 hidden lg:block"
        :datetime="time"
      >
        {{ time }}
      </time>
    </div>

    <!-- action icons -->
    <div class="flex justify-end gap-6 mt-2 lg:absolute lg:top-4 lg:right-4 lg:mt-0">
      <!-- bookmark icon -->
      <button
        type="button"
        class="hover:opacity-80 transition-opacity"
        aria-label="Bookmark lesson"
        @click.stop="handleBookmarkClick"
      >
        <img
          src="/images/ribbon.svg"
          alt=""
          class="h-6"
          aria-hidden="true"
        />
      </button>

      <!-- completion toggle icon -->
      <button
        type="button"
        class="hover:opacity-80 transition-opacity"
        :aria-label="completed ? 'Mark as incomplete' : 'Mark as complete'"
        @click.stop="handleCompleteToggle"
      >
        <img
          :src="completed ? '/images/check-completed.svg' : '/images/check.svg'"
          alt=""
          class="h-6"
          aria-hidden="true"
        />
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  id: number
  image: string
  title: string
  subtitle: string
  time: string
  completed: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  click: [id: number]
  bookmark: [id: number]
  complete: [id: number, completed: boolean]
}>()

/**
 * handles card click
 */
function handleCardClick() {
  emit('click', props.id)
}

/**
 * handles bookmark button click
 */
function handleBookmarkClick() {
  emit('bookmark', props.id)
}

/**
 * handles completion toggle
 */
function handleCompleteToggle() {
  emit('complete', props.id, !props.completed)
}
</script>

<style scoped>
</style>
