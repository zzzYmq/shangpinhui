<template>
  <div class="spec-preview">
    <img :src="imgUrl" />
    <div class="event" @mousemove="previewImg"></div>
    <div class="big">
      <img :src="imgUrl" ref="big" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script setup>
import { onUnmounted, ref, onMounted } from 'vue'
import mitt from '@/utils/eventBus'
const imgUrl = ref('')
const mask = ref(null)
const big = ref(null)
const previewImg = (e) => {
  const m_width = mask.value.offsetWidth
  const m_height = mask.value.offsetHeight
  const b_width = big.value.offsetWidth / 2
  const b_height = big.value.offsetHeight / 2
  let left = e.offsetX - m_width / 2
  let top = e.offsetY - m_height / 2

  if (left < 0) left = 0
  else if (left > b_width - m_width) left = b_width - m_width

  if (top < 0) top = 0
  else if (top > b_height - m_height) top = b_height - m_height
  mask.value.style.top = top + 'px'
  mask.value.style.left = left + 'px'
  big.value.style.top = -2 * top + 'px'
  big.value.style.left = -2 * left + 'px'
}

onMounted(() => {
  mitt.on("changeImg", (url) => {
    imgUrl.value = url
  })
})
onUnmounted(() => {
  mitt.off('changeActive')
})
</script>

<style lang="scss" scoped>
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover~.mask,
  .event:hover~.big {
    display: block;
  }
}
</style>