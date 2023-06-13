<template>
  <TopBar short inStore :barText="'Otkrijte beskrajne mogućnosti za vaše venčanje'"/>
  <img v-if="!loaded" class="rings" src="src/assets/navbar/wedding.png" />
  <div class="content">
    <div class="container">
      <h2>Rezervisane usluge</h2>
      <img class="divide" src="../assets/Divider.png"/>
      <div class="main">
        <div class="list"> 
          <CategoryList 
              :has_pagination="false"
              @like="addToLiked"
              @unlike="removeFromLiked"
              @reserve="addToReserved"
              :can_go_back="this.can_go_back" 
              :can_go_next="this.can_go_next" 
              :predmeti="this.predmeti" 
              :liked="this.liked" 
              :reserved="this.reserved"/>
        </div>
      </div>
    </div>
  </div>
  <Footer inStore/>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';
import TopBar from '../components/TopBar.vue'
import Gallery from '../components/Gallery.vue'
import SearchBar from '../components/Shop/SearchBar.vue'
import CategoryFilter from '../components/Shop/CategoryFilter.vue'
import CategoryList from '../components/Shop/CategoryList.vue'
import Footer from '../components/Footer.vue';
import UserService from '../Service.js'

export default({
  name:"ReservedView",
  components:{
    TopBar, Gallery, SearchBar, CategoryFilter, CategoryList, Footer
  },
  data(){
    return{
      predmeti: [],
      liked:[],
      reserved:[],
      clicked:false,
      selected:'',
      type:'',
      curr_page:0,
      per_page:12,
      can_go_back:false,
      can_go_next:true,
      user_id:'',
      loaded:false,
    } 
  },
  async mounted () {
    window.scrollTo(0, 0);
    const token = localStorage.getItem('token')
    const users = await UserService.getUsers(token)
    if (users.length > 0) {
        this.liked = users[0].liked;
        this.reserved = users[0].reserved;
    }
    this.fetchItems();
  },
  methods:{
    async addToLiked(id){
      const token = localStorage.getItem('token')
      const users = await UserService.getUsers(token)
      let user='';
      if (users.length > 0) {
          user = users[0]._id;
      }
      if(this.liked.includes(id)) return;
      this.liked.push(id);
      try {
        await axios.put('http://localhost:3000/user/add_liked', {
          user_id:user,
          service_id:id,
        });
      } catch (error) {
        console.log('Error:', error.response.data);
      }
    },
    async addToReserved(id){
      const token = localStorage.getItem('token')
      const users = await UserService.getUsers(token)
      
      let user='';
      if (users.length > 0) {
          user = users[0]._id;
      }
      if(this.reserved.includes(id)) return;
      this.reserved.push(id);
      try {
        await axios.put('http://localhost:3000/user/add_reserved', {
          user_id: user,
          service_id:id,
        });
      } catch (error) {
        console.log('Error:', error.response.data);
      }
    },
    async removeFromLiked(id){
      const token = localStorage.getItem('token')
      const users = await UserService.getUsers(token)
      let user='';
      if (users.length > 0) {
          user = users[0]._id;
      }
      if(!this.liked.includes(id)) return;
      const index = this.liked.indexOf(id);
      this.liked.splice(index, 1);
      try {
        const resp = await axios.put('http://localhost:3000/user/remove_liked', {
          user_id:user,
          service_id:id,
        });
        this.fetchItems();
      } catch (error) {
        console.log('Error:', error.response.data);
      }
    },
    async fetchItems(){
      try{
        this.loaded=false;
        await axios.post('http://localhost:3000/service/get_services_by_ids', 
        { ids:this.reserved }).then(v=>{
          this.predmeti= v.data;
          this.loaded=true;
        });
      }
      catch(error){
        console.log(error.response.data);
      }
    },
  }
})
</script>


<style scoped>
.rings{
  animation:rotate 2s linear infinite;
  position:absolute;
  top:50%;
  left:48%;
  width:50px;
  height:50px;
  z-index:999;
}
@keyframes rotate{
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.uputstvo{
  margin-top: 5vh;
  margin-bottom: 5vh;
  text-align:center;
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
  margin-bottom: 5vh;
}
.container{
  width:100vw;
  display:flex;
  flex-direction:column;
  align-items: center;
  padding:5vw;
  padding-top:0;

}
.search{
  width:100%;
  height:5vh;
  margin-top:2vh;
  margin-bottom:7vh;
}

.bar{
  width:50%;
  height:100%;
}
@media (width<1000px) {
  .search{
    margin-bottom: 3vh !important;
  }
}
@media (width<700px) {
  .search{
    margin-bottom: 5vh !important;
  }
  .bar{
    width:100%;
  }
}
.main{
  width:100%;
  display:flex;
  flex-direction: column;
  min-height: 70vh;
}
.list{
  width:100%;
}
.filter{
  width:100%;
  margin-right:5%;
}
.content{
  margin-top: 45vh;
}
h2{
  text-align: center;
  font-size: max(5vw,36pt); 
  font-weight: bold;
  color:var(--font-dark);
  padding:3vw;
  padding-bottom:0;
  padding-top:0;
  width:50%;
  font-family:"HHoney"
}
.link{
  width:100%;
  font-size:min(5vw,17pt);
  color:var(--font-dark);
  border:0;
  background-color: transparent;
  transition: all 1s ease;
  padding:.5vw;
  display:flex;
  align-items: center;
  justify-content: flex-start;
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
        width:50%;
        font-weight: bold;
      }
    }

</style>