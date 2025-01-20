import { createPinia } from 'pinia';
import piniaPersistedState from 'pinia-plugin-persistedstate'; // Plugin'i import et

const pinia = createPinia();
pinia.use(piniaPersistedState); // Pinia'ya plugin'i dahil et

export default pinia;