<template>
    <div class="type-nav">
        <div class="container" @mouseenter="show = true" @mouseleave="show = false">
            <h2 class="all">全部商品分类</h2>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
            <div class="sort" v-show="route.path === '/' || show">
                <div class="all-sort-list2" @click="toSearch">
                    <div class="item" v-for="(item1, i) in dataList" :key="item1.categoryId"
                        @mouseleave="changeActiveIndex(-1)">
                        <h3 :class="i === activeIndex ? 'active' : ''" @mouseenter="changeActiveIndex(i)">
                            <a href="" :category1Id="item1.categoryId">{{ item1.categoryName }}</a>
                        </h3>
                        <div class="item-list clearfix" v-show="activeIndex === i">
                            <div class="subitem">
                                <dl class="fore" v-for="item2 in item1.categoryChild" :key="item2.categoryId">
                                    <dt>
                                        <a href="" :category2Id="item2.categoryId">{{ item2.categoryName }}</a>
                                    </dt>
                                    <dd>
                                        <em v-for="item3 in item2.categoryChild" :key="item3.categoryId">
                                            <a href="" :category3Id="item3.categoryId">{{ item3.categoryName }}</a>
                                        </em>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getBaseCategoryList } from '@/utils/request/home'

import { useGoSearch } from '@/hooks/search.js'
const { goSearch, route } = useGoSearch()
const activeIndex = ref(-1)
const show = ref(false)
const dataList = ref([])

const { data } = await getBaseCategoryList();
dataList.value = data

const changeActiveIndex = (index) => {
    activeIndex.value = index
}


const toSearch = (e) => {
    e.preventDefault();
    const categoryName = e.target.innerHTML
    const category1Id = e.target.getAttribute("category1Id")
    const category2Id = e.target.getAttribute("category2Id")
    const category3Id = e.target.getAttribute("category3Id")
    const query = { categoryName }
    if (category1Id) {
        query.category1Id = category1Id
    } else if (category2Id) {
        query.category2Id = category2Id
    } else {
        query.category3Id = category3Id
    }
    goSearch(query)
}

</script>

<style scoped lang='scss' src="./index.scss"></style>