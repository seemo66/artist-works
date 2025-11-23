<template>
  <div class="-mx-[7px] lg:-mx-0">
    <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
      <Card
        v-for="(item, index) in lessons"
        :key="index"
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
  image: string
  title: string
  subtitle: string
  time: string
  completed: boolean
}

// hardcoded mock API
const lessons: Lesson[] = [
  { image: '/images/api/junel-mujar-TpdyCbvJHFU-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: false },
  { image: '/images/api/jimmy-t-G2voTdnR6CM-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: false },
  { image: '/images/api/tatiana-rodriguez-oPjCqCob6HY-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: true },
  { image: '/images/api/taan-huyn-zCyBDljKhLQ-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: true },
  { image: '/images/api/junel-mujar-TpdyCbvJHFU-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: false },
  { image: '/images/api/taan-huyn-zCyBDljKhLQ-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: true },
  { image: '/images/api/tatiana-rodriguez-oPjCqCob6HY-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: false },
  { image: '/images/api/jimmy-t-G2voTdnR6CM-unsplash.png', title: 'Diatonic Chords: 1st Inversion - Chord Shapes and Qualities', subtitle: 'lesson', time: '23:23', completed: true }
]
</script>

<style scoped>
/* optional: padding/margin adjustments already handled via Tailwind */
</style>
