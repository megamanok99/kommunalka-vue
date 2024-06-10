<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const lastChild = computed(() => store.getters['post/getLastPost'])
const formSchema = ref(
  toTypedSchema(
    z.object({
      hotWater: z.number().min(0),
      coldWater: z.number().min(0),
      electric: z.number().min(0)
    })
  )
)
const form = useForm({
  validationSchema: formSchema
})
onMounted(async () => {
  await store.dispatch('post/fetchPosts')

  if (lastChild.value) {
    formSchema.value = toTypedSchema(
      z.object({
        hotWater: z.number().min(lastChild.value.hotWater),
        coldWater: z.number().min(lastChild.value.coldWater),
        electric: z.number().min(lastChild.value.electric)
      })
    )
    form.resetForm({
      values: {
        hotWater: lastChild.value.hotWater,
        coldWater: lastChild.value.coldWater,
        electric: lastChild.value.electric
      }
    })
  }
})
const emit = defineEmits<{
  (e: 'formSubmit', values: { hotWater?: number; coldWater?: number; electric?: number }): void
}>()
const onSubmit = form.handleSubmit((values) => {
  formSchema.value = toTypedSchema(
    z.object({
      hotWater: z.number().min(values.hotWater),
      coldWater: z.number().min(values.coldWater),
      electric: z.number().min(values.electric)
    })
  )
  emit('formSubmit', values)
  console.log('Form submitted!', values)
})
</script>

<template>
  <div class="m-2 bg-white rounded-xl overflow-hidden h">
    <form @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="hotWater">
        <FormItem>
          <FormLabel>Горячая вода</FormLabel>
          <FormControl>
            <Input type="number" placeholder="hotWater" v-bind="componentField" />
          </FormControl>
          <!-- <FormDescription> This is your public display name. </FormDescription> -->
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="coldWater">
        <FormItem>
          <FormLabel>Холодная вода</FormLabel>
          <FormControl>
            <Input type="number" placeholder="coldWater" v-bind="componentField" />
          </FormControl>
          <!-- <FormDescription> This is your public display name. </FormDescription> -->
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="electric">
        <FormItem>
          <FormLabel>Электричество</FormLabel>
          <FormControl>
            <Input type="number" placeholder="electric" v-bind="componentField" />
          </FormControl>
          <!-- <FormDescription> </FormDescription> -->
          <FormMessage />
        </FormItem>
      </FormField>
      <MyButton type="submit" variant="secondary"> Отправить </MyButton>
    </form>
  </div>
</template>
