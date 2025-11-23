<template>
  <div class="w-full h-[10px] bg-bgLight rounded-full overflow-hidden">
    <div
      :class="[
        'h-full transition-all duration-300',
        completed ? 'w-full bg-progressBlue' : 'w-0 bg-transparent'
      ]"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  completed: boolean
}

defineProps<Props>()
</script>

