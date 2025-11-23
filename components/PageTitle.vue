<template>
  <div class="mb-8 lg:mb-12">
    <!-- page title -->
    <h1 class="text-page-heading text-textDark lg:text-primary mb-4 align-bottom">
      {{ title }}
    </h1>
    
    <!-- metadata list -->
    <MetaList :items="metaItems" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  metaItems?: string[]
}

withDefaults(defineProps<Props>(), {
  title: 'Intermediate',
  metaItems: () => [
    '64 Topics',
    '283 Lesson Videos',
    '1673 Video Exchanges',
  ],
})
</script>

<style scoped>
</style>
