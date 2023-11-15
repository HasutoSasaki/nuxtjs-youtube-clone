
<script setup>
import { ref, toRefs, watch, nextTick } from 'vue'
import { useSearchInputStore } from '~/store/searchInput';
import { storeToRefs } from 'pinia'
const store = useSearchInputStore()
// const { value } = store
const { inputValue } = storeToRefs(store)
const props = defineProps({
    inputValues: String,
    textTest: String
})
watch(inputValue, async (newValue, oldValue) => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${newValue}&key=AIzaSyBGk021g-q7Z4XR3AyxsEvuh5oxFZ5mVjU`)
    const json = await response.json()
    data.value = json
}, { immediate: true })
const pageTitle = ref('youtube');
// const { inputValues } = toRefs(props)
//const { textTest } = toRefs(props)
const text = ref('')
const data = ref(null)

// async function search() {
//     const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputValue}&key=AIzaSyBGk021g-q7Z4XR3AyxsEvuh5oxFZ5mVjU`)
//     const json = await response.json()
//     data.value = json
// }
// function test() {
//     console.log(props.inputValues);
// }

</script>
<template #default>
    <Head :title="pageTitle" />
    <h1 class="font-bold text-2xl">youtube</h1>
    <button @click="test">テスト</button>
    <h1>{{ inputValue }}</h1>
    <div>
        <ul>
            <li v-for="video in data?.items" :key="video.id.videoId">
                <img :src='video.snippet.thumbnails.default.url' alt="">
                <h1 class="text-bold">{{ video.snippet.thumbnails.default.url }}</h1>
                <h2>{{ video.snippet.title }}</h2>
                <p>{{ video.snippet.description }}</p>
            </li>
        </ul>
    </div>
</template>
