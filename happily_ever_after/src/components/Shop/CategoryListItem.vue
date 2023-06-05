<template>
    <div :class="this.open?'slika openImg':'slika'" :style="`background-image: url(http://localhost:3000${pred.img})`">
        <img class="srce" :src="likeImg" @click="like()"/>
        <img class="reserved" v-if="reserved" src="src/assets/reserved.png" @click="like()"/>
        <img v-if="open" class="close" src="src/assets/close.png" @click="close()"/>
    </div>
    <div :class="open?'opis openText':'opis'" @click="otvori()">
        <div :class="open?'levo':''">
            <h2 :class="open?'naslov veliki':'naslov'">
                {{ pred.name }}
            </h2>   
            <p class="detalji">
                {{ pred.store }}
            </p>
            <p v-if="open" class="desc">
                {{ pred.description }}
            </p>
            <!--dodatni podaci-->
        </div>
        <div v-if="open" class="desno">
            <div class="list_review">
                <div class="review" v-for="(review,index) in pred.reviews" :key="index">
                    <h2>{{ review.user }}</h2>
                    <h4>{{ review.date }}</h4>
                    <p>{{ review.comment }}</p>
                    <h2>{{ review.grade }}</h2>
                </div>
            </div>
            <div class="add_review">
                <div class="starPos">
                    <Stars></Stars>
                </div>
                <textarea class="review_area"></textarea>
                <button class="send_review" @click="add_review">
                    <img src="src/assets/send.png"/>
                </button>
            </div>
        </div>
</div>
</template>
  
  <script>
  import Stars from './Stars.vue';
  export default{
    name: "CategoryList",
    components:{
        Stars
    },
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
            review:null,
        }
    },
    mounted(){
        if(this.open){
            console.log(this.pred);
        }
        this.localLiked=this.liked;
        this.locPred = this.pred;
    },
    methods:{
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
        },
        add_review(){
            this.$emit('review',this.pred.id,this.review);
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
    emits:['add','remove','open','close','review'],
      
  };
  </script>
  
<style scoped>
.starPos{
    position: absolute;
    top:-24px !important;
    right:-24px !important;
    z-index: 999;
    top:0;
    right:0;
}
h2,h4,p{
    color:var(--font-dark);
}
.list_review{
    height:75%;
    margin-bottom:5%;
    overflow-y:auto;
}
.add_review{
    height: 20%;
    background-color: var(--white-pink);
    border:1px solid var(--light-pink);
    width:100%;
}
.review_area{
    background-color: var(--white-pink);
    border:0;
    width:100%;
    height: 100%;
    padding:20px !important;
}
.send_review{
    position: absolute;
    bottom:-24px;
    right:-24px;
    border-radius:100%;
    background: transparent;
    display:flex;
    justify-content: center;
    box-shadow: 15px 50px 21px rgba(0, 0, 0, 0.01), 9px 28px 18px rgba(0, 0, 0, 0.03), 4px 12px 13px rgba(0, 0, 0, 0.04), 1px 3px 7px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);
}
.veliki{
    font-size:max(2vw,16pt) !important;
}
.desc{
    margin-top:2vh;
    color:var(--font-dark);
}
.openImg, .openText{
    height: 100% !important;
}
.openImg{
    width:30%  !important;
    animation: pan 60s ease infinite;
}
.openText{
    width:70% !important;
    justify-content: flex-start !important;
    padding:4vw !important;
    flex-direction: row !important;
    overflow-y:auto;
}
.review{
    width:100%;
    min-height:50px;
    background-color:var(--white-pink);
    border:1px solid var(--light-pink);
    border-radius:.5vw;
    padding:2vw;
    margin-bottom:3vh;
    box-shadow: 15px 50px 21px rgba(0, 0, 0, 0.01), 9px 28px 18px rgba(0, 0, 0, 0.03), 4px 12px 13px rgba(0, 0, 0, 0.04), 1px 3px 7px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);
}
.levo{
    width:50%;
}
.desno{
    width:48%;
    margin-left: 2%;
    height:100%;
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
        flex-direction: column !important;
    }
    .levo{
        width:100% !important;
    }
    .desno{
        width:100% !important;
        margin-left: 0 !important;
        margin-top:3vh;
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
    font-size:max(1vw,12pt);
    font-weight:bold;
    color:var(--font-dark)
}
.detalji{
    text-overflow:ellipsis;
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
    height: 100%;
    color:white;
    background-color: var(--white-pink);
  }
  .slika{
    width:100%;
    height: 100%;
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