
<template>
  <TopNav></TopNav>
  <router-view></router-view>
</template>

<script>
import topNav from './components/topNav.vue'

export default {
  name : 'App',
  // data : {
  //   user : String,
  // },
  components : {
    TopNav : topNav
  }
  // methods : {
  //   handleUser(data) {

  //   }
  // }
}
</script>

<style scoped>

</style>
