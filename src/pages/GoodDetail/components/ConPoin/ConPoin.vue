<template>
    <div class="conPoin">
        <span v-for="item in goodStore.categoryName" :key="item.id">{{ item.categoryName }}</span>
    </div>
</template>

<script setup>
import { useGoodDataStore } from '@/plugins/store/goodData.js'
const goodStore = useGoodDataStore()
</script>

<style scoped lang='scss'>
.conPoin {
    padding: 9px 15px 9px 0;

    &>span+span:before {
        content: "/\00a0";
        padding: 0 5px;
        color: #ccc;
    }
}
</style>