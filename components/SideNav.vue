<template>
  <div class="hidden lg:flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <nav class="flex flex-col sticky top-0 h-screen w-[233px] bg-[#052444] text-white font-semibold text-[14px] leading-[14px]  p-4 pt-6 pb-[41px]">
      <!-- Logo -->
      <div class="mb-[52px]">
        <!-- Replace with actual logo -->
        <Logo />
      </div>

      <!-- Course Card -->
      <div class="mb-6 p-3 border border-white/20 rounded-lg flex items-center gap-2">
        <img
          src="/images/banjo-guy.png"
          class="w-10 h-10 rounded"
        ></img>
        <div class="flex-1 flex items-center">
          <p class="text-[12px] leading-[18px] font-semibold">Banjo with Noam Pikelny</p>
          <img
            src="/images/controls.svg"
            class="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>

      <!-- Menu Items -->
      <ul class="flex flex-col gap-2 flex-1">
        <li class="flex items-center gap-3 px-3 hover:bg-white/10 rounded-lg cursor-pointer h-10">
          <img
            src="/images/home.svg"
            class="w-4 h-4"
          />
          <span>Home</span>
        </li>

        <li class="flex items-center gap-3 px-3 bg-[#375069] rounded-lg cursor-pointer h-10">
          <img
            src="/images/lessons.svg"
            class="w-4 h-4"
          />
          <span>Lessons</span>
        </li>

        <li class="flex items-center gap-3 px-3 hover:bg-white/10 rounded-lg cursor-pointer h-10">
          <img
            src="/images/video-exchanges.svg"
            class="w-4 h-4"
          />
          <span>Video Exchanges</span>
        </li>

        <li class="flex items-center gap-3 px-3 hover:bg-white/10 rounded-lg cursor-pointer h-10">
          <img
            src="/images/study-materials.svg"
            class="w-4 h-4"
          />
          <span>Study Materials</span>
        </li>

        <li class="flex items-center gap-3 px-3 hover:bg-white/10 rounded-lg cursor-pointer h-10">
          <img
            src="/images/bookmarks.svg"
            class="w-4 h-4"
          />
          <span>Bookmarks</span>
        </li>

        <li class="flex items-center gap-3 px-3 hover:bg-white/10 rounded-lg cursor-pointer h-10">
          <img
            src="/images/history.svg"
            class="w-4 h-4"
          />
          <span>History</span>
        </li>

        <hr class="border-white/10 my-2" />

        <li class="flex items-center gap-3 px-3 hover:bg-white/10 rounded-lg cursor-pointer h-10">
          <img
            src="/images/metronome.svg"
            class="w-4 h-4"
          />
          <span>Metronome</span>
        </li>

        <li class="flex items-center gap-3 px-3 hover:bg-white/10 rounded-lg cursor-pointer h-10">
          <img
            src="/images/scale-browser.svg"
            class="w-4 h-4"
          />
          <span>Scale Browser</span>
        </li>

        <hr class="border-white/10 my-2" />

        <li class="flex items-center gap-3 px-3 hover:bg-white/10 rounded-lg cursor-pointer h-10">
          <img
            src="/images/community.svg"
            class="w-4 h-4"
          />
          <span>Community</span>
        </li>
      </ul>

      <!-- Footer -->
      <div class="mt-6 flex items-center justify-between px-3 py-2">
        <div class="flex items-center gap-3 cursor-pointer">
          <img
            src="/images/my-account.svg"
            class="w-4 h-4"
          >
          <span>My Account</span>
        </div>
        <img
          src="/images/back-arrows.svg"
          class="w-8 h-8 cursor-pointer"
        >
      </div>
    </nav>
  </div>
</template>

<script setup>
</script>
