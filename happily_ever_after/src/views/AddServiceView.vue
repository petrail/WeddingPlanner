<template>
  <div class="background">
    <AddService />
  </div>
  <Footer />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Footer from '../components/Footer.vue'
import AddService from '../components/AddService.vue'
export default {
  name: 'AddServiceView',
  components: {
    Footer,
    AddService
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
.background {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/wedding.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.5s all ease;
}
@media (width<1200px) {
  .background {
    background-position-x: 60%;
  }
}
</style>
