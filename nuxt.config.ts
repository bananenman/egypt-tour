export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  devtools: {enabled: false},
  ssr: false,
  modules: ['@nuxtjs/i18n', "nuxt-server-utils"],
  compatibilityDate: '2024-08-29',
})