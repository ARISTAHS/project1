<template>
  <div id="app">
     <div class="box">
      <swiper class="swiper" :options="swiperOption">
          <swiper-slide class="slide1"><img src="../assets/meeting-1177454_1920.jpg" alt="..."></swiper-slide>
          <swiper-slide class="slide2"><img src="../assets/tartan-track-2678544_1920.jpg" alt="..."></swiper-slide>
          <swiper-slide class="slide3"><img src="../assets/room-1336497_1920.jpg" alt="..."></swiper-slide>
          <swiper-slide class="slide4"><img src="../assets/operation-1807543_1920.jpg" alt="..."></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      
     </div>
  </div>
</template>

<style>
 .box{height: 800px; overflow: hidden;}

.swiper {
   height: 100%;
   width: 100%;
}
 
.swiper .swiper-slide {
     display: flex;
     justify-content: center;
     align-items: center;
     text-align: center;
     font-weight: bold;
 }

 .swiper .swiper-slide img{width: 100%;}

</style>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'App',
  components: {
      Swiper,
      SwiperSlide
  },
   data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
        
      }
    }
}
</script>