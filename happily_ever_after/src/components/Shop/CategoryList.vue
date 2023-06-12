<template>
    <div v-if="has_pagination" class="buttons">
        <button :class="!can_go_back?'disabled':''" :disabled="!can_go_back" @click="back">
            <img src="src/assets/prev.png"/>
        </button>
        <button :class="!can_go_next?'disabled':''" :disabled="!can_go_next" @click="next">
            <img src="src/assets/next.png"/>
        </button>
    </div>
    <div class="listContainer" v-if="itemOpen==null">
        <div class="photo" v-for="(pred,index) in predmeti" :key="index">
            <CategoryListItem @open="open" @like="addToLiked" @unlike="removeFromLiked" :pred="pred" :liked="isLiked(pred)" :reserved="isReserved(pred)"/>
        </div>
    </div>
    <div v-if="itemOpen!=null" class="dark">
        <div class="openCard">
            <CategoryListItem :can_review="can_review" 
                              @review="review" open
                              @reserve="reserve" 
                              @close="closeItem" 
                              @like="addToLiked" 
                              @unlike="removeFromLiked" 
                              :liked="isLiked(itemOpen)" 
                              :reserved="isReserved(itemOpen)" 
                              :pred="itemOpen"
                              :date_taken="date_taken"/>
        </div>
    </div>
</template>
  
  <script>
import { toHandlers } from 'vue';
import CategoryListItem from './CategoryListItem.vue';
import axios from 'axios';
import UserService from '../../Service.js'
  export default{
    name: "CategoryList",
    components:{
        CategoryListItem,
    },
    props: {
        predmeti: {
            type: Array,
        },
        liked: {
            type: Array,
            default:[]
        },
        reserved:{
            type: Array,
            default:[]
        },
        can_go_back:{
            type:Boolean,
            default:false,
        },
        can_go_next:{
            type:Boolean,
            default:true,
        },
        has_pagination:{
            type:Boolean,
            default:true,
        }
    },
    data(){
        return{
            itemOpen:null,
            can_review: true,
            date_taken:false,
        }
    },
    mounted() {
        //Ovde treba da se povuku items sa baze
        //Povuci sa baze sve predmete kao i sve sto je likeovano
        //Moja funkcija dole ce da izracuna dal treba da bude likeovano ili ne
        //Pametno bi bilo da se napravi funkcija na backendu da pribavi sve likovane usluge po kategoriji,
            // npr da ti nadje sve likeovane restorane itd
        //Najbolje da se na bazi likeovi pamte kao {KategorijaUsluge, IDUsluge}
    },
    methods: {
        selectItem(item) {
            //Kad kliknes otvori se prozor za item
            console.log("nesto");
        },
        isLiked(pred) {
            if(this.liked==null) return false;
            return this.liked.includes(pred._id);
        },
        back(){
          this.$emit('back');  
        },
        next(){
          this.$emit('next'); 
        },
        //Ove dve funkcije treba da se povezu sa bazom da bi se znalo sta si likeovao
        //Mozda nije najbolje da se pamti sta je likeovano po ID-u, s obzirom da su velike sanse da ce npr restoran i bend da imaju isti ID
        //Mozda bolje po imenu
        addToLiked(id){
            this.$emit('like',id);
        },
        removeFromLiked(id){
            this.$emit('unlike',id);
        },
        async open(pred){
            try{
                const token = localStorage.getItem('token')
                const users = await UserService.getUsers(token)
                let user='';
                if (users.length > 0) {
                    user = users[0].name
                }
                this.itemOpen = await axios.get('http://localhost:3000/service/get_service_by_id/'+pred._id);
                this.itemOpen = this.itemOpen.data;
                this.can_review=true;
                this.itemOpen.reviews.forEach(r=>{
                    if(r.user==user){
                        this.can_review=false;
                        return;
                    }
                });
            }
            catch(error){
                console.log(error);
            }
        },
        closeItem(){
            this.itemOpen=null;
        },
        isReserved(pred){
            if(this.reserved==null) return false;
            return this.reserved.includes(pred._id);
        },
        async reserve(id,date){
            try{
                const token = localStorage.getItem('token')
                const users = await UserService.getUsers(token)
                let user='';
                if (users.length > 0) {
                    user = users[0]._id;
                }
                let body={
                    _id: id,
                    reserved_date:date,
                }
                await axios.put('http://localhost:3000/service/add_reserve_date', body);
                this.$emit('reserve',id);
                this.date_taken=false;
            }
            catch(error){
                this.date_taken=true;
                console.log(error);
            }
        },
        async review(id,rev){
            try{
                const token = localStorage.getItem('token')
                const users = await UserService.getUsers(token)
                if (users.length > 0) {
                    rev.user = users[0].name
                }
                let body={
                    _id: id,
                    review:rev,
                }
                await axios.put('http://localhost:3000/service/add_service_review', body);
            }
            catch(error){
                console.log(error);
            }
        }
    },
    emits:['next','back','like','unlike','reserve'],
};
  </script>
  
<style scoped>
.disabled{
    opacity:0.2;
}
button{
    width:40px;
    height:40px;
    box-shadow: 15px 50px 21px rgba(0, 0, 0, 0.01), 9px 28px 18px rgba(0, 0, 0, 0.03), 4px 12px 13px rgba(0, 0, 0, 0.04), 1px 3px 7px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    padding:0;
    background: transparent;
    margin:1vw;
    margin-left:0;
}
img{
    width:40px;
    height:40px;
    margin:0;
}
.dark{
    background-color: #00000094;
    backdrop-filter: blur(5px);
    width:100vw;
    height:100vh;
    position: fixed;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:902;
}
.openCard{
    width:90vw;
    height:90vh;
    z-index:905;
    display: flex;
}
@media (width<1000px) {
    .openCard{
        flex-direction: column;
    }   
}
.srce{
    position: absolute;
    top:5%;
    right:5%;
    height: 2vw;
    transition: all 0.5s ease;
}
.naslov{
    color:var(--font-dark)
}
.detalji{
    color:var(--dark-purple);
}
  .opis{
      position: relative;
      display:flex;
      flex-direction: column;
      padding:1vw;
      justify-content: center;
      bottom:0;
      left:0;
      width:100%;
      height: 50%;
      color:white;
      background-color: var(--white-pink);
  }
  .slika{
    width:100%;
    height: 50%;
    background-size: cover;
    background-position: center center;
  }
  .photo{
      transition: all 0.5s ease;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      aspect-ratio: 1 / 1;
      height:10vh;
      box-shadow: 15px 50px 21px rgba(0, 0, 0, 0.01), 9px 28px 18px rgba(0, 0, 0, 0.03), 4px 12px 13px rgba(0, 0, 0, 0.04), 1px 3px 7px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);
  }
  .listContainer{
      width:100%;
      max-height: 75vh;
      display: flex;
      flex-wrap: wrap;
      padding-top: 0;
      overflow-y: auto;
  }
  .photo:hover{
      transform: scale(1.1);
  }
  @media (width>=1000px){
      .photo{
          width:23%;
          margin-right: 2%;
          height:40vh;
          margin-bottom: 5vh;
      }
  }
  @media (width<1000px){
      .photo{
          width:31.3%;
          margin-right: 2%;
          height:20vh;
          margin-bottom: 2vh;
      }
      .srce{
        height:5vw;
      }
  }
  @media (width<700px){
      .photo{
          width:48%;
          margin-right: 2%;
          height:32vh;
          margin-bottom: 2vh;
      }
  }
</style>