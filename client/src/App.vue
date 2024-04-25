
<template>
  <TopNav ></TopNav>
  <router-view></router-view>
</template>

<script>
import topNav from './components/topNav.vue'

export default {
  name : 'App',
  components : {
    TopNav : topNav
  }
}
</script>

<style scoped>

</style>
