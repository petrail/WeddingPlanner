<template>
  <TopBar inStore :barText="'USLUGE'" />
  <div class="content">
    <Services />
  </div>
  <Footer />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Services from '../components/ServicesTable.vue'
import Service from '../components/AdminPage.vue'
import TopBar from '../components/TopBar.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'ServicesTableView',
  components: {
    TopBar,
    Contact,
    Footer,
    Service,
    Services
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
.kontakt {
  width: 100vw;
  padding: 3vw;
  display: flex;
}
.sub {
  margin-bottom: 2vh;
}
p {
  font-size: 16pt;
}
h2 {
  font-size: 20pt;
  font-weight: 600;
}
.img {
  width: 48%;
  margin-right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 80%;
}
.info {
  width: 50%;
  padding: 3vw;
}
.content {
  margin-top: 80vh;
}
@media (max-width: 600px) {
  table.users-table th,
  table.users-table td {
    font-size: 12px;
    padding: 8px;
  }

  button.delete-button {
    height: 25px;
    width: 80px;
    font-size: 12px;
  }
}

@media (max-width: 600px) {
  table.users-table th,
  table.users-table td {
    white-space: normal;
    font-size: 12px;
    padding: 8px;
  }

  button.delete-button {
    height: 25px;
    width: 80px;
    font-size: 12px;
  }
}

@media (max-width: 400px) {
  table.users-table th,
  table.users-table td {
    font-size: 10px;
    padding: 6px;
  }

  button.delete-button {
    height: 22px;
    width: 70px;
    font-size: 11px;
  }
}
</style>
