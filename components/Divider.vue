<template>
  <div
    class="flex items-center gap-3 my-10"
    role="separator"
    :aria-label="text || 'divider'"
  >
    <div class="h-px bg-lighterGrey flex-1"></div>
    <span
      v-if="text"
      class="text-body text-mediumGrey"
    >
      {{ text }}
    </span>
    <div class="h-px bg-lighterGrey flex-1"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text?: string
}

withDefaults(defineProps<Props>(), {
  text: '',
})
</script>



