export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  typescript: {
    strict: true, // Enable strict mode for TypeScript
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css", 
    "bootstrap-icons/font/bootstrap-icons.css",
  ],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }, // Sadece istemci tarafında çalışacak
  ],
  build: {
    transpile: [],
  },
});
