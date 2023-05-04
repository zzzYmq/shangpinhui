<template>
  <Header></Header>
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<script setup>
import Header from '@/components/Header/Header.vue'
import { useUserStore } from '@/plugins/store/user.js'

const userStore = useUserStore()
userStore.setUUID()

</script>

<style scoped lang='scss'></style>