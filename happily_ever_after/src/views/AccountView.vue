<template>
  <NavBar inStore/>
  <div class="content">
  <h2>Nalog</h2>
  </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../components/NavBar.vue'
export default({
  name:"AccountView",
  components:{
    NavBar
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