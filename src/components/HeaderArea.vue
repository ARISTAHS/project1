<template>
  <header class="headerarea">

    <h1>
      <a class="logo" href="#">
        <img src="../assets/sesoul-png.png" alt="...">
        <span class="hidden">서울시 공공서비스 현황</span>
      </a>
    </h1>

    <nav>
      <h2 class="hidden">네비게이션 영역</h2>

      <ul>
        <li><router-link to="/main" class="link">메인 페이지</router-link></li>
        <li><router-link to="/sub1" class="link"> 서브 페이지1</router-link></li>
        <li><router-link to="/sub2" class="link"> 서브 페이지2</router-link></li>
      </ul>

    </nav>


  </header>
</template>

<style>
 
  .headerarea{display: flex; align-items: center; background: #f8f8f8; border-bottom: 1px solid #999; padding: 1.5rem 1.8rem;}
  .headerarea h1{ margin-left: 3%;}
  .headerarea .logo{display: block; overflow: hidden;}
  /* .headerarea .logo p{font-size:  1.2em; font-weight: 700; color: #000; float: right;} */
  .headerarea nav{margin-left: auto;}
  .headerarea nav ul{display: flex; gap: 1.1rem;}


</style>

<script>
export default {
  
}
</script>