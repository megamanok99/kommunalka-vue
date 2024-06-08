/*eslint no-unused-vars: "error"*/
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { Button } from './components/ui/button'
import router from './router'
import MySelect from './components/ui/select/MySelect.vue'

const app = createApp(App)
app.component('CustomedButton', Button)
app.component('my-select', MySelect)
app.use(router).mount('#app')
