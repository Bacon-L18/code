import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { Button, Progress, Circle } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(Button)
app.use(Progress)
app.use(Circle)

app.mount('#app')