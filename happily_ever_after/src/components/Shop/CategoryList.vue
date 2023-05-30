<template>
    <div class="listContainer" v-if="itemOpen==null">
        <div class="photo" v-for="(pred,index) in predmeti" :key="index">
            <CategoryListItem @open="open" @add="addToLiked" @remove="removeFromLiked" :pred="pred" :liked="isLiked(pred)" :reserved="isReserved(pred)"/>
        </div>
    </div>
    <div v-if="itemOpen!=null" class="dark">
        <div class="openCard">
            <CategoryListItem open @close="closeItem" @add="addToLiked" @remove="removeFromLiked" :liked="isLiked(itemOpen)" :reserved="isReserved(itemOpen)" :pred="itemOpen"/>
        </div>
    </div>
</template>
  
  <script>
import CategoryListItem from './CategoryListItem.vue';

  export default{
    name: "CategoryList",
    components:{
        CategoryListItem,
    },
    props: {
        predmeti: {
            type: Object,
            default: [
                { id: 0, url: "src/assets/main_gallery/img1.jpg", naslov: "Prvi", opis: "Neki opis" },
                { id: 1, url: "src/assets/main_gallery/img2.webp", naslov: "Drugi", opis: "Neki opis" },
                { id: 2, url: "src/assets/main_gallery/img3.jpg", naslov: "Treci", opis: "Neki opis" },
                { id: 3, url: "src/assets/main_gallery/img4.jpg", naslov: "Cetvrti", opis: "Neki opis" },
                { id: 4, url: "src/assets/main_gallery/img5.jpg", naslov: "Peti", opis: "Neki opis" },
                { id: 5, url: "src/assets/main_gallery/img6.jpg", naslov: "Sesti", opis: "Neki opis" },
                { id: 6, url: "src/assets/main_gallery/img7.jpg", naslov: "Sedmi", opis: "Neki opis" },
                { id: 7, url: "src/assets/main_gallery/img8.webp", naslov: "Osmi", opis: "Neki opis" },
                { id: 8, url: "src/assets/main_gallery/img1.jpg", naslov: "Prvi", opis: "Neki opis" },
                { id: 9, url: "src/assets/main_gallery/img2.webp", naslov: "Drugi", opis: "Neki opis" },
                { id: 10, url: "src/assets/main_gallery/img3.jpg", naslov: "Treci", opis: "Neki opis" },
                { id: 11, url: "src/assets/main_gallery/img4.jpg", naslov: "Cetvrti", opis: "Neki opis" },
                { id: 12, url: "src/assets/main_gallery/img5.jpg", naslov: "Peti", opis: "Neki opis" },
                { id: 13, url: "src/assets/main_gallery/img6.jpg", naslov: "Sesti", opis: "Neki opis" },
                { id: 14, url: "src/assets/main_gallery/img7.jpg", naslov: "Sedmi", opis: "Neki opis" },
                { id: 15, url: "src/assets/main_gallery/img8.webp", naslov: "Osmi", opis: "Neki opis" }
            ]
        },
        liked: {
            type: Object,
            default: [1, 3, 6, 9, 11, 14]
        },
        reserved:{
            type: Object,
            default: [2, 4, 6]
        }
    },
    data(){
        return{
            itemOpen:null,
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
            return this.liked.includes(pred.id);
        },
        //Ove dve funkcije treba da se povezu sa bazom da bi se znalo sta si likeovao
        //Mozda nije najbolje da se pamti sta je likeovano po ID-u, s obzirom da su velike sanse da ce npr restoran i bend da imaju isti ID
        //Mozda bolje po imenu
        addToLiked(id){
            this.liked.push(id);
        },
        removeFromLiked(id){
            const index = this.liked.indexOf(id);
            this.liked.splice(index, 1);
        },
        open(pred){
            this.itemOpen = pred;
        },
        closeItem(){
            this.itemOpen=null;
        },
        isReserved(pred){
            return this.reserved.includes(pred.id);
        }
    }
};
  </script>
  
<style scoped>
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
      height:10vh;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      aspect-ratio: 1 / 1;
      box-shadow: 15px 50px 21px rgba(0, 0, 0, 0.01), 9px 28px 18px rgba(0, 0, 0, 0.03), 4px 12px 13px rgba(0, 0, 0, 0.04), 1px 3px 7px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);
  }
  .listContainer{
      width:100%;
      max-height: 70vh;
      display: flex;
      flex-wrap: wrap;
      justify-content:space-between;
      padding:2vw;
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
          height:20vh;
          margin-bottom: 5vh;
      }
  }
  @media (width<1000px){
      .photo{
          width:31.3%;
          margin-right: 2%;
          height:15vh;
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
          height:20vh;
          margin-bottom: 2vh;
      }
  }
</style>