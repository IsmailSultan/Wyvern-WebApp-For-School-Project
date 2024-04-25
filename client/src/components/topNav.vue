<template>
    <div class="px-3 py-4 flex items-center justify-between">
        <div class="flex items-center">
            <button class="rounded-full p-5 flex items-center justify-center">
                <img src="../assets/LogowboldDark.png" alt="logo" class="h-4 ">
            </button>
            <button  v-for="(item,i) in tabItems" :key="i" @click="selectedTab = item.key" :class="`${selectedTab === item.key ? 'bg-dark text-white' : 'text-dark bg-white'} rounded-full px-5 py-4 font-semibold`">{{ item.name }}</button>
        </div>
        <div class="">
            <input type="text" class="rounded-full bg-light p-3" placeholder="Search">
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