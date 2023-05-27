<template>
  <TopBar short inStore :barText="'KORPA'"/>
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
  props:{
    inStore:{
      type:Boolean,
      default:true
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
})
</script>