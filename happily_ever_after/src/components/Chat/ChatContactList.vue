<template>
  <div class="chatListContainer">
    <h1>Kontakti</h1>
    <SearchBar/>
    <div class="contact" v-for="(contact,index) in this.contactList" :key="index">
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
  data() {
    return {
      newMessage: "",
      contactList:[
        {contactImg:'src/assets/services/serv1.jpeg',contactName:'Neko Nekic',lastMsg:'Hej!'},
        {contactImg:'src/assets/services/serv1.jpeg',contactName:'Neko Nekic',lastMsg:'Hej!'},
        {contactImg:'src/assets/services/serv1.jpeg',contactName:'Neko Nekic',lastMsg:'Hej!'},
        {contactImg:'src/assets/services/serv1.jpeg',contactName:'Neko Nekic',lastMsg:'Hej!'},],
      clicked:null
    };
  },
  created(){
    this.clicked=this.contactList[0];
  },
  methods: {
    sendMessage() {
      this.$emit("new-message", this.newMessage);
      this.newMessage = "";
    },
    openChat(contact){
      this.clicked=contact;
      this.$emit('openChat',contact);
    },
    emits:['openChat']
  }
};
</script>

<style>
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
