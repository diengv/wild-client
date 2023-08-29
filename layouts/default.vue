<template>
  <div :class="{ 'page-fixed' : isFixed }" class="position-relative">
    <Loading v-if="isLoading"/>
    <AppHeader @changeFixed="updateparent"  :isHome="isHome"></AppHeader>
    <slot/>
    <AppFooter v-if="!isPayment"></AppFooter>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import Loading from '../components/Loading.vue'
export default {
  name: "default",
  components: {AppFooter, AppHeader,Loading},
  data: () => ({
    isHome: false,
    isPayment: false,
    isFixed: false,
    isLoading: true,
  }),
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
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
