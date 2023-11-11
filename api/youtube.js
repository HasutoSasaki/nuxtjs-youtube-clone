export default {
    async asyncData({ $axios }) {
        const response = await $axios.$get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=car&key=AIzaSyBGk021g-q7Z4XR3AyxsEvuh5oxFZ5mVjU`)
            .catch(error => {
                console.log("response error", error)
                return false
            })
        return { data: response.data }
    }
}