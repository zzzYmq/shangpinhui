<template>
    <div class="swiper-container" id="mySwiper" @mouseenter="stopPlay" @mouseleave="startPlay">
        <div class="swiper-wrapper" :style="swiperStyle">
            <div class="swiper-slide" v-for="item in bannerList" :key="item.id" :style="slideStyle">
                <img :src="item.imgUrl" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useSwiper } from '@/hooks/swiper.js'
const props = defineProps(['bannerList', 'width'])
const { swiperStyle, startPlay, stopPlay, slideStyle } = useSwiper(props.bannerList.length, props.width)

onMounted(startPlay)
onUnmounted(stopPlay)
</script>

<style scoped lang='scss'>
.swiper-container {
    overflow: hidden;
    width: 100%;
}

.swiper-wrapper {

    .swiper-slide {
        float: left;

        img {
            width: 100%;
        }
    }
}
</style>