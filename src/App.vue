<script setup>
import { CustomFooter } from './components/ui/footer/index'
import { CustomHeader } from './components/ui/header/index'
</script>

<template>
  <!-- <CustomButton>ff</CustomButton> -->

  <div class="flex flex-col h-screen bg-regal-blue">
    <CustomHeader />

    <main class="flex-grow bg-regal-blue">
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
