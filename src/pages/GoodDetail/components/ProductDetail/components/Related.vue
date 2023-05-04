<template>
    <TabWraped></TabWraped>
    <TabContent :relateData="relateData"></TabContent>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TabWraped from './TabWraped.vue';
import TabContent from './TabContent.vue';
import { getGoodRelated } from '@/utils/request/good.js'
const relateData = ref([])

onMounted(async () => {
    const { data } = await getGoodRelated()
    relateData.value = data
})
</script>

<style scoped lang='scss'></style>