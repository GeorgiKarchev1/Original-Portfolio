export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],


})
