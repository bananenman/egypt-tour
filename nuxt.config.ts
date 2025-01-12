export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', integrity: 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=', crossorigin: '' }
      ]
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
    define: {
      MAP_KEY: JSON.stringify(process.env.MAP_KEY),
      MONGODB_URI: JSON.stringify(process.env.MONGODB_URI)
    }
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dndfdqrtr/image/upload/v1730551197',
      cloudName: 'dndfdqrtr',
      apiKey: '752348868543861',
    },
  },
  
  devtools: {enabled: false},
  ssr: false,
  modules: ["nuxt-server-utils", "@nuxtjs/cloudinary", '@nuxt/image-edge'],
  compatibilityDate: '2024-08-29',
})