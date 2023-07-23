// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  vite: {
    plugins: [
      svgLoader({
        // Your settings.
      }),
    ],
  },
  ssr: false,
});
