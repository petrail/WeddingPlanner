<template>
    <div class="categoryContainer">
        <label for="sort">Sortiranje</label>
        <select name="sort" v-model="sort">
            <option value="" selected>Standardno</option>
            <option value="asc">Prvo najniža cena</option>
            <option value="desc">Prvo najviša cena</option>
        </select>

        <label for="minPrice">Cena od</label>
        <input name="minPrice" v-model="minPrice" type="number"/>

        <label for="maxPrice">Cena do</label>
        <input name="maxPrice" v-model="maxPrice" type="number"/>

        <button @click="filter">Primeni filtere</button>

        <label class="sub" v-for="(sub, index) in subservices" :key="index">
            <input type="radio" :value="sub" @change="updateSelection(sub)" name="rb"/>
            {{ sub }}
        </label>
    </div>
  </template>
  
  <script>
  export default{
      name: "CategoryFilter",
      props:{
        subservices:{
            type:Array,
            default:[],
        }
      },
      data(){
        return{
            sort:'',
            minPrice:null,
            maxPrice:null,
            subservice:null,
        }
      },
      methods:{
        filter(){
            this.$emit('filter',this.sort, this.minPrice,this.maxPrice,this.subservice)
        },
        updateSelection(option){
            console.log(option);
            this.subservice=option;
        }
      },
      emits:['filter']
      
  };

  </script>
  
<style scoped>  
.categoryContainer{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
}
select, input, button{
    max-height:40px;
    border-radius: 0.5vw;
    margin-bottom: 1vh;
    border:0;
    min-width:200px;  
}
input[type=radio]{
    width:10%;
    min-width: 0 !important;
}
.sub{
    width:40%;
}
select, input{
    background-color: var(--light-pink);
    width:33vw;
    padding:1vw;
}
</style>