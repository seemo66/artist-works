// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
  tailwindcss: {
    viewer: false,
  },
  compatibilityDate: '2025-11-15',
  app: {
    head: {
      title: 'Artist Works',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
});
