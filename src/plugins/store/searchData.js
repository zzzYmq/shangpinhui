import { defineStore } from 'pinia'
import { getList } from '@/utils/request/search.js'
export const useSearchDataStore = defineStore('SearchDataStore', {
    state: () => {
        return {
            searchData: {}
        }
    },
    actions: {
        async getSearchData(params) {
            const { data } = await getList(params)
            this.searchData = data
        }
    },
    getters: {

    }
})



