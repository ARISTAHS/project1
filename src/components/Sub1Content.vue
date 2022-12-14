<template lang="html">
  <div id="app">
    <div class="wrap">

      <SubVisual/>

      <section class="about">
        <h2>A Drugstore in my Neighborhood</h2>
        <div>
          <p>서울특별시에 있는 공공시설 서비스에 대한 전반적인 정보를 제공합니다.</p>
          <p>서울시 공공서비스 예약' 서비스는 서울시와 산하기관, 그리고 25개 자치구에서 제공하는 공공 서비스를 온라인으로 예약 및 결제하는 통합 플랫폼입니다. 올해 3월 개편을 통해서 축구장, 테니스장 등 체육시설 이용부터 캠핑장 등의 시설 대관, 그리고 교육강좌와 문화행사, 진료 등의 5개 분야에서 총 7,152여 개의 공공서비스를 예약 및 이용하실 수 있습니다.</p>
          <p>더욱이 이번 개편을 통해 모바일 카카오톡 챗봇인 '서울톡' 활용한 예약과 상담이 개시되어 접근성이 강화되었고, 이전과 달리 이제는 네이버 아이디와 카카오 아이디를 통해 로그인하여 예약을 할 수 있게 되어 이용의 편리성도 향상시켰습니다.</p>
          <p>서울시 공공서비스에서는 기존의 서비스들 외에도 새로운 서비스들을 지원하고자 청년 공간 추가, 한강 드론 공간등을 추가하였으며 서울 시민 가족분들의 여가 활동을 위해 서울형 키즈 카페 등을 서비스로 제공합니다.</p>
          <p>서울시 공공서비스 예약 웹 사이트에서 추가 된 서비스 모두 예약 이용 가능하며 개편 된 카카오와 네이버를 활용한 서비스 이용 또한 가능하게 추가하였습니다.</p>
          <p>향후 서울시 한정에서 벗어나 인천, 경기시와의 통합 공공 서비스 예약 서비스를 추진중에 있으며 재편 될 약 8000곳에 달하는 다양한 공공 시설들을 이용 하실 수 있으실거라 예상하고 있습니다.</p>

        </div>


      </section>







    </div>
  </div>
</template>

<style>
  .wrap{width: 90%; margin: 10px 5%; padding: 20px; box-sizing: border-box;
   background:darkseagreen; color: #333;}
</style>

<script>
import SubVisual from '../components/SubVisual.vue'

export default {
    components:{
      SubVisual
    }
  }
</script>