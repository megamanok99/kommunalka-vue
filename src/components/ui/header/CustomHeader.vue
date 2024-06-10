<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <router-link to="/"> <div class="gradient-text">KOMMUNALKA</div></router-link>

        <div class="flex items-center lg:order-2">
          <div class="me-8">{{ fullName }}</div>
          <router-link to="/" v-if="isAuthenticated">
            <Button
              @click="logout"
              class="text-gray-800 bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Выйти
            </Button>
          </router-link>
          <MyAuth v-else />
        </div>
        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li v-if="isAuthenticated">
              <router-link to="/posts">Записи</router-link>
            </li>
            <li v-if="isAuthenticated">
              <router-link to="/graphs">График</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Button from '../button/Button.vue'
import MyAuth from '../myAuth/MyAuth.vue'

// Использование хранилища Vuex
const store = useStore()

// Получение состояния токена из хранилища Vuex
const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])
const fullName = computed(() => store.getters['auth/fullName'])
// Метод для выхода из системы
const logout = () => {
  store.dispatch('auth/logout')
}
</script>
