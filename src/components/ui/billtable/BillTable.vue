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
  items: Array,
  walkToPost: Function
})

const emit = defineEmits(['remove'])
const remove = (id) => {
  console.log(id)
  emit('remove', id)
}

console.log(`props.items`, props.items)
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
          <TableHead>Дата внесения</TableHead>
          <TableHead>Стоимость</TableHead>
          <!-- <TableHead class="text-right">Действия </TableHead> -->
        </TableRow>
      </TableHeader>
      <TableBody>
        <transition-group name="bill-table">
          <TableRow v-for="item in items" :key="item.id">
            <TableCell class="font-medium">
              {{ item.hotWater }}
            </TableCell>
            <TableCell>{{ item.coldWater }}</TableCell>
            <TableCell>{{ item.electric }}</TableCell>
            <TableCell>{{ item.createdAt?.split('T')[0] }}</TableCell>
            <TableCell>
              {{ item.total }}
            </TableCell>

            <!-- <TableCell class="text-right">
              <CustomedButton
                @click="
                  () => {
                    walkToPost(item.id);
                  }
                "
                variant="secondary"
                >Перейти
              </CustomedButton>
              <CustomedButton
                @click="
                  () => {
                    remove(item.id);
                  }
                "
                variant="secondary"
                >Удалить
              </CustomedButton>
            </TableCell> -->
          </TableRow>
        </transition-group>
      </TableBody>
    </Table>
  </div>
  <div v-else>а нет показаний</div>
</template>

<style scoped>
.bill-table-move,
.bill-table-enter-active,
.bill-table-leave-active {
  transition: all 0.4s ease;
}
.bill-table-enter-from,
.bill-table-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
