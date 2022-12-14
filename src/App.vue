<template>
  <div id="app">
    <HeaderArea />
    <router-view></router-view>
    <FooterArea />
  </div>
</template>

<style>
  * { margin:0; padding:0; border:0; outline:0; vertical-align:top;
  -webkit-text-size-adjust:none;  }
  body{font-size: 16px; color: #333;font-family: "Noto Sans KR", sans-serif;}
  a{color: #333; text-decoration: none;}
  #app {
    font-family: Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  .head{color: red;}
  .rimg{width: 90%; margin: 15px auto;}
  h4{font-size: 24px;margin: 15px 0;}
  p{font-size: 18px; margin: 15px 0;}
  .hidden{position: absolute; left: 99999%; top: 0; display: block; width: 1px; height: 1px; text-indent: -9999%; overflow: hidden;}
  i,em,address { font-style:normal; font-weight:normal; }
  p,li,dd{ line-height:1.5em}
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display:block;}
  ul, ol, li, dl { list-style:none; }
  img, video {border:0; vertical-align:top; }
  a, a:link {color:#333;text-decoration:none; }
  a:visited { color:#333; }
  a:hover, a:active {color:#333;text-decoration:none; }
  table { border-collapse:collapse; border-spacing:0; }
  input, select { vertical-align:middle; }
  label { cursor:pointer; }
  h1, h2, h3, h4, h5, h6 {font-size:100%; font-weight:normal; }
  
</style>


<script>
import HeaderArea from './components/HeaderArea.vue'
import FooterArea from './components/FooterArea.vue'


export default {
  name: 'App',

  data(){
    return{
      vname:'홍길동',
      cnt:1,
      classname: 'btn',
      btnstyle: 'background:red; color:#fff; width:200px; padding: 15px 0',
    
    }
  },
  methods: {
    
  },
  components:{
      HeaderArea,
      FooterArea
  }
}
</script>
