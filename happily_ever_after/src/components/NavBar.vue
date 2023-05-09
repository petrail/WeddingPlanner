<template>
  <div class="navbar">
    <div class="topbar">
        <div class="info">
            <img src="../assets/navbar/email.png"/>
            <h3 v-if="screenWidth>1000">Email: theappangels@gmail.com</h3>
            <img src="../assets/navbar/phone.png"/>
            <h3 v-if="screenWidth>1000">Pozovi nas: +381 649974169</h3>
        </div>
        <div class="register" v-if="hasLogin">
            <img src="../assets/navbar/login.png"/>
            <a class="login">Login</a>
            <img src="../assets/navbar/register.png"/>
            <a>Register</a>
        </div>
    </div>
    <div class="navitems">
        <div class="logo">
            <h2>Happily Ever After</h2>
        </div>
        <div class="nav">
            <ul v-if="inStore && screenWidth>700">
                <li><a href="index.html">Proizvodi</a></li>
                <li><a href="about.html">Korpa</a></li>
                <li><a href="service.html">Poruke</a></li>
                <li><a href="contact.html">Kontakt</a></li>
            </ul>
            <!--DROPDOWN MENU-->

            <ul v-if = "!inStore && screenWidth>700">
                <li><a href="index.html">Početna</a></li>
                <li><a href="about.html">O nama</a></li>
                <li><a href="service.html">Servisi</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Kontakt</a></li>
            </ul>

            <div @click = "toggleDropdown" class="dropdownBtn" v-if="screenWidth<=700">
                
            </div>
        </div>
    </div>
    <div class="dropdown" v-if = "dropdownopen && screenWidth<=700">
        <div v-if="inStore" class="dropdownMenu">
            <a href="index.html">Proizvodi</a>
            <a href="about.html">Korpa</a>
            <a href="service.html">Poruke</a>
            <a href="contact.html">Kontakt</a>
        </div>
            <!--DROPDOWN MENU-->
        <div v-else class="dropdownMenu">
            <a href="index.html">Početna</a>
            <a href="about.html">O nama</a>
            <a href="service.html">Servisi</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="contact.html">Kontakt</a>
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
        toggleDropdown(){
            this.dropdownopen = !this.dropdownopen;
        },
    },
    data() {
        return {
            screenWidth: 0,
            dropdownopen: false,
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
    font-size:min(4vw,12pt);
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
img{
    height: 20px;
    margin-right:10px;
}
.dropdownBtn{
    height:20px;
    width:20px;
    background-image: url('../assets/navbar/login.png');
    background-size: cover;
    background-repeat: no-repeat;
}
.dropdown{
    width:100vw;
}
.dropdownMenu{
    width:100vw;
    display: flex;
    flex-direction: column;
    padding:2vw;
}
.dropdownMenu a{
    margin-bottom: 1vh;
}
</style>
