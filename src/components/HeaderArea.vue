<template>
  <header class="headerarea">

   <a href="/vue/">
     <h1 class="logo">
        <img src="../assets/sesoul-png.png" alt="..">
        <span class="hidden">서울시 공공서비스 현황</span> 
     </h1>
   </a>

    <nav>
      <h2 class="hidden">네비게이션 영역</h2>

      <ul>
        <!-- <li><router-link to="/main" class="link">메인 페이지</router-link></li> -->
        <li><router-link to="/vue/sub1" class="link">ABOUT</router-link></li>
        <li><router-link to="/vue/sub2" class="link">OUTLINE</router-link></li>
      </ul>

    </nav>


  </header>
</template>

<style>
 
  .headerarea{display: flex; align-items: center; background: #f8f8f8; border-bottom: 1px solid #999; padding: 1.5rem 1.8rem;}
  .headerarea a{display: block;}
  .headerarea .logo{margin-left: 5%; overflow: hidden;}
  
  .headerarea nav{margin-left: auto;}
  .headerarea nav ul{display: flex; gap: 1.1rem;}


</style>

<script>
export default {
  
}
</script>