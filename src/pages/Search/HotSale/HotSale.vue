<template>
    <!--hotsale-->
    <div class="clearfix hot-sale">
        <h4 class="title">热卖商品</h4>
        <div class="hot-list">
            <ul class="yui3-g">
                <li class="yui3-u-1-4" v-for="item in hotGoods" :key="item.id">
                    <div class="list-wrap">
                        <div class="p-img">
                            <img :src="item.imgUrl" />
                        </div>
                        <div class="attr">
                            <em>{{ item.attr }}</em>
                        </div>
                        <div class="price">
                            <strong>
                                <em style="margin-right: 5px;">¥</em>
                                <i>{{ item.price }}.00</i>
                            </strong>
                        </div>
                        <div class="commit">
                            <i class="command">已有{{ item.command }}人评价</i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getHotSale } from '@/utils/request/search.js'
const hotGoods = ref([])
const { data } = await getHotSale()
hotGoods.value = data
</script>

<style scoped lang='scss' src="./HotSale.scss"></style>