<template>
  <div class="m-2 bg-white rounded-xl shadow-md overflow-hidden flex flex-wrap justify-center">
    <div
      class="flex flex-wrap items-center justify-center text-gray-900 dark:text-white"
      v-for="item in posts"
      :key="item.id"
    >
      <div class="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-96">
        <div class="flex flex-col items-center">
          <img class="w-full object-cover" :src="item.src" alt="Modern building architecture" />
          <a href="#" class="mt-2 hover:underline">{{ item.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      require: true
    }
  }
}
</script>
