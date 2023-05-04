<template>
    <section class="product-detail">
        <aside class="aside">
            <Related></Related>
        </aside>
        <div class="detail">
            <div class="fitting">
                <h4 class="kt">选择搭配</h4>
                <div class="good-suits">
                    <div class="master">
                        <img :src="goodSuit.masterImg" />
                        <p>￥{{ goodSuit.masterPrice }}</p>
                        <i>+</i>
                    </div>
                    <ul class="suits">
                        <li class="suitsItem" v-for="item in goodSuit.suits" :key="item.id">
                            <img :src="item.imgUrl" />
                            <p>{{ item.name }}</p>
                            <label>
                                <input type="checkbox" value="39">
                                <span>{{ item.price }}</span>
                            </label>
                        </li>
                    </ul>
                    <div class="result">
                        <div class="num">已选购0件商品</div>
                        <div class="price-tit">
                            套餐价
                        </div>
                        <div class="price">￥5299</div>
                        <button class="addshopcar">加入购物车</button>
                    </div>
                </div>
            </div>
            <div class="intro">
                <ul class="tab-wraped">
                    <li class="active">
                        <a href="###">
                            商品介绍
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            规格与包装
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            售后保障
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            商品评价
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            手机社区
                        </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div id="one" class="tab-pane active">
                        <ul class="goods-intro">
                            <li>分辨率：1920*1080(FHD)</li>
                            <li>后置摄像头：1200万像素</li>
                            <li>前置摄像头：500万像素</li>
                            <li>核 数：其他</li>
                            <li>频 率：以官网信息为准</li>
                            <li>品牌： Apple</li>
                            <li>商品名称：APPLEiPhone 6s Plus</li>
                            <li>商品编号：1861098</li>
                            <li>商品毛重：0.51kg</li>
                            <li>商品产地：中国大陆</li>
                            <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                            <li>系统：苹果（IOS）</li>
                            <li>像素：1000-1600万</li>
                            <li>机身内存：64GB</li>
                        </ul>
                        <div class="intro-detail">
                            <img :src="item.imgUrl" v-for="item in goodIntro" :key="item.id" />
                        </div>
                    </div>
                    <div id="two" class="tab-pane">
                        <p>规格与包装</p>
                    </div>
                    <div id="three" class="tab-pane">
                        <p>售后保障</p>
                    </div>
                    <div id="four" class="tab-pane">
                        <p>商品评价</p>
                    </div>
                    <div id="five" class="tab-pane">
                        <p>手机社区</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import Related from './components/Related.vue';
import { getGoodSuit, getGoodIntro } from '@/utils/request/good.js'
const goodSuit = reactive({})
const goodIntro = reactive({})
onMounted(async () => {
    const { data: suit } = await getGoodSuit()
    const { data: intro } = await getGoodIntro()
    Object.assign(goodSuit, suit)
    Object.assign(goodIntro, intro)
})
</script>

<style scoped lang='scss' src="./index.scss"></style>