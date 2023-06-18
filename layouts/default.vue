<template>
  <div>
    <AppHeader :isHome="isHome"></AppHeader>
    <slot/>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default {
  name: "default",
  components: {AppFooter, AppHeader},
  data: () => ({
    isHome: false
  }),
  mounted() {
    if (this.$route.path === '/') {
      this.isHome = true
    } else {
      this.isHome = false
    }
  }
}
</script>

<style scoped>

</style>