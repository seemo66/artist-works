<template>
  <button
    :type="type"
    :class="[
      'flex items-center justify-center rounded-full border transition-colors',
      sizeClasses,
      borderClasses,
      hoverClasses,
      disabled && 'opacity-50 cursor-not-allowed'
    ]"
    :aria-label="ariaLabel"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <img
      :src="iconSrc"
      :alt="iconAlt || ''"
      :class="iconSizeClasses"
      aria-hidden="true"
    />
  </button>
</template>

<script setup lang="ts">
interface Props {
  iconSrc: string
  iconAlt?: string
  size?: 'sm' | 'md' | 'lg'
  border?: boolean
  ariaLabel: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  iconAlt: '',
  size: 'md',
  border: true,
  type: 'button',
  disabled: false,
})

defineEmits<{
  click: []
}>()

// size classes
const sizeClasses = {
  sm: 'h-[32px] w-[32px]',
  md: 'h-[42px] w-[42px]',
  lg: 'h-[52px] w-[52px]',
}[props.size]

// icon size classes
const iconSizeClasses = {
  sm: 'h-3',
  md: 'h-3',
  lg: 'h-4',
}[props.size]

// border classes
const borderClasses = props.border
  ? 'border-lighterGrey'
  : 'border-transparent'

// hover classes
const hoverClasses = !props.disabled
  ? 'hover:bg-gray-50 cursor-pointer'
  : ''
</script>
