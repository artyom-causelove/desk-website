export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false
  },

  modules: ['nuxt-quasar-ui'],
  quasar: {
    extras: {
      animations: [
        'fadeInLeft',
        'fadeInRight',
        'fadeOutLeft',
        'fadeOutRight'
      ]
    },
    config: {
      brand: {
        secondary: '#E0E0E0',
        negative: '#C10015',
        positive: '#21BA45',
        primary: '#1D1D1D',
        warning: '#F2C037',
        accent: '#1D1D1D',
        dark: '#1D1D1D',
        info: '#31CCEC'
      }
    }
  }
});
