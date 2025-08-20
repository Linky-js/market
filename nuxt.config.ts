// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["swiper/css", "swiper/css/pagination", "@/assets/css/style.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@pinia/nuxt"],
  vite: {
    server: {
      allowedHosts: [
        'linky.ru.tuna.am', 
      ]
    }
  }
});
