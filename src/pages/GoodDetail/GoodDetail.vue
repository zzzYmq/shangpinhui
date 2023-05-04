<template>
    <div class="detail">
        <Suspense>
            <TypeNav />
        </Suspense>
        <!-- 主要内容区域 -->
        <section class="con">
            <!-- 导航路径区域 -->
            <ConPoin></ConPoin>
            <!-- 主要内容区域 -->
            <MainCon></MainCon>
        </section>

        <!-- 内容详情页 -->
        <ProductDetail></ProductDetail>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import ConPoin from './components/ConPoin/ConPoin.vue'
import MainCon from './components/MainCon/MainCon.vue'
import ProductDetail from './components/ProductDetail/ProductDetail.vue'
import { useRoute } from 'vue-router'
import { useGoodDataStore } from '@/plugins/store/goodData.js'

const TypeNav = defineAsyncComponent(() => import('@/components/TypeNav/TypeNav.vue'))

const route = useRoute()
const goodStore = useGoodDataStore()

goodStore.getGoodData(route.params.id)

</script>

<style scoped lang='scss'>
.detail {
    .con {
        width: 1200px;
        margin: 15px auto 0;
    }
}
</style>