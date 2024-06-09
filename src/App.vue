<script setup lang="ts">
import { CustomFooter } from "./components/ui/footer/index";
import { CustomHeader } from "./components/ui/header/index";
import { useStore } from "vuex";
import axios from "axios";
import { onMounted } from "vue";

// Использование хранилища Vuex
const store = useStore();

// Метод для проверки токена и получения данных о пользователе
const checkAuth = async () => {
  const token = sessionStorage.getItem("token");
  if (token) {
    try {
      const response = await axios.get("http://localhost:4444/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      store.commit("auth/setUser", response.data);
    } catch (error) {
      console.error("Failed to authenticate", error);
      sessionStorage.removeItem("token");
      store.commit("auth/logout");
    }
  } else {
    store.commit("auth/logout");
  }
};

// Вызов метода при монтировании компонента
onMounted(() => {
  checkAuth();
});
</script>

<template>
  <div class="flex flex-col h-screen bg-regal-blue">
    <CustomHeader />
    <main class="flex-grow bg-regal-blue">
      <RouterView />
    </main>
    <CustomFooter />
  </div>
</template>
