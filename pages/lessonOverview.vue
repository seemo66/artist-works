<template>
  <div class="flex h-screen overflow-hidden">
    <SideNav />
    <div class="flex-1 overflow-y-auto">
      <!-- Header component -->
      <HeadSection />

      <main class="px-4 py-8 lg:px-[66px] lg:py-16">

        <!-- Page title & meta data-->
        <PageTitle />

        <!-- Search area -->
        <SearchControls />

        <!-- Grid of results or content -->
        <Grid />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
</style>
