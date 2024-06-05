<!-- <script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script> -->
<script setup>
import { CustomButton } from '@/components/ui/button'

// import { ref } from 'vue'
// defo
// let count = ref(0)
// function increment() {
//   count.value++
// }
// function updateCount(event) {
//   count.value = Number(event.target.value)
// }
</script>
<template>
  <CustomButton>ff</CustomButton>
  <div class="mb-40">{{ title }}</div>
  <div>{{ price }}</div>
  <!-- <div class="body">{{ count }}</div> -->
  <!-- <button @click="increment">+</button>
  <input v-model="count" /> -->
  <slot />
</template>
<style scoped>
.body {
  background: red;
}
</style>
