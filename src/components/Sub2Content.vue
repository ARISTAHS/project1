<template lang="html">
  <div class="box2">
    <h2>서브 페이지2 입니다.</h2>
    
    <div v-for="(x) in oneromms" :key="x.id">
        <img :src="require(`@/assets/${x.image}`)" alt="" class="rimg">
        <h4>{{ (x.id+1) + '.' + x.title }}</h4>
        <p>{{ 'price : ' + x.price }}</p>
        <p>{{ x.content }}</p>
    </div>
  </div>
</template>

<style>
  .box2{width: 90%; margin: 10px 5%; padding: 20px; box-sizing: border-box;
   background:darkseagreen; color: #333;}
</style>

<script>
  import jdata from '../oneroom.json';

  export default {
    data(){
    return{
      value:'',
      oneromms : jdata
    }
  },
  }
</script>