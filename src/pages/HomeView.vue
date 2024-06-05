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
    <div class="md:flex">
      <div class="md:shrink-0">
        <img
          class="w-full object-cover md:h-full md:w-48"
          src="../images/slider.jpg"
          alt="Modern building architecture"
        />
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Company retreats
        </div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >Incredible accommodation for your team</a
        >
        <p class="mt-2 text-slate-500">
          Looking to take your team away on a retreat to enjoy awesome food and take in some
          sunshine? We have a list of places to do just that.
        </p>
      </div>
    </div>
  </div>
</template>
