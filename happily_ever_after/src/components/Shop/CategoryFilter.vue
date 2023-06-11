<template>
    <div class="categoryContainer">
        <div class="in">
            <label for="sort">Sortiranje</label>
            <select name="sort" v-model="sort">
                <option value="" selected>Standardno</option>
                <option value="asc">Prvo najniža cena</option>
                <option value="desc">Prvo najviša cena</option>
            </select>
        </div>

        <div class="in">
            <label for="minPrice">Cena od</label>
            <input name="minPrice" v-model="minPrice" type="number"/>
        </div>

        <div class="in">
            <label for="maxPrice">Cena do</label>
            <input name="maxPrice" v-model="maxPrice" type="number"/>
        </div>

        <div v-if="showSubservice" class="in">
            <label for="subservice">Podkategorija</label>
            <select name="subservice" v-model="subservice">
                <option v-for="(sub, index) in subservices" :key="index" :value="sub">
                    {{sub}}
                </option>
            </select>
        </div>

        <button @click="filter">Primeni filtere</button>
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
      computed:{
        showSubservice:function(){
            return this.subservices.length>2;
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
.in{
    display:flex;
    flex-direction: column;
    width:23%;
    margin-right:2%;
    justify-content: center;
}

.categoryContainer{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
}
select, input{
    max-height:40px !important;
    border-radius: 0.5vw;
    border:0;
    width:90%;
}
button{
    max-height:40px !important;
    border-radius: 0.5vw;
    border:0;
    width: 20.7% !important;
    padding:.5vw !important;
    height:40px !important;
    margin-top:2.5vh;
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
    padding:.5vw;
}
</style>