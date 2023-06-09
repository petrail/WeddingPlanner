<template>
    <div class="container">
    <h1>Users</h1>
    <hr>
    <p class ="error" v-if = "error"> {{  error }}</p>
    <div class = "posts-container">
    <div class="post"
    v-for="(post, index) in posts"
    v-bind:item = "post"
    v-bind:index="index"
    v-bind:key="post._id">
    {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/ ${post.createdAt.getFullYear()}` }}
    <p class= "text">{{ post.name }}</p>
    <p class= "text">{{  post.lastname }}</p>
    <p class= "text">{{ post.email }}</p>
    <p class= "text">{{  post.password}}</p>
    <p class= "text">{{  post.phoneNumber }}</p>

    </div>
</div>
</div>
</template>

<script>
/*import Service from '../Service';

export default {
    name: 'Service',
    data() {
        return {
            posts: [],
            error: '',
        }
    },
    async created() {
        try {
            this.posts = await Service.getUsers()
        } catch (error) {
            this.error = error.message;
        }
    }
}
</script>*/

<style scoped>
 div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding:  10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color:  #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 0;
}

  </style>
  