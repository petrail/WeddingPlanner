<template>
    <div class="galleryContainer">
        <div v-if="!hiddenBar" class="border"></div>
        <div @click="route(img)" :class="tall? 'photo tall':'photo'" v-for="(img,index) in imgs" :key="index" :style="`background-image: url(${img.url})`">
            <h2 class="opis">{{img.opis}}</h2>
        </div>
    </div>
  </template>
  
  <script>
   import { RouterLink, RouterView } from 'vue-router'
    export default{
        name: "Gallery",
        props:{
            imgs:{
                type:Object,
                default:[{url: 'src/assets/main_gallery/img1.jpg', opis:'',route:''},
                    {url: 'src/assets/main_gallery/img2.webp', opis:'',route:''},
                    {url: 'src/assets/main_gallery/img3.jpg', opis:'',route:''},
                    {url: 'src/assets/main_gallery/img4.jpg', opis:'',route:''},
                    {url: 'src/assets/main_gallery/img5.jpg', opis:'',route:''},
                    {url: 'src/assets/main_gallery/img6.jpg', opis:'',route:''},
                    {url: 'src/assets/main_gallery/img7.jpg', opis:'',route:''},
                    {url: 'src/assets/main_gallery/img8.webp', opis:'',route:''}],
            },
            tall:{
                type:Boolean,
                default:false,
            },
            clickable:{
                type:Boolean,
                default:false,
            },
            hiddenBar:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            route(img){
                if(!this.clickable) return;
                this.$emit('clicked', img) //Mozda bolje samo ime
            },
        }
        };
  </script>
  
  <style scoped>
    .opis{
        position: relative;
        display:flex;
        justify-content: center;
        bottom:0;
        left:0;
        width:100%;
        color:white;
        background-image: linear-gradient(to right bottom, rgba(137, 137, 137, 0.644), rgba(31, 31, 31, 0.753));
    }
    .border{
        width:80vw;
        margin:10vw;
        margin-top:0;
        margin-bottom:5vw;
        border-top: 2px solid var(--light-pink);
    }
    .photo{
        transition: all 0.5s ease;
        display: flex;
        align-items: flex-end;
        background-size: cover;
        background-position: center center;
        box-shadow: 15px 50px 21px rgba(0, 0, 0, 0.01), 9px 28px 18px rgba(0, 0, 0, 0.03), 4px 12px 13px rgba(0, 0, 0, 0.04), 1px 3px 7px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);
    }
    .galleryContainer{
        width:100vw;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        padding:5vw;
        padding-top:0;
    }
    .photo:hover{
        transform: scale(1.1);
    }
    @media (width>=1000px){
        .photo{
            width:20vw;
            height:10vw;
            margin-bottom: 3vw;
        }
        .tall{
            height:25vw !important;
        }
    }
    @media (width<1000px){
        .photo{
            width:43vw;
            height:28vw;
            margin-bottom: 4vw;
        }
        .tall{
            height:48vw;
        }
    }
    @media (width<700px){
        .photo{
            margin-left:5vw;
            margin-right:5vw;
            margin-bottom: 7vw;
            width:90vw;
            height:90vw;
        }
    }
  </style>
  