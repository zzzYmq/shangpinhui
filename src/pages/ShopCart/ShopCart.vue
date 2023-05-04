<template>
    <Suspense>
        <TypeNav></TypeNav>
    </Suspense>
    <div class="cart">
        <h4>全部商品</h4>
        <div class="cart-main">
            <div class="cart-th">
                <div class="cart-th1">全部</div>
                <div class="cart-th2">商品</div>
                <div class="cart-th3">单价（元）</div>
                <div class="cart-th4">数量</div>
                <div class="cart-th5">小计（元）</div>
                <div class="cart-th6">操作</div>
            </div>
            <div class="cart-body">
                <ul class="cart-list" v-for="item in cartList" :key="item.id">
                    <li class="cart-list-con1">
                        <input type="checkbox" name="chk_list" v-model="item.isChecked">
                    </li>
                    <li class="cart-list-con2">
                        <img :src="item.imgUrl">
                        <div class="item-msg">{{ item.skuName }}</div>
                    </li>
                    <li class="cart-list-con4">
                        <span class="price">{{ item.skuPrice }}</span>
                    </li>
                    <li class="cart-list-con5">
                        <a href="javascript:void(0)" class="mins" @click="item.skuNum--">-</a>
                        <input autocomplete="off" type="text" v-model="item.skuNum" minnum="1" class="itxt">
                        <a href="javascript:void(0)" class="plus" @click="item.skuNum++">+</a>
                    </li>
                    <li class="cart-list-con6">
                        <span class="sum">{{ item.skuPrice * item.skuNum }}</span>
                    </li>
                    <li class="cart-list-con7">
                        <a href="#none" class="sindelet">删除</a>
                        <br>
                        <a href="#none">移到收藏</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cart-tool">
            <div class="select-all">
                <input class="chooseAll" type="checkbox" v-model="isCheckAll" @click="isCheckAll = !isCheckAll">
                <span>全选</span>
            </div>
            <div class="option">
                <a href="#none">删除选中的商品</a>
                <a href="#none">移到我的关注</a>
                <a href="#none">清除下柜商品</a>
            </div>
            <div class="money-box">
                <div class="chosed">已选择
                    <span>0</span>件商品
                </div>
                <div class="sumprice">
                    <em>总价（不含运费） ：</em>
                    <i class="summoney">{{ totalPrice }}</i>
                </div>
                <div class="sumbtn">
                    <a class="sum-btn" href="###" target="_blank">结算</a>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script setup>
import { ref, defineAsyncComponent, watch, computed } from 'vue'
import Footer from '@/components/Footer/Footer.vue'
import { getCartList } from '@/utils/request/cart.js'

const TypeNav = defineAsyncComponent(() => import('@/components/TypeNav/TypeNav.vue'))

const cartList = ref([])
const isCheckAll = ref(false)

const totalPrice = computed(() => {
    return cartList.value.reduce((pre, value) => {
        if (value.isChecked) {
            return pre + value.skuPrice * value.skuNum
        } else {
            return pre
        }
    }, 0)
})

watch(cartList, (value) => {
    console.log(value);
    isCheckAll.value = value.every(item => item.isChecked)
}, { deep: true })
watch(isCheckAll, (value) => {
    cartList.value.map(item => item.isChecked = value)
})

const { data } = await getCartList()
cartList.value = data[0].cartInfoList









</script>

<style scoped lang='scss' src="./index.scss"></style>