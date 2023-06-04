export default {
  css: ['vuetify/styles/main.sass', 
  '@glidejs/glide/dist/css/glide.core.min.css', 
  '@glidejs/glide/dist/css/glide.theme.min.css'],
  build: {
    transpile: ['vuetify']
  },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: true,
      'Open+Sans': true
    }
  }
}
