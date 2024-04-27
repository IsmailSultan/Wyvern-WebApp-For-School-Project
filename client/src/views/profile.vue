<template>
    <div class="w-full flex justify-center">
    <div class="flex items-center mt-4 mb-8">
        <img :src="`https://ui-avatars.com/api/?background=random&length=1&name=${profileImage}&size=64`" alt="profile-image" class="rounded-full h-32">
        <p class="text-3xl font-semibold ml-4">{{ profileusername }}</p>
    </div>
</div>
<gallery :postFilterId="{profileId}" class="mb-8"</gallery>
</template>

<script>
import gallery from '../components/galleryProfile.vue'

export default {
    components : {
        gallery
    },
    data() {
        return {
            profileImage : "",
            profileusername : "",
            profileId : ""
        }
    },
    watch : {
        $route: {
            handler(newVal){
                this.profileusername = newVal.params.username
                this.profileImage = newVal.params.username.replace(/\s+/, "")
                this.profileId = newVal.params.id
            },
            immediate:true
        }
    },
    method : {
        getProfile() {

        }
    }
}
</script>