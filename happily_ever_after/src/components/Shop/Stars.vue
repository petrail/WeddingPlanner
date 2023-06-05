<template>
    <div class="starsDiv">
        <div v-for="(i,index) in stars" :key="index" class="img">
            <img :src="i? 'src/assets/full_star.png':'src/assets/empty_star.png'" @click="clickedStars(index)"/>
        </div> 
    </div>
</template>
  
<script>
export default{
    name: "Stars",
    data(){
        return{
            stars:[false,false,false,false,false],
            starCount:0
        }
    },
    methods:{
        clickedStars(index){
            this.starCount = index+1;
            for(let i=0;i<5;i++){
                this.stars[i]=i<=index;
            }
            this.$emit('grade',this.starCount);
        }
    },
    emits:['grade']
    
};
</script>
  
<style scoped>  
.starsDiv{
    width:225px;
    height:45px;
    background-color: transparent;
    display:flex;

}
.img{
    width:40px;
    margin-right:5px;
    height:40px;
}
img{
    width:40px;
    height:40px;
}
</style>
  