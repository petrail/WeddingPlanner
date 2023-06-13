<template>
    <TopBar short inStore :barText="'PORUKE'"/>
    <img v-if="!loaded" class="rings" src="src/assets/navbar/wedding.png" />
<div class="app">
  <!-- <h1>Chat App</h1> -->
    <div class="contacts">
      <ChatContactList v-if="loaded" @back="back" @search = "search" :contacts="contacts" @openChat="openChat"/>
    </div>
    <div class="messages">
      <ChatMessages v-if= "selected" @send="send" :otherUser="this.otherUser" :myID="this.myID" :currentActiveChat="this.messages"/>
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
import { registerRuntimeCompiler, toHandlers } from 'vue';

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
        me:null,
        myID:'',
        otherUser:'',
        selected:false,
        chat_id:'',
        loaded:false,
    };
  },
  props:{
    inStore:{
      type:Boolean,
      default:true
    }
  },
  async mounted () {
    window.scrollTo(0, 0)
    this.getContacts();
  },

  methods: {
    async getMe(){
      const token = localStorage.getItem('token')
      const users = await UserService.getUsers(token)
      if (users.length > 0) {
        this.me = users[0];
        this.myID = this.me._id;
      }
    },
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
    async openChat(user){
      this.selected=true;
      if(!this.me) return;
      if(!user) return;
      this.chat = await axios.put('http://localhost:3000/chat/get_chat', 
        { first_id:this.me._id,
          second_id:user._id
        });
      this.otherUser =user.name;
      this.messages=this.chat.data.messages;
      this.chat_id = this.chat.data.id;
      this.getMe();
    },
    async send(msg){
      msg.user={
        name:this.me.name,
        id:this.me._id,
      }
      if(!this.messages) this.messages=[];
      this.messages.push(msg);
      await axios.put('http://localhost:3000/chat/add_message', 
        { 
          id:this.chat_id,
          msg:msg
        });
    },
    async getContacts(){
      try{
        this.loaded=false;
        const token = localStorage.getItem('token')
        const users = await UserService.getUsers(token)
        if (users.length > 0) {
          this.me = users[0];
          this.myID = this.me._id;
        }
        await axios.put('http://localhost:3000/user/get_users_with_ids', 
          { ids:this.me.chats }).then(v=>{
            this.loaded=true;
            this.contacts=v.data;
            
          });
        }
      catch(error){
        console.log(error)
      }
    }
  }
};
</script>
<style scoped>
.rings{
  animation:rotate 2s linear infinite;
  position:absolute;
  top:40%;
  left:50%;
  width:50px;
  height:50px;
  z-index:999;
}
@keyframes rotate{
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
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