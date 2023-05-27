<template>
    <div class="contactContainer">
        <div class="img" v-bind:style="{ backgroundImage: 'url(' + contact.contactImg + ')' }">
        </div>
        <div v-if="this.small" class="podaci">
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
        small:false
      },
      mounted(){
        small = window.innerWidth < 700;
      }
  };
  </script>
  
<style scoped>  
.contactContainer{
    width:100%;
    height:100%;
    background-color:var(--light-pink);
    display:flex;
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
    padding:30px;
}
h2,p{
    width:100%;
}
@media (width<700px){
    .img{
        width:100%;
    }
    .podaci{
        width:0;
    }
}
</style>
  