

<template>
  <TopBar hasLogin :barText="'USLUGE'"/>
  <div class = "content">
  <ServiceInfo/>
  <Gallery clickable :imgs="this.imgs"/>
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
.content{
  margin-top: 85vh;
}
</style>