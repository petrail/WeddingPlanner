<template>
  <div class="chatListContainer">
    <h1>Kontakti</h1>
    <button class="link" @click="back" v-if="this.searched"> 
        <img class="backImg" src="src/assets/back.png"/>
    </button>
    <SearchBar @search="search"/>
    <div class="contact" v-for="(contact,index) in contacts" :key="index">
        <Contact :clicked="this.clicked" @openChat="openChat(contact)" :contact="contact"/>
    </div>
  </div>
</template>

<script>
import Contact from './Contact.vue'
import SearchBar from '../Shop/SearchBar.vue'
export default {
    name:'ContactList',
  components:{
      Contact, SearchBar
  },
  props:{
    contacts:{
      type:Array,
      default:[],
    }
  },
  data() {
    return {
      newMessage: "",
      clicked:null,
      searched:false,
    };
  },
  created(){
    this.clicked=this.contacts[0];
  },
  methods: {
    back(){
      this.searched=false;
      this.$emit('back');
    },
    search(searchQuery){
      this.searched=true;
      this.$emit('search',searchQuery);
    },
    sendMessage() {
      this.$emit("new-message", this.newMessage);
      this.newMessage = "";
    },
    openChat(contact){
      this.clicked=contact;
      this.$emit('openChat',contact);
    },
    emits:['openChat','search','back']
  }
};
</script>

<style>
.backImg{
  color:var(--dark-purple);
  height: 30px;
}
.link{
  width:100%;
  color:var(--font-dark);
  border:0;
  background-color: transparent;
  transition: all 1s ease;
  display:flex;
  align-items: center;
  justify-content: flex-start;
}
.chatListContainer{
    max-height:80vh;
    width:100%;
    height:100%;
    overflow-y:auto;
    padding:1vw;
    box-shadow: 243px 0px 146px rgba(0, 0, 0, 0.01), 108px 0px 108px rgba(0, 0, 0, 0.02), 27px 0px 59px rgba(0, 0, 0, 0.02), 0px 0px 0px rgba(0, 0, 0, 0.02);
}
.contact{
    width:100%;
    margin-bottom:1vh;
    margin-top:2vh;
}
h1{
  margin-bottom:2vh;
  font-weight: bold;
}
@media (width<700px){
  .chatListContainer{
    width:14vw;
  }
  .contact{
    aspect-ratio: 1/1;
    height:auto !important;
  }
}
</style>
