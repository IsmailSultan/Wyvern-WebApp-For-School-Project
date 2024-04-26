<template>

    <div class="flex-grow w-full items-center justify-center bg-white mt-10">
        <div class="w-1/3 h-4/5 bg-dark text-white rounded-lg mt-6 ml-auto mr-auto flex flex-col mont">
            <p class="text-lg font-semibold ml-auto mr-auto mt-12 mb-6w-full">Sign Up</p>
            <div class="w-full flex items-center flex-col text-dark font-medium" >
            <form action="" class="flex w-4/5 items-center flex-col" @submit.prevent="submitForm">
                <input class="p-2 w-4/5 rounded-t-md mt-12 pt-6 pb-6 border-b-2" type="text" name="name" id="" placeholder="Username" v-model="name"></input>
                <input class="p-2 w-4/5   pt-6 pb-6 border-b-2" type="text" name="email" id="" placeholder="Email" v-model="email"></input>
                <input class="p-2 w-4/5 rounded-b-md pt-6 pb-6" type="text" name="password" id="" placeholder="Password" v-model="password"></input>
                <button class="mont font-medium rounded-full pl-16 pr-16 pt-3 pb-3 bg-white text-md text-dark border-solid border-2 border-dark max-h-16 mt-12 mb-12" type="submit">SignUp</button>
            </form>
            
            </div>
        </div>
        
    </div>

</template>

<script>
import axios from 'axios'
import {useRouter} from 'vue-router';

const router = useRouter()


export default {
    data() {
        return {
            name: '',
            email : '',
            password : '',
            resp : ''
        }
    },
    methods : {
        async submitForm() {
            console.log(name)
            const response = await axios.post('http://localhost:4000/api/signUp', {
                name: this.name,
                email: this.email,
                password: this.password
            })
            const respo = response;
            this.response = respo
            this.$router.push({path : '/explore'})
            
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