<template>
  <div>
    <input type="text" v-model="newMessage" />
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