const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

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
      CLOUDINARY_CLOUD_NAME: JSON.stringify(process.env.CLOUDINARY_CLOUD_NAME),
      CLOUDINARY_API_KEY: JSON.stringify(process.env.CLOUDINARY_API_KEY),
      CLOUDINARY_API_SECRET: JSON.stringify(process.env.CLOUDINARY_API_SECRET),
      MAP_KEY: JSON.stringify(process.env.MAP_KEY),
      MONGODB_URI: JSON.stringify(process.env.MONGODB_URI)
    }
  },

  runtimeConfig: {
    cookieName: "__session",
    cookieSecret: "secret",
    cookieExpires: ONE_DAY.toString(),
    cookieRememberMeExpires: ONE_WEEK.toString(),
  },

  imports: {
    dirs: [
      // Scan all composables within dir
      'composables/**'
    ]
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
  modules: ["@nuxtjs/cloudinary", '@nuxt/image-edge'],
  compatibilityDate: '2024-08-29',
})