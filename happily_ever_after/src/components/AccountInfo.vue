<template>
  <div class="acccontainer">
    <div class="photo">
      <input class="file" type="file" accept="image/*" @change="handleFileUpload" />
      <button @click="uploadImage">Upload</button>
      <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" />
    </div>
    <div class="head row">
      <div class="title">
        <h3>VAŠ NALOG</h3>
        <h1>{{ posts.name }}</h1>
      </div>
    </div>
    <div class="row">
      <label for="name">Ime i prezime</label>
      <input placeholder="Ime i prezime" type="text" id="name" v-model="posts.name" required />
    </div>
    <div class="row">
      <label for="name">Email</label>
      <input placeholder="Email" type="email" id="email" v-model="posts.email" required readonly />
    </div>
    <div class="row">
      <label for="name">Korisničko ime</label>
      <input
        placeholder="Korisničko ime"
        type="text"
        id="username"
        v-model="posts.username"
        required
      />
    </div>
    <div class="row">
      <label for="name">Šifra</label>
      <input placeholder="Nova šifra" type="password" id="newPassword" v-model="newPassword" />
    </div>
    <div class="row">
      <label for="name">Potvrdi novu sifru</label>
      <input
        placeholder="Potvrdi šifru"
        type="password"
        id="confirmPassword"
        v-model="confirmPassword"
      />
    </div>
    <p class="warning" v-if="error">Lozinke se ne poklapaju!</p>
    <div class="row">
      <button @click="save">Sačuvaj izmene</button>
    </div>
  </div>
</template>

<script>
import UserService from '../Service.js'
import axios from 'axios'

export default {
  data() {
    return {
      posts: {},
      error: ''
    }
  },
  async created() {
    try {
      const token = localStorage.getItem('token')
      const users = await UserService.getUsers(token)
      if (users.length > 0) {
        this.posts = users[0]
      }
    } catch (error) {
      this.error = error.message
    }
  },
  methods: {
    async save() {
      try {
        // Check if the new password and confirm password match
        if (this.newPassword !== this.confirmPassword) {
          throw new Error('Passwords do not match')
        }

        // Create a new object to save only the necessary data
        const userData = {
          _id: this.posts._id,
          name: this.posts.name,
          username: this.posts.username,
          email: this.posts.email,
          password: this.newPassword || this.posts.password // Use the new password if provided, otherwise use the existing password
        }

        // Make an API request to save user data
        await UserService.saveUser(this.posts._id, userData)

        console.log('Changes saved!')
      } catch (error) {
        console.log(error.message)
        this.error = 'Error saving user data.'
      }
    },

    handleFileUpload(event) {
      console.log(event)
      console.log('selected fajl kroz event: ' + event.target.files[0])
      this.selectedFile = event.target.files[0]
    },
    uploadImage() {
      if (this.selectedFile) {
        console.log('selected file je: ' + this.selectedFile)
        console.log(JSON.stringify(this.selectedFile))
        const formData = new FormData()
        formData.append('picture', this.selectedFile)
        console.log(this.posts)
        const userEmail = localStorage.getItem('token')

        console.log('from cookie' + userEmail)
        // const currentUserId;
        axios
          .get('http://localhost:3000/user/email/' + localStorage.getItem('token'))
          .then((response) => {
            console.log('Response from axios')
            console.log(response)
            console.log(response.data._id)
            this.posts.userId = response.data[0]._id
            console.log('User ID: ' + this.posts.userId)

            const formData = new FormData()
            formData.append('picture', this.selectedFile)

            return axios.put(
              'http://localhost:3000/users/' + this.posts.userId + '/picture',
              formData
            )
          })
          .then((response) => {
            // Handle the response after successful upload
            console.log('Image uploaded successfully')
            console.log(this.posts.userId)
          })
          .catch((error) => {
            // Handle the error if the upload fails
            console.error('Error uploading image', error)
          })
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 600;
  font-size: 3vw;
}
.acccontainer {
  display: flex;
  flex-direction: column;
  padding: 5vw;
  height: 80vh;
  width: 100%;
  align-items: center;
  justify-content: center;
}
@media (width<700px) {
  .acccontainer {
    margin-top: 5vh;
  }
}
.row {
  display: flex;
  width: 60%;
  flex-direction: column;
  margin-bottom: 0.5vh;
}
.head {
  flex-direction: row !important;
}
h3 {
  font-size: max(1.5vw, 16pt);
}
.photo {
  border: 0;
  border-radius: 100%;
  width: 40%;
  margin-bottom: 10vh;
  /*height:19vh;*/
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  aspect-ratio: 1 / 1;
}
.title {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}
input {
  border-radius: 0.5vw;
  border: 2px solid var(--light-blue);
  height: 30px;
  width: 100%;
  color: #000 !important;
  font-size: max(1.25vw, 14pt);
  background: rgba(255, 255, 255, 0.3);
  padding-left: 20px;
  padding-right: 20px;
  transition: all 0.5s ease;
}
input::placeholder {
  color: white;
}
.file {
  height: 100%;
  padding: 1vw;
}
button {
  width: 100%;
  margin-top: 1vh;
  background-color: var(--light-blue);
  border: 0;
  color: var(--font-dark) !important;
  border-radius: 0.5vw;
  height: 30px;
  font-size: max(1.25vw, 14pt);
}
button:hover {
  background-color: var(--light-pink);
}
@media (width<700px) {
  input {
    font-size: 12pt;
  }
}
</style>
