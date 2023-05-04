import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/common.scss'
import '@/utils/mock'
import router from './plugins/router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router).use(createPinia()).mount('#app')



