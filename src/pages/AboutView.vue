<script setup>
import { BillForm } from '@/components/ui/billform/index'
import { BillTable } from '@/components/ui/billtable/index'

import { ref } from 'vue'
const items = ref([
  {
    id: 1,
    hotWater: 20,
    coldWater: 25,
    electric: 565,
    total: 6000
  },
  {
    id: 2,
    hotWater: 22,
    coldWater: 25,
    electric: 565,
    total: 6000
  },
  {
    id: 3,
    hotWater: 23,
    coldWater: 25,
    electric: 565,
    total: 6000
  }
])

const Created = (e) => {
  console.log('ya v roditele', e)
  items.value.push({ ...e, id: 66 })
}
const remove = (e) => {
  console.log('ya tut', e)
  items.value = items.value.filter((el) => el.id !== e)
}
</script>

<template>
  <BillForm @formSubmit="Created" />
  <BillTable :items="items" @remove="remove" />
</template>
