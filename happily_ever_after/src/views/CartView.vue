<template>
    <TopBar short inStore :barText="'KORPA'"/>
    <div class="liked">
      <h1>Sačuvano</h1>
      <SearchBar class="search"/>
      <CategoryList :predmeti="this.liked_redmeti" :liked="this.liked" :reserved="null"/>
    </div>
    <div class="reserved">
      <h1>Rezervisano</h1>
      <SearchBar class="search"/>
      <CategoryList :predmeti="this.reserved_redmeti" :liked="null" :reserved="this.reserved"/>
    </div>
    <Footer inStore/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import Footer from '../components/Footer.vue';
import SearchBar from '../components/Shop/SearchBar.vue';
import CategoryList from '../components/Shop/CategoryList.vue';

export default {
    name: 'ChatView',
    components: {
    TopBar,
    Footer,
    CategoryList,
    SearchBar,
  },
  data() {
    return {
        messages: [],
        users: [],
        currentActiveChat:{
          messages:[{message:'Hej', me:true},{message:'Hej',me:false},{message:'Hej',me:false},{message:'Hej',me:true}],
          otherUser:"Neko",
        },
        liked_redmeti: [
                { id: 1, url: "src/assets/main_gallery/img2.webp", naslov: "Drugi", opis: "Neki opis" },
                { id: 3, url: "src/assets/main_gallery/img4.jpg", naslov: "Cetvrti", opis: "Neki opis" },
                { id: 6, url: "src/assets/main_gallery/img7.jpg", naslov: "Sedmi", opis: "Neki opis" },
                { id: 9, url: "src/assets/main_gallery/img2.webp", naslov: "Drugi", opis: "Neki opis" },
                { id: 11, url: "src/assets/main_gallery/img4.jpg", naslov: "Cetvrti", opis: "Neki opis" },
                { id: 14, url: "src/assets/main_gallery/img7.jpg", naslov: "Sedmi", opis: "Neki opis" },
        ],
        reserved_redmeti: [
                { id: 2, url: "src/assets/main_gallery/img3.jpg", naslov: "Treci", opis: "Neki opis" },
                { id: 4, url: "src/assets/main_gallery/img5.jpg", naslov: "Peti", opis: "Neki opis" },
                { id: 6, url: "src/assets/main_gallery/img7.jpg", naslov: "Sedmi", opis: "Neki opis" },
        ],
        liked: [1, 3, 6, 9, 11, 14],
        reserved:[2, 4, 6],
    };
  },
  props:{
    inStore:{
      type:Boolean,
      default:true
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    openChat(contact){
      //Na osnovu contacta pribavi chat sa baze i stavi
      //currentActiveChat = getChat();
      console.log(contact);
    },
    send(msg){
      this.currentActiveChat.messages.push(msg);
    }
  }
};
</script>
<style scoped>
.search{
  margin-bottom:2vh;
}
.liked{
  margin-top:40vh;
  width:100vw;
  max-height: 80vh;
  padding:2vw;
}
.reserved{
  width:100vw;
  max-height: 80vh;
  padding:2vw;
}

.contacts{
  width:20%;
  min-height:80vh;
  max-height:80vh;
  margin-top:5vh;
  margin-right:0;
}
.messages{
  width:80%;
  max-height:80vh;
  min-height:80vh;
}
h1 {
  text-align: center;
  width:100vw;
}
</style>