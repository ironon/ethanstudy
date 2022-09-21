<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/study">Study</router-link>
    </div>
</template>

<style scoped>
    #nav {
        border-right: 1px solid black;
        display: flex;
        height: 100%;
        flex-direction: column;
        padding: 2rem;
        margin-right: 2rem;
        background-color: lightblue;
    }
</style>