<script>
import { store } from '../store.js';
export default {
    props: {
        selectStatus: String
    },
    data() {
        return {
            store,

        }
    },
}
</script>

<template>
    
    <label for="status">Select status:</label>
        <select name="status" id="status" required v-model="store.selectStatus" >
            <option value="allCharacters" @click="$emit('searchStatus')">--</option>
            <option value="alive" @click="$emit('searchStatus')">Alive</option>
            <option value="unknown" @click="$emit('searchStatus')">Unknown</option>
            <option value="dead" @click="$emit('searchStatus')">Dead</option>
        </select>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixin' as *;

#status {
    display: block;
    width: 100px;
    padding: 5px;
    margin: 20px 0;
    background-color: $primaryBackgroundColor;
    color: $primaryColor;
}
</style>