
<template>
  <div class="background">
    <RegisterForm/>
  </div>
</template>

<script>
import {RouterLink, RouterView } from 'vue-router'
import Footer from '../components/Footer.vue';
import RegisterForm from '../components/RegisterForm.vue';
export default({
  name:"RegisterView",
  components:{
    Footer, RegisterForm,
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
}
</style>