<script setup>
import myHello from './components/myHello.vue'
</script>

<template>
  d

  <myHello title="заголовок" :price="7500">
    <div>slot children</div>
  </myHello>
  <myHello title="заголовок 2 " :price="7400" />
</template>
