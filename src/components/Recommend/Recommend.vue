<template>
    <div class="today-recommend">
        <div class="py-container">
            <ul class="recommend">
                <li class="clock">
                    <div class="time">
                        <img :src="today.clockUrl" />
                        <h3>今日推荐</h3>
                    </div>
                </li>
                <li class="banner" v-for="item in today.recommendUrl" :key="item.id">
                    <img :src="item.imgUrl" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['today'])
</script>

<style scoped lang='scss' src="./Recommon.scss"></style>