export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dndfdqrtr/image/upload/v1730551197',
      cloudName: 'dndfdqrtr',
      apiKey: '752348868543861',
    },
  },  


  // { font-family: Playfair; src: url('../font/PlayfairDisplay.ttf'); font-display: swap; } 
  googleFonts: {
    families: {
      Playfair: true
    }
  } 
  
  devtools: {enabled: false},
  ssr: false,
  modules: ['@nuxtjs/i18n', "nuxt-server-utils", "@nuxtjs/cloudinary", '@nuxt/image-edge', '@nuxtjs/google-fonts'],
  compatibilityDate: '2024-08-29',
})
