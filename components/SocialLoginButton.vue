<template>
  <button
    type="button"
    :class="['text-button border border-primary rounded-md px-5 py-3 flex items-center justify-center gap-2 w-full hover:bg-gray-50 transition-colors', disabled && 'opacity-50 cursor-not-allowed']"
    :aria-label="`Sign in with ${provider}`"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <img
      :src="iconSrc"
      :alt="`${provider} icon`"
      class="h-6"
      aria-hidden="true"
    />
    {{ provider }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  provider: string
  iconSrc: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  disabled: false,
})

defineEmits<{
  click: []
}>()
</script>



