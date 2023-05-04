<template>
    <div class="cart-complete-wrap">
        <div class="cart-complete">
            <h3><i class="sui-icon icon-pc-right"></i>商品已成功加入购物车！</h3>
            <div class="goods">
                <div class="left-good">
                    <div class="left-pic">
                        <img :src="skuInfo.skuDefaultImg">
                    </div>
                    <div class="right-info">
                        <p class="title">{{ skuInfo.skuName }}</p>
                        <p class="attr">{{ skuInfo.skuDesc }} 数量：{{ route.query.number }}</p>
                    </div>
                </div>
                <div class="right-gocart">
                    <router-link class="sui-btn btn-xlarge" :to="`/detail/${skuInfo.id}`">查看商品详情</router-link>
                    <router-link to="/shopcart">去购物车结算 > </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useGoodDataStore } from '@/plugins/store/goodData.js'
import { storeToRefs } from 'pinia'
const route = useRoute()
const goodStore = useGoodDataStore()
const { skuInfo } = storeToRefs(goodStore)
</script>

<style scoped lang='scss' src="./index.scss"></style>