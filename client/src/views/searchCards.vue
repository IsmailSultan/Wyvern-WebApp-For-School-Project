<template>
    <div class="flex flex-wrap justify-center">
      <div v-for="(card, index) in cards" :key="index" class="w-1/4 p-4 mt-16">
        <div class="bg-white shadow-md rounded overflow-hidden" @click="handleSearch(card.genre)">
          <div class="relative " >
            <img :src="card.image" alt="Card image" class="w-full h-96 object-cover rounded-xl hover:rounded-lg">
            <div class="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 rounded-lg">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h2 class="text-lg font-bold text-white opacity-100 mont">{{ card.title }}</h2>
                <p class="text-gray-200 opacity-100 mont">{{ card.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [
          { image: 'https://i.pinimg.com/originals/3f/02/e4/3f02e4611e6235949cb7e9ccaf16e14d.jpg', title: 'Yoga', description: 'Browse trending Yoga pics...', genre : 'Yoga' },
          { image: 'https://i.pinimg.com/564x/91/94/b6/9194b635e589aaeef292dae114e47caa.jpg', title: 'Art', description: 'Discover Art for the soul...', genre : 'Art' },
          { image: 'https://i.pinimg.com/564x/fd/04/ac/fd04ac6884be3d41682a319549926404.jpg', title: 'Music And Dance', description: 'Dance And Sing through the ages...', genre : 'MusicDance' },
          { image: 'https://i.pinimg.com/736x/20/6f/04/206f040b7a3623108da975f363b96f00.jpg', title: 'Architecture', description: 'Grand buildings that tell stories...', genre : 'Architecture' },
        ],
        TDshow : false,
        searchQuery : ''
      }
    },
    methods : {
        handleSearch(prm){
            this.$router.push({path : `/posts/${prm}`})
        }
    }
  }
  </script>
  
  <style scoped>
    .mont {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    } 
  </style>