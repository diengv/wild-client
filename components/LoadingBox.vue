<template>
 <div class="wrapper-loading-box">
   <img class="animate__animated animate__bounceIn animate__infinite" src="~/assets/images/logo-intowild.svg">
 </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LoadingBox"
})
</script>
<style scoped lang="scss">
.wrapper-loading-box{
  width: 100%;
  position: inherit;
  height: 300px;
  background: rgba(3, 72, 63, 0.38);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999999;
  top: 0;
  left: 0;
  max-height: 300px;
}
</style>