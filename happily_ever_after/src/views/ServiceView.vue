

<template>
  <TopBar hasLogin :barText="'USLUGE'"/>
  <div class = "content">
  <ServiceInfo/>
  <Gallery :imgs="this.imgs"/>
  </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import ServiceInfo from '../components/ServiceInfo.vue';
import Gallery from '../components/Gallery.vue';
export default({
  name:"ServiceView",
  components:{
    TopBar,ServiceInfo,Gallery
  },
  data(){
    return{
      imgs:[{url: 'src/assets/services/serv1.jpg', opis:'Muzika'},
              {url: 'src/assets/services/serv2.jpg', opis:'Restoran'},
              {url: 'src/assets/services/serv3.jpg', opis:'Burme'},
              {url: 'src/assets/services/serv4.jpg', opis:'Fotografisanje'},
              {url: 'src/assets/services/serv5.jpg', opis:'Haljine'},
              {url: 'src/assets/services/serv6.webp', opis:'Matičari'},
              {url: 'src/assets/services/serv7.jpg', opis:'Odela'},
              {url: 'src/assets/services/serv8.jpg', opis:'Bidermajer'}],
        
      }
  },
  mounted(){
    window.scrollTo(0,0);
  }
})
</script>


<style scoped>
.content{
  margin-top: 85vh;
}
</style>