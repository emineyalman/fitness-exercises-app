<template>
    <div>
        <GlideNav/>
        <slot/>
        <p>DAYS DAHİL OLDU</p>
    </div>
  </template>
  
  <script>
  import GlideNav from '~/components/GlideNav.vue';
  
  export default {
    components: {
      GlideNav,
    },
  };
  </script>
  
  <style scoped>
  /* Default layout styles */
  </style>
  