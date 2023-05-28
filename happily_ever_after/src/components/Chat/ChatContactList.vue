<template>
  <div class="chatListContainer">
    <div class="contact" v-for="(contact,index) in this.contactList" :key="index">
        <Contact @openChat="openChat(contact)" :contact="contact"/>
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
        {contactImg:'src/assets/services/serv1.jpeg',contactName:'Neko Nekic',lastMsg:'Hej!'},
        {contactImg:'src/assets/services/serv1.jpeg',contactName:'Neko Nekic',lastMsg:'Hej!'},
        {contactImg:'src/assets/services/serv1.jpeg',contactName:'Neko Nekic',lastMsg:'Hej!'},
        {contactImg:'src/assets/services/serv1.jpeg',contactName:'Neko Nekic',lastMsg:'Hej!'},]
    };
  },
  methods: {
    sendMessage() {
      this.$emit("new-message", this.newMessage);
      this.newMessage = "";
    },
    openChat(contact){
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
}
.contact{
    width:100%;
    height:15%;
    margin-bottom:1vh;
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
