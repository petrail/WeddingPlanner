<template>
  <div>
    <div v-for="message in messages" :key="message.id">
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
