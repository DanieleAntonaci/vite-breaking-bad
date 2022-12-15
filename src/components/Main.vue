<script>
import Card from './Card.vue';
import BtnSearch from './btnSearch.vue';
import { store } from '../store.js';
// importo axios
import axios from 'axios';

export default {
    components: {
        Card,
        BtnSearch
    },

    data() {
        return {
            store,

        }
    },
    methods: {
        getCharacters() {
            let myUrl = store.apiUrl;
            // if (store.selectStatus != 'allCharacters') {
            myUrl += `?${store.apiNameParameter}=${store.selectStatus}`
            // }
            axios.get(myUrl)
                .then(res => {
                    store.characterList = res.data.results;
                    store.numCharacter = res.data.info.count;
                })
                .catch(
                    err => {
                        console.log('Errore', err);
                    }
                )
        }
    },
    mounted() {
        this.getCharacters();
    }
}
</script>

<template>
    <main class="container">

        <BtnSearch @searchStatus="getCharacters"/>

        <div id="numCharaters">
            Found {{ store.characterList.length }} character
        </div>


        <div id="cards">
            <div class="card" v-for="infoCharacter in store.characterList"
                :key="infoCharacter.id">

                <Card 
                :character="infoCharacter"
               />
            </div>
        </div>
    </main>
        
    
</template>

<style lang="scss">
@use '../style/partials/variables' as *;
@use '../style/partials/mixin' as *;


#numCharaters {
    background: #000;
    color: $primaryColor;
    padding: 10px;

}

#cards {
    display: flex;
    flex-wrap: wrap;

}
</style>