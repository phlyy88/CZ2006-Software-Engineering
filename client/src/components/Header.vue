<template>
    <header>
        <h1 id="h1" >{{ title }}</h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: ['title']
}
</script>

<style>
#h1{
    margin: 10px;
    background-color: rgb(122, 153, 163);
    border-radius: 8px;
    border: 4px solid darkblue;
    width: 30%;
    margin-left: 35%;
    font-size: 2vw;
    color: rgb(0, 0, 100);
}

</style>

