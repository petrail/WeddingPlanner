<template>
  <div class="container">
    <h1>Usluge</h1>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="button-container">
      <button @click="addService()" class="delete-button">Dodaj</button>
    </div>
    <div class="table-container">
      <table class="users-table">
        <thead>
          <tr>
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
    },
    addService() {
      this.$router.push({ path: `/addServicePage` })
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  padding:5vw;
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

.delete-button,
.add-button {
  background-color: #c38a77;
  color: white;
  border: none;
  padding: 0px 20px;
  font-size: 14px;
  cursor: pointer;
}

.delete-button:hover,
.add-button {
  background-color: #c38a77;
}

.delete-button:focus,
.add-button {
  outline: none;
  box-shadow: 0 0 0 2px #c38a77;
}

div.button-container {
  margin-bottom: 15px;
}
</style>
