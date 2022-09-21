import {ref} from 'vue'
//@ts-ignore
import data from "./assets/periodic.json"
export const mode = ref('symbol')
export const storage = window.localStorage

const elements = data['elements']
//@ts-ignore
export const doneNumbers = ref(storage.getItem('doneNumbers') == null ? elements : (JSON.parse(storage.getItem('doneNumbers'))))

export const filteredDoneNumbers = {
    setRange(range: number[]) {
        //@ts-ignore
        this.range = range
    },
    range: []
}
// window.addEventListener("beforeunload", () => {
//     storage.setItem('doneNumbers', JSON.stringify(doneNumbers.value))
// })