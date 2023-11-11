<template>
    <div>
        <Header @update:inputValue="handleInputValue" />
        <div class="flex">
            <Nav />
            <div class="w-[calc(100%-240px)] h-[calc(100vh-60px)] absolute right-0 top-[60px]">
                <slot :inputValue="inputValue" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
let inputValue = ref('')
const handleInputValue = (newValue) => {
    inputValue.value = newValue
}
</script>