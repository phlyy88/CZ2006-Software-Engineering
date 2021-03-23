<template>
    <div class = "container">
        <h1>ChildcareListing</h1>
        <hr>
        <input
        type = "email"
        name = "email"
        v-model = email 
        placeholder= "email"/>
        <br>
        <input
        type = "password"
        name = "password"
        v-model = password
        placeholder= "password"/>
        <br>
        <!-- on click call register method -->
        <button @click="register">Register</button>
    </div>
</template>
