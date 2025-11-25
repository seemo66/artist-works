<template>
  <button
    type="button"
    class="relative bg-blue text-white rounded-full text-button px-4 tracking-normal h-[42px] flex items-center justify-center gap-2 w-[157px] hover:bg-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    :disabled="disabled"
    :aria-label="ariaLabel"
    @click="$emit('click')"
  >
    <img
      src="/images/circle-arrow-up.svg"
      alt=""
      class="h-6"
      aria-hidden="true"
    />
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label?: string
  disabled?: boolean
  ariaLabel?: string
}

withDefaults(defineProps<Props>(), {
  label: 'Submit Video',
  disabled: false,
  ariaLabel: 'Submit video',
})

defineEmits<{
  click: []
}>()
</script>


