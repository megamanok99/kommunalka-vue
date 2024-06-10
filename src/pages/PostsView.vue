<script>
import { BillForm } from '@/components/ui/billform/index'
import { BillTable } from '@/components/ui/billtable/index'
import html2canvas from 'html2canvas'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

import { Copy } from 'lucide-vue-next'

export default {
  components: {
    BillTable,
    BillForm,

    Copy
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
    }),
    saveAsImage() {
      const element = this.$refs.saveImage
      html2canvas(element).then((canvas) => {
        const link = document.createElement('a')
        link.download = 'saveImage.png'
        link.href = canvas.toDataURL('image/png')
        link.click()
      })
    }
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
      <div class="relative">
        <div @click="saveAsImage" class="absolute right-0 top-0 m-4 text-slate-50">
          <Button variant="outline" size="icon">
            <Copy />
          </Button>
        </div>
        <div ref="saveImage" class="saveImage rounded-xl min-w-96 min-h-64 flex flex-col px-5">
          <div class="text-slate-50 m-1 text-2xl font-semibold">
            Горячая вода: {{ items[items.length - 1]?.hotWater }} м³
          </div>
          <div class="text-slate-50 m-1 text-2xl font-semibold">
            Холодная вода: {{ items[items.length - 1]?.coldWater }} м³
          </div>
          <div class="text-slate-50 m-1 text-2xl font-semibold">
            Электричество: {{ items[items.length - 1]?.electric }} Кв/ч
          </div>
          <div class="text-slate-50 m-1 text-2xl font-semibold">
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
  </div>

  <BillTable :items="items" @remove="remove" :walkToPost="walkToPost" v-if="!isPostLoading" />

  <div v-else>загрузка</div>
</template>
