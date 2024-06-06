<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = toTypedSchema(
  z.object({
    hotWater: z.number().min(2).max(50),
    coldWater: z.number().min(2).max(50),
    electric: z.number().min(2).max(50)
  })
)

const form = useForm({
  validationSchema: formSchema
})
const emit = defineEmits<{
  (e: 'formSubmit', values: { hotWater?: number; coldWater?: number; electric?: number }): void
}>()
const onSubmit = form.handleSubmit((values) => {
  emit('formSubmit', values)
  console.log('Form submitted!', values)
})
</script>

<template>
  <div class="m-2 bg-white rounded-xl shadow-md overflow-hidden h">
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
      <Button type="submit" variant="secondary"> Submit </Button>
    </form>
  </div>
</template>