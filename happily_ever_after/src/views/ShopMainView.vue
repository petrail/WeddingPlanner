<template>
  <TopBar short inStore :barText="'Otkrijte beskrajne mogućnosti za vaše venčanje'"/>
  <div class="content">
    <div v-if="clicked" class="back">
        <button class="link" @click="backToCateg"> 
          <img class="backImg" src="../assets/back.png"/>
          Vrati se na sve ponude 
        </button>
    </div>
    <div class="heading">
      <h1 class="title">Naše usluge</h1>
      <img class="divide" src="../assets/Divider.png"/>
      <p> Naš stručni tim organizatora venčanja je tu da vam pruži svoje znanje i iskustvo kako biste imali bezbrižno iskustvo planiranja venčanja. Pomažemo vam da definišete vašu viziju venčanja i pretvorimo je u stvarnost. Bez obzira da li želite romantičnu ceremoniju na otvorenom, elegantnu svečanost u dvorcu ili tematsko venčanje koje odskače od svih drugih, mi ćemo vam pomoći da sve to ostvarite.</p>
      <p> Naš cilj je da vam omogućimo da se opustite i uživate u svakom trenutku vašeg venčanja, znajući da je sve prepušteno profesionalcima. Naša strast je da stvorimo venčanje koje odražava vašu ljubav i jedinstvenu priču. Vaše zadovoljstvo nam je najvažnije, i zato radimo naporno da premašimo vaša očekivanja i ostvarimo sve vaše želje.</p>
    </div>
    <h1 class="uputstvo" v-if="!clicked">Izaberite kategoriju</h1>
  <Gallery v-if="!clicked" hiddenBar clickable tall :imgs="imgs" @clicked="onClick"/>
  <div class="container" v-else>
    <h2>{{this.selected}}</h2>
    <div class="search">
      <div class="bar">
        <div class="text">
        <img class="backImg" src="../assets/search.png"/>
        <h3>Pretražite usluge</h3>
        </div>
        <SearchBar/>
      </div>
    </div>
    <div class="main">
      <div class="filter"><CategoryFilter/></div> 
      <div class="list"><CategoryList/></div>
    </div>
  </div>
  </div>
  <Footer inStore/>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import Gallery from '../components/Gallery.vue'
import SearchBar from '../components/Shop/SearchBar.vue'
import CategoryFilter from '../components/Shop/CategoryFilter.vue'
import CategoryList from '../components/Shop/CategoryList.vue'
import Footer from '../components/Footer.vue';
export default({
  name:"ShopMainView",
  components:{
    TopBar, Gallery, SearchBar, CategoryFilter,CategoryList, Footer
  },
  data(){
    return{
      imgs:[{url: 'src/assets/services/serv1.jpeg', opis:'Muzika',route:'/shopmain'},
              {url: 'src/assets/services/serv2.jpg', opis:'Restorani',route:'/shopmain'},
              {url: 'src/assets/services/serv3.jpg', opis:'Burme',route:'/shopmain'},
              {url: 'src/assets/services/serv8.jpg', opis:'Dekoracija',route:'/shopmain'},
              {url: 'src/assets/services/serv5.jpg', opis:'Za mladu',route:'/shopmain'},
              {url: 'src/assets/services/serv7.jpg', opis:'Za mladoženju',route:'/shopmain'},
              {url: 'src/assets/services/serv6.jpg', opis:'Matičari',route:'/shopmain'},
              {url: 'src/assets/services/serv4.jpg', opis:'Fotografisanje',route:'/shopmain'},
              {url: 'src/assets/services/serv9.jpg', opis:'Časovi plesa',route:'/shopmain'},
              {url: 'src/assets/services/serv10.jpeg', opis:'Kozmetički saloni',route:'/shopmain'},
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
      window.scrollTo(0, 0)
    },
    backToCateg(){
      this.clicked=false;
      window.scrollTo(0, 0)
    }
  }
})
</script>


<style scoped>
.uputstvo{
  margin-left:5vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
  font-weight: 600; 
}
.text{
  display: flex;
  align-items: center;
  margin-bottom: 1vh;
}
h3{
  color:var(--font-dark);
  font-size:max(1.25vw,13pt);
  font-weight: 600;
  margin:0;
}
.back{
  padding-left:1vw;
  margin-bottom: 1vh;
}
.backImg{
  color:var(--dark-purple);
  height: 30px;
  margin-right: 10px;
}
.heading{
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left:10vw;
  padding-right:10vw;
}
P{
  margin-top:5vh;
  font-size:max(1.25vw,13pt);
  text-align: center;
}
.title{
  font-family: 'HHoney';
  font-size:max(5vw,48pt);
  width:100%;
  font-weight: light;
  text-align: center;
}
.divide{
  width:15%;
  min-width:150px;
  opacity: 0.5;
}
.container{
  width:100vw;
  display:flex;
  flex-direction:column;
  align-items: center;
  padding:5vw;
  padding-top:1vw;

}
.search{
  width:100%;
  height:5vh;
  margin-top:2vh;
  margin-bottom:10vh;
}
.bar{
  width:50%;
  height:100%;
}
@media (width<700px) {
  .bar{
    width:100%;
  }
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
h2{
  text-align: center;
  text-transform: uppercase;
  font-size: max(2.5vw,28pt); 
  font-weight: bold;
  color:var(--font-dark);
  padding:3vw;
  padding-bottom:1vh;
  width:30%;
  border-bottom: 3px solid var(--light-red);
  margin-bottom: 5vh;
}
.link{
  font-size:min(5vw,17pt);
  color:var(--font-dark);
  border:0;
  background-color: transparent;
  transition: all 1s ease;
  padding:.5vw;
  display:flex;
  align-items: center;
  justify-content: center;
}
.link:hover{
    color:var(--font-dark); 
    border:0;
    background-color: var(--white-pink);
    border-radius:.7vw;
    padding:0.5vw;
}
@media (width<700px){
    h2{
        text-align: center;
        text-transform: uppercase;
        font-size:30px;
        width:50%;
        font-weight: bold;
      }
    }

</style>