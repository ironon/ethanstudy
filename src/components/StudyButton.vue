<script setup>
    const props = defineProps(['image', 'text'])
    const emit = defineEmits(['study'])
    const clickButton = () => {
        emit("study", props.text)
        
    }
</script>

<template>
    <div class="studybutton">
        <router-link to="/study">{{props.text}}</router-link>
        <img @click="clickButton" :src="props.image"/>
    </div>
</template>

<style>
    .studybutton {
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        margin: 1rem;
        padding: 0;
        width: min-content;
        height: min-content;

    }
    .studybutton img {
        width: 30ch;
    }
</style>