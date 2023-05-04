import { defineStore } from 'pinia'
import { getGoodDetail } from '@/utils/request/good.js'
export const useGoodDataStore = defineStore('GoodDataStore', {
    state: () => {
        return {
            goodData: {}
        }
    },
    actions: {
        async getGoodData(id) {
            const data = await getGoodDetail(id)
            console.log(data);
            this.goodData = data

        }
    },
    getters: {
        categoryName: ({ goodData }) => {
            const { categoryView } = goodData
            return !categoryView ? [] : [
                { id: categoryView.category1Id, categoryName: categoryView.category1Name },
                { id: categoryView.category2Id, categoryName: categoryView.category2Name },
                { id: categoryView.category3Id, categoryName: categoryView.category3Name },
            ]
        },
        skuInfo: ({ goodData }) => goodData.skuInfo || {},
        spuSaleAttrList: ({ goodData }) => goodData.spuSaleAttrList || {}
    }
})



