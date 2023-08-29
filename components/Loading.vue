<template>
 <div class="wrapper-loading">
   <img class="animate__animated animate__bounceIn animate__infinite" src="~/assets/images/logo-intowild.svg">
 </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Loading"
})
</script>
<style scoped lang="scss">
.wrapper-loading{
  width: 100%;
  position: fixed;
  height: 100vh;
  background: #03483F;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999999;
  top: 0;
  left: 0;
}
</style>