<template>
  <div class="-mx-[7px] lg:-mx-0">
    <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
      <Card
        v-for="item in lessons"
        :key="item.id"
        :image="item.image"
        :title="item.title"
        :subtitle="item.subtitle"
        :time="item.time"
        :completed="item.completed"
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

// hardcoded mock API
const lessons: Lesson[] = [
  { id: 1, image: '/images/api/junel-mujar-TpdyCbvJHFU-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: false },
  { id: 2, image: '/images/api/jimmy-t-G2voTdnR6CM-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: false },
  { id: 3, image: '/images/api/tatiana-rodriguez-oPjCqCob6HY-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: true },
  { id: 4, image: '/images/api/taan-huyn-zCyBDljKhLQ-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: true },
  { id: 5, image: '/images/api/junel-mujar-TpdyCbvJHFU-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: false },
  { id: 6, image: '/images/api/taan-huyn-zCyBDljKhLQ-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: true },
  { id: 7, image: '/images/api/tatiana-rodriguez-oPjCqCob6HY-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: false },
  { id: 8, image: '/images/api/jimmy-t-G2voTdnR6CM-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: true }
]
</script>

<style scoped>
/* optional: padding/margin adjustments already handled via Tailwind */
</style>
