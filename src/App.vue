<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Nav from "./components/Nav.vue"

</script>

<template>
  <Nav></Nav>
  <div id="view">
    <RouterView></RouterView>
  </div>
</template>