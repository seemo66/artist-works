<template>
  <div class="flex items-center gap-[10px] justify-between mb-6 lg:mb-[42px]">
    <!-- left section: search and sort -->
    <div class="flex gap-3">
      <!-- search bar -->
      <SearchBar width="w-[140px] lg:w-[200px]" />

      <!-- sort dropdown -->
      <SortSelect
        v-model="sortValue"
        :options="sortOptions"
        @update:model-value="handleSortChange"
      />
    </div>

    <!-- right section: view controls -->
    <div class="flex gap-3 items-center">
      <!-- view label (desktop) -->
      <p class="hidden lg:block cursor-pointer text-body">
        View
      </p>

      <!-- filter button -->
      <IconButton
        icon-src="/images/filter.svg"
        icon-alt="Filter"
        :border="true"
        ariaLabel="Filter lessons"
        class="lg:border-lighterGrey"
        @click="handleFilterClick"
      />

      <!-- drag handle button -->
      <IconButton
        icon-src="/images/drag.svg"
        icon-alt="Drag"
        :border="true"
        ariaLabel="Drag to reorder"
        class="border-lighterGrey lg:border-transparent"
        @click="handleDragClick"
      />

      <!-- multi-drag button (desktop) -->
      <IconButton
        icon-src="/images/multidrag.svg"
        icon-alt="Multi drag"
        :border="false"
        ariaLabel="Multi-select drag"
        class="hidden lg:flex"
        @click="handleMultiDragClick"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// sort state
const sortValue = ref('')

// sort options
const sortOptions = [
  { value: '', label: 'Sort' },
  { value: 'recent', label: 'Most Recent' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'az', label: 'A → Z' },
]

/**
 * handles sort dropdown change
 */
function handleSortChange(value: string) {
  sortValue.value = value
  // TODO: implement sorting logic
  console.log('Sort changed to:', value)
}

/**
 * handles filter button click
 */
function handleFilterClick() {
  // TODO: implement filter panel
  console.log('Filter clicked')
}

/**
 * handles drag button click
 */
function handleDragClick() {
  // TODO: implement drag mode
  console.log('Drag mode clicked')
}

/**
 * handles multi-drag button click
 */
function handleMultiDragClick() {
  // TODO: implement multi-select drag mode
  console.log('Multi-drag mode clicked')
}
</script>

<style scoped>
</style>
