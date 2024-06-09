/*eslint no-unused-vars: "error"*/

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { Button } from './components/ui/button'
import MySelect from './components/ui/select/MySelect.vue'
import router from './router'
import store from './store'
const app = createApp(App)
app.component('MyButton', Button)
app.component('my-select', MySelect)
app.use(router)
  .use(store)
  .mount('#app')
