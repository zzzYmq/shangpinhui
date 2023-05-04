<template>
    <div class="goods-list">
        <ul class="yui3-g">
            <li class="yui3-u-1-5" v-for="item in searchData.goodsList" :key="item.id">
                <div class="list-wrap">
                    <div class="p-img">
                        <router-link :to="`/detail/${item.id}`"><img :src="item.defaultImg" /></router-link>
                    </div>
                    <div class="price">
                        <strong>
                            <em>¥</em>
                            <i>{{ item.price }}</i>
                        </strong>
                    </div>
                    <div class="attr">
                        <a>{{ item.title }}</a>
                    </div>
                    <div class="commit">
                        <i class="command">已有<span>2000</span>人评价</i>
                    </div>
                    <div class="operate">
                        <a class="sui-btn btn-bordered btn-danger">加入购物车</a>
                        <a class="sui-btn btn-bordered">收藏</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSearchDataStore } from '@/plugins/store/searchData.js'
const SearchDataStore = useSearchDataStore()
const { searchData } = storeToRefs(SearchDataStore)
</script>

<style scoped lang='scss' src="./Goods.scss"></style>