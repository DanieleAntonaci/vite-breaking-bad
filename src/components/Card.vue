<script>

export default {
    promps: [" character"]
}
</script>

<template>
    
        <img :src="character.image" alt="rick">
        <h4>title</h4>
        <div>
            description
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

    div {
        color: rgb(166, 166, 166);
        padding: 20px 0;
    }
}
</style>