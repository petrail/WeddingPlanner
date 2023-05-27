<template>
    <div class="acccontainer">
        <div class="head row">
            <div v-bind:style="{ backgroundImage: 'url(' + nalog.url + ')' }" class="photo">

            </div>
            <div class="title">
                <h3>VAŠ NALOG</h3>
                <h1>{{nalog.ime_prezime}}</h1>
            </div>
        </div>
        <div class="row">
            <label for="ime_prezime">Ime i prezime</label>
            <input placeholder="Ime i prezime" type="text" id="ime_prezime" v-model="nalog.ime_prezime" required>
        </div>
        <div class="row">
            <label for="ime_prezime">Email</label>
            <input placeholder="Email" type="email" id="email" v-model="nalog.email" required>
        </div>
        <div class="row">
            <label for="ime_prezime">Korisničko ime</label>
            <input placeholder="Korisničko ime" type="text" id="username" v-model="nalog.username" required>
        </div>
        <div class="row">
            <label for="ime_prezime">Šifra</label>
            <input  placeholder="Šifra" type="password" id="password" v-model="nalog.password" required>
        </div>
        <div class="row">
        <button @click="save">Sačuvaj izmene</button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        nalog:{
            username:'petrail',
            password:'petra',
            email:'petrail@elfak.rs',
            ime_prezime: 'Petra Ilkovski',
            url:'src/assets/account.jpg'
        }
      };
    },
    methods: {
      register() {
        // Perform login logic here, e.g., send username and password to the server
        console.log('Register clicked');
        console.log('Username:', this.username);
        console.log('Password:', this.password);
      },
      save(){
        console.log("SAVE!");
      }
    }
  };
  </script>
  
<style scoped>
h1{
    font-weight: 600;
    font-size: 3vw;
}
.acccontainer{
    display: flex;
    flex-direction: column;
    padding:5vw;
    height:80vh;
    width:100%;
    align-items: center;
    justify-content: center;
}
.row{
    display:flex;
    width:60%;
    flex-direction: column;
    margin-bottom: .5vh;
}
.head{
    flex-direction: row !important;
}

.photo{
    border:0;
    border-radius: 100%;
    width: 40%;
    /*height:19vh;*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    aspect-ratio : 1 / 1;
}
.title{
    display: flex;
    flex-direction: column;
    width:75%;
    padding-left: 2vw;
    justify-content: center;
}
input{
    border-radius:.5vw;
    border:2px solid var(--light-blue);
    height: 32px;
    width:100%;
    color: #000 !important;
    font-size:max(1.25vw,16pt);
    background: rgba(255, 255, 255, 0.3);
    padding-left: 20px;
    padding-right: 20px;
    transition: all 0.5s ease;
}
input::placeholder{
    color:white;
}
button{
    width:70%;
    margin-top:1vh;
    background-color: var(--light-blue);
    border:0;
    color: var(--font-dark) !important;
    border-radius:.5vw;
    height:40px;
    font-size:max(1.25vw,14pt);
}
button:hover{
    background-color: var(--light-pink);
 }
@media (width<700px){
    input{
        font-size:12pt;
    }
}
</style>
  