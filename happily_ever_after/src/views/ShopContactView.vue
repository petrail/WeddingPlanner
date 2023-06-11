<template>
  <TopBar short inStore :barText="'KONTAKT'" />
  <div class="content">
    <Contact />
    <div class="kontakt">
      <div class="img">
        <img src="../assets/contact.jpg" />
      </div>
      <div class="info">
        <p class="sub">Povežite se s nama i iskusite vrhunsku uslugu!</p>
        <p>Adresa: Bulevar Nemanjića 15, Niš</p>
        <p>Telefon: +381649974169</p>
        <p>Email: theappangels@gmail.com</p>
        <p>Otvoreno: Pon - Sub: 8h-20h</p>
      </div>
    </div>
  </div>
  <Footer inStore />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'ShopContactView',
  components: {
    TopBar,
    Contact,
    Footer
  },
  props: {
    inStore: {
      type: Boolean,
      default: false
    }
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
  margin-top: 40vh;
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
