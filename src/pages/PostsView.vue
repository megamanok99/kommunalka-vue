<script>
import { BillForm } from '@/components/ui/billform/index'
import { BillTable } from '@/components/ui/billtable/index'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev
} from '@/components/ui/pagination'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

import Input from '@/components/ui/input/Input.vue'

export default {
  components: {
    Pagination,
    PaginationEllipsis,
    PaginationFirst,
    PaginationLast,
    PaginationList,
    PaginationListItem,
    PaginationNext,
    PaginationPrev,
    BillTable,
    BillForm,
    Input
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      Created: 'post/saveBill'
    })
  },
  computed: {
    ...mapState({
      items: (state) => state.post.items,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      selectedSort: (state) => state.post.selectedSort,
      isPostLoading: (state) => state.post.isPostLoading,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions
    }),
    ...mapGetters({
      sortedItems: 'post/sortedItems',
      sortedAndSearchPosts: 'post/sortedAndSearchPosts'
    })
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<template>
  <div class="m-2 bg-white rounded-xl shadow-md overflow-hidden h-max relative">
    <div class="md:flex">
      <BillForm @formSubmit="Created" class="w-full" />
      <div class="saveImage rounded-xl min-w-96 min-h-64 flex flex-col px-5">
        <div class="text-slate-50 m-1 text-2xl font-bold">
          Горячая вода: {{ items[items.length - 1]?.hotWater }} м³
        </div>
        <div class="text-slate-50 m-1 text-2xl font-bold">
          Холодная вода: {{ items[items.length - 1]?.coldWater }} м³
        </div>
        <div class="text-slate-50 m-1 text-2xl font-bold">
          Электричество: {{ items[items.length - 1]?.electric }} Кв/ч
        </div>
        <div class="text-slate-50 m-1 text-2xl font-bold">
          Отвод воды:
          {{
            items[items.length - 1]?.coldWater -
            items[items.length - 2]?.coldWater +
            items[items.length - 1]?.hotWater -
            items[items.length - 2]?.hotWater
          }}
          м³
        </div>

        <div class="text-slate-50 m-1 text-2xl font-bold">
          К оплате
          {{ items[items.length - 1]?.total }}
          руб.
        </div>

        <div class="absolute right-0 bottom-0 m-4 text-slate-50 text-1xl font-bold">
          Показания от {{ items[items.length - 1]?.createdAt?.split('T')[0] }}
        </div>
      </div>
    </div>
  </div>
  <!-- <my-select
    :model-value="selectedSort"
    :options="sortOptions"
    @update:model-value="setSelectedSort"
  />
  <Input placeholder="Поиск" :model-value="searchQuery" @update:model-value="setSearchQuery" /> -->

  <BillTable :items="items" @remove="remove" :walkToPost="walkToPost" v-if="!isPostLoading" />

  <div v-else>загрузка</div>
  <!-- <Pagination :total="totalPages" v-model:page="page" :sibling-count="1" show-edges>
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst />
      <PaginationPrev />
      <template v-for="(item, index) in totalPages">
        <PaginationListItem
          v-if="item !== page"
          :key="index"
          :value="item"
          @click="
            (e) => {
              this.setPage(e);
              this.fetchPosts();
            }
          "
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
  </Pagination> -->
</template>
