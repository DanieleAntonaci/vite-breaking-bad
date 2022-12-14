<script>

export default {
    props: { character: Object }
}
</script>

<template>
    
        <img :src="character.image" :alt="character.name">
        <h4>{{ character.name }}</h4>
        <div>
            {{ character.gender }}
        </div>
        <div>
            {{ character.species }}
        </div>
        <div>
            {{ character.status }}
        </div>
    
</template>

<style lang="scss">
@use '../style/partials/variables' as *;
@use '../style/partials/mixin' as *;

.card {
    width: calc((100% / 5) - 20px);
    min-height: 200px;
    margin: 10px;
    padding-bottom: 20px;
    background-color: $primaryBackgroundColor;
    text-align: center;

    img {
        max-width: 80%;
        display: block;
        margin: 20px auto;
    }

    h4 {
        padding-bottom: 20px;
    }

    div {
        color: rgb(166, 166, 166);

    }
}
</style>