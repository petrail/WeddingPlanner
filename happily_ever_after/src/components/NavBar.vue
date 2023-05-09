<template>
  <div class="navbar">
    <div class="topbar">
        <div class="info">
            <h3 v-if="screenWidth>500">Email: theappangels@gmail.com</h3>
            <h3 v-if="screenWidth>500">Pozovi nas: +381 649974169</h3>
        </div>
        <div class="register" v-if="hasLogin">
            <a class="login">Login</a>
            <a>Register</a>
        </div>
    </div>
    <div class="navitems">
        <div class="logo">
            <h2>Happily Ever After</h2>
        </div>
        <div class="nav">
            <ul v-if="inStore && screenWidth>500">
                <li><a href="index.html">Proizvodi</a></li>
                <li><a href="about.html">Korpa</a></li>
                <li><a href="service.html">Poruke</a></li>
                <li><a href="contact.html">Kontakt</a></li>
            </ul>
            <ul v-if = "!inStore && screenWidth>500">
                <li><a href="index.html">Početna</a></li>
                <li><a href="about.html">O nama</a></li>
                <li><a href="service.html">Servisi</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Kontakt</a></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default{
    name: "NavBar",
    props:{
        hasLogin: {
            type: Boolean,
            default: false
        },
        inStore:{
            type: Boolean,
            default:false
        }
    },
    mounted() {
        this.updateScreenWidth();
        this.onScreenResize();
    },
    methods: {
        onScreenResize() {
            window.addEventListener("resize", () => {
                this.updateScreenWidth();
            });
        },
        updateScreenWidth() {
            this.screenWidth = window.innerWidth;
        },
    },
    data() {
        return {
            screenWidth: 0,
        };
    },
    
};
</script>

<style scoped>
ul li,ol li 
{
    list-style: none; 
    display:inline;
    margin:10px;
}
ul{
    padding-inline-start:0 !important;
}
.navbar{
    width:100vw;
    display:flex;
    flex-direction:column;
    position:fixed;
    top:0;
    background-color: var(--navbar-color);

}
.topbar{
    width:100vw;
    display:flex;
    padding:0.5vh;
    border-bottom:0.5pt solid rgba(131, 131, 131, 0.479);
    padding-left:4vw;
    padding-right:4vw;
}
.navitems{
    width:100vw;
    display:flex;
    flex-direction:row;
    padding-top:1vh;
    padding-bottom:1.5vh;
}
h3{
    margin:0;
    font-size:10pt;
    margin-right:1vw;
    color:white
}
.nav{
    display:flex;
    justify-content:right;
    align-items: center;
    width:60vw;
    padding-right:5vw;
}
.logo{
    width:40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: min(3vw,12pt);
}
a{
    font-size:12pt;
    color:#fff;
}
.info, .register{
    display: flex;
    width:50vw;
    align-items: center;
}
.info{
    justify-content: left;
}
.register{
    justify-content: right;
}
.login{
    margin-right: 2vw;
}
</style>
