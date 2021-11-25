export default {
  ssr: false,

  head: {
    title: 'nuxt-tailwind-boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/assets/css/custom.css',
  ],

  plugins: [
    '~/plugins/vuePortal.js',
    '~/plugins/toast.js',
    '~/plugins/modal.js',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

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
            url: `${process.env.NUXT_ENV_BASE_URL}/api/v1/auth/login`,
            method: 'post',
          },
          logout: {
            url: `${process.env.NUXT_ENV_BASE_URL}/api/v1/auth/logout`,
            method: 'post',
          },
          user: {
            url: `${process.env.NUXT_ENV_BASE_URL}/api/v1/auth/user`,
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
    baseURL: process.env.NUXT_ENV_BASE_URL,
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {
  }
}
