<template>
    <div class = "contactContainer"> 
        <div class="forma">
            <h2>KONTAKTIRAJTE NAS</h2>
            <p>Pošaljite nam poruku</p>
            <div class="ime">
                <input class="margin" type="text" placeholder="Ime"/>
                <input type="email" placeholder="Email"/>
            </div>
            <input type="text" placeholder="Tema"/>
            <textarea placeholder="Poruka"/>
            <button>POŠALJI PORUKU</button>
        </div>
        <div class="mapadiv">
            <iframe class="map" src="https://maps.google.com/maps?q=Faculty of Electronic Engineering&t=&z=16&ie=UTF8&iwloc=&output=embed" allowfullscreen></iframe>
        </div>

    </div>
    
  </template>
  
  <script>
  export default{
      name: "Contact",
  };
  </script>
  
<style scoped>
    .contactContainer{
        width:100vw;
        padding:5vw;
        padding-top:2vw;
        display:flex;
        flex-wrap:wrap;
    }
    .forma{
        width:48%;
        display:flex;
        flex-direction: column;
        padding:2vw;
    }
    h2{
        font-weight: 600;
        text-transform:uppercase;
        font-size:max(2vw,16pt);
        margin-bottom:0;
    }
    p{
        margin:0;
    }
    .ime{
        display:flex;
        width:100%;
    }
    input,textarea{
        margin-top:2vh;
        border:2px solid var(--light-blue);
        border-radius:.5vw;
        padding:0.5vw;
    }
    textarea{
        resize:none;
        height:15vh;
    }
    button{
        border-radius:.5vw;
        width:30%;
        height:5vh;
        background-color: var(--light-blue);
        margin-top:2vh;
        border:0;
    }
    button:hover{
        background-color: var(--light-pink);
    }
    .margin{
        margin-right: 1vw;
    }
    .mapadiv{
        width:48%;
    }
    .map{
        width:100%;
        height: 100%;
        border:0;
        box-shadow: 15px 50px 21px rgba(0, 0, 0, 0.01), 9px 28px 18px rgba(0, 0, 0, 0.03), 4px 12px 13px rgba(0, 0, 0, 0.04), 1px 3px 7px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);
        border-radius: 1vw;
    }
    @media (width<700px){
        .mapadiv, .forma{
            width:100%;
        }
        .map{
            height: 30vh;
        }
    }
</style>
  