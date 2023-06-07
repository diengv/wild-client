<template>
  <div>
    <section class="s__slider">
      <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item">{{ slide }}</div>
        </Slide>
      </Carousel>

      <Carousel
          id="thumbnails"
          :items-to-show="4"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
      >
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item" @click="slideTo(slide - 1)">{{ slide }}</div>
        </Slide>
      </Carousel>
    </section>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default {
  name: "index",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    currentSlide: 0,
    sliders:[
      {
        id: 1,

      }
    ]
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
  },
}
</script>

<style scoped>

</style>
