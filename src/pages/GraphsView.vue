<script>
import { mapActions, mapState } from 'vuex'

import AreaChart from '@/components/ui/chart-area/AreaChart.vue'

export default {
  components: {
    AreaChart
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      fetchPosts: 'post/fetchPosts'
    })
  },
  computed: {
    ...mapState({
      items: (state) => state.post.items
    }),

    getTotal() {
      return this.items.map((el) => {
        return {
          total: el.total,
          name: el.createdAt?.split('T')[0]
        }
      })
    }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<template>
  <div class="m-2 bg-white rounded-xl shadow-md overflow-hidden">
    <AreaChart :data="getTotal" index="name" :categories="['total']" />
  </div>
</template>
