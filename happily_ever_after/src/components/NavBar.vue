<template>
  <div :class="!transparency || !topOfPage || dropdownopen ? 'navbar scrolled' : 'navbar normal'">
    <div class="topbar">
      <div class="info">
        <img src="../assets/navbar/email.png" />
        <h3 v-if="screenWidth > 1000">Email: theappangels@gmail.com</h3>
        <img src="../assets/navbar/phone.png" />
        <h3 v-if="screenWidth > 1000">Pozovi nas: +381 649974169</h3>
      </div>
      <div class="register" v-if="hasLogin">
        <img src="../assets/navbar/login.png" />
        <router-link to="/login" class="login">Login</router-link>
        <img src="../assets/navbar/register.png" />
        <router-link to="/register">Register</router-link>
      </div>
      <div class="register" v-else>
        <img src="../assets/navbar/account.png" />
        <router-link to="/account" class="login">Nalog</router-link>
        <img src="../assets/navbar/logout.png" />
        <a href="" @click="logout">Logout</a>
      </div>
    </div>
    <div class="navitems">
      <div class="logo">
        <img class="rings" src="../assets/navbar/wedding.png" />
        <h2 :class="topOfPage ? '' : 'white'">Happily Ever After</h2>
      </div>
      <div class="nav">
        <ul v-if="inStore && screenWidth > 700">
          <li><router-link to="/shopmain">Proizvodi</router-link></li>
          <li v-if="!visible"><router-link to="/liked">Lajkovano</router-link></li>
          <li v-if="!visible"><router-link to="/reserved">Rezervisano</router-link></li>
          <li><router-link to="/chat">Poruke</router-link></li>
          <li v-if="!visible"><router-link to="/shopcontact">Kontakt</router-link></li>
          <li v-if="visible"><router-link to="/adminPage">Korisnici</router-link></li>
          <li v-if="visible"><router-link to="/servicesPage">Usluge</router-link></li>
        </ul>
        <!--DROPDOWN MENU-->

        <ul v-if="!inStore && screenWidth > 700">
          <li><router-link to="/">Početna</router-link></li>
          <li><router-link to="/about">O nama</router-link></li>
          <li><router-link to="/services">Usluge</router-link></li>
          <li><router-link to="/contact">Kontakt</router-link></li>
        </ul>

        <div @click="toggleDropdown" class="dropdownBtn" v-if="screenWidth <= 700"></div>
      </div>
    </div>
    <div :class="dropdownopen ? 'dropdown open' : 'dropdown closed'" v-if="screenWidth <= 700">
      <div v-if="inStore && dropdownopen" class="dropdownMenu">
        <router-link to="/shopmain">Proizvodi</router-link>
        <router-link v-if="!visible" to="/liked">Lajkovano</router-link>
        <router-link v-if="!visible" to="/reserved">Rezervisano</router-link>
        <router-link to="/chat">Poruke</router-link>
        <router-link v-if="!visible" to="/shopcontact">Kontakt</router-link>
        <router-link v-if="visible" to="/adminPage">Korisnici</router-link>
        <router-link v-if="visible" to="/servicesPage">Usluge</router-link>
      </div>
      <!--DROPDOWN MENU-->
      <div v-else-if="dropdownopen" class="dropdownMenu">
        <router-link to="/">Početna</router-link>
        <router-link to="/about">O nama</router-link>
        <router-link to="/services">Usluge</router-link>
        <router-link to="/contact">Kontakt</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    hasLogin: {
      type: Boolean,
      default: false
    },
    inStore: {
      type: Boolean,
      default: false
    },
    transparency: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    visible() {
      return localStorage.getItem('isCoord') === 'true'
    },
  },
  mounted() {
    this.updateScreenWidth()
    this.onScreenResize()
    this.isCoord = localStorage.getItem('isCoord')
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('isCoord')
      this.$router.push('/')
    },
    onScreenResize() {
      window.addEventListener('resize', () => {
        this.updateScreenWidth()
      })
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth
    },
    toggleDropdown() {
      console.log('hej')

      this.dropdownopen = !this.dropdownopen
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.topOfPage) this.topOfPage = false
      } else {
        if (!this.topOfPage) this.topOfPage = true
      }
    }
  },
  data() {
    return {
      screenWidth: 0,
      dropdownopen: false,
      topOfPage: true
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.nomargin{
  margin:0 !important;
}
ul li,
ol li {
  list-style: none;
  display: inline;
  margin:1vh;
}
ul {
  padding-inline-start: 0 !important;
}
.navbar {
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  transition: all 0.5s ease;
  z-index: 900;
}

.normal {
  background-color: var(--navbar-color);
}
.scrolled {
  background-color: var(--light-pink);
}
.topbar {
  width: 100vw;
  display: flex;
  padding: 0.5vh;
  border-bottom: 0.5pt solid rgba(131, 131, 131, 0.479);
  padding-left: 4vw;
  padding-right: 4vw;
}
.navitems {
  width: 100vw;
  display: flex;
  flex-direction: row;
  padding-top: 1vh;
  padding-bottom: 1.5vh;
}
h2 {
  font-weight: 600;
  font-family: 'HHoney';
  font-size: max(2vw, 20pt);
  opacity: 0.6;
}
.rings {
  width: 30px;
  height: 30px;
}
h3 {
  margin: 0;
  font-size: 12pt;
  margin-right: 1vw;
  color: var(--font-dark);
}
.nav {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 60vw;
  padding-right: 5vw;
}
.logo {
  width: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: min(3vw, 12pt);
}
@media (width<700px) {
  .logo {
    width: 70vw !important;
  }
  .nav {
    width: 30vw !important;
  }
}
a {
  font-size: min(5vw, 15pt);
  color: var(--font-dark);
  padding: 5px;
}
.info,
.register {
  display: flex;
  width: 50vw;
  align-items: center;
}
.info {
  justify-content: left;
}
.register {
  justify-content: right;
}
.login {
  margin-right: 2vw;
}
img {
  height: 20px;
  margin-right: 10px;
}
.dropdownBtn {
  height: 32px;
  width: 32px;
  background-image: url('../assets/navbar/menu.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 5;
}
.dropdown {
  width: 100vw;
  transition: all 0.5s ease;
}
.closed {
  height: 0;
  max-height: 0;
}
.open {
  height: 250px;
  max-height: 250px;
}
.dropdownMenu {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 200px;
  padding: 2vw;
  text-align: left !important;
  margin-top: 20px;
}
.dropdownMenu a {
  margin-bottom: 1vh;
}
a:hover {
  background-color: var(--navbar-hover-bg);
  color: var(--navbar-hover-cl);
  border: 0;
  border-radius: 1vw;
}
</style>
