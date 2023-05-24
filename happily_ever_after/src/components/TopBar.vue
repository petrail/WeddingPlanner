<template>
    <NavBar :hasLogin="hasLogin" :inStore="inStore"/>
    <div :class="short?'bkg short':'bkg'">
        <div :class="first? 'contain':'contain inv'">
            <div class="slide one">
            </div>
            <div class="info">
                <h2>{{this.barText}}</h2>
                <p v-if="isWelcome">“Najbolji brakovi su oni koji su izgrađeni pomoću timskog rada.” - Fon Viver</p>
            </div>
        </div>
        <div :class="!first? 'contain':'contain inv'">
            <div class="slide two">
            </div>
            <div class="info">
                <h2>{{this.barText}}</h2>
                <p v-if="isWelcome">“Najbolji brakovi su oni koji su izgrađeni pomoću timskog rada.” - Fon Viver</p>
            </div>
        </div>

    </div>
    
    
  </template>
  
  <script>
  import NavBar from './NavBar.vue'
  export default{
      name: "TopBar",
      components:{
        NavBar
      },
      props:{
        hasLogin: {
            type: Boolean,
            default: false
        },
        inStore:{
            type: Boolean,
            default:false
        },
        barText:{
            type:String,
            default:"Sve što vam je potrebno je ljubav, a mi ćemo se pobrinuti za ostalo"
        },
        isWelcome:{
            type:Boolean,
            default:false
        },
        short:{
            type:Boolean,
            default:false
        }
      },
      data(){
        return {
            first:true,
        }
      },
      mounted(){
        setInterval(()=>{this.first=!this.first}, 15000);
      },
      
  };
  </script>
  
<style scoped>  
.short{
    height:40vh !important;
}
.bkg{
    width:100vw;
    display: flex;
    height:80vh;
    position: absolute;
    top:0;
    left:0;
    z-index: 0;
}
.contain{
    width:100vw;
    height:100%;

    position: absolute;
    top:0;
    left:0;

    display:flex;
    
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    color:white;
    overflow: hidden;

    opacity:1;
    transition: all 3s ease;
}
.slide{
    top:0;
    left:0;
    min-width:100vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center center;
    padding:10vh;

    position: absolute;
    height: 100%;

    animation: slide 24s linear infinite;
    
    
}
.one{
    background-image:linear-gradient(to right bottom, rgba(172, 172, 172, 0.411), rgba(31, 31, 31, 0.493)),
                     url('../assets/topbar/pozadinafinal.webp');               
}
.two{
    background-image:linear-gradient(to right bottom, rgba(172, 172, 172, 0.411), rgba(31, 31, 31, 0.493)),
                     url('../assets/topbar/pozadina2.webp');
}
.inv{
    opacity: 0;
}
.info{
    position: absolute;
    width:100vw;
    bottom:25%;
    left:0vh;
    display: flex;
    align-items: center;
    flex-direction: column;
}
h2{
    font-weight: 600;
    text-transform:uppercase;
    font-size:max(2.5vw,16pt);
}
*{
    text-align: center;
}
@keyframes slide {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1); 
    }
    50% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3); 
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1); 
    } 
}
</style>
  