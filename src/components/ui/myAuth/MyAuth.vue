<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { computed } from "vue";
import { useStore } from "vuex";

// Определение схемы валидации
const formSchema = toTypedSchema(
  z.object({
    login: z.string().min(3).max(50),
    password: z.string().min(5).max(128),
  }),
);

// Создание формы с использованием схемы валидации
const form = useForm({
  validationSchema: formSchema,
});

// Импорт действий Vuex
const store = useStore();
const isLoading = computed(() => store.state.auth.isLoading);
const error = computed(() => store.state.auth.error);

// Определение событий компонента
const emit = defineEmits<{
  (e: "formSubmit", values: { login?: string; password?: string }): void;
}>();

// Обработка отправки формы
const onSubmit = form.handleSubmit(async (values) => {
  try {
    await store.dispatch("auth/login", {
      email: values.login,
      password: values.password,
    });
    emit("formSubmit", values);
    console.log("Form submitted!", values);
  } catch (err) {
    console.error("Login failed!", err);
  }
});
</script>

<template>
  <Dialog>
    <DialogTrigger
      class="text-gray-800 bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
    >
      Войти
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Войти в аккаунт</DialogTitle>
      </DialogHeader>

      <div class="m-2 bg-white rounded-xl">
        <form @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="login">
            <FormItem>
              <FormLabel>Логин</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Логин"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Пароль"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <DialogTrigger>
            <MyButton type="submit" variant="secondary" :disabled="isLoading">
              Войти
            </MyButton>
          </DialogTrigger>
          <p v-if="error" class="text-red-500">{{ error }}</p>
        </form>
      </div>
    </DialogContent>
  </Dialog>
</template>
