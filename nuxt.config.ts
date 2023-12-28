export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image",
  'nuxt-icon'
],
  
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],


})
