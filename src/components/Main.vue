<script>
import Card from './Card.vue'
export default {
    components: {
        Card
    },
    props: {

    }
}
</script>

<template>
    <main class="container">
        <div id="numCharaters">
            Found 60 character
        </div>


        <div id="cards">
            <Card />
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