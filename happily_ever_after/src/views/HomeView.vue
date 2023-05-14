<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import ServiceInfo from '../components/ServiceInfo.vue';
import Gallery from '../components/Gallery.vue';
import Footer from '../components/Footer.vue';
import AboutUsInfo from '../components/AboutUsInfo.vue';
import Contact from '../components/Contact.vue';
</script>

<template>
  <TopBar hasLogin isWelcome/>
  <div class = "content">
  <AboutUsInfo/>
  <Gallery/>
  <ServiceInfo/>
  <Contact/>
  </div>

</template>
<style scoped>
.content{
  margin-top: 85vh;
}
</style>