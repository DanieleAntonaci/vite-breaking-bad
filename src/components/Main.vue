<script>
import Card from './Card.vue';
import { store } from '../store.js';
// importo axios
import axios from 'axios';

export default {
    components: {
        Card
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getCharacyers() {
            axios.get(store.apiUrl)
                .then(res => {
                    store.characterList = res.data.results;
                    store.numCharacter = res.data.info;
                })
                .catch(
                    err => {
                        console.log('Errore', err);
                    }
                )
        }
    },
    mounted() {
        this.getCharacyers();
    }
}
</script>

<template>
    <main class="container">
        <div id="numCharaters">
            Found {{ store.numCharacter.count }} character
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