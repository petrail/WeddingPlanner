<template>
    <div>
    <input class="bar" type="text" v-model="searchQuery" @input="handleInput" placeholder="Pretraži...">
    </div>
    
  </template>
  
  <script>
  export default{
      name: "SearchBar",
      
      
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
  