<!-- <template>
  <div>123</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import {reqLogin} from './api/user'

const getReqLogin = () => {
    reqLogin({username:'admin',password:'1234'})
}

onMounted(() => {
    getReqLogin()
})
</script>
<style lang="scss" scoped></style> -->

<template>

<router-view></router-view> 

</template>

<script lang='ts' setup>
import { ref,reactive } from 'vue'

</script>
<style lang='scss' scoped>

</style>
