
<template>
    <div>

      <div class="glide">
        <div data-glide-el="track" class="glide__track">
          <ul class="glide__slides">
            <li class="glide__slide one">1</li>
            <li class="glide__slide two">2</li>
            <li class="glide__slide three">3</li>
          </ul>
        </div>
        <div data-glide-el="controls">
      <button data-glide-dir="<<">start</button>
      <button data-glide-dir=">>">end</button>
    </div>
      </div>
    </div>
  </template>
  
  <script>
  import Glide from '@glidejs/glide'
  import '@glidejs/glide/dist/css/glide.core.min.css'
  
  export default {
   layout: 'default',
    mounted() {
      const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        focusAt: 'center',
        autoplay: 3000,
        hoverpause: true,
        breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
      });
  
      glide.mount();
    }
  }
  </script>
  
  <style scoped>
  .glide__arrows{
    display: flex;
    align-items: center;
    justify-content: space-around;
   
  }
  .glide__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
  }
  .one{
    background-color: aquamarine;
  }
  .two{
    background-color: rgb(244, 255, 127);
  }
  .three{
    background-color: rgb(255, 195, 127);
  }
  .controls{
    background-color: rgb(176, 111, 33);
    width: 50px;
    height: 20px;
  }
  
  </style>
  