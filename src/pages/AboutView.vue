<script setup>
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";

import { Button } from "@/components/ui/button";
import { BillForm } from "@/components/ui/billform/index";
import { BillTable } from "@/components/ui/billtable/index";
import Input from "@/components/ui/input/Input.vue";
const items = ref([]);
const isPostLoading = ref(true);
const Created = (e) => {
  console.log("ya v roditele", e);
  items.value.push({ ...e, id: 66 });
};
const remove = (e) => {
  console.log("ya tut", e);
  items.value = items.value.filter((el) => el.id !== e);
};
const fetchPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _page: page.value,
          limit: limit.value,
        },
      },
    );
    totalPages.value = Math.ceil(
      response.headers["x-total-count"] / limit.value,
    );
    items.value = response.data.map((el) => {
      return {
        electric: el.id,
        hotWater: el.id,
        coldWater: el.title,
        id: el.id,
      };
    });
  } catch (e) {
    console.log(e.message);
  } finally {
    isPostLoading.value = false;
  }
};
const selectedSort = ref("");
const searchQuery = ref("");
const page = ref(1);
const limit = ref(10);
const totalPages = ref(0);
const sortOptions = ref([
  {
    value: "id",
    name: "по айди",
  },
  {
    value: "coldWater",
    name: "по названию",
  },
]);
onMounted(() => {
  fetchPosts();
});
const sortedItems = computed(() => {
  if (selectedSort.value) {
    return [...items.value].sort((a, b) =>
      a[selectedSort.value]
        .toString()
        .localeCompare(b[selectedSort.value].toString()),
    );
  }
  return items.value;
});
const sortedAndSearchPosts = computed(() => {
  if (searchQuery.value) {
    return [...items.value].filter((el) =>
      el.coldWater.includes(searchQuery.value),
    );
  }

  return items.value;
});

const handlePageChange = (newPage) => {
  page.value = newPage.target.value;
  console.log("here");
  fetchPosts();
};
// watch(selectedSort, (newValue) => {
//   console.log([...items.value]);
//   if (newValue) {
//     items.value = [...items.value].sort((a, b) =>
//       a[newValue].toString().localeCompare(b[newValue].toString()),
//     );
//   }
// });
</script>

<template>
  <my-select v-model="selectedSort" :options="sortOptions" />
  <Input placeholder="Поиск" v-model="searchQuery" />
  <BillForm @formSubmit="Created" />
  <BillTable
    :items="sortedAndSearchPosts"
    @remove="remove"
    v-if="!isPostLoading"
  />

  <div v-else>загрузка</div>
  <Pagination
    :total="totalPages"
    v-model:page="page"
    :sibling-count="1"
    show-edges
    @page-change="handlePageChange"
  >
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst />
      <PaginationPrev />
      <template v-for="(item, index) in totalPages">
        <PaginationListItem
          v-if="item !== page"
          :key="index"
          :value="item"
          @click="handlePageChange"
          as-child
        >
          <Button class="w-10 h-10 p-0" variant="secondary">
            {{ item }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis v-else :key="item" :index="index" />
      </template>
      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </Pagination>
</template>
