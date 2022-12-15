<template lang="html">
  <div id="app">
    <div class="contentarea">
      
      <MainVisual />

    
       <section class="boxcont">
          <h2>공공 서비스 현황</h2>

          <div class="inputbox">
            <label class="hidden" for="title">지역 </label>
            <input id="title" type="text" v-model="value" placeholder="ex: 공간시설" />
            <button @click="search()">검색</button>
          </div>

          <div v-show="message">{{msgtext}}</div>

         <ul>
           <li v-for="(x) in oneromms" :key="x.id">
               <div class="left">
                <h4>{{ (x.id+1) + '.' + x.svcnm }}</h4>
                <p>{{ 'tel : ' + x.telno }}</p>
                <p>{{ x. placenm}}</p>
               </div>
               <div class="right">
                <p>{{ x. maxclassnm}}</p>
                <p>{{ x. areanm}}</p>
               </div>
           </li>
         </ul>

        </section>

    </div>

  </div>
</template>

<style>

.contentarea{width: 90%; margin: 0 auto; box-sizing: border-box;
     }
.contentarea section{margin-top: 100px;}
.contentarea section h2{font-weight: 700; font-size: 2.3em; text-align: center; color: #000;}


.contentarea .boxcont{box-sizing: border-box;}
.contentarea .boxcont h2{margin-bottom: 50px;}
.contentarea .boxcont .inputbox{position: relative; width: fit-content; margin: 30px auto;}
.contentarea .boxcont .inputbox #title{width: 20em; border-radius: 30px; padding: 10px 20px; border: 1px solid #1182ec; background: #1182ec; color: #fff; outline: none;}
.contentarea .boxcont .inputbox button{position: absolute; 
    right: 30px; top: 12.5px; 
    border: none;
    color: #333;}
.contentarea .boxcont ul{text-align: left; margin-top: 70px;}
.contentarea .boxcont ul li{ margin: 2em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em 1.5em;
    line-height: 1.8em;
    border-bottom: 1px solid #ccc;}
.contentarea .boxcont ul li h4{display: inline-block;}
.contentarea .boxcont ul li .right, .contentarea .boxcont ul li .left{width: 50%;}
.contentarea .boxcont ul li .right{text-align: right;}

</style>

<script>
import MainVisual from '../components/MainVisual.vue'
import jdata from '../public.json';

  export default {
    components:{
      MainVisual
    },
    data(){
      return{
        message:false,
        msgtext:'검색 데이터가 없습니다',
        value: '',
        oneromms : jdata
      }
    },
    methods:{
      search: function(){
        let text = this.value;
        if(text){
          this.oneromms = jdata.filter(function(element){
            return element.maxclassnm.includes(text);
           
              //조건에 참이면 객체를 배열로 리턴
          });
          
          if(this.oneromms.length==0){
             this.message=true;
             this.msgtext='검색 데이터가 없습니다';
             
          }else{
             this.message=true;
             this.msgtext=this.oneromms.length + '개가 검색되었습니다';
             
          }
        }else{
          alert('검색어를 입력해주세요!');
        } 
      }
    }
  }
  
</script>
