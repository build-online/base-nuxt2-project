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
      local: {
        token: {
          property: 'token',
          global: true,
        },
        user: {
          property: 'user',
        },
        endpoints: {
          login: {
            url: `${process.env.API_URL}/api/v1/auth/login`,
            method: 'post',
          },
          logout: {
            url: `${process.env.API_URL}/api/v1/auth/logout`,
            method: 'post',
          },
          user: {
            url: `${process.env.API_URL}/api/v1/auth/user`,
            method: 'get',
          },
        },
      },
    },
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/auth/login',
      home: false,
    },
  },

  axios: {
    baseURL: process.env.API_URL,
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
