<template>
    <div class="fr page" v-if="pageParams.pageNo">
        <div class="sui-pagination clearfix">
            <ul>
                <li class="prev">
                    <button href="#">«上一页</button>
                </li>
                <li :class="pageParams.pageNo === o ? 'active' : ''" v-for="o in totalPage">
                    <a href="" @click="changePage(o)">{{ o }}</a>
                </li>
                <li class="next">
                    <button href="#">下一页»</button>
                </li>
            </ul>
            <div><span>共{{ pageParams.total }}条&nbsp;</span></div>
        </div>
    </div>
    <!-- <li class="dotted"><span>...</span></li> -->
</template>

<script setup>
import { computed } from 'vue';
// 对于分页器
// 第几页、总页数、总条数、分页连续页码数（一般为5,7奇数对称）
const props = defineProps(["pageParams"])
const totalPage = computed(() => Math.ceil(props.pageParams.total / props.pageParams.pageSize))
</script>

<style scoped lang='scss' src="./Pagination.scss"></style>