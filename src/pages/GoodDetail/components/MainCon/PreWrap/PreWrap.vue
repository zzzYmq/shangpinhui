<template>
    <div class="previewWrap">
        <Zoom />
        <ImageList :imgList="imgList" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import Zoom from './Zoom/Zoom.vue'
import ImageList from './ImageList/ImageList.vue';
import { useGoodDataStore } from '@/plugins/store/goodData.js'
const goodStore = useGoodDataStore()
const imgList = computed(() => goodStore.skuInfo.skuImageList || [])
</script>

<style scoped lang='scss'>
.previewWrap {
    float: left;
    width: 400px;
    position: relative;
}
</style>