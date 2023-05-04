<template>
    <div class="floor">
        <div class="py-container">
            <div class="title clearfix">
                <h3 class="fl">家用电器</h3>
                <div class="fr">
                    <ul class="nav-tabs clearfix">
                        <li class="active">
                            <a href="#tab1" data-toggle="tab">热门</a>
                        </li>
                        <li>
                            <a href="#tab2" data-toggle="tab">大家电</a>
                        </li>
                        <li>
                            <a href="#tab3" data-toggle="tab">生活电器</a>
                        </li>
                        <li>
                            <a href="#tab4" data-toggle="tab">厨房电器</a>
                        </li>
                        <li>
                            <a href="#tab5" data-toggle="tab">应季电器</a>
                        </li>
                        <li>
                            <a href="#tab6" data-toggle="tab">空气/净水</a>
                        </li>
                        <li>
                            <a href="#tab7" data-toggle="tab">高端电器</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content">
                <div class="tab-pane">
                    <div class="floor-1">
                        <div class="blockgary">
                            <ul class="jd-list">
                                <li>节能补贴</li>
                                <li>4K电视</li>
                                <li>空气净化器</li>
                                <li>IH电饭煲</li>
                                <li>滚筒洗衣机</li>
                                <li>电热水器</li>
                            </ul>
                            <img src="./img/floor-1-1.png" />
                        </div>
                        <div class="floorBanner">
                            <Swiper :bannerList="bannerList" :width="329"></Swiper>
                        </div>
                        <div class="split">
                            <span class="floor-x-line"></span>
                            <div class="floor-conver-pit">
                                <img src="./img/floor-1-2.png" />
                            </div>
                            <div class="floor-conver-pit">
                                <img src="./img/floor-1-3.png" />
                            </div>
                        </div>
                        <div class="split center">
                            <img src="./img/floor-1-4.png" />
                        </div>
                        <div class="split">
                            <span class="floor-x-line"></span>
                            <div class="floor-conver-pit">
                                <img src="./img/floor-1-5.png" />
                            </div>
                            <div class="floor-conver-pit">
                                <img src="./img/floor-1-6.png" />
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
import Swiper from '@/components/Swiper/Swiper.vue'
import { getFloor } from '@/utils/request/home'

const bannerList = ref([])
const { data } = await getFloor()
bannerList.value = data
</script>

<style scoped lang='scss' src="./Floor.scss"></style>