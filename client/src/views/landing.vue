<template>
  <div class="w-full">
    <h1 class="text-8xl mont font-semibold pl-24 pt-24 text-dark">Echo,<br>Come Connect!</h1>
    <p class="relative mont text-md mont font-medium w-1/2 pl-24 pt-6 bg-white">Share with a community passionate about keeping history alive. Dive into the depths of tradition with <span class="">Echo</span>. Join us and rediscover India's rich heritage.</p>
    <div class="flex mt-6 w-1/5 justify-start">
      <RouterLink to="/login">
        <button class="text-lg rounded-full pl-16 pr-16 pt-3 pb-3 bg-dark text-md text-white ml-24 border-solid border-2 border-dark max-h-16">LogIn</button>
      </RouterLink>
      <RouterLink to="/signup">
        <button class=" rounded-full pl-16 pr-16 pt-3 pb-3 bg-white text-md text-dark border-dashed border-dark border-2 ml-4 max-h-16">SignUp</button>
      </RouterLink>
    </div>

  </div>
</template>

<script>
export default {
  name : "landing",
  data() {
    return {
      
    }
  },
}

</script>

<style scoped>
    .mont {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    } 
</style>