<template>
    <div class="serviceContainer">
        <div class="serviceTitle">
            <h1>Pružamo vam...</h1>
        </div>
        <div class="serviceText">
            <h3>Organizacija vencanja</h3>
            <p>Rado bismo Vam ponudili naše sveobuhvatno planiranje i organizaciju venčanja - od prvih razgovora o Vašoj viziji, do dana venčanja i koordinacije na licu mesta. Naš cilj je da vam pružimo nezaboravno i jedinstveno iskustvo, u potpunosti prilagođeno Vašim željama i potrebama.
                Naša usluga je sveobuhvatna, što znači da ćemo se pobrinuti za svaki detalj kako biste se mogli opustiti i uživati u pripremi za vaš poseban dan. Takođe ćemo biti prisutni na licu mesta kako bismo osigurali da sve prođe po planu i da se svi vaši snovi pretvore u stvarnost.</p>
        </div>
        <div class="serviceText">
            <h3>Konsultacija za dizajn događaja</h3>
            <p>Imate viziju dekora, a mi imamo dizajnersko iskustvo, inspirativne ideje i koncepte da pretvorimo vašu viziju u stvarnost. Neka naš pristup i stil ukrase vaš događaj. Naša profesionalna usluga dizajna uključuje kreiranje teme, dodavanje detalja, stilizaciju i pronalaženje dobavljača.</p>
        </div>
        <div class="serviceText">
            <h3>Delimično planiranje venčanja</h3>
            <p>Često se naši klijenti sami upuštaju u planiranje svog venčanja, ali kako se dan približava, osećaju se preplavljeni dok balansiraju sve detalje u pripremama za svoj veliki dan. Tu možemo pomoći. Spremni smo da se pridružimo vašem planiranju u bilo kojem trenutku pre velikog dana i pružimo vam onoliko podrške koliko vam je potrebno. Ta podrška može uključivati preporuke za dobavljače, pregled ugovora, izbor hotela, organizaciju transporta. Postajemo glavni kontakt u vaše ime, završavamo ostatak planiranja i pomažemo na dan događaja. Na taj način možete da uživate u svemu i da se prepustite bez brige!</p>
        </div>
        <div class="serviceText">
            <h3>Postavljanje dekora za događaje</h3>
            <p>Pravimo visokokvalitetno postavljanje dekora na bilo kojoj lokaciji. Naši dizajneri događaja i menadžeri će biti na licu mesta kako bi izveli postavljanje dekora. Koordiniramo isporuke dobavljača, sarađujemo sa osobljem lokacije i stilizujemo dekor na dan događaja. Imamo mogućnost da pružamo USLUGE na više lokacija, dostavljamo lični dekor, montiramo dekor, postavljamo dekor, pravimo dobrodošlice poklone, dostavljamo dobrodošlice poklone i organizujemo plan za demontažu na kraju događaja.</p>
        </div>
    </div>
  </template>
  
  <script>

  
  export default{

      name: "ServiceInfo",
  };
  </script>
  
  <style scoped>
  h1{
    font-weight:600;
  }
  h3{
    font-weight: bold;
    margin-bottom: 1.5vh;
    font-size:min(4vw,16pt);
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
  .serviceContainer{
    max-width:100vw;
    width:100vw;
    display:flex;
    flex-wrap: wrap;
    background-color: var(--info-bckg);
  }
  .serviceTitle{
    width:100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding:4vh;
  }
  .serviceText{
    display: flex;
    flex-direction: column;
    width:50vw;
    padding:4vh;
    padding-left:10vh;
    padding-right:10vh;
    animation: popup 0.5s ease;
  }
  @media (width<1000px) {
    .serviceText{
      width:100vw !important; 
    }
    .serviceContainer{
      flex-direction: column;
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
  