<template>
  <div class="chatContainer">
  <h2>{{ currentActiveChat.otherUser }}</h2>
  <div class="chat-messages">
    <div v-for="(message,index) in currentActiveChat.messages" :key="index" :class="message.me?'messageRow me':'messageRow other'">
      <div :class="message.me?'message myMsg':'message otherMsg'">
        <h4 class="person" v-if="!message.me">{{ currentActiveChat.otherUser }} :</h4>
        <h4 class="person" v-else>Ja:</h4>
        <h4 class="text">{{ message.message }}</h4>
      </div>
    </div>
  </div>
  <div class="input">
    <input type="text" v-model="msg" placeholder="Message"/>
    <button @click="send()" class="btn">Send</button>
  </div>
</div>
</template>

<script>
export default {
  name:'ChatMessages',
  props: {
    currentActiveChat: {
      type: Object,
      default:null
    }
  },
  data(){
    return{
      msg:'',
    }
  },
  methods:{
    send(){
      const newMsg = {message:this.msg, me:true}
      this.$emit('send',newMsg);
    }
  },
  emits:['send']
};
</script>

<style>
.chatContainer{
  display: flex;
  flex-direction: column;
  width:100%;
  height:60vh;
}
.chat-messages {
  border: 1px solid var(--light-pink);
  display:flex;
  flex-direction: column;
  overflow-y: auto;
  padding:1vw;
  height:100%;
}

.messageRow {
  display:flex;
  width:100%;
  margin-bottom:1vh;
  align-items: center;

}
.me{
  justify-content: flex-end;
}
.other{
  justify-content: flex-start;
}
.message{
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  padding:1vw;
  padding-left:2vw;
  padding-right:2vw;
  width:50%;
  min-height:5vh;
  border-radius:0.5vw;
  overflow-wrap: break-word;
}
.myMsg{
  background-color:var(--white-pink);
}
.otherMsg{
  background-color: var(--light-pink);
}
.input{
  margin-top:2vh;
  height:48px;
  display:flex;
}
input{
  height:48px;
  padding:5px;
  border:1px solid var(--light-pink);
  border-radius:.5vw;
  width:80%;
  margin-right:5%;
}
button{
  background-color:var(--dark-purple);
  border-radius:.5vw;
  height:48px;
  width:15%;
  border:0;
  color:white;
}
</style>

