<template>
    <TopBar short inStore :barText="'PORUKE'"/>
<div class="app">
  <!-- <h1>Chat App</h1> -->
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