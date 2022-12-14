import { reactive } from 'vue'


export const store = reactive({
    characterList: [],
    numCharacter: [],
    apiUrl: 'https://rickandmortyapi.com/api/character',
})