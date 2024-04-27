<template>
    <div class="flex w-full items-center mt-10">
        <p class="text-xl mont font-semibold mt-3 ml-auto mr-auto">#Tags</p>
    </div>
    
    <div class="flex w-full items-center mt-12">
        <div class="flex items-center w-full justify-between">
            <router-link to="/posts/Yoga">
            <button class="text-md font-medium mont pt-3 pb-3 pl-12 pr-12 bg-white text-dark border-2 border-dashed border-dark rounded-full w-3/12 ml-12">Yoga</button>
            </router-link>
            <router-link to="/posts/Art">
            <button class="text-md font-medium mont pt-3 pb-3 pl-12 pr-12 bg-white text-dark border-2 border-dashed border-dark rounded-full w-3/12 ml-12">Art</button>
            </router-link>
            <router-link to="/posts/MusicDance">
            <button class="text-md font-medium mont pt-3 pb-3 pl-12 pr-12 bg-white text-dark border-2 border-dashed border-dark rounded-full w-3/12 ml-12">Music/Dance</button>
            </router-link>
            <router-link to="/posts/Yoga">
            <button class="text-md font-medium mont pt-3 pb-3 pl-12 pr-12 bg-white text-dark border-2 border-dashed border-dark rounded-full w-3/12 ml-12 mr-12">Architecture</button>
            </router-link>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>

.mont {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    } 

</style>