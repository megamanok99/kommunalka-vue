<script setup lang="ts">
import { AreaChart } from '@/components/ui/chart-area'

const data = [
  {
    name: 'Jan',
    label: 'ff',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500
  },
  {
    name: 'Feb',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500
  },
  {
    name: 'Apr',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500
  },
  {
    name: 'May',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500
  },
  {
    name: 'Jun',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500
  },
  {
    name: 'Jul',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500
  }
]
</script>

<template>
  <div class="m-2 bg-white rounded-xl shadow-md overflow-hidden">
    <div class="md:flex">
      <div class="w-full">
        <AreaChart :data="data" index="name" :categories="['total', 'predicted']" />
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">KOMMUNALKA</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >Инструмент для записи и учета показаний</a
        >
        <p class="mt-2 text-slate-500">
          Калькулирование стоимости коммунальных услуг на основе ввода показаний воды и
          электричества.
        </p>
      </div>
    </div>
  </div>
  <div class="m-2 bg-white rounded-xl shadow-md overflow-hidden">
    <ul class="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
      <li>
        <div class="md:shrink-0">
          <a href="#" class="me-4 hover:underline md:me-6">Express</a>
          <img class="h-40" src="../images/express.png" alt="Modern building architecture" />
        </div>
      </li>
      <li>
        <div class="md:shrink-0">
          <a href="#" class="me-4 hover:underline md:me-6">Mongo DB</a>
          <img class="h-40" src="../images/mongo.png" alt="Modern building architecture" />
        </div>
      </li>
      <li>
        <div class="md:shrink-0">
          <a href="#" class="me-4 hover:underline md:me-6">Node js</a>
          <img class="h-40" src="../images/nodejs.png" alt="Modern building architecture" />
        </div>
      </li>
      <li>
        <div class="md:shrink-0">
          <a href="#" class="me-4 hover:underline md:me-6">Vue js</a>
          <img class="h-40" src="../images/vue.webp" alt="Modern building architecture" />
        </div>
      </li>
    </ul>
  </div>
</template>
