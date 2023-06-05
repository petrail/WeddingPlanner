<template>
  <NavBar inStore :transparency="false"/>
  <div class="container">
    <div class="content">
      <AccountInfo/>
    </div>
    <div class="photo">

    </div>
  </div>
  <Footer inStore/>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import AccountInfo from '../components/AccountInfo.vue'
import Footer from '../components/Footer.vue';
export default({
  name:"AccountView",
  components:{
    NavBar,AccountInfo, Footer
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
  margin-top: 20vh;
  margin-bottom: 5vh ;
  width:60%;
}
.photo{
  width:40%;
  background-image: url('../assets/nalog.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
@media (width<1000px){
.content{
  width:80%;
}
.photo{
  width:20%;
}
}
</style>