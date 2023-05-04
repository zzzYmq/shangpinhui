<template>
    <!--details-->
    <div class="details clearfix">
        <NavBar></NavBar>
        <Goods></Goods>
        <Pagination :pageParams="pageParams"></Pagination>
    </div>
</template>

<script setup>
import NavBar from './NavBar/NavBar.vue';
import Goods from './Goods/Goods.vue'
import Pagination from '@/components/Pagination/Pagination.vue';
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useSearchDataStore } from '@/plugins/store/searchData.js'
const SearchDataStore = useSearchDataStore()
const { pageNo, pageSize, total, totalPages } = storeToRefs(SearchDataStore)
const pageParams = computed(() => { return { pageNo, pageSize, total, totalPages, continues: 5 } })

</script>

<style scoped lang='scss'>
.details {
    margin-bottom: 5px;

}
</style>