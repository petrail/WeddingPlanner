<template>
    <div class="galleryContainer">
        <div class="border"></div>
        <div class="photo" v-for="(img,index) in imgs" :key="index" :style="`background-image: url(${img.url})`">
        </div>
    </div>
  </template>
  
  <script>
    export default{
        name: "Gallery",
        data(){
            return{
                imgs:[
                    {url: 'src/assets/main_gallery/img1.jpg'},
                    {url: 'src/assets/main_gallery/img2.webp'},
                    {url: 'src/assets/main_gallery/img3.jpg'},
                    {url: 'src/assets/main_gallery/img4.jpg'},
                    {url: 'src/assets/main_gallery/img5.jpg'},
                    {url: 'src/assets/main_gallery/img6.jpg'},
                    {url: 'src/assets/main_gallery/img7.jpg'},
                    {url: 'src/assets/main_gallery/img8.webp'},
                ],
            }
            },
        };
  </script>
  
  <style scoped>
    .border{
        width:80vw;
        margin:10vw;
        margin-top:0;
        margin-bottom:5vw;
        border-top: 2px solid var(--light-pink);
    }
    .photo{
        transition: all 0.5s ease;
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
    }
    .photo:hover{
        transform: scale(1.1);
    }
    @media (width>=1000px){
        .photo{
            width:20vw;
            height:12vw;
            margin-bottom: 3vw;
        }
    }
    @media (width<1000px){
        .photo{
            width:43vw;
            height:28vw;
            margin-bottom: 4vw;
        }
    }
    @media (width<700px){
        .photo{
            margin-left:5vw;
            margin-right:5vw;
            margin-bottom: 7vw;
            width:90vw;
            height:60vw;
        }
    }
  </style>
  