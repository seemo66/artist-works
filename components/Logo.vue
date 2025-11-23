<!-- app/components/Logo.vue -->
<template>
  <img
    :src="dark ? '/images/logo-dark.svg' : '/images/logo-light.svg'"
    alt="Logo"
    class="cursor-pointer"
    :class="customClass"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  dark?: boolean
  class?: string
}>()

const dark = props.dark ?? false
const customClass = props.class ?? ''
</script>
