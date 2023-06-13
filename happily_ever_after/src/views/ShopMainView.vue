<template>
  <TopBar short inStore :barText="'Otkrijte beskrajne mogućnosti za vaše venčanje'" />
  <img v-if="!loaded" class="rings" src="src/assets/navbar/wedding.png" />
  <div class="content">
    <div v-if="clicked" class="back">
      <button class="link" @click="backToCateg">
        <img class="backImg" src="../assets/back.png" />
        Vrati se na sve ponude
      </button>
    </div>
    <div v-if="!clicked" class="heading">
      <h1 class="title">Naše usluge</h1>
      <img class="divide" src="../assets/Divider.png" />
      <p>
        Naš stručni tim organizatora venčanja je tu da vam pruži svoje znanje i iskustvo kako biste
        imali bezbrižno iskustvo planiranja venčanja. Pomažemo vam da definišete vašu viziju
        venčanja i pretvorimo je u stvarnost. Bez obzira da li želite romantičnu ceremoniju na
        otvorenom, elegantnu svečanost u dvorcu ili tematsko venčanje koje odskače od svih drugih,
        mi ćemo vam pomoći da sve to ostvarite.
      </p>
      <p>
        Naš cilj je da vam omogućimo da se opustite i uživate u svakom trenutku vašeg venčanja,
        znajući da je sve prepušteno profesionalcima. Naša strast je da stvorimo venčanje koje
        odražava vašu ljubav i jedinstvenu priču. Vaše zadovoljstvo nam je najvažnije, i zato radimo
        naporno da premašimo vaša očekivanja i ostvarimo sve vaše želje.
      </p>
    </div>
    <h1 class="uputstvo" v-if="!clicked">Izaberite kategoriju</h1>
    <Gallery v-if="!clicked" hiddenBar clickable tall :imgs="imgs" @clicked="onClick" />
    <div class="container" v-else>
      <h2>{{ this.selected }}</h2>
      <img class="divide" src="../assets/Divider.png" />
      <div class="search">
        <div class="bar">
          <div class="text">
            <h3>Pretražite usluge</h3>
          </div>
          <SearchBar @search="search" />
        </div>
      </div>
      <div class="main">
        <div class="filter"><CategoryFilter :subservices="allSubservices" @filter="filter" /></div>
        <div class="list">
          <CategoryList
            @back="back()"
            @next="next()"
            @like="addToLiked"
            @unlike="removeFromLiked"
            @reserve="addToReserved"
            :can_go_back="this.can_go_back"
            :can_go_next="this.can_go_next"
            :predmeti="this.predmeti"
            :liked="this.liked"
            :reserved="this.reserved"
          />
        </div>
      </div>
    </div>
  </div>
  <Footer inStore />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import TopBar from '../components/TopBar.vue'
import Gallery from '../components/Gallery.vue'
import SearchBar from '../components/Shop/SearchBar.vue'
import CategoryFilter from '../components/Shop/CategoryFilter.vue'
import CategoryList from '../components/Shop/CategoryList.vue'
import Footer from '../components/Footer.vue'
import UserService from '../Service.js'
export default {
  name: 'ShopMainView',
  components: {
    TopBar,
    Gallery,
    SearchBar,
    CategoryFilter,
    CategoryList,
    Footer
  },
  data() {
    return {
      imgs: [
        { url: 'src/assets/services/serv1.jpeg', opis: 'Muzika', route: '/shopmain' },
        { url: 'src/assets/services/serv2.jpg', opis: 'Restorani', route: '/shopmain' },
        { url: 'src/assets/services/serv3.jpg', opis: 'Burme', route: '/shopmain' },
        { url: 'src/assets/services/serv8.jpg', opis: 'Dekoracija', route: '/shopmain' },
        { url: 'src/assets/services/serv5.jpg', opis: 'Za mladu', route: '/shopmain' },
        { url: 'src/assets/services/serv7.jpg', opis: 'Za mladoženju', route: '/shopmain' },
        { url: 'src/assets/services/serv6.jpg', opis: 'Matičari', route: '/shopmain' },
        { url: 'src/assets/services/serv4.jpg', opis: 'Fotografisanje', route: '/shopmain' },
        { url: 'src/assets/services/serv9.jpg', opis: 'Časovi plesa', route: '/shopmain' },
        { url: 'src/assets/services/serv10.jpeg', opis: 'Kozmetički saloni', route: '/shopmain' },
        { url: 'src/assets/services/serv11.jpg', opis: 'Torte', route: '/shopmain' },
        { url: 'src/assets/services/serv12.jpg', opis: 'Ostalo', route: '/shopmain' }
      ],
      predmeti: [],
      liked: [],
      reserved: [],
      clicked: false,
      selected: '',
      type: '',
      curr_page: 0,
      per_page: 12,
      can_go_back: false,
      can_go_next: true,
      searchQuery: '',
      sort: '',
      minPrice: null,
      maxPrice: null,
      subservice: null,
      allSubservices: [],
      user_id: '',
      loaded: true
    }
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/user/current', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      console.log(response.data)
    } catch (error) {
      console.log('Error:', error.response.data)
    }
  },
  async mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    async addToLiked(id) {
      console.log('stampam id: ' + id)
      const token = localStorage.getItem('token')
      const users = await UserService.getUsers(token)
      let user = ''
      if (users.length > 0) {
        user = users[0]._id
      }
      if (this.liked.includes(id)) return
      this.liked.push(id)
      try {
        await axios.put('http://localhost:3000/user/add_liked', {
          user_id: user,
          service_id: id
        })
      } catch (error) {
        console.log('Error:', error.response.data)
      }
    },
    async addToReserved(id) {
      const token = localStorage.getItem('token')
      const users = await UserService.getUsers(token)

      let user = ''
      if (users.length > 0) {
        user = users[0]._id
      }
      if (this.reserved.includes(id)) return
      this.reserved.push(id)
      try {
        await axios.put('http://localhost:3000/user/add_reserved', {
          user_id: user,
          service_id: id
        })
      } catch (error) {
        console.log('Error:', error.response.data)
      }
    },
    async removeFromLiked(id) {
      const token = localStorage.getItem('token')
      const users = await UserService.getUsers(token)
      let user = ''
      if (users.length > 0) {
        user = users[0]._id
      }
      if (!this.liked.includes(id)) return
      const index = this.liked.indexOf(id)
      this.liked.splice(index, 1)
      try {
        const resp = await axios.put('http://localhost:3000/user/remove_liked', {
          user_id: user,
          service_id: id
        })
        console.log(resp)
      } catch (error) {
        console.log('Error:', error.response.data)
      }
    },
    async fetchItems() {
      try {
        this.loaded = false
        let body = {}
        body.type = this.type
        body.startIndex = this.curr_page * this.per_page
        body.count = this.per_page
        if (this.searchQuery) body.name = this.searchQuery
        if (this.sort) body.sort = this.sort
        if (this.minPrice) body.minPrice = this.minPrice
        if (this.maxPrice) body.maxPrice = this.maxPrice
        if (this.subservice) body.subservice = this.subservice

        await axios.put('http://localhost:3000/service/get_service_filtered', body).then((v) => {
          this.predmeti = v.data.predmeti
          this.can_go_back = this.curr_page > 0
          this.can_go_next = v.data.has_more
          this.loaded = true
        })
      } catch (error) {
        console.log(error)
      }
    },
    async next() {
      this.curr_page += 1
      this.fetchItems()
    },
    async back() {
      this.curr_page -= 1
      this.fetchItems()
    },
    async getSubservices() {
      try {
        this.allSubservices = await axios.put(
          'http://localhost:3000/service/get_all_subcategories',
          {
            type: this.type
          }
        )
        this.allSubservices = this.allSubservices.data
        console.log(this.allSubservices)
      } catch (error) {
        console.log(error)
      }
    },
    async onClick(img) {
      try {
        this.clicked = true
        this.selected = img.opis
        window.scrollTo(0, 0)
        this.type = img.opis
        if (this.type == 'Za mladoženju') {
          this.type = 'Za mladozenju'
        } else if (this.type == 'Matičari') {
          this.type = 'Maticari'
        } else if (this.type == 'Časovi plesa') {
          this.type = 'Casovi plesa'
        } else if (this.type == 'Kozmetički saloni') {
          this.type = 'Kozmeticki salon'
        }
        this.fetchItems()
        this.getSubservices()
        const token = localStorage.getItem('token')
        const users = await UserService.getUsers(token)
        if (users.length > 0) {
          this.liked = users[0].liked
          this.reserved = users[0].reserved
        }
      } catch (error) {
        console.log('Error:', error.response.data)
      }
    },
    async search(searchQuery) {
      this.searchQuery = searchQuery
      this.curr_page = 0
      this.fetchItems()
    },
    async filter(sort, minPrice, maxPrice, subservice) {
      this.curr_page = 0
      this.sort = sort
      this.minPrice = minPrice
      this.maxPrice = maxPrice
      this.subservice = subservice
      console.log(this.sort)
      this.fetchItems()
    },
    backToCateg() {
      this.clicked = false
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
.rings{
  animation:rotate 2s linear infinite;
  position:absolute;
  top:70%;
  left:50%;
  width:50px;
  height:50px;
  z-index:999;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.uputstvo {
  margin-top: 5vh;
  margin-bottom: 5vh;
  text-align: center;
  font-weight: 600;
}
.text {
  display: flex;
  align-items: center;
  margin-bottom: 1vh;
}
h3 {
  color: var(--font-dark);
  font-size: max(1.25vw, 13pt);
  font-weight: 600;
  margin: 0;
}
.back {
  padding-left: 1vw;
  margin-bottom: 1vh;
}
.backImg {
  color: var(--dark-purple);
  height: 30px;
  margin-right: 10px;
}
.heading {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10vw;
  padding-right: 10vw;
}
P {
  margin-top: 5vh;
  font-size: max(1.25vw, 13pt);
  text-align: center;
}
.title {
  font-family: 'HHoney';
  font-size: max(5vw, 48pt);
  width: 100%;
  font-weight: light;
  text-align: center;
}
.divide {
  width: 15%;
  min-width: 150px;
  opacity: 0.5;
  margin-bottom: 5vh;
}
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw;
  padding-top: 0;
}
.search {
  width: 100%;
  height: 5vh;
  margin-top: 2vh;
  margin-bottom: 7vh;
}

.bar {
  width: 50%;
  height: 100%;
}
@media (width<1000px) {
  .search {
    margin-bottom: 3vh !important;
  }
}
@media (width<700px) {
  .search {
    margin-bottom: 5vh !important;
  }
  .bar {
    width: 100%;
  }
}
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 70vh;
}
.list {
  width: 100%;
}
.filter {
  width: 100%;
  margin-right: 5%;
}
.content {
  margin-top: 45vh;
}
h2 {
  text-align: center;
  font-size: max(5vw, 36pt);
  font-weight: bold;
  color: var(--font-dark);
  padding: 3vw;
  padding-bottom: 0;
  padding-top: 0;
  width: 30%;
  font-family: 'HHoney';
}
.link {
  width: 100%;
  font-size: min(5vw, 17pt);
  color: var(--font-dark);
  border: 0;
  background-color: transparent;
  transition: all 1s ease;
  padding: 0.5vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.link:hover {
  color: var(--font-dark);
  border: 0;
  background-color: var(--white-pink);
  border-radius: 0.7vw;
  padding: 0.5vw;
}
@media (width<700px) {
  h2 {
    text-align: center;
    width: 50%;
    font-weight: bold;
  }
}
</style>
