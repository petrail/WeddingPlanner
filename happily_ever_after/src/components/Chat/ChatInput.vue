<template>
  <div class="chat-input">
    <input type="text" v-model="newMessage" placeholder="Enter your message" />
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: ""
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
.chat-input {
  display: flex;
  margin-bottom: 20px;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.chat-input button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
