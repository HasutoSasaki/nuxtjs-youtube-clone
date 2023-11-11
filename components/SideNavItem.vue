<template>
    <li :class="[!openSideNav ? 'p-2' : 'flex items-center p-2']"
        class="text-white text-sm font-semibold text-center hover:bg-gray-700 rounded-lg cursor-pointer">
        <div :class="[!openSideNav ? 'w-full flex justify-center' : '']">
            <Icon :name="iconName" size="1.5rem" class="text-white" />
        </div>
        <div :class="[!openSideNav ? '' : 'mt-1 ml-4']">
            <span v-if="!openSideNav">{{ iconString.substring(0, 4) }}</span>
            <span v-else>{{ tabTitle }}</span>
        </div>
    </li>
</template>
<script setup>
import { defineProps, toRefs } from 'vue';

// import Home from 'vue-material-design-icons/Home.vue'
// import FolderPlayOutline from 'vue-material-design-icons/FolderPlayOutline.vue';
// import ImageMultiple from 'vue-material-design-icons/ImageMultiple.vue';
// import ThumbUpOutline from 'vue-material-design-icons/ThumbUpOutline.vue';
// import History from 'vue-material-design-icons/History.vue';
// import ClockOutline from 'vue-material-design-icons/ClockOutline.vue';
// import VideoPlusOutlineIcon from 'vue-material-design-icons/VideoPlusOutline.vue';
// import DeleteIcon from 'vue-material-design-icons/Delete.vue';

const props = defineProps({
    openSideNav: Boolean,
    iconString: String,
})

const { openSideNav, iconString } = toRefs(props)
let iconName = null
let tabTitle = null

if (iconString.value === 'Home') iconName = 'mdi:home', tabTitle = 'ホーム'
if (iconString.value === 'registeredChannels') iconName = 'entypo:folder-video', tabTitle = '登録チャンネル'
if (iconString.value === 'myChannel') iconName = 'tdesign:user-avatar', tabTitle = 'チャンネル'
if (iconString.value === 'VideoCreated') iconName = 'ri:movie-line', tabTitle = '作成した動画'
if (iconString.value === 'Liked') iconName = 'iconamoon:like', tabTitle = '高く評価した動画'
if (iconString.value === 'History') iconName = 'lucide:history', tabTitle = '履歴'
if (iconString.value === 'WatchLater') iconName = 'ic:outline-watch-later', tabTitle = '後で見る'
// if (iconString.value === 'Add Video') iconName = VideoPlusOutlineIcon
// if (iconString.value === 'Delete Video') iconName = DeleteIcon

</script>