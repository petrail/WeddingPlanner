<template>
    <div>
    <input class="bar" type="text" v-model="searchQuery" placeholder="Pretraži...">
    <button class="search" @click="handleInput">
      <img src="src/assets/search.png"/>
    </button>
    </div>
    
  </template>
  
  <script>
  export default {
    name: "SearchBar",
    data() {
      return {
        searchQuery: "",
      };
    },
    methods: {
      handleInput() {
        this.$emit('search',this.searchQuery);
      }
    },
    emits:['search']
  };
  </script>
  
<style scoped>  
div{
  display:flex;
  width:100%;
}
.bar {
    padding: 8px;
    width: 70%;
    border: 2px solid #ccc;
    border-radius: .7vw;
}
.search{
  width:40px;
  height:40px;
  border-radius:.5vw;
  padding:0;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-left:1vw;
}
img{
  width:25px;
  height:25px;
}
@media (width<700px){
    .bar{
        padding: 8px;
        width:100%;
        border: 2px solid #ccc;
        border-radius: 1vw;
    }
    }
</style>
  