
<template>
  <TopBar hasLogin :barText="'O NAMA'"/>
  <div class = "content">
    <AboutUsInfo/>  
    <TeamInfo/>
  </div>
  <Footer/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import AboutUsInfo from '../components/AboutUsInfo.vue';
import TeamInfo from '../components/TeamInfo.vue';
import Footer from '../components/Footer.vue';
export default({
  name:"AboutUsView",
  components:{
    TopBar,AboutUsInfo,TeamInfo,Footer
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