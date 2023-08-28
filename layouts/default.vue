<template>
  <div :class="{ 'page-fixed' : isFixed }">
    <AppHeader @changeFixed="updateparent"  :isHome="isHome"></AppHeader>
    <slot/>
    <AppFooter v-if="!isPayment"></AppFooter>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default {
  name: "default",
  components: {AppFooter, AppHeader},
  data: () => ({
    isHome: false,
    isPayment: false,
    isFixed: false,
  }),
  mounted() {
    if (this.$route.path === '/') {
      this.isHome = true
    } else {
      this.isHome = false
    }

    if (this.$route.path === '/payment' || this.$route.path === '/payment/notification') {
      this.isPayment = true
    } else {
      this.isPayment = false
    }


  },
  methods:{
    updateparent(variable) {
      this.isFixed = variable
    },

  },
}
</script>

<style scoped>

</style>
