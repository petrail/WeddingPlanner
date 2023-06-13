<template>
  <div class="login-page">
    <h1>Prijava</h1>
    <p>Unesite e-mail i šifru</p>
    <form @submit.prevent="login">
      <div class="form-group">
        <input
          @change="remove_error()"
          placeholder="Email"
          type="email"
          name="username"
          v-model="user.email"
          required
        />
      </div>
      <div class="form-group">
        <input
          @change="remove_error()"
          placeholder="Šifra"
          type="password"
          name="password"
          v-model="user.password"
          required
        />
      </div>
      <p class="warning" v-if="error">Greška pri logovanju!</p>
      <button @click="login()">Prijavite se</button>
      <div class="form-group">
        <div class="left">
          <router-link class="link" to="/">Nazad na glavnu</router-link>
        </div>
        <div class="right">
          <router-link class="link" to="/register">Registruj se</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'

export default {
  name: 'LoginForm',
  data() {
    return {
      result: {},
      user: {
        password: '',
        email: '',
        userType: ''
      },
      error: false
    }
  },
  created() {},
  mounted() {
    console.log('mounted() called...')
  },
  methods: {
    remove_error() {
      this.error = false
    },
    login() {
      axios
        .post('http://localhost:3000/user/login', this.user)
        .then((response) => {
          console.log(response)
          console.log(response.data)
          const data = response.data // Access the data from the response
          localStorage.setItem('token', data)

          // Fetch user type based on email
          const token = localStorage.getItem('token')
          axios
            .get('http://localhost:3000/user/email/' + token)
            .then((response) => {
              console.log('Response from axios')
              console.log(response)
              console.log(response.data[0].userType)

              // const userType = response.data[0].userType
              localStorage.setItem('isCoord', response.data[0].userType != undefined)
              console.log(response.data[0].userType)
              // Use userType in further logic
              // For example, use if-else statements to determine redirection based on userType

              this.$router.push('/shopmain')
            })
            .catch((error) => {
              console.log('Error:', error.response.data)
            })
        })
        .catch((error) => {
          this.error = true
          console.log('Error:', error.response.data)
        })
    }

    /*login() {
      axios
        .post('http://localhost:3000/user/login', this.user)
        .then((response) => {
          console.log(response)
          console.log(response.data)
          const data = response.data // Access the data from the response
          localStorage.setItem('token', data)
          // Redirect to the desired page after successful login
          if (this.user.email === 'andjela@gmail.com') {
            this.$router.push('/chat')
          } else {
            this.$router.push('/shopmain')
          }
        })
        .catch((error) => {
          console.log('Error:', error.response.data)
        })
    }*/
  }
}
</script>

<style scoped>
.warning {
  color: var(--light-red);
  font-size: max(1vw, 12pt);
  font-weight: bold;
  margin-top: 0;
}
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(150, 150, 150, 0.5);
  width: 90%;
  max-width: 800px;
  height: auto;
  max-height: 95%;

  padding: 8%;
  padding-top: 3vh;
  padding-bottom: 3vh;
  border: 0;
  border-radius: 2vw;
  backdrop-filter: blur(8px);
  overflow-y: auto;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3vh;
}
h1 {
  font-size: max(2vw, 35pt);
  color: white;
  font-weight: 600;
  margin-bottom: 3vh;
}
p {
  font-size: max(2vw, 20pt);
  color: white;
}
.form-group {
  margin-bottom: 3vh;
  width: 100%;
  display: flex;
  justify-content: center;
}

label {
  display: block;
  margin-bottom: 5px;
}
input {
  border-radius: 1vw;
  border: 0;
  height: 40px;
  width: 100%;
  color: white !important;
  font-size: max(1.25vw, 16pt);
  background: rgba(255, 255, 255, 0.3);
  padding-left: 20px;
  padding-right: 20px;
  transition: all 0.5s ease;
}
input::placeholder {
  color: white;
}
.link {
  width:auto !important;
  color: white;
  padding: 5px;
  font-size: max(1.25vw, 16pt);
}
.link:hover {
  background-color: var(--white-pink);
  color: var(--font-dark);
  border: 0;
  border-radius: 1vw;
}
.left,
.right {
  width: 50%;
  display: flex;
}
.left {
  justify-content: flex-start;
}
.right {
  justify-content: flex-end;
}
input:hover {
  border: 1px solid white;
  background: rgba(255, 255, 255, 0.08);
}

button {
  background: var(--light-pink) !important;
  border: 0;
  color: var(--font-dark) !important;
  width: 50%;
  border-radius: 1vw;
  height: 50px;
  font-size: max(1.25vw, 16pt);
  font-weight: bold;
  margin-bottom: 3vh;
}
@media (width<700px) {
  button,
  input,
  .link,
  p {
    font-size: 12pt;
  }
  h1 {
    font-size: 24pt;
  }
}
@media (width<1000px) {
  .register-page {
    padding: 18% !important;
  }
}
</style>
