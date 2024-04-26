<template>
    <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg  w-full max-w-4xl">
        <div class="flex">
          <div class="w-1/2">
            <img :src="image" alt="Post image" class="w-full h-full object-cover rounded-s-lg">
          </div>
          <div class="w-1/2 pl-8 p-8 relative">
            <h2 class="text-2xl font-bold mb-2">Post Title</h2>
            <button class="absolute top-0 right-0 mt-8 mr-8" @click="hideModal">
                <span class="material-symbols-outlined items-right">close</span>
            </button>
            <p class="text-gray-600 mb-2">Posted by: John Doe</p>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a ullamcorper laoreet, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a ullamcorper laoreet, lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: 
        ['image'],
    methods : {
        hideModal() {
            this.$emit('hideModal')
        }
    }
}

</script>