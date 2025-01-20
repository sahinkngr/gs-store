// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-19', // Gelecek uyumluluk tarihi
  devtools: { enabled: true }, // Geliştirici araçlarını etkinleştir
  
  // Modüller
  modules: [
    '@pinia/nuxt', // Pinia durumu yönetimi modülü
  ],
  
  // TypeScript ayarları
  typescript: {
    strict: true, // TypeScript için sıkı modu etkinleştir
  },
  
  // Global CSS dosyaları
  css: [
    'bootstrap/dist/css/bootstrap.min.css', // Bootstrap CSS
    '@fortawesome/fontawesome-free/css/all.min.css', // FontAwesome CSS
    'bootstrap-icons/font/bootstrap-icons.css',
  ],
  
  // Vite yapılandırması
  vite: {
    define: {
      'process.env.DEBUG': false, // DEBUG için yapılandırma
    },
  },
  
  // Plugin'ler
  plugins: [
    { src: '@/plugins/bootstrap.client.ts', mode: 'client' }, // Bootstrap'in istemci tarafında yüklenmesi
  ],
});