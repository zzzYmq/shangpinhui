<template>
    <div class="tabContent">
        <div class="tab-pane active">

            <ul class="goodsList">
                <li v-for="item in relateData">
                    <div class="list-wrap">
                        <div class="p-img">
                            <img :src="item.imgUrl" />
                        </div>
                        <div class="attr">{{ item.attr }}</div>
                        <div class="price">
                            <em>¥</em>
                            <i>{{ item.price }}</i>
                        </div>
                        <div class="operate">
                            <a href="javascript:void(0);">加入购物车</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="tab-pane">
            <p>推荐品牌</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['relateData'])
</script>

<style scoped lang='scss'>
.tabContent {
    padding: 10px;

    .tab-pane {
        display: none;

        &.active {
            display: block;
        }

        &:nth-child(1) {


            .goodsList {
                &>li {
                    margin: 5px 0 15px;
                    border-bottom: 1px solid #ededed;
                    padding-bottom: 5px;

                    .list-wrap {
                        .p-img {
                            text-align: center;

                            img {
                                width: 152px;
                            }
                        }

                        .price {
                            font-size: 16px;
                            color: #c81623;
                        }

                        .operate {
                            text-align: center;
                            margin: 5px 0;

                            a {
                                background-color: transparent;
                                border: 1px solid #8c8c8c;
                                color: #8c8c8c;
                                display: inline-block;
                                padding: 2px 14px;
                                line-height: 18px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>