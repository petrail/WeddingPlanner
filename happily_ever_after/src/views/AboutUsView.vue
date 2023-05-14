<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import ServiceInfo from '../components/ServiceInfo.vue';
import AboutUsInfo from '../components/AboutUsInfo.vue';
import TeamInfo from '../components/TeamInfo.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <TopBar hasLogin :barText="'O NAMA'"/>
  <div class = "content">
    <AboutUsInfo/>  
    <TeamInfo/>
  </div>

</template>
<style scoped>
.content{
  margin-top: 85vh;
}
</style>