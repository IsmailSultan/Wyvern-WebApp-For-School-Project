<template>
    <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg  w-full max-w-4xl">
        <div class="flex">
          <div class="w-1/2">
            <img :src="image" alt="Post image" class="w-full h-full object-cover rounded-s-lg max-h-screen">
          </div>
          <div class="w-1/2 pl-8 p-8 relative">
            <h2 class="text-2xl font-bold mb-2">{{ imgtitle }}</h2>
            <button class="absolute top-0 right-0 mt-8 mr-8" @click="hideModal">
                <span class="material-symbols-outlined items-right">close</span>
            </button>
            <a class="text-gray-600 mb-2">Posted by: {{ imgauthor }}</a>
            <p class="text-gray-600">
              {{ imgdesc }}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: 
        ['image', 'imgtitle', 'imgdesc', 'imgAuth'],
    data() {
      return {
        imgauthor: ''
      }
    },
    async created(){
        console.log("imageAuth :",this.imgAuth)
        const response = await axios.post('http://localhost:4000/api/Wyvern/getusername',{
          id: this.imgAuth
        })
        const data = response.data[0].username
        this.imgauthor = data
        // console.log(data)
        // this.imgauthor = data[0].username
    },
    methods : {
        hideModal() {
            this.$emit('hideModal')
        }
    }
}

</script>