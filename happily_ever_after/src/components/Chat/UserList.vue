<template>
  <div class="user-list">
    <h3>Users</h3>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style>
.user-list {
  margin-bottom: 20px;
}

.user-list h3 {
  margin-bottom: 10px;
}
</style>
