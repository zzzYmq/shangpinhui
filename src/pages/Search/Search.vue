<template>
    <Suspense>
        <TypeNav></TypeNav>
        <template #fallback>
            <Loading></Loading>
        </template>
    </Suspense>
    <!--list-content-->
    <div class="main">
        <div class="py-container">
            <BreadCrumb @rmKeyword="rmKeyword" @rmCategory="rmCategory" @rmProps="rmProps" @rmTradeMark="rmTradeMark">
            </BreadCrumb>
            <SearchSelector @addProps="addProps" @addTradeMark="addTradeMark"></SearchSelector>
            <Detail></Detail>
            <Suspense>
                <HotSale></HotSale>
                <template #fallback>
                    <Loading></Loading>
                </template>
            </Suspense>
        </div>
    </div>
</template>

<script setup>
import { watch, provide, defineAsyncComponent, onMounted, onUnmounted, readonly } from 'vue'
import SearchSelector from './SearchSelector/SearchSelector.vue';
import BreadCrumb from './BreadCrumb/BreadCrumb.vue';
import Loading from '@/components/Loading/Loading.vue';
import Detail from './Detail/Detail.vue';
import { useGoSearch, useSearchState } from '@/hooks/search.js'
import { useSearchDataStore } from '@/plugins/store/searchData.js'
import mitt from '@/utils/eventBus'
const TypeNav = defineAsyncComponent(() => import('@/components/TypeNav/TypeNav.vue'))
const HotSale = defineAsyncComponent(() => import('./HotSale/HotSale.vue'))

const originSearchParams = readonly({
    category1Id: '',
    category2Id: '',
    category3Id: '',
    categoryName: '',
    keyword: '',
    props: [],
    trademark: '',
    order: '1:desc',
    pageNo: 1,
    pageSize: 10
})

const searchDataStore = useSearchDataStore()

const { finalParmas, searchParams } = useSearchState(originSearchParams)
provide('finalParmas', finalParmas)
watch(finalParmas, () => {
    searchDataStore.getSearchData(finalParmas.value)
}, { immediate: true, deep: true })

const { goSearch, route } = useGoSearch()

const rmKeyword = () => {
    goSearch(route.query)
}

const rmCategory = () => {
    goSearch({}, route.params.keyword)
}

const addProps = (attrId, attrName, attrValue) => {
    searchParams.props.push(`${attrId}:${attrName}:${attrValue}`)
}

const rmProps = (index) => {
    searchParams.props.splice(index)
}

const addTradeMark = (tmId, tmName) => {
    searchParams.trademark = `${tmId}:${tmName}`
}

const rmTradeMark = () => {
    searchParams.trademark = ''
}

const changeOrder = (order) => {
    searchParams.order = order
}
onMounted(() => {
    mitt.on("changeOrder", changeOrder)
})

onUnmounted(() => {
    mitt.off('changeOrder')
})

</script>

<style scoped lang='scss' src="./Search.scss"></style>