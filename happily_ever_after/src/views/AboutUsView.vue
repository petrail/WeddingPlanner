<script setup>

</script>

<template>
  <TopBar hasLogin :barText="'O NAMA'"/>
  <div class = "content">
    <AboutUsInfo/>  
    <TeamInfo/>
  </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import AboutUsInfo from '../components/AboutUsInfo.vue';
import TeamInfo from '../components/TeamInfo.vue';
export default({
  name:"AboutUsView",
  components:{
    TopBar,AboutUsInfo,TeamInfo
  },
  mounted () {
    window.scrollTo(0, 0)
  }
})
</script>
<style scoped>
.content{
  margin-top: 85vh;
}
</style>