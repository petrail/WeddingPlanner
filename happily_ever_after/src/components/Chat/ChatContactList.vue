<template>
  <div class="chatListContainer">
    <div class="contact" v-for="(contact,index) in this.contactList" :key="index">
        <Contact :contact="contact"/>
    </div>
  </div>
</template>

<script>
import Contact from './Contact.vue'
export default {
    name:'ContactList',
components:{
    Contact
},
  data() {
    return {
      newMessage: "",
      contactList:[
        {contactImg:'src/assets/liked.png',contactName:'Neko Nekic',lastMsg:'Hej!'},
        {contactImg:'src/assets/liked.png',contactName:'Neko Nekic',lastMsg:'Hej!'},
        {contactImg:'src/assets/liked.png',contactName:'Neko Nekic',lastMsg:'Hej!'},
        {contactImg:'src/assets/liked.png',contactName:'Neko Nekic',lastMsg:'Hej!'},]
    };
  },
  methods: {
    sendMessage() {
      this.$emit("new-message", this.newMessage);
      this.newMessage = "";
    }
  }
};
</script>

<style>
.chatListContainer{
    max-height:80vh;
    height:80vh;
    width:20vw;
    overflow-y:auto;
    border: 2px solid var(--dark-purple);
}
.contact{
    width:100%;
    height:15%;
    margin-bottom:1vh;
}
</style>
