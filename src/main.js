import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import { Button } from './components/ui/button'

const app = createApp(App)
app.component('CustomedButton', Button)
app.use(router).mount('#app')
