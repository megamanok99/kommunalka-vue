import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import PostView from "./pages/PostView.vue"
import PostsView from './pages/PostsView.vue'
const routes = [
  { path: '/', component: HomeView },
  { path: '/posts', component: PostsView },
  { path: '/posts/:id', component: PostView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
