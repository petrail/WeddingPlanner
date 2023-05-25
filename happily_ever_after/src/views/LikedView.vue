<template>
  <TopBar short inStore :barText="'Otkrijte beskrajne mogućnosti za vaše venčanje'"/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
export default({
  name:"LikedView",
  components:{
    TopBar
  },
  mounted () {
    window.scrollTo(0, 0)
  }
})
</script>