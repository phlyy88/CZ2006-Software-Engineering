<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
//import Button from './Button'

export default {
    name: 'Header',
    props: ['title']
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    border-width: thin;
    border-color: pink;
}

</style>

