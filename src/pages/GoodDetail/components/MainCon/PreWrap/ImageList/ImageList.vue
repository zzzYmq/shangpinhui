<template>
  <div class="swiper-container">
    <div class="swiper-button-prev" @click="activeIndex > 0 && activeIndex--">&lt;</div>
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in imgList" :key="item.id" @click="activeIndex = index">
        <img :src="item.imgUrl" :class="activeIndex === index ? 'active' : ''">
      </div>
    </div>
    <div class="swiper-button-next" @click="activeIndex < imgList.length - 1 && activeIndex++">&gt;</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import mitt from '@/utils/eventBus'
const props = defineProps(['imgList'])
const activeIndex = ref(-1)

watch(() => props.imgList, (value) => {
  const index = value.findIndex(item => item.isDefault === '1')
  activeIndex.value = index === -1 ? 0 : index
})

watch(activeIndex, (value) => {
  mitt.emit('changeImg', props.imgList[value].imgUrl)
})



</script>

<style lang="scss" scoped src="./index.scss"></style>