<template>
  <div>
    <label
      :for="id"
      class="text-primary text-form-label inline-block mb-2"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :value="modelValue"
      :type="type"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      class="border-lightGrey border rounded-lg w-full px-4 py-4 text-input text-primary placeholder-mediumGrey focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string
  label: string
  modelValue: string
  type?: 'text' | 'password' | 'email' | 'tel' | 'url'
  autocomplete?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
  disabled: false,
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>



