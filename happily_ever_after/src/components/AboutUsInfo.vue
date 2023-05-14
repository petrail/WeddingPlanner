<template>
    <div class="aboutusContainer">
        <div class="aboutusTitle">
            <h1>O NAMA</h1>
            <p>Dobrodošli u "Happily Ever After", aplikaciju za planiranje venčanja koja će vam pomoći da vaše venčanje postane nezaboravan događaj.
            Naša aplikacija je stvorena kako bi vam olakšala organizaciju vašeg venčanja, bez stresa i bezbrižno. Sve što treba uraditi je kreirati svoj profil, odabrati željeni datum venčanja i krenuti u planiranje vašeg savršenog dana.

            Takođe, možete pregledati sve važne korake u planiranju venčanja, uključujući izbor lokacije, odabir cveća, muzike, hrane i pića, odjeće i mnogo više.

            Naš tim stručnjaka za venčanja je ovde kako bi vam pomogao u svakom koraku, od izbora savršene lokacije do pronalaska pravog fotografa i ostalih dobavljača za vaše venčanje. Takođe, možete se osloniti na našu aplikaciju za praćenje vašeg proračuna i organizovanje svih detalja.

            Naš cilj je da vaše venčanje bude potpuno personalizovano i jedinstveno za vas i vaše goste, a mi ćemo se pobrinuti da sve ide glatko.

            Uz "Happily Ever After" aplikaciju, vaš dan će biti ispunjen srećom, ljubavlju i lepim uspomenama.</p>
        </div>
        <div class="aboutusRight">
            <div class="aboutusText">
                <img src="../assets/aboutus/music.png"/>
                <h3>Muzika</h3>
                <p> Zabava bez muzike nije zabava! Rezervirajte svoj bend ili DJ-a unaprijed kako bi se osigurali da će vaša glazba biti upravo ono što ste zamislili za svoj veliki dan.</p>
            </div>
            <div class="aboutusText">
                <img src="../assets/aboutus/diamond.png"/>
                <h3>Zlatare</h3>
                <p>Burme su simbol vaše vjere u ljubav i vašeg zajedništva. Pronađite savršen par burmi koje odražavaju vaš stil, i budite sigurni da ih naručite unaprijed kako bi stigli na vrijeme za vaš veliki dan.</p>
            </div>
            <div class="aboutusText">
                <img src="../assets/aboutus/restaurant.png"/>
                <h3>Restoran</h3>
                <p>Hrana je srce svakog slavlja. Izaberite restoran koji će zadovoljiti vaše ukuse i vaš proračun, i rezervirajte svoje mjesto unaprijed kako biste izbjegli gužve i stres na dan vjenčanja.</p>
            </div>
            <div class="aboutusText">
                <img src="../assets/aboutus/dress.png"/>
                <h3>Odeća</h3>
                <p>Hrana je srce svakog slavlja. Izaberite restoran koji će zadovoljiti vaše ukuse i vaš proračun, i rezervirajte svoje mjesto unaprijed kako biste izbjegli gužve i stres na dan vjenčanja.</p>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default{
      name: "AboutUsInfo",
  };
  </script>
  
  <style scoped>
  img{
    height:24px;
    width: 24px;
  }
  h3{
    font-weight: bold;
    margin-bottom: 1.5vh;
    font-size:16pt;
  }
  p{
    font-size:12pt;
    text-align: justify;
  }
  @media (width>700px){
    p{
      font-size:14pt !important;
    }
  }
  .aboutusContainer{
    max-width:100vw;
    width:100vw;
    display:flex;
    flex-wrap: wrap;
    background-color: #fff;
  }
  .aboutusTitle{
    width:50vw;
    display: flex;
    flex-direction: column;
    padding:4vh;
    padding-left:10vh;
    padding-right:10vh;
  }
  .aboutusRight{
    width:50vw;
    display: flex;
    flex-wrap: wrap;
  }
  .aboutusText{
    display: flex;
    flex-direction: column;
    width:25vw;
    padding:7vh;
    animation: popup 0.5s ease;
    padding:3vh;
    padding-left:3.5vh;
    padding-right:3.5vh;
  }
  @media (width<1000px) {
    .aboutusTitle, .aboutusText, .aboutusRight{
      width:100vw !important; 
    }
    .aboutusText{
      padding:4vh !important;
      padding-left:10vh !important;
      padding-right:10vh !important;
    }
  }
  @keyframes popup {
    0%{
        transform: translateY(-5vh);
    }
    100%{
        transform: translateY(0);
    }
  }
  </style>
  