<template>
    <section class=" bg-dark w-full">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mont w-full">
            <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-4xl xl:p-0 bg-lighterDark dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create Post
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="createPost">
                        <label for="title" class="block text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <dropdown v-on:Archevent="handleArch" v-on:Artevent="handleArt" v-on:MDevent="handleMD" v-on:YGevent="handleYog" required=""></dropdown>
                        <div>
                            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..." required="" v-model="title">
                        </div>
                        <div>
                            <label for="imagelink" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Link</label>
                            <input type="text" name="imagelink" id="imagelink" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://i.pinimg.com/..." required="" v-model="link">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <input type="text" name="description" id="description" placeholder="Lorem impsum..." class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" v-model="description">
                        </div>
                        <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 pb-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Post</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import dropdown from '../components/dropdown.vue'
import { createRouter } from 'vue-router'

export default {
    components : {
        dropdown
    },
    data(){
        return{
            load: false,
            author: '',
            title: '',
            link: '',
            description: '',
            genre : 'option'
        }
    }, 
    async created() {
        const response = await fetch('http://localhost:4000/api/Wyvern/auth')
        const data = await response.json()
        if (Object.keys(data).length === 0) {
            // console.log("User is not logged in")
            this.$router.push({path : '/login'})
        } else {
            console.log(data)
            this.author = data._id
            this.load = true
            
        }
    },
    methods : {
        async createPost() {
            console.log("new text")
            const response = await axios.post('http://localhost:4000/api/Wyvern/CreatePost', {
                title: this.title,
                description: this.description,
                image: this.link,
                author: this.author,
                genre: this.genre
            })
            const data = response.data
            // console.log("from createpost", data)
            // console.log("From below")
            this.$router.push({path: "/explore"})
            // this.$router.push({ name: 'foo' })

        },
        handleArch(){
        this.genre = "Architecture"
        },
        handleArt(){
        this.genre = "Art"
        },
        handleMD(){
        this.genre = "MusicDance"
        },
        handleYog(){
        this.genre = "Yoga"
        }
    }
}
</script>

<style>
.mont {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
} 

</style>