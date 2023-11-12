<script setup>
import { ref, defineEmits } from 'vue'

const inputValue = ref('')
const emit = defineEmits(['update:inputValue']);
const emitInputValue = () => {

}
const emitSearchButtonClick = () => {
    emit('update:inputValue', inputValue.value)
    console.log('emit発火')
}
</script>
<template>
    <div id="TopNav" class="w-[100%] h-[60px] fixed bg-black z-20 flex items-center justify-between">
        <div class="flex items-center">
            <button @click="isNavOverlay()" class="p-2 ml-3 rounded-full hover:bg-gray-800 inline-block cursor-pointer">
                <Icon name="iconoir:menu" size="1.5rem" class="text-white" />
            </button>
            <div class="mx-2"></div>
            <!-- <Link class="flex text-white items-center justify-center mr-10 cursor-pointer"> -->
            <img width="32" src="/images/YT-logo.png" alt="">
            <img width="62" src="/images/YT-logo-text.png" alt="">
            <!-- </Link> -->
        </div>
        <div class="w-[600px] md:block hidden">
            <div class="rounded-full flex items-center bg-[#222222]">
                <input type="text" v-model="inputValue" @input="emitInputValue"
                    class="form-control block w-full px-5 py-1.5 text-base font-normal text-gray-200 bg-black placeholder-gray-400 bg-clip-padding border border-solid border-l-gray-700 border-gray-700 rounded-l-full transition ease-in-out m-0 border-transparent focus:ring-0"
                    placeholder="Search" name="" id="" />
                <button @click="emitSearchButtonClick">
                    <Icon name="octicon:search-24" size="1.5rem" class="text-white mx-6" />
                </button>
                <!-- <MagnifyIcon class="mx-6" fillColor="#FFFFFF" :size="23" /> -->
            </div>
        </div>
        <div>
            <img class="rounded-full mx-8" width="35"
                src="https://yt3.ggpht.com/ytc/APkrFKZitQf2gTu_J343h32BVVoBAKxuCwPlrk42DF9nr1_Kkg=s88-c-k-c0x00ffffff-no-rj"
                alt="ユーザーのアイコン">
        </div>
    </div>
</template>