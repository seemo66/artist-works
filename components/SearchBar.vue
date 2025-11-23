<template>
  <div class="relative">
    <input
      type="text"
      placeholder="Search"
      :class="['bg-[#F6F6F6] px-4 py-3 pl-10 rounded-3xl text-[14px] leading-[22px] tracking-[0px] font-semibold text-primary placeholder:text-primary focus:outline-none focus:ring-0 h-[46px]', widthClass]"
    />
    <img
      src="/images/spyglass.svg"
      alt="search icon"
      class="absolute left-[18px] top-1/2 transform -translate-y-1/2 h-4"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  width?: string; // Tailwind classes like "w-[140px] lg:w-[200px]"
}

const props = defineProps<Props>();

const widthClass = props.width ?? 'w-[200px]';
</script>
