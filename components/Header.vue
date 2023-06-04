<template>
    <div id="main">
      <nav :class="active" v-on:click.prevent class="menu">
        <NuxtLink to="/" class="home" v-on:click="makeActive('home')">Anasayfa</NuxtLink>
        <NuxtLink to="/oneDay" class="oneDay" v-on:click="makeActive('oneDay')">1.Gün</NuxtLink>
        <NuxtLink to="/twoDay" class="twoDay" v-on:click="makeActive('twoDay')">2.Gün</NuxtLink>
        <NuxtLink to="/allExercises" class="allExercises" v-on:click="makeActive('allexercise')">Tüm Egzersizler</NuxtLink>
      </nav>
      <p>your:{{ active }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data(){
      return{
        active:'home',
      }
    },
    methods:{
      makeActive:function(item){
        this.active = item;
      }

      }
    };
  
  </script>
  
  <style scoped>
  @import url('~/assets/css/reset.css');

/*-------------------------
    The menu
--------------------------*/
.menu{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
}
nav{
    display:inline-block;
    margin:60px auto 45px;
    background-color:#5597b4;
    box-shadow:0 1px 1px #ccc;
    border-radius:2px;
}

nav a{
    display:inline-block;
    padding: 18px 30px;
    color:#fff !important;
    font-weight:bold;
    font-size:16px;
    text-decoration:none !important;
    line-height:1;
    text-transform: uppercase;
    background-color:transparent;

    -webkit-transition:background-color 0.25s;
    -moz-transition:background-color 0.25s;
    transition:background-color 0.25s;
}

nav a:first-child{
    border-radius:2px 0 0 2px;
}

nav a:last-child{
    border-radius:0 2px 2px 0;
}

nav.home .home,
nav.oneDay .oneDay,
nav.twoDay .twoDay,
nav.allexercise .allexercise{
    background-color:#e35885;
}

p{
    font-size:22px;
    font-weight:bold;
    color:#7d9098;
}

p b{
    color:#ffffff;
    display:inline-block;
    padding:5px 10px;
    background-color:#c4d7e0;
    border-radius:2px;
    text-transform:uppercase;
    font-size:18px;
}
  </style>
  