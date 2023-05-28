<template>
    <div @click="openChat()" class="contactContainer">
        <div class="img" v-bind:style="{ backgroundImage: 'url(' + contact.contactImg + ')' }">
        </div>
        <div v-if="!isSmall" class="podaci">
            <h2>{{contact.contactName}}</h2>
            <p>{{contact.lastMsg}}</p>
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
      },
      methods:{
        openChat(){
            this.$emit('openChat',props);
        }
      },
      computed:{
        isSmall:function(){
            return window.innerWidth<700;
        }
      },
      emits:['openChat']
  };
  </script>
  
<style scoped>  
.contactContainer{
    width:100%;
    height:100%;
    background-color:var(--light-pink);
    display:flex;
    box-shadow: 15px 50px 21px rgba(0, 0, 0, 0.01), 9px 28px 18px rgba(0, 0, 0, 0.03), 4px 12px 13px rgba(0, 0, 0, 0.04), 1px 3px 7px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);
}
.img{
    width:30%;
    height:100%;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
}
.podaci{
    width:70%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    padding:10px;
}
h2,p{
    width:100%;
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
  