<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" class="relative">
        <img :src="link" alt="" class="rounded-lg">
        <div v-if="hover" class="absolute bg-dark opacity-30 inset-0 w-full h-full rounded-lg"></div>
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