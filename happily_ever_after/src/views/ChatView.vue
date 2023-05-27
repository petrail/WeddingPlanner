<template>
    <TopBar short inStore :barText="'PORUKE'"/>
<div class="app">
    <h1>Chat App</h1>
    <ChatContactList/>
  </div>
    <Footer inStore/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import ChatContactList from "../components/Chat/ChatContactList.vue";
import Footer from '../components/Footer.vue';

export default {
    name: 'ChatView',
    components: {
    TopBar,
    ChatContactList,
    Footer
  },
    data() {
    return {
      messages: [],
      users: []
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
    addMessage(message) {
      const newMessage = {
        id: this.messages.length + 1,
        content: message
      };
      this.messages.push(newMessage);
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
}

h1 {
  text-align: center;
}
</style>