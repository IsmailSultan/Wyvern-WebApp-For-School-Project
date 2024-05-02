<template>
    <div class="px-3 py-4 flex items-center justify-between">
        
        <div class="flex items-center">
            <router-link to="/home">
                <button class="rounded-full pl-2 pr-4 flex items-center justify-center">
                    <img src="../assets/logoEchoDark.png" alt="logo" style="height : 7vh;">
                </button>
            </router-link>
            
                <span v-for="(item,i) in tabItems" :key="i">
                    <router-link :to="`/${item.key}`">
                        <button   @click="selectedTab = item.key" :class="`${selectedTab === item.key ? 'bg-dark text-white' : 'text-dark bg-white'} rounded-full px-5 py-4 font-semibold`">{{ item.name }}</button>
                    </router-link>
                </span>
        </div>
        <div class="flex-grow relative ml-2" style="font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 50, 'opsz' 48;">
            <span class="material-symbols-outlined absolute mt-3 ml-3 text-muted" style="opacity: 40%;">search</span>
            <form @submit.prevent="handleSearch" class="">
                <input @click = "handleCards"type="text" class="w-full hover:bg-lightHover rounded-full bg-light py-3 pr-3 pl-10" placeholder="Search" @key.enter.exact.prevent="handleSearch" v-model="searchQuery">
            </form>
        </div>
        <div class="flex items-center" style="font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48;">
            <router-link to="/CreatePost">
                <button type="button" name="button" class="rounded-full hover:bg-light flex items-center justify-center p-3 ml-2"><span class="material-symbols-outlined text-muted text-dark">add</span></button>
            </router-link>
            <router-link to="/login" redirectFrom="/home">
                <button v-if="loggedIn === false" type="button" name="button" class="rounded-full hover:bg-light flex items-center justify-center p-3"><span class="material-symbols-outlined text-muted text-dark">login</span></button>
            </router-link>
            <router-link to="/contact">
            <button type="button" name="button" class="rounded-full hover:bg-light flex items-center justify-center p-3 j-10"><span class="material-symbols-outlined text-muted text-dark">help</span></button>
            </router-link>
            <router-link :to="`/profile/${profileUser}/${profileId}`">
            <button v-if="loggedIn" type="button" name="button" class="rounded-full hover:bg-light flex items-center justify-center p-3"><img :src="`https://ui-avatars.com/api/?background=random&length=1&name=${profileImage}`" class="rounded-full h-8" alt="profile-image"></button>
            </router-link>
        </div>
    </div>
</template>

<script>
// import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            tabItems : [
                {name : 'Home', key : 'home'},
                {name : 'Explore', key : 'explore'},
            ],
            selectedTab : 'home',
            loggedIn: false,
            searchQuery : '',
            profileImage : '',
            profileUser : '',
            profileId : ''
        }
        
    },
    watch : {
        $route : {
            async handler(newVal) {
                if (newVal === ""){
                    this.selectedTab = "home"
                }
                if (newVal.params.login != ''){
                    const response = await fetch('http://localhost:4000/api/Wyvern/auth')
                    const data = await response.json()
                    if (Object.keys(data).length === 0){
                        this.loggedIn = false
                    } else {
                        this.loggedIn = true
                        this.profileImage = data.username.replace(/\s+/, "")
                        this.profileUser = data.username
                        this.profileId = data._id
                        console.log("pf : ",this.profileImage)
                    }
                    console.log(data)
                }
            },
            immediate : true 
        }
    },
    async created() {
        onMounted: {
            this.selectedTab = "home"
            const response = await fetch('http://localhost:4000/api/Wyvern/auth')
            const data = await response.json()
            if (Object.keys(data).length === 0){
                this.loggedIn = false
            } else {
                this.loggedIn = true
                this.profileImage = data.username.replace(/\s+/, "")
                // console.log(this)
                this.profileUser = data.username
                this.profileId = data._id
                console.log("pf : ",this.profileImage)
            }
            console.log(data)
        }
        
    },

    methods : {
        handleSearch(){
            if(this.searchQuery.toLowerCase().includes('art')){
                this.searchQuery = "Art"
                console.log(this.searchQuery)
                this.$router.push({path : `/posts/${this.searchQuery}`})
                this.searchQuery = ""
            } else if (this.searchQuery.toLowerCase().includes('yoga')) {
                this.searchQuery = "Yoga"
                console.log(this.searchQuery)
                this.$router.push({path : `/posts/${this.searchQuery}`})
                this.searchQuery = ""
            } else if (this.searchQuery.toLowerCase().includes('music') || this.searchQuery.toLowerCase().includes('dance')) {
                this.searchQuery = "MusicDance"
                console.log(this.searchQuery)
                this.$router.push({path : `/posts/${this.searchQuery}`})
                this.searchQuery = ""
            } else if (this.searchQuery.toLowerCase().includes('architecture')) {
                this.searchQuery = "Architecture"
                console.log(this.searchQuery)
                this.$router.push({path : `/posts/${this.searchQuery}`})
                this.searchQuery = ""   
            } else {
                this.$router.push({path : "/search/itemnotfound"})
            }
        },
        handleCards() {
            this.$router.push({path : "/search"})
        }
    }
}
</script>

