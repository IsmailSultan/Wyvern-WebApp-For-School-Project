<template>
    <section class=" bg-dark">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mont">
            <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-lighterDark dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Log in to your account
                    </h1>
                    <div v-if="showLoggedIn" class="w-full flex items-center bg-green-400 opacity-70 rounded-xl border-2 border-green-500 relative">
                                <p class="mont text-md font-medium my-3 mx-auto text-dark">Logged In</p>
                                <span @click="this.showLoggedIn = false" class="material-symbols-outlined absolute text-dark right-0 mr-4 opacity-80">close</span>
                    </div>
                    <div v-if="showLoginFailed" class="w-full flex items-center bg-red-400 opacity-70 rounded-xl border-2 border-red-500 relative">
                                <p class="mont text-md font-medium my-3 mx-auto text-dark">Incorrect User or Password</p>
                                <span @click="this.showLoginFailed = false" class="material-symbols-outlined absolute text-dark right-0 mr-4 opacity-80">close</span>
                    </div>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm">
                        <div>
                            <label for="Username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="text" name="Username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required="" v-model="name">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" v-model="password">
                        </div>
                        <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 pb-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
                        <router-link to="/signUp">
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                        </router-link>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    props : {
        redirectFrom : String
    },
    data() {
        return {
            name: '',
            password : '',
            response : '',
            showLoggedIn : false, 
            showLoginFailed : false
        }
    },
    methods : {
        async submitForm() {
            console.log(password)
            this.showLoggedIn = false
            this.showLoginFailed = false
            try {
                const response = await axios.post('http://localhost:4000/api/login', {
                name: this.name,
                password: this.password
            });
            const respo = response;
            // console.log("failed login", respo)
            this.response = respo
            if (respo.status === 200){
                this.showLoggedIn = true
                setTimeout(() => {
                    this.$router.push({path : '/search'})
                }, 2000);
            } else {
                this.showLoginFailed = true
            }
            } catch (error) {
                this.showLoginFailed = true
            }
            
            
            
            // this.$emit('passUser',respo)
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