
<template>
  <TopNav ></TopNav>
  <div class="px-20 w-full md:columns-3 sm:columns-1">
    <div v-for="(card, i) in cards" :key="i" class="w-full">
      <div class="w-full p-2" id="item">
        <Cards :link="`src/assets/${card.src}`" class="w-full h-full"></Cards>
      </div>
    </div>
    
  </div>
  <p>This</p>
  
</template>

<script>
import TopNav from './components/topNav.vue'
import Cards from './components/card.vue'

export default {
  name : 'App',
  components : {
    TopNav,
    Cards
  },
  data() {
    return {
      cards : [
        {
          src:'1.jpg',
          title: 'Some thing 1',
          user: 'adasd',
          desc: 'asdadasdasdasd'
        },
        {
          src:'2.jpg',
          title: 'Some thing 2',
          user: '',
          desc: ''
        },
        {
          src:'3.jpg',
          title: 'Some thing 3',
          user: '',
          desc: ''
        },
        {
          src:'4.jpg',
          title: 'Some thing 4',
          user: '',
          desc: ''
        },
        {
          src:'5.jpg',
          title: 'Some thing 5',
          user: '',
          desc: ''
        },
        {
          src:'1.jpg',
          title: 'Some thing 1',
          user: 'adasd',
          desc: 'asdadasdasdasd'
        },
        {
          src:'2.jpg',
          title: 'Some thing 2',
          user: '',
          desc: ''
        },
        {
          src:'3.jpg',
          title: 'Some thing 3',
          user: '',
          desc: ''
        },
        {
          src:'4.jpg',
          title: 'Some thing 4',
          user: '',
          desc: ''
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
