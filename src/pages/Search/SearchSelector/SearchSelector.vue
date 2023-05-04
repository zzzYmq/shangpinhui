<template>
    <!--selector-->
    <div class="clearfix selector">
        <div class="type-wrap logo">
            <div class="fl key brand">品牌</div>
            <div class="value logos">
                <ul class="logo-list">
                    <li v-for="item in searchData.trademarkList" :key="item.tmId"
                        @click="emit('addTradeMark', item.tmId, item.tmName)">{{ item.tmName }}
                    </li>
                </ul>
            </div>
            <div class="ext">
                <a href="javascript:void(0);" class="sui-btn">多选</a>
                <a href="javascript:void(0);">更多</a>
            </div>
        </div>
        <div class="type-wrap" v-for="item1 in searchData.attrsList" :key="item1.attrId">
            <div class="fl key">{{ item1.attrName }}</div>
            <div class="fl value">
                <ul class="type-list">
                    <li v-for="(item2, index) in item1.attrValueList" :key="index"
                        @click="emit('addProps', item1.attrId, item1.attrName, item2)">
                        <a>{{ item2 }}</a>
                    </li>
                </ul>
            </div>
            <div class="fl ext"></div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSearchDataStore } from '@/plugins/store/searchData.js'
const SearchDataStore = useSearchDataStore()
const { searchData } = storeToRefs(SearchDataStore)
const emit = defineEmits(['addProps', 'addTradeMark'])
</script>

<style scoped lang='scss' src="./SearchSelector.scss"></style>