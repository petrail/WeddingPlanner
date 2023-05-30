<template>
    <div :class="open?'slika openImg':'slika'" :style="`background-image: url(${pred.url})`">
        <img class="srce" :src="likeImg" @click="like()"/>
        <img class="reserved" v-if="reserved" src="src/assets/reserved.png" @click="like()"/>
        <img v-if="open" class="close" src="src/assets/close.png" @click="close()"/>
    </div>
    <div :class="open?'opis openText':'opis'" @click="otvori()">
        <h2 class="naslov">
            {{ pred.naslov }}
        </h2>
        <p class="detalji">
            {{ pred.opis }}
        </p>
    </div>
    <div v-if="open" class="ostatak">
        
    </div>
</template>
  
  <script>
  export default{
    name: "CategoryList",
    props:{
        pred:{
            type:Object,
            default:''
        },
        liked:{
            type:Boolean,
            default:false
        },
        reserved:{
            type:Boolean,
            default:false
        },
        open:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            localLiked:false,
        }
    },
    mounted(){
        this.localLiked=this.liked;
    },
    methods:{
        selectItem(item){
            //Kad kliknes otvori se prozor za item
            console.log(item);
        },
        like(){
            this.localLiked=!this.localLiked;
            if(this.localLiked)
                this.$emit('add',this.pred.id);
            else
                this.$emit('remove',this.pred.id);
        },
        otvori(){
            this.$emit('open',this.pred);
        },
        close(){
            this.$emit('close');
        }
    },
    computed:{
        likeImg:function(){
            if (this.localLiked)
                return 'src/assets/liked.png';
            else 
                return 'src/assets/not-liked.png'
        }
    },
    emits:['add','remove','open','close'],
      
  };
  </script>
  
<style scoped>
.openImg, .openText{
    height: 100% !important;
}
.openImg{
    width:30%  !important;
    animation: pan 60s ease infinite;
}
.openText{
    width:70% !important;
}
@media (width<1000px) {
    .openImg{
        width:100%  !important;
        height:30% !important;
        animation: pan-y 60s ease infinite !important;
    }
    .openText{
        width:100% !important;
        height:70% !important;
    }
}
.ostatak{
    background-color: red;
}
.srce{
    position: absolute;
    top:5%;
    right:5%;
    height: 2vw;
    transition: all 0.5s ease;
}
.reserved{
    position: absolute;
    bottom:5%;
    left:5%;
    height: 2vw;
    transition: all 0.5s ease;
}
.close{
    position: absolute;
    top:5%;
    left:5%;
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

  @media (width<1000px){
      .srce, .close, .reserved{
        height:6vw;
      }
      .reserved{
        height:4.5vw;
      }
    }
@keyframes pan{
    0%{
        background-position-x:0%
    }
    50%{
        background-position-x:100%
    }
    100%{
        background-position-x:0%
    }
}
@keyframes pan-y{
    0%{
        background-position-y:0%
    }
    50%{
        background-position-y:100%
    }
    100%{
        background-position-y:0%
    }
}
</style>