<template>
  <div>
    <Header />
    <!--Slot benim layoutsım oluyor-->
    <slot/>   
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
/* Default layout styles */
</style>
