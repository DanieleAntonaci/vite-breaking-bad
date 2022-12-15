<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,

        }
    },
}
</script>

<template>
    <div>
        <label for="status">Select status:</label>
        <select name="status" id="status" required v-model="store.selectStatus"  @change="$emit('onSearchStatus')">
            <option value="allCharacters">--</option>
            <option value="alive">Alive</option>
            <option value="unknown">Unknown</option>
            <option value="dead">Dead</option>
        </select>
    </div>
    
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