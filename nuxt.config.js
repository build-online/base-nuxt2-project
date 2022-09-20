export default {
  ssr: false,

  head: {
    title: 'nuxt-tailwind-boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/css/custom.css'],

  plugins: [
    '~/plugins/portal-vue.js',
    '~/plugins/global-components',
    '~/plugins/filters',
    '~/plugins/toast.js',
    '~/plugins/modal.js',
    '~/plugins/vee-validate.js',
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/auth-next', '@nuxtjs/axios', '@nuxtjs/pwa'],

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.API_URL,
        endpoints: {
          user: { url: '/users/auth', method: 'get', propertyName: 'data' },
        },
        user: {
          property: 'data',
        },
      },
      impersonate: {
        scheme: '~/schemes/impersonate',
        endpoints: {
          login: { url: '/validate-token', method: 'post' },
          csrf: { url: '/sanctum/csrf-cookie', method: 'get' },
          user: { url: '/users/auth', method: 'get', propertyName: 'data' },
        },
        user: {
          property: 'data',
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/',
    },
  },

  router: {
    // middleware: ['auth'], // Uncomment if you want the middleware to be called for every route change. (For example if the default behaviour is to be logged in order to use the app)
  },

  axios: {
    baseURL: process.env.API_URL,
    credentials: true,
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {
    transpile: ['vee-validate'],
  },

  loadingIndicator: {
    name: 'chasing-dots',
    color: '#0074E4',
  },

  loading: {
    color: '#0074E4',
    failedColor: '#DB1920',
    height: '3px',
  },
};
