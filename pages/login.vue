<template>
  <div class="flex h-screen">
    <!-- left panel -->
    <div class="hidden md:block w-[415px]">
      <div class="relative h-full items-start justify-center text-white p-[50px]
            bg-[linear-gradient(135deg,_#052444_0%,_#052444_50%,_#4285F4_90%,_#4285F4_100%)]">
        <h1 class="text-[56px] font-bold leading-[60px] tracking-normal">
          Welcome<br />Back
        </h1>
        <img
          src="/images/login-bg.png"
          class="absolute bottom-0 left-0"
        />

      </div>
    </div>
    <!-- right panel -->
    <div class="flex md:flex-1 justify-center w-full">
      <LoginForm />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>