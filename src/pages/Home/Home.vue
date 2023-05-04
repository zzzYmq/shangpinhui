<template>
    <Suspense>
        <TypeNav></TypeNav>
        <template #fallback>
            <Loading></Loading>
        </template>
    </Suspense>
    <Suspense>
        <ListContainer></ListContainer>
    </Suspense>
    <Recommend :today="today"></Recommend>
    <Suspense>
        <Floor></Floor>
    </Suspense>
    <Footer></Footer>
</template>

<script setup>
import Loading from '../../components/Loading/Loading.vue';
import Recommend from '../../components/Recommend/Recommend.vue';
import Footer from '@/components/Footer/Footer.vue'
import { reactive, defineAsyncComponent } from 'vue'
import { getToday } from '@/utils/request/home'

const TypeNav = defineAsyncComponent(() => import('@/components/TypeNav/TypeNav.vue'))
const ListContainer = defineAsyncComponent(() => import('./components/ListContainer/ListContainer.vue'))
const Floor = defineAsyncComponent((() => import('./components/Floor/Floor.vue')))

const today = reactive({})
const { data } = await getToday()
Object.assign(today, data)

</script>

<style scoped lang='scss'></style>