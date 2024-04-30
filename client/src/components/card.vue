<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" class="relative">
        <img :src="link" alt="" class="rounded-lg w-full">
        <div v-if="hover" class="absolute bg-black opacity-0 hover:opacity-30 inset-0 w-full h-full rounded-lg transition duration-300"></div>
    </div>
</template>

<script>
export default {
    props : ['link'],
    data() {
        return {
            hover: false
        }
    }
}

</script>

<style scoped>
</style>