<script setup>
import {RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import ServiceInfo from '../components/ServiceInfo.vue';
import Gallery from '../components/Gallery.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <Gallery/>

</template>

<style scoped>
.content{
  margin-top: 80vh;
}
</style>