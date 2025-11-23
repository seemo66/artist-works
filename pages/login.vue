<template>
  <div class="flex h-screen">
    <!-- left panel: decorative welcome section -->
    <aside class="hidden md:block w-[415px]">
      <div class="relative h-full items-start justify-center text-white p-[50px] bg-login-gradient">
        <h1 class="text-welcome-heading">
          Welcome<br />Back
        </h1>
        <img
          src="/images/login-bg.png"
          alt=""
          class="absolute bottom-0 left-0"
          loading="eager"
          aria-hidden="true"
        />
      </div>
    </aside>

    <!-- right panel: login form -->
    <main class="flex md:flex-1 justify-center w-full">
      <LoginForm />
    </main>
  </div>
</template>

<script setup lang="ts">
// login page layout component
// handles the two-panel layout with decorative left side and form on the right
</script>