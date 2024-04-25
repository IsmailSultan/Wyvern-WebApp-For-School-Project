<template>
    <div class="px-3 py-4 flex items-center justify-between">
        <div class="flex items-center">
            <button class="rounded-full pt-4 pb-4 pl-3 pr-4 flex items-center justify-center">
                <img src="../assets/LogowboldDark.png" alt="logo" class="h-4">
            </button>
            <button  v-for="(item,i) in tabItems" :key="i" @click="selectedTab = item.key" :class="`${selectedTab === item.key ? 'bg-dark text-white' : 'text-dark bg-white'} rounded-full px-5 py-4 font-semibold`">{{ item.name }}</button>
        </div>
        <div class="flex-grow relative ml-2" style="font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 50, 'opsz' 48;">
            <span class="material-symbols-outlined absolute mt-3 ml-3 text-muted" style="opacity: 40%;">search</span>
            <input type="text" class="w-full hover:bg-lightHover rounded-full bg-light py-3 pr-3 pl-10" placeholder="Search">
        </div>
        <div class="flex items-center" style="font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48;">
            <button type="button" name="button" class="rounded-full hover:bg-light flex items-center justify-center p-3 m-1"><span class="material-symbols-outlined text-muted text-dark">login</span></button>
            <button type="button" name="button" class="rounded-full hover:bg-light flex items-center justify-center p-3 "><span class="material-symbols-outlined text-muted text-dark">help</span></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabItems : [
                {name : 'Home', key : 'home'},
                {name : 'Explore', key : 'explore'},
            ],
            selectedTab : 'home'
        }
    }
}
</script>