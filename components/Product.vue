<template>
        <div class="s__activities--items"  >
            <div class="s__activities--items__item" v-for="item in productLists" :key="item.id">
                <a href="#">
                    <div class="s__activities--items__item--image">
                        <div class="s__activities--items__item--image__icon">
                            <img src="~/assets/images/local.jpg">
                        </div>
                        <img :src="item.product.images[0]?.thumbnail">
                    </div>
                    <div class="s__activities--items__item--head">
                        <div class="s__activities--items__item--head__left">
                            {{item.product.nation ? item.product.nation.name: ''}} | {{item.product.act_time ? item.product.act_time.title : ''}} | {{item.product.act_type ? item.product.act_type.title : ''}}
                        </div>
                        <div class="s__activities--items__item--head__right">
                            <span><img src="~/assets/images/booked.svg"></span>
                            <span>Đã đặt 230</span>
                        </div>
                    </div>
                    <div class="s__activities--items__item--title">
                        <h3>
                           {{item.product.title}}
                        </h3>
                    </div>
                    <div class="s__activities--items__item--price">
                        từ 7.526.000 VND/người
                    </div>
                </a>
            </div>

        </div>
        <div class="s__activities--more">
            <a href="#">Khám phá thêm</a>
        </div>
</template>

<script>
export default {
    name: "Product",
    props: ['productLists'],
    data: () => ({
      items: []
    }),
    mounted() {
        console.log(this.productLists, 'product component')
    },
}

</script>

<style scoped>

</style>