<template>
 <div v-if="showLibrary" class="s__library--images">
    <div class="s__library--close">
      <img @click="closeLibrary" src="~/assets/images/icon-close.svg">
    </div>
   <slot></slot>

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
