<template>
    <header class="header">
        <!-- 头部的第一行 -->
        <div class="top">
            <div class="container">
                <div class="loginList">
                    <p>尚品汇欢迎您！</p>
                    <p>
                        <span>请</span>
                        <router-link to="/login">登录</router-link>
                        <router-link to="/register" class="register">免费注册</router-link>
                    </p>
                </div>
                <div class="typeList">
                    <a href="#">我的订单</a>
                    <a href="#">我的购物车</a>
                    <a href="#">我的尚品汇</a>
                    <a href="#">尚品汇会员</a>
                    <a href="#">企业采购</a>
                    <a href="#">关注尚品汇</a>
                    <a href="#">合作招商</a>
                    <a href="#">商家后台</a>
                </div>
            </div>
        </div>
        <!--头部第二行 搜索区域-->
        <div class="bottom">
            <h1 class="logoArea">
                <router-link to="/" class="logo">
                    <img src="./img/logo.png" alt="">
                </router-link>
            </h1>
            <div class="searchArea">
                <input v-model="keyword" type="text" id="autocomplete" autocomplete="off" class="input-error input-xxlarge"
                    @keydown.enter="goSearch(route.query, keyword)" />
                <button class="sui-btn btn-xlarge btn-danger" type="button"
                    @click="goSearch(route.query, keyword)">搜索</button>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import mitt from '@/utils/eventBus'
import { useGoSearch } from '@/hooks/search.js'

const { goSearch, route } = useGoSearch()
const keyword = ref('')
onMounted(() => {
    mitt.on('clearKeyword', () => {
        keyword.value = ''
    })
})
onUnmounted(() => {
    mitt.off('clearKeyword')
})

</script>

<style scoped lang='scss' src="./Header.scss"></style>