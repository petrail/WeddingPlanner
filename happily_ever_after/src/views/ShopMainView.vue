<template>
  <TopBar short inStore :barText="'Otkrijte beskrajne mogućnosti za vaše venčanje'"/>
  <div class="content">

  <Gallery v-if="!clicked" hiddenBar clickable tall :imgs="imgs" @clicked="onClick"/>
  <div class="container" v-else>
    <h2>{{this.selected}}</h2>
    <div class="search"><SearchBar/></div>
    <div class="main">
      <div class="filter"><CategoryFilter/></div>
      <div class="list"><CategoryList/></div>
    </div>
  </div>
  </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import Gallery from '../components/Gallery.vue'
import SearchBar from '../components/Shop/SearchBar.vue'
import CategoryFilter from '../components/Shop/CategoryFilter.vue'
import CategoryList from '../components/Shop/CategoryList.vue'
export default({
  name:"ShopMainView",
  components:{
    TopBar, Gallery, SearchBar, CategoryFilter,CategoryList
  },
  data(){
    return{
      imgs:[{url: 'src/assets/services/serv1.jpeg', opis:'Muzika',route:'/shopmain'},
              {url: 'src/assets/services/serv2.jpg', opis:'Restorani',route:'/shopmain'},
              {url: 'src/assets/services/serv3.jpg', opis:'Burme',route:'/shopmain'},
              {url: 'src/assets/services/serv4.jpg', opis:'Fotografisanje',route:'/shopmain'},
              {url: 'src/assets/services/serv5.jpg', opis:'Za mladu',route:'/shopmain'},
              {url: 'src/assets/services/serv7.jpg', opis:'Za mladoženju',route:'/shopmain'},
              {url: 'src/assets/services/serv6.jpg', opis:'Matičari',route:'/shopmain'},
              {url: 'src/assets/services/serv8.jpg', opis:'Dekoracija',route:'/shopmain'},
              {url: 'src/assets/services/serv9.jpg', opis:'Časovi plesa',route:'/shopmain'},
              {url: 'src/assets/services/serv10.jpeg', opis:'Kozmetički salon',route:'/shopmain'},
              {url: 'src/assets/services/serv11.jpg', opis:'Torte',route:'/shopmain'},
              {url: 'src/assets/services/serv12.jpg', opis:'Ostalo',route:'/shopmain'}],
      clicked:false,
      selected:''
    } 
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods:{
    onClick(img){
      this.clicked=true;
      this.selected=img.opis;
    }
  }
})
</script>


<style scoped>
.container{
  width:100vw;
  display:flex;
  flex-direction:column;
  padding:5vw;
}
.search{
  width:75%;
  height:5vh;
  margin-bottom:2vh;
}
.main{
  width:100%;
  display:flex;
  height:70vh;
}
.list{
  width:65%;
}
.filter{
  width:30%;
  margin-right:5%;
}
.content{
  margin-top: 45vh;
}
</style>