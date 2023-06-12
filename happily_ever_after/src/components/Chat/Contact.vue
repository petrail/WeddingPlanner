<template>
    <div @click="openChat()" :class="clicked===contact?'contactContainer clicked':'contactContainer'">
        <div class="img" :style="`background-image: url(http://localhost:3000${contact.img})`">
        </div>
        <div v-if="!this.isSmall" class="podaci">
            <h2>{{contact.name}}</h2>
        </div>
    </div>
    
  </template>
  
  <script>
  export default{
      name: "Contact",
      props:{
        contact:{
            type:Object,
            default:null
        },
        clicked:{
            type:Object,
            default:null
        }
      },
      data(){
        return{
            isSmall:false,
        }
      },
      mounted() {
        window.addEventListener('resize', this.testSmall);
      },
      unmounted() {
        window.removeEventListener('resize', this.testSmall);
      },
      methods:{
        openChat(){
            this.$emit('openChat',this.contact);
        },
        testSmall(){
            this.isSmall=document.documentElement.clientWidth<700;
        }
      },
      emits:['openChat']
  };
  </script>
  
<style scoped>  
.contactContainer:hover{
    background-color:rgba(191, 191, 191, 0.396) !important;
}
.clicked{
    background-color:rgba(161, 161, 161, 0.552) !important;
}
.contactContainer{
    width:100%;
    display:flex;
    margin-bottom:2vh;
    border-radius:0.5vw;
    transition:all 0.5s ease;
}
.img{
    width:20%;
    aspect-ratio: 1/1;
    border-radius:100%;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
}
.podaci{
    width:80%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    padding-left:.5vw;
}
h2,p{
    width:100%;
    margin:0;
}
@media (width<700px){
    .img{
        width:100%;
        border-radius:100%;
    }
    .contactContainer{
        background-color: transparent;
        border-radius:100%;
    }
    .podaci{
        width:0;
    }
}
</style>
  