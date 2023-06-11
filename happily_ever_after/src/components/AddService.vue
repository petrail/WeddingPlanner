<template>
  <div class="register-page">
    <h1>Dodaj uslugu</h1>
    <p>Popuni polja</p>
    <form @submit.prevent="saveData">
      <div class="form-group">
        <input placeholder="Naziv" type="text" name="naziv" v-model="service.name" required />
      </div>
      <div class="form-group">
        <input placeholder="Tip" type="text" name="tip" v-model="service.type" required />
      </div>
      <div class="form-group">
        <input
          placeholder="Lokacija"
          type="text"
          name="lokacija"
          v-model="service.location"
          required
        />
      </div>
      <div class="form-group">
        <input placeholder="Opis" type="text" name="opis" v-model="service.description" required />
      </div>
      <div class="form-group">
        <input placeholder="Cena" type="number" name="cena" v-model="service.price" required />
      </div>
      <div class="form-group">
        <input placeholder="Link" type="text" name="link" v-model="service.link" required />
      </div>
      <div class="form-group">
        <input
          placeholder="Telefon"
          type="text"
          name="telefon"
          v-model="service.phoneNumber"
          required
        />
      </div>
      <div class="form-group">
        <input placeholder="Slika" type="file" name="slika" @change="handleImageUpload" />
      </div>
      <div class="form-group">
        <input placeholder="Datumi" type="date" name="datumi" v-model="service.reserved_dates" />
      </div>
      <div class="form-group">
        <input placeholder="Boja" type="text" name="boja" v-model="service.color" />
      </div>
      <div class="form-group">
        <input placeholder="Velicina" type="text" name="velicina" v-model="service.size" />
      </div>
      <div class="form-group">
        <input
          placeholder="Subservice"
          type="text"
          name="subservice"
          v-model="service.subservice"
        />
      </div>
      <div class="form-group">
        <input placeholder="Meni" type="text" name="meni" v-model="service.menus" />
      </div>
      <div class="form-group">
        <input
          placeholder="Broj gostiju"
          type="number"
          name="broj_gostiju"
          v-model="service.max_guest_number"
        />
      </div>
      <div class="form-group">
        <input placeholder="Prodavnica" type="text" name="prodavnica" v-model="service.store" />
      </div>

      <button type="submit">Dodaj</button>
      <div class="form-group">
        <div class="left">
          <router-link class="link" to="/">Nazad na glavnu</router-link>
        </div>
        <div class="right">
          <router-link class="link" to="/login">Prijavi se</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddService',
  data() {
    return {
      result: {},
      service: {
        id: '',
        name: '',
        type: '',
        location: '',
        description: '',
        price: '',
        link: '',
        phoneNumber: '',
        img: '',
        reserved_dates: [],
        color: '',
        size: '',
        menus: [],
        subservice: '',
        max_guest_number: '',
        store: ''
      }
    }
  },
  created() {},
  mounted() {
    console.log('mounted() called...')
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0]
      this.service.img = file
    },
    saveData() {
      /*const formData = new FormData()
      formData.append('image', this.service.img)
      formData.append('name', this.service.name)
      formData.append('type', this.service.type)
      formData.append('location', this.service.location)
      formData.append('price', this.service.price) // Correct field name
      formData.append('link', this.service.link)
      formData.append('phoneNumber', this.service.phoneNumber) // Correct field name
      formData.append('reserved_dates', this.service.reserved_dates) // Correct field name
      formData.append('color', this.service.color)
      formData.append('size', this.service.size)
      formData.append('subservice', this.service.subservice)
      formData.append('menus', this.service.menus) // Correct field name
      formData.append('max_guest_number', this.service.max_guest_number)
      formData.append('store', this.service.store)*/
      axios.post('http://localhost:3000/service', this.service).then(({ data }) => {
        this.$router.push({ path: '/servicesPage' })
      })
    }
  }
}
</script>

<style scoped>
.register-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(150, 150, 150, 0.5);
  width: 90%;
  max-width: 800px;
  height: 150%;
  max-height: 150%;

  padding: 8%;
  padding-top: 300px;
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
  margin-top: 3vh;
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
  color: white;
  justify-self: left;
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
