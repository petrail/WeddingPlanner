<template>
    <div class="listContainer">
        <div @click="selectItem(pred)" class="photo" v-for="(pred,index) in predmeti" :key="index">
            <div class="slika" :style="`background-image: url(${pred.url})`">
                <img class="srce" :src="pred.liked? 'src/assets/liked.png':'src/assets/not-liked.png'" @click="like(pred)"/>
            </div>
            <div class="opis">
                <h2 class="naslov">
                    {{ pred.naslov }}
                </h2>
                <p class="detalji">
                    {{ pred.opis }}
                </p>
            </div>
        </div>
    </div>
</template>
  
  <script>
  export default{
    name: "CategoryList",
    props:{
        predmeti:{
                type:Object,
                default:[
                    {id:0, url: 'src/assets/main_gallery/img1.jpg', naslov:'Prvi',opis:'Neki opis', liked:false},
                    {id:1, url: 'src/assets/main_gallery/img2.webp', naslov:'Drugi',opis:'Neki opis', liked:true},
                    {id:2, url: 'src/assets/main_gallery/img3.jpg', naslov:'Treci',opis:'Neki opis', liked:false},
                    {id:3, url: 'src/assets/main_gallery/img4.jpg', naslov:'Cetvrti',opis:'Neki opis', liked:true},
                    {id:4, url: 'src/assets/main_gallery/img5.jpg', naslov:'Peti',opis:'Neki opis', liked:false},
                    {id:5, url: 'src/assets/main_gallery/img6.jpg', naslov:'Sesti',opis:'Neki opis', liked:false},
                    {id:6, url: 'src/assets/main_gallery/img7.jpg', naslov:'Sedmi',opis:'Neki opis', liked:true},
                    {id:7, url: 'src/assets/main_gallery/img8.webp', naslov:'Osmi',opis:'Neki opis', liked:false},
                    {id:0, url: 'src/assets/main_gallery/img1.jpg', naslov:'Prvi',opis:'Neki opis', liked:false},
                    {id:1, url: 'src/assets/main_gallery/img2.webp', naslov:'Drugi',opis:'Neki opis', liked:true},
                    {id:2, url: 'src/assets/main_gallery/img3.jpg', naslov:'Treci',opis:'Neki opis', liked:false},
                    {id:3, url: 'src/assets/main_gallery/img4.jpg', naslov:'Cetvrti',opis:'Neki opis', liked:true},
                    {id:4, url: 'src/assets/main_gallery/img5.jpg', naslov:'Peti',opis:'Neki opis', liked:false},
                    {id:5, url: 'src/assets/main_gallery/img6.jpg', naslov:'Sesti',opis:'Neki opis', liked:false},
                    {id:6, url: 'src/assets/main_gallery/img7.jpg', naslov:'Sedmi',opis:'Neki opis', liked:true},
                    {id:7, url: 'src/assets/main_gallery/img8.webp', naslov:'Osmi',opis:'Neki opis', liked:false}]
            },
        liked:{
            
        }
    },
    mounted(){
        //za Juliju - ovde treba da se povuku items sa baze

    },
    methods:{
        selectItem(item){
            //Kad kliknes otvori se prozor za item
            console.log(item);
        },
        like(pred){
            console.log("LIKE!");
            pred.liked=!pred.liked;
        }
    }
      
  };
  </script>
  
<style scoped>
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