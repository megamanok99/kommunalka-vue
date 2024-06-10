<script setup lang="ts">
import { AreaChart } from '@/components/ui/chart-area'
import { LangList } from '@/components/ui/langlist/index'

const posts = [
  { title: 'Vue js', id: 1, src: './src/images/vue.webp' },
  { title: 'Node js', id: 2, src: './src/images/nodejs.png' },
  { title: 'Mongo DB', id: 3, src: './src/images/mongo.png' },
  { title: 'Express', id: 4, src: './src/images/express.png' }
]
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
  <LangList :posts="posts" />
</template>
