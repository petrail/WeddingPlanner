<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import ServiceInfo from '../components/ServiceInfo.vue';
import AboutUsInfo from '../components/AboutUsInfo.vue';
import Gallery from '../components/Gallery.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <TopBar hasLogin/>
  <div class = "content">
    <ServiceInfo/>
    <Gallery/>
  </div>
</template>

<style scoped>
.content{
  margin-top: 80vh;
}
</style>