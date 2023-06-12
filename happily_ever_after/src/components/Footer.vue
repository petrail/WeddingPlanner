<template>
    <div class = "footerContainer"> 
        <div class="row"> 
           <h2>
            © 2023 Happily Ever After
           </h2>  
        </div>
        <div class="row">
            <ul v-if="inStore">
                <li><router-link to="/shopmain">Proizvodi</router-link></li>
                <li><router-link to="/liked">Lajkovano</router-link></li>
                <li><router-link to="/reserved">Rezervisano</router-link></li>
                <li><router-link to="/chat">Poruke</router-link></li>
                <li><router-link to="/shopcontact">Kontakt</router-link></li>
            </ul>
            <ul v-if="!inStore">
                <li><router-link to="/">Početna</router-link></li>
                <li><router-link to="/about">O nama</router-link></li>
                <li><router-link to="/services">Usluge</router-link></li>
                <li><router-link to="/contact">Kontakt</router-link></li>
            </ul>
        </div>
        <div class="row">
            <img src="../assets/footer/instagram.svg"/>
            <img src="../assets/footer/facebook.svg"/>
            <img src="../assets/footer/twitter.svg"/>
        </div>
    </div>
    
  </template>
  
  <script>
export default{
    name: "Footer",
    props:{
        inStore:{
            type: Boolean,
            default:false
        },
    }
}
  </script>
  
<style scoped>  
.footerContainer{
    width:100vw;
    display:flex;
    flex-direction: column;
    background-color: var(--light-pink);
}
ul li,ol li 
{
    list-style: none; 
    display:inline;
    margin:10px;
}
ul{
    padding-inline-start:0 !important;
}
a{
    color:var(--font-dark);
    padding:5px;
}
a:hover{
    background-color: var(--white-pink);
    border:0;
    border-radius:1vw;
}
.row{
    width:100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:.5vh;
}
img{
    height:30px;
    width:30px;
    margin-right:10px;
    opacity: 1;
}
img:hover{
    opacity: 0.5;
}
</style>
  