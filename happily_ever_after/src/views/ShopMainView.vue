<template>
  <TopBar inStore :barText="'Otkrijte beskrajne mogućnosti za vaše venčanje'"/>
  <div class="content">
  <h2>Prodavnica</h2>
  </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
export default({
  name:"ShopMainView",
  components:{
    TopBar
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