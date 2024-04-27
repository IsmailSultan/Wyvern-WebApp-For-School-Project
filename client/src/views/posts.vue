<template>
    <galleryNew :postsFilter="fil"></galleryNew>
</template>

<script>
import { handleError } from 'vue'
import galleryNew from '../components/gallery.vue'

export default {
    data() {
        return {
            fil : "",
            watchVar : this.$route.params.id
        }
    },
    watch: {
        $route: {
            handler(){
            this.fil = this.$route.params.id
        },
        immediate: true
    }
    },
    components : {
        galleryNew
    }
}

</script>