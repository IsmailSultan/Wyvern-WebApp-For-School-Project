<template>
    <!-- {{ cards }} -->
    <div class="px-20 w-full md:columns-3 sm:columns-1">
        <div v-for="(card, i) in cards" :key="i" class="w-full">
        <div class="w-full p-2" id="item">
            <Cards @click="[showModal = true, modalImg = card.image, modalTitle = card.title, modalDsc = card.desc, modalAuth=card.author]" :link="card.image" class="w-full h-full"></Cards>
        </div>
        </div>
    </div>
    
    <div v-if="showModal" @click="showModal = false" class="fixed inset-0 bg-black opacity-50 z-40"></div>
    <PostModal v-if="showModal" @hideModal="ModalTrigger" :image="modalImg" :imgtitle="modalTitle" :imgdesc="modalDsc" :imgAuth="modalAuth"></PostModal>
    
</template>

<script>
import { handleError } from 'vue'
import Cards from './card.vue'
import PostModal from './postModal.vue'
import axios from 'axios'

export default {
    components: {
        Cards,
        PostModal
    },
    props : {
        postsFilter : '',
        postFilterId : '',
    },
    data() {
        return {
            showModal: false,
            modalImg: '',
            modalTitle: '',
            modalDsc: '',
            modalAuth: '', 
            cards : []
        }
    },
    watch: {
        postFilterId: {
            async handler(naw) {
                console.log("should run")
                console.log("routeId",this.$route.params.id)
                console.log("newvalFilterById",naw)
                const response = await axios.post('http://localhost:4000/api/Wyvern/getPostsbyId', {
                    filter : this.$route.params.id,
                    message : "this is from ById"
                })
                const data = response.data
                this.cards = data
                console.log("new cards",data)
            },
            immediate: true,
        },
    },
    async created(){
        // console.log("postfilter : ", this.postsFilter)
        const response = await axios.post('http://localhost:4000/api/Wyvern/getPostsById', {
                filter : this.postFilterId
        })
        const data = response.data
        // console.log(data)
        this.cards = data
    },
    methods: {
        ModalTrigger() {
            this.showModal = false
        }
    }
}

</script>

<style>

</style>