<template>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md dark:bg-gray-700 px-3 py-2 text-sm font-medium text-gray-200 mont shadow-sm ring-1 ring-inset ring-gray-600 hover:dark:bg-gray-500 -mt-2 border-none">
          {{ txt }}
          <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>
  
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1">
            <form @submit.prevent="handleYog">
            <MenuItem v-slot="{ active }">
              <button type="submit" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">Yoga</button>
            </MenuItem>
            </form>
            <form @submit.prevent="handleArt">
            <MenuItem v-slot="{ active }">
              <button type="submit" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">Art</button>
            </MenuItem>
            </form>
            <form @submit.prevent="handleMD">
            <MenuItem v-slot="{ active }">
              <button type="submit" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">Music & Dance</button>
            </MenuItem>
            </form>
            <form @submit.prevent="handleArch">
              <MenuItem v-slot="{ active }">
                <button type="submit" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">Architecture</button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </transition>
    </Menu>
</template>


<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>
<script>
export default {
    data() {
      return {
        txt: 'Options'
    }
    },
    methods : {
      handleArch(){
        this.txt = "Architecture"
        this.$emit("Archevent","Architecture")
      },
      handleArt(){
        this.txt = "Art"
        this.$emit("Artevent","Art")
      },
      handleMD(){
        this.txt = "MusicDance"
        this.$emit("MDevent","MusicDance")
      },
      handleYog(){
        this.txt = "Yoga"
        this.$emit("YGevent","Yoga")
      }
    }
}
</script>

<style>
.mont {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
} 

</style>