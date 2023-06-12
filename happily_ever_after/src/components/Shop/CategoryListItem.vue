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
            <p v-if="!open && pred.servicePrice">{{ pred.servicePrice.price }} {{ pred.servicePrice.unit }}</p>
            <p v-if="open && pred.subservice" class="detalji">
                {{ pred.subservice }}
            </p>
            <p v-if="open && pred.store" class="detalji">
                {{ pred.store }}
            </p>
            <p v-if="open" class="desc">
                {{ pred.description }}
            </p>

             <p v-if="open && pred.servicePrice" class="naslov">
                {{ pred.servicePrice.price }} dinara {{ pred.servicePrice.unit }}
            </p>             
            <p v-if="open" class="detalji">
                <b>Lokacija: </b> {{ pred.location }}
            </p>
            <p v-if="open" class="detalji">
                <b>Broj telefona: </b> {{ pred.phoneNumber }}
            </p>
            <p v-if="open && pred.color" class="detalji">
                <b>Boja: </b> {{ pred.color }}
            </p>
            <p v-if="open && pred.size" class="detalji">
                <b>Veličina: </b> {{ pred.size }}
            </p>
            <p v-if="open && pred.max_guest_number" class="detalji">
                <b>Maksimalan broj gostiju: </b> {{ pred.max_guest_number }}
            </p>
            <a v-if="open && pred.link" :href="pred.link">{{ pred.link }}</a>

        <div class="extra" v-if="open">
            <h2 class="naslov">Rezervišite</h2>
            <label for="godina">Godina </label>
            <select name="godina" v-model="godina">
                <option v-for="i in 10" :key="i">
                    {{ i+2022 }}
                </option>
            </select>
            <label for="mesec">Mesec </label>
            <select @change="this.select_month()" name="mesec" v-model="mesec">
                <option v-for="i in 12" :key="i">
                    {{ i<10? "0"+i:i }}
                </option>
            </select>
            <label v-if="mesec!=0" for="dan">Dan </label>
            <select v-if="mesec!=0" name="dan" v-model="dan">
                <option v-for="i in this.br_dana" :key="i">
                    {{ i<10? "0"+i:i }}
                </option>
            </select>
            <p v-if="tried_reserve && date_taken">Datum zauzet!</p>
            <p v-if="tried_reserve && !date_taken">Rezervisano!</p>
            <button class="reserve_btn" @click="reserve">Rezervišite</button>
        </div> 

            <div v-if="open && pred.menus" class="menuList">
                <div v-for="(menu,index) in pred.menus" :key="index" class="menu">
                    <h2 class="naslov">{{ menu.name }}</h2>
                    <p class="naslov">{{ menu.price }}</p>
                    <p class="detalji" v-for="(item,index) in menu.items" :key="index">
                        {{ item.item_name }}
                    </p>
                </div>
            </div>
            <!--dodatni podaci-->
        </div>
        <div v-if="open" class="desno">
            <div class="list_review">
                <div class="review" v-if="added_review">
                    <h2>{{ this.review.user }}</h2>
                    <h4>{{ this.review.date }}</h4>
                    <p>{{ this.review.comment }}</p>
                    <h2>{{ this.review.grade }}</h2>
                </div>
                <div class="review" v-for="(review,index) in pred.reviews" :key="index">
                    <h2>{{ review.user }}</h2>
                    <h4>{{ review.date }}</h4>
                    <p>{{ review.comment }}</p>
                    <h2>{{ review.grade }}</h2>
                </div>
            </div>
            <div class="add_review" v-if="can_review && !added_review">
                <div class="starPos">
                    <Stars @grade="grade"></Stars>
                </div>
                <textarea v-model="review.comment" class="review_area"></textarea>
                <button class="send_review" @click="add_review">
                    <img src="src/assets/send.png"/>
                </button>
            </div>
        </div>

</div>
</template>
  
  <script>
  import Stars from './Stars.vue';
  import axios from 'axios';
  import UserService from '../../Service.js'
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
        date_taken:{
            type:Boolean,
            default:false
        },
        open:{
            type:Boolean,
            default:false
        },
        can_review:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            review:{
                comment:'',
                grade:0,
                user:'', //Gde trenutnog user-a da uzmem?
                date:'',
            },
            mesec:0,
            dan:0,
            godina:0,
            br_dana:0,
            added_review:false,
            tried_reserve:false,
        }
    },
    mounted(){
        this.locPred = this.pred;
        //this.added_review = ! username in pred.reviews - ne znam gde da nadjem username
    },
    methods:{
        like(){
            console.log(this.pred._id);
            if(!this.liked)
                this.$emit('like',this.pred._id);
            else
                this.$emit('unlike',this.pred._id);
        },
        select_month(){
            switch(this.mesec){
                case "01":case "03":case "05":case "07":case "08":case "10": case "12":
                    this.br_dana=31;
                    break;
                case "04":case "06":case "09": case "11":
                    this.br_dana=30;
                    break;
                case "02":
                    if((this.godina%100!=0 && this.godina%4==0) || this.godina%400==0)
                        this.br_dana=29
                    else
                        this.br_dana=28;
                    break;
            }
        },
        otvori(){
            this.$emit('open',this.pred);
        },
        close(){
            this.$emit('close');
        },
        grade(g){
            this.review.grade=g;
        },
        reserve(){
            let today = this.dan;
            let month = this.mesec;
            let year = this.godina
            let date = today + "." + month + "." + year;
            this.tried_reserve = true;
            this.$emit('reserve', this.pred._id, date);
        },
        add_review(){
            //this.review.user = user?
            let date = new Date();
            let today = date.getDate();
            if (today<10) today = "0"+today;
            let month = date.getMonth()+1;
            if (month<10) month = "0"+month;
            let year = date.getFullYear();
            this.review.date = today + "." + month + "." + year;
            this.$emit('review',this.pred._id,this.review);
            this.added_review=true;
        }
    },
    computed:{
        likeImg:function(){
            if (this.liked)
                return 'src/assets/liked.png';
            else 
                return 'src/assets/not-liked.png'
        }
    },
    emits:['like','unlike','open','close','review'],
      
  };
  </script>
  
<style scoped>
.extra{
    width:100%;
    display: flex;
    flex-direction: column;
}
label{
    color:var(--font-dark);
    margin-right:1vw;
}
.reserve_btn{
    max-width: 150px !important;
    min-width: 150px !important;
    border-radius: 0.5vw !important;
}
select{
    max-width:150px;
    background-color: var(--light-pink);
    border:0;
    margin-bottom:1vh;
    padding:.5vw;
    border-radius: 0.5vw !important;
}
.menuList{
    margin-top:1vh;
    margin-bottom: 1vh;
    width:100%;
    display:flex;
    flex-direction: column;
    max-height: 50vh;
    overflow-y: scroll;
}
.menu{
    width:100%;
    border:1px solid var(--dark-purple);
    border-radius:0.5vw;
    margin-bottom: 1vh;
    padding:1vw;
}
.starPos{
    position: absolute;
    top:-24px !important;
    right:-12px !important;
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
    right:-8px;
    border-radius:100%;
    background: transparent;
    display:flex;
    justify-content: center;
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
    flex-wrap: wrap;
    overflow-y:auto;
    overflow-x:hidden;
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
.levo, .desno{
    margin-bottom:4vh;
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
    margin-top:1vh;
}

  .opis{
    position: relative;
    display:flex;
    flex-direction: column;
    padding:1vw;
    bottom:0;
    left:0;
    width:100%;
    height: 40%;
    color:white;
    background-color: var(--white-pink);
  }
  .slika{
    width:100%;
    height: 60%;
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