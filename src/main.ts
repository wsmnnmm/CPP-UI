import './lib/cpp.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './lib/iconfont.js'
const app = createApp(App)
app.use(router)
app.mount('#app')
