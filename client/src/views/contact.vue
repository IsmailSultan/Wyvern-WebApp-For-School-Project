<template>
    <div class="relative w-full overflow-hidden h-full flex flex-col">
        <gallery postsFilter="" class="w-full h-full absolute top-0 left-0 z-0 bg-fixed"></gallery>
        <div class="absolute top-0 left-0 w-full h-full backdrop-blur-md z-20 bg-fixed backdrop-grayscale"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-4xl xl:p-0 bg-white border-white z-30 mx-auto">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark">
                        Contact
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="createContactPost">
                        <div>
                            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Title</label>
                            <input type="text" name="title" id="title" class="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..." required="" v-model="title">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Description</label>
                            <input type="text" name="description" id="description" placeholder="Lorem impsum..." class="pb-32 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" v-model="description">
                        </div>
                        <button type="submit" class="w-full text-dark bg-primary-600 focus:outline-none font-medium rounded-lg text-lg px-5 pb-4 text-center dark:bg-primary-600">Create Post</button>
                    </form>
                </div>
            </div>
    </div>
</template>

<script>
import gallery from '../components/gallery.vue'
import axios from 'axios'

export default {
    data() {
        return {
            author: '',
            title: '',
            description: '',
            load : false
        }
    },
    components : {
        gallery
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
        async createContactPost() {
            console.log("new text from contact post")
            const response = await axios.post('http://localhost:4000/api/Wyvern/CreateContactPost', {
                title: this.title,
                description: this.description,
                author: this.author,
            })
            const data = response.data
            // console.log("from createpost", data)
            // console.log("From below")
            this.$router.push({path: "/explore"})
            // this.$router.push({ name: 'foo' })

        }
    }
}

</script>