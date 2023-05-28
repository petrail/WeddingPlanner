<template>
    <TopBar short inStore :barText="'PORUKE'"/>
<div class="app">
  <h1>Chat App</h1>
    <div class="contacts">
      <ChatContactList @openChat="openChat"/>
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
        users: [],
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
  },
  methods: {
    openChat(contact){
      //Na osnovu contacta pribavi chat sa baze i stavi
      //currentActiveChat = getChat();
      console.log(contact);
    },
    send(msg){
      this.currentActiveChat.messages.push(msg);
    }
  }
};
</script>
<style scoped>
.app {
  margin-top:40vh;
  width:100vw;
  font-family: Arial, sans-serif;
  padding:5vw;
  display:flex;
  flex-wrap:wrap;
}
.contacts{
  width:25%;
  min-height:60vh;
  max-height:60vh;
  margin-top:5vh;
  margin-right:5%;
}
@media (width<700px){
  .contacts{
    margin-right:0 !important;
  }
  .messages{
    width:75% !important;
  }
}
.messages{
  width:70%;
  max-height:60vh;
  min-height:60vh;
}
h1 {
  text-align: center;
  width:100vw;
}
</style>