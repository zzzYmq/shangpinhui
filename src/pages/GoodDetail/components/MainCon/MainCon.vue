<template>
    <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <PreWrap></PreWrap>
        <!-- 右侧选择区域布局 -->
        <InfoWrap></InfoWrap>
    </div>
</template>

<script setup>

import PreWrap from './PreWrap/PreWrap.vue';
import InfoWrap from './InfoWrap/InfoWrap.vue'

</script>

<style scoped lang='scss'>
.mainCon {
    overflow: hidden;
    margin: 5px 0 15px;


}
</style>