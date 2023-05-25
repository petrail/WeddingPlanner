<template>
  <div class="background">
    <LoginForm/>
  </div>
  <Footer/>
</template>

<script>
import {RouterLink, RouterView } from 'vue-router'
import Footer from '../components/Footer.vue';
import LoginForm from '../components/LoginForm.vue';
export default({
  name:"LoginView",
  components:{
    Footer, LoginForm,
  },
  mounted () {
    window.scrollTo(0, 0)
  }
})
</script>

<style scoped>
.background{
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background-image: url(../assets/wedding.jpeg);
  background-size:cover;
  background-repeat:no-repeat;
  transition:0.5s all ease;
}
@media (width<1200px){
  .background{
    background-position-x:60%;
  }
}
</style>