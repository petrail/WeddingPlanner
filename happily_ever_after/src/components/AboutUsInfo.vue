<template>
    <div class="aboutusContainer">
        <div class="aboutusTitle">
            <h1>O NAMA</h1>
            <p>Dobrodošli u "Happily Ever After", aplikaciju za planiranje venčanja koja će vam pomoći da vaše venčanje postane nezaboravan događaj.
            Naša aplikacija je stvorena kako bi vam olakšala organizaciju vašeg venčanja, bez stresa i bezbrižno. Sve što treba uraditi je kreirati svoj profil, odabrati željeni datum venčanja i krenuti u planiranje vašeg savršenog dana.

            Takođe, možete pregledati sve važne korake u planiranju venčanja, uključujući izbor lokacije, odabir cveća, muzike, hrane i pića, odjeće i mnogo više.

            Naš tim stručnjaka za venčanja je ovde kako bi vam pomogao u svakom koraku, od izbora savršene lokacije do pronalaska pravog fotografa i ostalih dobavljača za vaše venčanje.

            Naš cilj je da vaše venčanje bude potpuno personalizovano i jedinstveno za vas i vaše goste, a mi ćemo se pobrinuti da sve ide glatko.

            Uz "Happily Ever After" aplikaciju, vaš dan će biti ispunjen srećom, ljubavlju i lepim uspomenama.</p>
        </div>
        <div class="aboutusRight">
            <div class="aboutusText">
                <img src="../assets/aboutus/music.png"/>
                <h3>Muzika</h3>
                <p> Zabava bez muzike nije zabava! Rezervišite svoj bend ili DJ-a unapred kako bi se osigurali da će vaša muzika biti upravo ono što ste zamislili za svoj veliki dan.</p>
            </div>
            <div class="aboutusText">
                <img src="../assets/aboutus/diamond.png"/>
                <h3>Zlatare</h3>
                <p>Burme su simbol vaše vere u ljubav i vašeg zajedništva. Pronađite savršen par burmi koje odražavaju vaš stil, i budite sigurni da ih naručite unapred kako bi stigli na vreme za vaš veliki dan.</p>
            </div>
            <div class="aboutusText">
                <img src="../assets/aboutus/restaurant.png"/>
                <h3>Restoran</h3>
                <p>Hrana je srce svakog slavlja. Izaberite restoran koji će zadovoljiti vaše ukuse i vaš budžet, i rezervišite svoje mesto unapred kako biste izbegli gužve i stres na dan venčanja.</p>
            </div>
            <div class="aboutusText">
                <img src="../assets/aboutus/dress.png"/>
                <h3>Odeća</h3>
                <p>Odeća za venčanja mora biti jedinstvena i posebna, kao i vaš najvažniji dan. Naša kolekcija odeće za venčanja nudi nezaboravne i prefinjene stilove koji se savršeno uklapaju u vašu viziju venčanja.</p>
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
    font-size:20pt;
    font-family: 'HHoney';
    
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
    padding: 3vw;
  }
  .aboutusTitle{
    width:45vw;
    display: flex;
    flex-direction: column;
    margin-right:4vw;

  }
  .aboutusRight{
    width:45vw;
    display: flex;
    flex-wrap: wrap;
  }
  .aboutusText{
    display: flex;
    flex-direction: column;
    width:21.5vw;
    margin-bottom:7vh;
    margin-right:1vw;
    animation: popup 0.5s ease;
  }
  @media (width<1000px) {
    .aboutusTitle, .aboutusText, .aboutusRight{
      width:100% !important; 
      margin-right: 0;
    }
    .aboutusContainer{
      padding:8vw;
    }
    .aboutusText{
      padding:0vh !important;
      margin-bottom: 2vh;
      margin-top:2vh;
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
  h1{
    margin-bottom:2vh;
  }
  </style>
  