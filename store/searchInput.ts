import { defineStore } from 'pinia';

export const useSearchInputStore = defineStore(
    'searchInput',
    () => {
        const inputValue = ref('')

        function setValue(newValue: string) {
            inputValue.value = newValue
        }
        return { inputValue, setValue };
    }
)

// export const useSearchInputStore = defineStore({
//     id: 'searchInput',
//     state: () => ({
//         value: '',
//     }),
//     actions: {
//         setValue(newValue: string) {
//             this.value = newValue
//         }
//     }
// })