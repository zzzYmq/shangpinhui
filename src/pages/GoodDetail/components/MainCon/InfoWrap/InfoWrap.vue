<template>
    <div class="InfoWrap">
        <div class="goodsDetail">
            <h3 class="InfoName">{{ skuInfo.skuName }}</h3>
            <p class="news">{{ skuInfo.skuDesc }}</p>
            <div class="priceArea">
                <div class="priceArea1">
                    <div class="title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</div>
                    <div class="price">
                        <i>¥</i>
                        <em>{{ skuInfo.price }}</em>
                        <span>降价通知</span>
                    </div>
                    <div class="remark">
                        <i>累计评价</i>
                        <em>65545</em>
                    </div>
                </div>
                <div class="priceArea2">
                    <div class="title">
                        <i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</i>
                    </div>
                    <div class="fixWidth">
                        <i class="red-bg">加价购</i>
                        <em class="t-gray">满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em>
                    </div>
                </div>
            </div>
            <div class="support">
                <div class="supportArea">
                    <div class="title">支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</div>
                    <div class="fixWidth">以旧换新，闲置手机回收 4G套餐超值抢 礼品购</div>
                </div>
                <div class="supportArea">
                    <div class="title">配 送 至</div>
                    <div class="fixWidth">广东省 深圳市 宝安区</div>
                </div>
            </div>
        </div>

        <div class="choose">
            <div class="chooseArea">
                <div class="choosed"></div>
                <dl v-for="attr in spuSaleAttrList" :key="attr.id">
                    <dt class="title">{{ attr.saleAttrName }}</dt>
                    <dd v-for="item in attr.spuSaleAttrValueList" :key="item.id"
                        :class="item.isChecked == 1 ? 'active' : ''"
                        @click="changeAttrValue(attr.spuSaleAttrValueList, item)">{{
                            item.saleAttrValueName }}</dd>
                </dl>
            </div>
            <div class="cartWrap">
                <div class="controls">
                    <input autocomplete="off" class="itxt" v-model="num" @change="changeNum">
                    <a href="javascript:" class="plus" @click="num++">+</a>
                    <a href="javascript:" class="mins" @click="num > 1 && num--">-</a>
                </div>
                <div class="add">
                    <a href="javascript:" @click="addCart">加入购物车</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useGoodDataStore } from '@/plugins/store/goodData.js'
import { storeToRefs } from 'pinia'
import { addToCart } from '@/utils/request/cart.js'
const goodStore = useGoodDataStore()
const { skuInfo, spuSaleAttrList } = storeToRefs(goodStore)

const num = ref(1)
const changeAttrValue = (spuSaleAttrValueList, attrValue) => {
    spuSaleAttrValueList.map(item => item.isChecked = '0')
    attrValue.isChecked = '1'
}
const changeNum = () => {
    const value = num.value * 1
    if (isNaN(value) || value < 1) {
        num.value = 1
    }
    num.value = parseInt(value)
}

const router = useRouter()
const route = useRoute()
const addCart = async () => {
    const { code } = await addToCart(route.params.id, num.value)
    if (code === 200) {
        router.push({
            path: '/success',
            query: {
                number: num.value
            }
        })
    } else {
        alert('加入购物车失败！')
    }
}

</script>

<style scoped lang='scss' src="./index.scss"></style>