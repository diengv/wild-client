<template>
  <div>
    <section class="s__header">
      <div class="s__header--logo">
        <NuxtLink>
          <img src="~/assets/images/wild-logo.svg">
        </NuxtLink>
        <div class="s__header--arrow">
          <img src="~/assets/images/icon-arrow-menu.svg">
        </div>
      </div>
      <div class="s__header--search">
        <span>Tìm kiếm trải nghiệm...</span>
        <span><img src="~/assets/images/icon-search.svg"></span>
      </div>
      <div class="s__header--lang">
        <div class="s__header--lang__left">
          TIẾNG VIỆT / VND
        </div>
        <div class="s__header--lang__right">
          +84 886 677 950
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>

</style>