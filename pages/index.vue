
<!-- <script setup>
const { data: count } = await useFetch('/api')
</script> -->
<template>
    <Head title="Youtube" />
    <h1 class="font-bold text-2xl">youtube</h1>


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
<script setup>
import { ref, toRefs } from 'vue'
const props = defineProps({
    inputValue: String
})

const { inputValue } = toRefs(props)
const text = ref('')
const data = ref(null)

async function search() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputValue}&key=AIzaSyBGk021g-q7Z4XR3AyxsEvuh5oxFZ5mVjU`)
    const json = await response.json()
    data.value = json
}

</script>