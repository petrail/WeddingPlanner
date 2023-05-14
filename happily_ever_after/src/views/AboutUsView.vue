<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import ServiceInfo from '../components/ServiceInfo.vue';
import AboutUsInfo from '../components/AboutUsInfo.vue';
import Gallery from '../components/Gallery.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <TopBar hasLogin :barText="'O NAMA'"/>
  <div class = "content">
    <AboutUsInfo/>  
    <Gallery/>
  </div>

</template>
<style scoped>
.content{
  margin-top: 85vh;
}
</style>