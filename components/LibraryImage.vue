<template>
 <div v-if="showLibrary" class="s__library--images">
    <div class="s__library--close">
      <img @click="closeLibrary" src="~/assets/images/icon-close.svg">
    </div>
   <div class="s__library--content">
     <div class="s__library--content__count">
       1/6
     </div>
     <div class="s__library--content__image">
      <img class="img-main-lib" src="assets/images/banner.jpg">
       <div class="s__library--content__image--pre">
         <img src="~/assets/images/arrow-left-month.svg">
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "LibraryImage",
  props: ['show'],
  watch: {
    show: function (value) {
      this.showLibrary = value
    }
  },
  data: () => ({
    showLibrary: false
  }),
  mounted() {
    this.showLibrary = this.show
  },
  methods: {
    closeLibrary() {
      this.$emit('clearLibrary', false)
      this.showLibrary = false
    }
  }
}
</script>

<style scoped>

</style>
