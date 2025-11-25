<template>
  <ul class="flex items-center text-page-meta text-textMedium">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="flex items-center"
    >
      <span>{{ item }}</span>
      <span
        v-if="index < items.length - 1"
        class="mx-2"
        aria-hidden="true"
      >·</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Props {
  items: string[]
}

defineProps<Props>()
</script>


