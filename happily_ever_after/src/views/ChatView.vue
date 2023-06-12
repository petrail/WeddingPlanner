<template>
    <TopBar short inStore :barText="'PORUKE'"/>
<div class="app">
  <!-- <h1>Chat App</h1> -->
    <div class="contacts">
      <ChatContactList @back="back" @search = "search" :contacts="contacts" @openChat="openChat"/>
    </div>
    <div class="messages">
      <ChatMessages @send="send" :currentActiveChat="currentActiveChat"/>
    </div>
  </div>
    <Footer inStore/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import ChatContactList from "../components/Chat/ChatContactList.vue";
import ChatMessages from "../components/Chat/ChatMessages.vue";
import Footer from '../components/Footer.vue';
import axios from 'axios'
import UserService from '../Service.js'

export default {
    name: 'ChatView',
    components: {
    TopBar,
    ChatContactList,
    Footer,
    ChatMessages
  },
  data() {
    return {
        messages: [],
        contacts: [],
        currentActiveChat:{
          messages:[{message:'Hej', me:true},{message:'Hej',me:false},{message:'Hej',me:false},{message:'Hej',me:true}],
          otherUser:"Neko",
        }
    };
  },
  props:{
    inStore:{
      type:Boolean,
      default:true
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.getContacts();
  },
  methods: {
    back(){
      this.getContacts();
    },
    async search(searchQuery){
      try{
        if(searchQuery==="") return;
        this.contacts = await axios.put('http://localhost:3000/user/filter_users_name', 
            { name:searchQuery });
        this.contacts=this.contacts.data;
      }
      catch(error){
        console.log(error);
      }
    },
    async openChat(id){
      const token = localStorage.getItem('token')
      const users = await UserService.getUsers(token)
      let user='';
      if (users.length > 0) {
          user = users[0].name
      }
      console.log(contact);
    },
    send(msg){
      this.currentActiveChat.messages.push(msg);
    },
    async getContacts(){
      try{
        const token = localStorage.getItem('token')
        const users = await UserService.getUsers(token)
        let chats=[];
        if (users.length > 0) {
          chats = users[0].chats;
        }
        this.contacts = await axios.put('http://localhost:3000/user/get_users_with_ids', 
          { ids:chats });
        this.contacts=this.contacts.data;
        }
      catch(error){
        console.log(error)
      }
    }
  }
};
</script>
<style scoped>
.app {
  margin-top:40vh;
  width:100vw;
  font-family: Arial, sans-serif;
  padding:2vw;
  display:flex;
  flex-wrap:wrap;
}
.contacts{
  width:20%;
  min-height:80vh;
  max-height:80vh;
  margin-top:5vh;
  margin-right:0;
}
.messages{
  width:80%;
  max-height:80vh;
  min-height:80vh;
}
h1 {
  text-align: center;
  width:100vw;
}
</style>