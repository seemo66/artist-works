<template>
  <div class="flex h-screen overflow-hidden">
    <!-- sidebar navigation -->
    <SideNav />
    
    <!-- main content area -->
    <div class="flex-1 overflow-y-auto">
      <!-- header with search and actions -->
      <HeadSection />

      <!-- main content -->
      <main class="px-4 py-8 lg:px-[66px] lg:py-16">
        <!-- page title and metadata -->
        <PageTitle />

        <!-- search and filter controls -->
        <SearchControls />

        <!-- lessons grid -->
        <Grid />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// lesson overview page
// displays the main lesson content with navigation, search, and lesson cards
</script>

<style scoped>
</style>
