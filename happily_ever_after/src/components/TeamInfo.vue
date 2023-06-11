<template>
    <div class="teamContainer">
        <h2>NAŠ TIM</h2>
        <p>Tim iskusnih profesionalaca</p>
        <Gallery tall :imgs="imgs"/>
        <div class="teamDesc">
            <div class="member">
                <div class="slika">
                    <img src="src/assets/team/org1.jpeg"/>
                </div>
                <div class="opis">
                    <h2>Ana Petrović</h2>
                    <h3>Koordinator venčanja</h3>
                    <p>Ana je iskusna organizatorica događaja s višegodišnjim iskustvom u planiranju i koordiniranju različitih vrsta događaja. Također, završila je diplomski studij poslovne administracije na Fakultetu organizacionih nauka, što joj daje snažnu pozadinu u poslovnom upravljanju i menadžmentu. Pohađala je i kurseve vezane za planiranje venčanja i dizajniranje prostora, te ima iskustva u organizaciji i koordinaciji svih aspekata venčanja, uključujući izbor lokacija, glazbu, catering, dekor i fotografiju.</p>
                </div>
            </div>
             <div class="member">
                <div class="slika">
                    <img src="src/assets/team/org2.jpeg"/>
                </div>
                <div class="opis">
                    <h2>Jovana Janković</h2>
                    <h3>Koordinator venčanja</h3>
                    <p>Jovana je iskusna koordinatorica događaja s višegodišnjim iskustvom u organizaciji različitih vrsta događaja, uključujući venčanja, korporativne događaje i koncerte. Diplomirala je na Fakultetu za turistički i hotelijerski menadžment, što joj daje snažnu pozadinu u upravljanju turističkim događajima. Također, pohađala je kurseve vezane za planiranje venčanja i imala je priliku raditi s različitim dobavljačima kako bi stekla duboko razumijevanje svih aspekata venčanja.</p>
                </div>
            </div>
             <div class="member">
                <div class="slika">
                    <img src="src/assets/team/org3.jpg"/>
                </div>
                <div class="opis">
                    <h2>Milica Nikolić</h2>
                    <h3>Koordinator venčanja</h3>
                    <p>Milica je kreativna organizatorka događaja s iskustvom u planiranju venčanja i drugih posebnih događaja. Završila je kurs za organizatore venčanja, te ima iskustva u planiranju i koordinaciji različitih aspekata venčanja, uključujući izbor lokacije, dekoraciju, catering, muziku i fotografiju. Također, ima iskustva u radu s vjenčanim dizajnerima i floristima kako bi stvorila nezaboravne događaje.</p>
                </div>
            </div>
             <div class="member">
                <div class="slika">
                    <img src="src/assets/team/org4.jpg"/>
                </div>
                <div class="opis">
                    <h2>Marija Simić</h2>
                    <h3>Koordinator venčanja</h3>
                    <p>Marija je iskusna organizatorka događaja s višegodišnjim iskustvom u planiranju i koordiniranju različitih vrsta događaja, uključujući venčanja, korporativne događaje i dobrotvorne priredbe. Diplomirala je na Fakultetu dramskih umjetnosti, što joj daje snažnu pozadinu u upravljanju scenskim događajima. Također je završila kurseve vezane za planiranje venčanja i ima iskustva u radu s vjenčanim dizajnerima, cvjećarima.</p>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import Gallery from '../components/Gallery.vue';
  
  export default{
        name: "TeamInfo",
        components:{
            Gallery
        },
        data(){
            return{
                imgs:
                    [{url: 'src/assets/team/org1.jpeg', opis:'Ana Petrović'},
                    {url: 'src/assets/team/org2.jpeg', opis:'Jovana Janković'},
                    {url: 'src/assets/team/org3.jpg', opis:'Milica Nikolić'},
                    {url: 'src/assets/team/org4.jpg', opis:'Marija Simić'}]
            }
        }
    };
  </script>
  
  <style scoped>
    .teamDesc{
        background-color:var(--white-pink);
        display:flex;
        flex-direction: column;
        width:100vw;
        padding:3vw;
    }
    .member{
        width:100%;
        display:flex;
        padding:2vh;
    }
    .opis{
        width:80vw;
        display: flex;
        flex-direction: column;
        padding-left:2vh;
    }
    .opis h2, .opis p{
        text-align: left;
    }
    .slika{
        width:10vw;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .teamContainer{
        width:100vw;
        display: flex;
        flex-direction: column;
    }
    h2,p{
        width:100%;
        text-align: center;
    }
    img{
        height: 100%;
        max-height: 10vw;
    }
    p{
        font-size:min(2.5vw,14pt);
    }
    h2{
        font-weight: bold;
    }
    h3{
        font-size:min(3vw,14pt);
        font-weight:600;
    }
  </style>
  