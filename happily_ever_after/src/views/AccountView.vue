<template>
  <NavBar inStore :transparency="false"/>
  <div class="container">
    <div class="content">
      <AccountInfo/>
    </div>
    <div class="photo">

    </div>
  </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import AccountInfo from '../components/AccountInfo.vue'
export default({
  name:"AccountView",
  components:{
    NavBar,AccountInfo
  },
  mounted () {
    window.scrollTo(0, 0)
  }
})
</script>


<style scoped>
.container{
  display: flex;
}
.content{
  margin-top: 10vh;
  width:50%;
}
.photo{
  width:50%;
  background-image: url('../assets/wedding.jpeg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>