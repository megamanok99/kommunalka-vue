<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const item = ref({
  userId: null,
  id: null,
  title: '',
  body: ''
})
const isLoading = ref(false)

const store = useStore()
const route = useRoute()
const router = useRouter()

const fetchPosts = async () => {
  const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)

  item.value = data.data
}
onMounted(() => {
  fetchPosts()
})
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Просмотр записи c id {{ $route.params.id }}</CardTitle>
      <CardDescription>УУзнать показания воды и электричества</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div>
        <div class="mb-4 grid grid-cols-[25px_minmax(0,1fr)] items-start pb-4 last:mb-0 last:pb-0">
          <span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
          <div class="space-y-1">
            <p class="text-sm font-medium leading-none">ЗНАЧЕНИЕ ИЗ СТОРА</p>

            <p class="text-sm text-muted-foreground">
              {{ store.state.isAuth }}
            </p>

            <p class="text-sm text-muted-foreground">
              {{ store.state.isAuth ? 'авторизован' : 'не авторизован' }}
            </p>
            <p class="text-sm text-muted-foreground">
              {{ store.getters.doubleLikes }}
            </p>
            <CustomedButton @click="store.commit('incrementLikes')" variant="secondary">
              incrementLikes</CustomedButton
            >
            <CustomedButton @click="store.commit('decrementLikes')" variant="secondary">
              decrtement</CustomedButton
            >
          </div>
          <span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
          <div class="space-y-1">
            <p class="text-sm font-medium leading-none">Горядая вода</p>
            <p class="text-sm text-muted-foreground">
              {{ item.body }}
            </p>
          </div>

          <span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
          <div class="space-y-1">
            <p class="text-sm font-medium leading-none">Холодная вода</p>
            <p class="text-sm text-muted-foreground">
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <CustomedButton variant="secondary" class="w-full" @click="router.push('/posts')">
        Вернуться обратно
      </CustomedButton>
    </CardFooter>
  </Card>
</template>
