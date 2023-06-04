<template>
  <div>
    <AppHeader></AppHeader>
    <slot />
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
export default {
  name: "default",
  components: {AppFooter, AppHeader}
}
</script>

<style scoped>

</style>