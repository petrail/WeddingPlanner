<template>
  <div class="navbar">
    <div class="topbar">
        <h3>Email: theappangels@gmail.com</h3>
        <h3>Pozovi nas: +381 649974169</h3>
    </div>
    <div class="navitems">
        <div class="logo">
        </div>
        <div class="nav">
            <ul>
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
}
.topbar{
    width:100vw;
    display:flex;
}
.navitems{
    width:100vw;
    display:flex;
    flex-direction:row;
}
h3{
    margin-left:2vw;
    margin-right:2vw;
    margin-top:0.5vh;
    margin-bottom:0.5vh;
    font-size:10pt;
}
.nav{
    display:flex;
    justify-content:right;
    width:70vw;
    padding-top:1vh;
    padding-bottom:1vh;
}
.logo{
    width:30vw;
}
a{
    font-size:16pt;
}
</style>
