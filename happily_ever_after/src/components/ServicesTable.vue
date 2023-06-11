<template>
  <div class="container">
    <h1>Usluge</h1>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="button-container">
      <router-link to="/addServicePage" class="add-button">Dodaj uslugu</router-link>
    </div>
    <div class="table-container">
      <table class="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Naziv</th>
            <th>Tip</th>
            <th>Prodavnica</th>
            <th>Lokacija</th>
            <th>Broj telefona</th>
            <th>Obrisi</th>
            <th>Izmeni</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="service in services" :key="service._id">
            <td>{{ service._id }}</td>
            <td>{{ service.name }}</td>
            <td>{{ service.type }}</td>
            <td>{{ service.store }}</td>
            <td>{{ service.location }}</td>
            <td>{{ service.phoneNumber }}</td>
            <td>
              <button @click="deleteService(service._id)" class="delete-button">Obrisi</button>
            </td>
            <td>
              <button @click="changeService(service._id)" class="delete-button">Izmeni</button>
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
      services: [],
      error: ''
    }
  },
  async created() {
    try {
      this.services = await Service.getAllServices()
    } catch (error) {
      this.error = error.message
    }
  },
  methods: {
    async deleteService(serviceId) {
      try {
        await Service.deleteService(serviceId)
        this.services = this.services.filter((service) => service._id !== serviceId)
      } catch (error) {
        console.error(error)
      }
    },
    changeService(id) {
      this.$router.push({ path: `/changeServicePage/${id}` })
    }
  }
}
</script>

<style scoped>
div.container {
  max-width: 1315px; /* Increased max-width value */
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
  width: 100px;
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

div.button-container {
  margin-bottom: 15px;
}

button.add-button {
  background-color: #c38a77; /* Updated to pink color */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
}

button.add-button:hover {
  background-color: rgb(208, 77, 182); /* Updated hover color */
}
</style>
