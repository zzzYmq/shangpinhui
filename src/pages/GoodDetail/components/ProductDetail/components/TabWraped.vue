<template>
    <div class="tabWraped">
        <h4 class="active">相关分类</h4>
        <h4>推荐品牌</h4>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

</script>

<style scoped lang='scss'>
.tabWraped {
    height: 40px;

    h4 {
        border-top: 3px solid #fff;
        float: left;
        line-height: 37px;
        width: 105px;
        text-align: center;
        border-bottom: 1px solid #ccc;

        &.active {
            border-top: 3px solid #e1251b;
            border-bottom: 0;
            font-weight: normal;
        }
    }
}
</style>