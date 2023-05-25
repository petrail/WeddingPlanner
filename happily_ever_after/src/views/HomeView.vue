<template>
  <TopBar hasLogin isWelcome/>
  <div class = "content">
  <AboutUsInfo/>
  <Gallery/>
  <ServiceInfo/>
  <Contact/>
  </div>
  <Footer/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import ServiceInfo from '../components/ServiceInfo.vue';
import Gallery from '../components/Gallery.vue';
import AboutUsInfo from '../components/AboutUsInfo.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';
export default({
  name:"HomeView",
  components:{
    TopBar, AboutUsInfo, Gallery, ServiceInfo, Contact, Footer
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