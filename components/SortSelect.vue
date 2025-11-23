<template>
  <div class="relative inline-block">
    <select
      :value="modelValue"
      class="appearance-none border border-lighterGrey text-textDark text-select rounded-3xl py-2 pl-4 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent h-[46px] w-[85px]"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <!-- down arrow icon -->
    <svg
      class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-black"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
interface SortOption {
  value: string
  label: string
}

interface Props {
  modelValue: string
  options: SortOption[]
}

defineProps<Props>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

