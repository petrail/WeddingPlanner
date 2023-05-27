<template>
  <div class="chat-messages">
    <div v-for="message in messages" :key="message.id" class="message">
      {{ message.content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style>
.chat-messages {
  margin-bottom: 20px;
}

.message {
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>

