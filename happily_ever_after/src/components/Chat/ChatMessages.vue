<template>
  <div class="chatContainer">
  <h2>{{ otherUser }}</h2>
  <div class="chat-messages">
    <div v-for="(message,index) in currentActiveChat" :key="index" :class="isMyMessage(message)?'messageRow me':'messageRow other'">
      <div :class="message.me?'message myMsg':'message otherMsg'">
        <h4 class="person" v-if="!isMyMessage(message)">{{ message.user.name }} :</h4>
        <h4 class="person" v-else>Ja:</h4>
        <p>{{ message.date }}</p>
        <h4 class="text">{{ message.content }}</h4>
      </div>
    </div>
  </div>
  <div class="input">
    <input class="inputM" type="text" v-model="msg" placeholder="Message"/>
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
    },
    otherUser:{
      type:String,
      default:''
    },
    myID:{
      type:String,
      default:''
    }
  },
  data(){
    return{
      msg:'',
    }
  },
  methods:{
    isMyMessage(msg){
      return msg.user.id===this.myID;
    },
    formatDateTime(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');

        const formattedDateTime = `${day}.${month}.${year} ${hour}:${minute}`;
        return formattedDateTime;
    },
    send(){
      let date = new Date();
      date = this.formatDateTime(date);
      const newMsg = {content:this.msg, date: date}
      this.msg='';
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
  height:80vh;
}
.chat-messages {
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
  padding:0.25vw;
  padding-left:1vw;
  padding-right:1vw;
  width:50%;
  min-height:5vh;
  border-radius:0.5vw;
  overflow-wrap: break-word;
  box-shadow: 15px 50px 21px rgba(0, 0, 0, 0.01), 9px 28px 18px rgba(0, 0, 0, 0.03), 4px 12px 13px rgba(0, 0, 0, 0.04), 1px 3px 7px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);
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
.inputM{
  height:48px;
  padding:5px;
  border:1px solid var(--light-pink);
  border-radius:.5vw;
  width:80%;
  margin-right:5%;
  margin-left:5%;
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

