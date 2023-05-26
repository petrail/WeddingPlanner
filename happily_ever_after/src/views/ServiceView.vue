

<template>
  <TopBar hasLogin :barText="'USLUGE'"/>
  <div class = "content">
  <ServiceInfo class="margin"/>
  <Gallery clickable :imgs="this.imgs"/>
  </div>
  <Footer/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import ServiceInfo from '../components/ServiceInfo.vue';
import Gallery from '../components/Gallery.vue';
import Footer from '../components/Footer.vue';
export default({
  name:"ServiceView",
  components:{
    TopBar,ServiceInfo,Gallery, Footer
  },
  data(){
    return{
      imgs:[{url: 'src/assets/services/serv1.jpeg', opis:'Muzika',route:'/shopmain'},
              {url: 'src/assets/services/serv2.jpg', opis:'Restorani',route:''},
              {url: 'src/assets/services/serv3.jpg', opis:'Burme',route:''},
              {url: 'src/assets/services/serv4.jpg', opis:'Fotografisanje',route:''},
              {url: 'src/assets/services/serv5.jpg', opis:'Za mladu',route:''},
              {url: 'src/assets/services/serv7.jpg', opis:'Za mladoženju',route:''},
              {url: 'src/assets/services/serv6.jpg', opis:'Matičari',route:''},
              {url: 'src/assets/services/serv8.jpg', opis:'Dekoracija',route:''}],
        
      }
  },
  mounted(){
    window.scrollTo(0,0);
  }
})
</script>


<style scoped>
.margin{
  margin-bottom: 10vh;
}
.content{
  margin-top: 85vh;
}
</style>