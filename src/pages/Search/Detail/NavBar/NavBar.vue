<template>
    <div class="sui-navbar">
        <div class="navbar-inner filter">
            <ul class="sui-nav">
                <li v-for="(nav, index) in navList" :class="acitveIndex === index ? 'active' : ''"
                    @click="changeNav(index)">
                    <a>{{ navMsg(nav, index) }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { inject, computed, readonly } from 'vue';
import mitt from '@/utils/eventBus'

const navList = readonly(['综合', '价格'])
const finalParmas = inject('finalParmas')
const acitveIndex = computed(() => finalParmas.value.order.split(':')[0] - 1)
const orderWay = computed(() => finalParmas.value.order.split(':')[1])
const navMsg = (nav, index) => {
    if (acitveIndex.value !== index) {
        return nav
    } else {
        return nav + (orderWay.value === 'desc' ? '⬇' : '⬆')
    }
}


const changeNav = (index) => {
    let order = index + 1 + ':'
    // 需要改变排序
    if (acitveIndex.value === index) {
        order += orderWay.value === 'desc' ? 'asc' : 'desc'
    } else {
        order += orderWay.value
    }
    mitt.emit('changeOrder', order)
}

</script>

<style scoped lang='scss' src="./NavBar.scss"></style>