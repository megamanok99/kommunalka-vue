<script setup>
import { CustomButton } from './components/ui/button/index'
import { CustomHeader } from './components/ui/header/index'
import { CustomFooter } from './components/ui/footer/index'
</script>

<template>
  <!-- <CustomButton>ff</CustomButton> -->

  <div class="flex flex-col h-screen">
    <CustomHeader />

    <main class="flex-grow">
      <RouterView />
    </main>
    <CustomFooter />
  </div>
  <!-- <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav> -->
</template>
