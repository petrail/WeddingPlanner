<template>
  <div class="container">
    <h1>Korisnici</h1>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="table-container">
      <table class="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ime i prezime</th>
            <th>Korsinicko ime</th>
            <th>Email</th>
            <th>Obrisi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user._id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="deleteUser(user._id)" class="delete-button">Obrisi</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Service from '../Service'

export default {
  name: 'Service',
  data() {
    return {
      users: [],
      error: ''
    }
  },
  async created() {
    try {
      this.users = await Service.getAllUsers()
    } catch (error) {
      this.error = error.message
    }
  },
  methods: {
    async deleteUser(userId) {
      try {
        await Service.deleteUser(userId)
        this.users = this.users.filter((user) => user._id !== userId)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 5%;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.table-container {
  overflow-x: auto;
}

table.users-table {
  width: 100%;
  border-collapse: collapse;
}
button {
  height: 30px;
  width: 80%;
}
table.users-table th,
table.users-table td {
  border: 1px solid #b59f93;
  background-color: #ddbaa7;
  padding: 10px;
  white-space: nowrap;
}

table.users-table th {
  background-color: #c38a77;
  color: white;
  font-size: 13px;
}

.delete-button {
  background-color: #c38a77;
  color: white;
  border: none;
  padding: 0px 20px;
  font-size: 14px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: rgb(208, 77, 182);
}

.delete-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgb(228, 87, 199);
}
</style>
