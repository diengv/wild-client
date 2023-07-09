<template>
  <div v-if="showModal" class="s__modal">
    <div class="s__modal--wrapper" :style="{width: width, 'max-width': width, top: top, 'border-radius': borderRadius, 'overflow-y': overflowY, height: height}">
      <div class="s__modal--wrapper__close">
        <img @click="closeModal()" src="~/assets/images/icon-close-modal.svg">
      </div>
      <div class="s__modal--wrapper__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  props: ['show','width','top','borderRadius','overflowY','height'],
  setup(props) {
    // setup() receives props as the first argument.
    console.log(555, props.show)
  },
  watch: {
    show: function (value) {
      this.showModal = value
    }
  },
  data: () => ({
    showModal: false
  }),
  mounted() {
    this.showModal = this.show
  },
  methods: {
    closeModal() {
      this.$emit('clearModal', false)
      this.showModal = false
    }
  }
}
</script>
<style scoped>

</style>
