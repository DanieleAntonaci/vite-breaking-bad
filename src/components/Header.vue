<script>
export default {
    props: ['title']
}
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixin' as *;

h1 {
    padding: 10px;
}
</style>
