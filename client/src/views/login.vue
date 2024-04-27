<!-- <template>

    <div class="flex-grow w-full items-center justify-center bg-white mt-10">
        <div class="w-1/3 h-4/5 bg-dark text-white rounded-lg mt-6 ml-auto mr-auto flex flex-col mont">
            <p class="text-lg font-semibold ml-auto mr-auto mt-12 mb-6w-full">Log In</p>
            <div class="w-full flex items-center flex-col text-dark font-medium" >
            <form action="" class="flex w-4/5 items-center flex-col" @submit.prevent="submitForm">
                <input class="p-2 w-4/5 rounded-t-md mt-12 pt-6 pb-6 border-b-2" type="text" name="name" id="" placeholder="Username" v-model="name"></input>
                <input class="p-2 w-4/5 rounded-b-md pt-6 pb-6" type="text" name="password" id="" placeholder="Password" v-model="password"></input>
                <button class="mont font-medium rounded-full pl-16 pr-16 pt-3 pb-3 bg-white text-md text-dark border-solid border-2 border-dark max-h-16 mt-12 mb-12" type="submit">Login</button>
            </form>
            </div>
        </div>
    </div>

</template> -->

<template>
    <section class=" bg-dark">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mont">
            <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-lighterDark dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
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
        }
    },
    methods : {
        async submitForm() {
            console.log(password)
            const response = await axios.post('http://localhost:4000/api/login', {
                name: this.name,
                password: this.password
            });

            const respo = response;
            this.response = respo
            this.$router.push({path : '/explore'})
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