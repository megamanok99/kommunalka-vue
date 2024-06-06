<script setup>
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import { defineProps } from 'vue'

const props = defineProps({
  items: Array
})
</script>

<template>
  <div class="m-2 bg-white rounded-xl shadow-md overflow-hidden h">
    <Table>
      <TableCaption>Таблица крайнийх указанных значений</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[120px]"> Холодная вода </TableHead>
          <TableHead>Горячая вода</TableHead>
          <TableHead>Электричество</TableHead>
          <TableHead class="text-right">Стоимость </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="item in items" :key="item.id">
          <TableCell class="font-medium">
            {{ item.hotWater }}
          </TableCell>
          <TableCell>{{ item.coldWater }}</TableCell>
          <TableCell>{{ item.electric }}</TableCell>
          <TableCell class="text-right">
            {{ item.total }}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
