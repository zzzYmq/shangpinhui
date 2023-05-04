<template>
    <!--bread-->
    <div class="bread">
        <ul class="fl sui-breadcrumb">
            <li>
                <a href="#">全部结果</a>
            </li>
        </ul>
        <ul class="fl sui-tag">
            <li class="with-x" v-if="finalParmas.keyword">
                {{ finalParmas.keyword }}<i @click="rmKeyword">x</i>
            </li>
            <li class="with-x" v-if="finalParmas.categoryName" @click="emit('rmCategory')">
                {{ finalParmas.categoryName }}<i>x</i>
            </li>
            <li class="with-x" v-for="(prop, index) in finalParmas.props" :key="prop" @click="emit('rmProps', index)">
                {{ prop.split(':')[2] }}<i>x</i>
            </li>
            <li class="with-x" v-if="finalParmas.trademark" @click="emit('rmTradeMark')">{{
                finalParmas.trademark.split(':')[1] }}<i>x</i>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import mitt from '@/utils/eventBus'
const emit = defineEmits(['rmKeyword', 'rmCategory', 'rmProps', 'rmTradeMark'])


const finalParmas = inject('finalParmas')
const rmKeyword = () => {
    emit('rmKeyword')
    mitt.emit('clearKeyword')
}

</script>

<style scoped lang='scss' src="./BreadCrumb.scss"></style>