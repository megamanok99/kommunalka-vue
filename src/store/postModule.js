import axios from "axios";

export const postModule = {
  state: () => ({
    items: [],
    searchQuery: '',
    page: 1,
    selectedSort: '',
    isPostLoading: false,
    limit: 10,
    totalPages: 0,
    sortOptions: [
      {
        value: 'id',
        name: 'по айди'
      },
      {
        value: 'coldWater',
        name: 'по названию'
      }
    ]
  }),
  getters: {
    sortedItems(state) {
      console.log('here', state.selectedSort)

      return [...state.items].sort((post1, post2) => post1[state.selectedSort]?.toString()?.localeCompare(post2[state.selectedSort]?.toString()))

    },
    sortedAndSearchPosts(state, getters) {
      return getters.sortedItems.filter((el) => el.coldWater?.includes(state.searchQuery))
    },

    getLastPost(state) {
      return state.items[state.items.length - 1]
    },
  },
  mutations: {
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
    setPosts(state, items) {
      state.items = items
    },
    setLoading(state, bool) {
      state.isPostLoading = bool
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    setPage(state, e) {
      state.page = Number(e.target.value)
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    }
  },
  actions: {
    async fetchPosts({ commit, rootState }) {
      try {

        commit("setLoading", true)
        const response = await axios.get('http://localhost:4444/bills', {
          headers: {
            Authorization: `Bearer ${rootState.auth.token}`, // Обращение к токену из модуля auth
          },
        })
        // commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))

        const totalSumm = (prev, next, kef) => {
          return (next - prev) * kef;
        };
        const summOfOtvod = (arr, arr2, kef) => {
          return (arr + arr2) * kef;
        };
        commit('setPosts', response.data.map((el, index) => {
          return {
            ...el,
            id: el._id,
            total:
              Number(`${totalSumm(response.data[index - 1]?.coldWater, el?.coldWater, rootState.auth?.user?.ratioCold)

                + totalSumm(response.data[index - 1]?.hotWater, el?.hotWater, rootState.auth?.user?.ratioHot)
                + totalSumm(response.data[index - 1]?.electric, el?.electric, rootState.auth?.user?.ratioElec)
                + summOfOtvod(el?.coldWater - response.data[index - 1]?.coldWater, el?.hotWater - response.data[index - 1]?.hotWater, Number(rootState.auth?.user?.avatarUrl))}`)

          }
        }))

      } catch (e) {
        console.log(e.message)
      } finally {
        commit("setLoading", false)
      }
    },


    async saveBill({ rootState, dispatch }, values) {
      try {
        await axios.post('http://localhost:4444/bills', {
          coldWater: values.coldWater,
          createDate: values.createDate,
          electric: values.electric,
          hotWater: values.hotWater,
        }, {
          headers: {
            Authorization: `Bearer ${rootState.auth.token}`, // Обращение к токену из модуля auth
          }
        });
        // После успешного сохранения счета, снова загружаем все посты
        dispatch('fetchPosts');
      } catch (error) {
        console.error('Failed to save bill', error);
      }
    }

  },
  namespaced: true
}