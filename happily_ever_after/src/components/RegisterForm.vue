<template>
  <div class="register-page">
    <h1>Registracija</h1>
    <p>Popunite svoje lične podatke</p>
    <form @submit.prevent="saveData">
      <div class="form-group">
        <input placeholder="Ime i prezime" type="text" name="ime_prezime" v-model="user.name" required>
      </div>
      <div class="form-group">
        <input placeholder="Email" type="email" name="email" v-model="user.email" required>
      </div>
      <div class="form-group">
        <input placeholder="Korisničko ime" type="text" name="username" v-model="user.username" required>
      </div>
      <div class="form-group">
        <input  placeholder="Šifra" type="password" name="password" v-model="user.password" required>
      </div>
      <div class="form-group">
        <input  placeholder="Potvrdite šifru" type="password" name="confpassword" v-model="user.confpassword" required>
      </div>
      <button type="submit">Registruj se</button>
      <div class="form-group">
        <div class="left">
        <router-link class="link" to='/'>Nazad na glavnu</router-link>
        </div>
        <div class="right">
        <router-link class="link" to='/login'>Prijavi se</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginForm',
  data() {
    return {
      result:{},
      user: {
        id: '',
        username: '',
        password: '',
        name: '',
        email:'',
        confpassword:'',
      }
      
    }
  },
  created(){

  },
  mounted(){
    console.log("mounted() called...")
  },
  methods: {
    saveData(){
      if (this.user.password !== this.user.confpassword) {      
        console.log('Password and confirm password do not match');
        return;
      }
      axios.post("http://localhost:3000/user/register", this.user)
      .then(
      ({data}) => {         
          this.$router.push({ path: '/login' });
        }
      )
    }
    }
  }

</script>

<style scoped>
.register-page {
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  background: rgba(150, 150, 150, 0.5);
  width:90%;
  max-width:800px;
  height:auto;
  max-height:95%;

  padding:8%;
  padding-top:3vh;
  padding-bottom:3vh;
  border:0;
  border-radius:2vw;
  backdrop-filter: blur(8px);
  overflow-y:auto;
}
form{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:3vh;
}
h1{
    font-size:max(2vw,35pt);
    color:white;
    font-weight:600;
    margin-bottom:3vh;
    margin-top:3vh;
}
p{
    font-size:max(2vw,20pt);
    color:white;
}
.form-group {
  margin-bottom: 3vh;
  width:100%;
  display:flex;
  justify-content:center;
}

label {
  display: block;
  margin-bottom: 5px;
}
input{
    border-radius:1vw;
    border:0;
    height: 40px;
    width:100%;
    color: white !important;
    font-size:max(1.25vw,16pt);
    background: rgba(255, 255, 255, 0.3);
    padding-left: 20px;
    padding-right: 20px;
    transition: all 0.5s ease;
}
input::placeholder{
    color:white;
}
.link{
    width:auto !important;
    color:white;
    padding:5px;
    font-size:max(1.25vw,16pt);
}
.link:hover{
    background-color:var(--white-pink);
    color:var(--font-dark);
    border:0;
    border-radius:1vw;
}
.left, .right{
    width:50%;
    display:flex;
}
.left{
    justify-content:flex-start;
}
.right{
    justify-content:flex-end;
}
input:hover{
    border:1px solid white;
    background: rgba(255, 255, 255, 0.08);
}

button{
    background: var(--light-pink) !important;
    border:0;
    color: var(--font-dark) !important;
    width:50%;
    border-radius:1vw;
    height:50px;
    font-size:max(1.25vw,16pt);
    font-weight:bold;
    margin-bottom:3vh;
}
@media (width<700px){
    button,input,.link,p{
        font-size:12pt;
    }
    h1{
        font-size:24pt;
    }
}
@media (width<1000px){
    .register-page{
       padding:18% !important;
    }
}
</style>
