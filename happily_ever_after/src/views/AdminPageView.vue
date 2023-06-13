<template>
  <TopBar inStore :barText="'KORISNICI'" />
  <div class="content">
    <Service />
  </div>
  <Footer />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Service from '../components/AdminPage.vue'
import TopBar from '../components/TopBar.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'AdminPageView',
  components: {
    TopBar,
    Contact,
    Footer,
    Service
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
@media (width<700px) {
  .kontakt {
    flex-direction: column;
  }
  .img {
    width: 100%;
    margin: 0;
    margin-bottom: 2vh;
  }
  .info {
    width: 100%;
  }
}
</style>
