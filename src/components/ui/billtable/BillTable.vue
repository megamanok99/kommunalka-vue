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

const props = defineProps({
  items: Array
})

const emit = defineEmits(['remove'])
const remove = (id) => {
  console.log(id)
  emit('remove', id)
}
</script>

<template>
  <div v-if="items.length > 0" class="m-2 bg-white rounded-xl shadow-md overflow-hidden h">
    <Table>
      <TableCaption>Таблица крайнийх указанных значений</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[120px]"> Холодная вода </TableHead>
          <TableHead>Горячая вода</TableHead>
          <TableHead>Электричество</TableHead>
          <TableHead>Стоимость</TableHead>
          <TableHead class="text-right">Действия </TableHead>
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
          <TableCell class="text-right">
            <CustomedButton
              @click="
                () => {
                  remove(item.id)
                }
              "
              variant="secondary"
              >Удалить</CustomedButton
            >
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
  <div v-else>а нет показаний</div>
</template>
