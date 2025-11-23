<template>
  <div class="-mx-[7px] lg:-mx-0">
    <!-- loading state -->
    <div
      v-if="isLoading"
      class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-1"
    >
      <div
        v-for="n in 6"
        :key="n"
        class="bg-gray-200 rounded-xl h-32 animate-pulse"
      />
    </div>

    <!-- empty state -->
    <div
      v-else-if="!lessons || lessons.length === 0"
      class="text-center py-12"
    >
      <p class="text-body text-textMedium">
        No lessons found
      </p>
    </div>

    <!-- lessons grid -->
    <div
      v-else
      class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-1"
    >
      <Card
        v-for="lesson in lessons"
        :key="lesson.id"
        :id="lesson.id"
        :image="lesson.image"
        :title="lesson.title"
        :subtitle="lesson.subtitle"
        :time="lesson.time"
        :completed="lesson.completed"
        @click="handleCardClick"
        @bookmark="handleBookmark"
        @complete="handleComplete"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Lesson {
  id: number
  image: string
  title: string
  subtitle: string
  time: string
  completed: boolean
}

/**
 * fetches lessons data (mock function)
 * in production, this would call your API endpoint
 */
async function fetchLessonsData(): Promise<Lesson[]> {
  // simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500))

  // mock data - replace with actual API call
  // const { data } = await $fetch('/api/lessons')
  // return data

  return [
    { id: 1, image: '/images/api/junel-mujar-TpdyCbvJHFU-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: false },
    { id: 2, image: '/images/api/jimmy-t-G2voTdnR6CM-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: false },
    { id: 3, image: '/images/api/tatiana-rodriguez-oPjCqCob6HY-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: true },
    { id: 4, image: '/images/api/taan-huyn-zCyBDljKhLQ-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: true },
    { id: 5, image: '/images/api/junel-mujar-TpdyCbvJHFU-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: false },
    { id: 6, image: '/images/api/taan-huyn-zCyBDljKhLQ-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: true },
    { id: 7, image: '/images/api/tatiana-rodriguez-oPjCqCob6HY-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: false },
    { id: 8, image: '/images/api/jimmy-t-G2voTdnR6CM-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: true },
  ]
}

// fetch using Nuxt's useAsyncData
// lazy: true ensures loading state is visible even during SSR
// this gives a nice loading animation before showing the grid
const { data: lessons, pending: isLoading } = await useAsyncData<Lesson[]>('lessons', fetchLessonsData, {
  lazy: true, // show loading state immediately, don't block rendering
  server: true, // still fetch on server for SEO
})

/**
 * handles card click
 */
function handleCardClick(id: number) {
  // TODO: navigate to lesson detail page
  navigateTo(`/lessons/${id}`)
}

/**
 * handles bookmark action
 */
function handleBookmark(id: number) {
  // TODO: implement bookmark logic with API call
  console.log('Bookmark clicked:', id)
}

/**
 * handles completion toggle
 */
async function handleComplete(id: number, completed: boolean) {
  // update local state optimistically
  const lesson = lessons.value?.find(lesson => lesson.id === id)
  if (lesson) {
    lesson.completed = completed
  }

  // TODO: sync with API
  // await $fetch(`/api/lessons/${id}/complete`, { method: 'PATCH', body: { completed } })
  console.log('Completion toggled:', id, completed)
}
</script>

<style scoped>
</style>
