<template>
    <TopBar short inStore :barText="'PORUKE'"/>
  <div class= "content">
    <h1>Chat</h1>
    <chat-messages :messages="messages" />
    <chat-input @new-message="addMessage" />
    <user-list :users="users" />
  </div>
    <Footer inStore/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '../components/TopBar.vue'
import ChatMessages from "../components/Chat/ChatMessages.vue";
import ChatInput from "../components/Chat/ChatInput.vue";
import UserList from "../components/Chat/UserList.vue";
import Footer from '../components/Footer.vue';

export default {
    name: 'ChatView',
    components: {
    TopBar,
    ChatMessages,
    ChatInput,
    UserList,
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
.content{
  margin-top: 40vh;
}
</style>