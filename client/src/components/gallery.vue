<template>
    <div class="px-20 w-full md:columns-3 sm:columns-1">
        <div v-for="(card, i) in cards" :key="i" class="w-full">
        <div class="w-full p-2" id="item">
            <Cards @click="[showModal = true, modalImg = cards[i]]" :link="`src/assets/${card.src}`" class="w-full h-full"></Cards>
        </div>
        </div>
    </div>
    <div v-if="showModal" @click="showModal = false" class="fixed inset-0 bg-black opacity-50 z-40"></div>
    <PostModal v-if="showModal" @hideModal="ModalTrigger" :image="modalImg"></PostModal>
</template>

<script>
import TopNav from './topNav.vue'
import Cards from './card.vue'
import PostModal from './postModal.vue'

export default {
    components: {
        TopNav,
        Cards,
        PostModal
    },
    data() {
        return {
        cards : [
            {
            src:'1.jpg',
            title: 'Some thing 1',
            user: 'adasd',
            desc: 'asdadasdasdasd'
            },
            {
            src:'2.jpg',
            title: 'Some thing 2',
            user: '',
            desc: ''
            },
            {
            src:'3.jpg',
            title: 'Some thing 3',
            user: '',
            desc: ''
            },
            {
            src:'4.jpg',
            title: 'Some thing 4',
            user: '',
            desc: ''
            },
            {
            src:'5.jpg',
            title: 'Some thing 5',
            user: '',
            desc: ''
            },
            {
            src:'1.jpg',
            title: 'Some thing 1',
            user: 'adasd',
            desc: 'asdadasdasdasd'
            },
            {
            src:'2.jpg',
            title: 'Some thing 2',
            user: '',
            desc: ''
            },
            {
            src:'3.jpg',
            title: 'Some thing 3',
            user: '',
            desc: ''
            },
            {
            src:'4.jpg',
            title: 'Some thing 4',
            user: '',
            desc: ''
            },
        ],
        showModal: false,
        modalImg: {}
        }
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