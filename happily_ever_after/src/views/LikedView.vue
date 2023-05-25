<template>
  <TopBar short inStore :barText="'Otkrijte beskrajne mogućnosti za vaše venčanje'"/>
  <Footer inStore/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import Footer from '../components/Footer.vue';
export default({
  name:"LikedView",
  components:{
    TopBar, Footer
  },
  mounted () {
    window.scrollTo(0, 0)
  }
})
</script>