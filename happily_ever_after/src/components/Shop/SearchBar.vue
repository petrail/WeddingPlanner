<template>
    <div>
    <input class="bar" type="text" v-model="searchQuery" @input="handleInput" placeholder="Pretraži...">
    </div>
    
  </template>
  
  <script>
  export default {
    name: "SearchBar",
    data() {
      return {
        searchQuery: "",
        searchResults: []
      };
    },
    methods: {
      async handleInput() {
        // try {
        //   const response = await fetch(`/service/search/${this.searchQuery}`);
        //   if (response.ok) {
        //     const services = await response.json();
        //     console.log(result.name);
        //     this.searchResults = services; // Assuming the server returns an array of service objects
        //   } else {
        //     this.searchResults = [];
        //   }
        // } catch (error) {
        //   console.error(error);
        // }
      }
    }
  };
  </script>
  
<style scoped>  
.bar {
    padding: 8px;
    width: 100%;
    border: 2px solid #ccc;
    border-radius: .7vw;
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
  