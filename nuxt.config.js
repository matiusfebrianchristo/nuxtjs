export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-npm',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', mode:'client'}
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  env: {
    mainPath: process.env.MAIN_PATH || 'https://jsonplaceholder.typicode.com/posts'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    BaseURL: process.env.MAIN_PATH || 'https://jsonplaceholder.typicode.com/posts',
    credentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
