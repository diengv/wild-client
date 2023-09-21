<template>
    <div class="s__container">
        <div class="s__box_label">
            <h2>Các hoạt động khác của intoWild</h2>
        </div>
        <div class="s__activities--items" v-for="product in products">
            <div class="s__activities--items__item">
                <a href="#">
                    <div class="s__activities--items__item--image">
                        <div class="s__activities--items__item--image__icon">
                            <img src="~/assets/images/local.jpg">
                        </div>
                        <img src="~/assets/images/activity_1.jpg">
                    </div>
                    <div class="s__activities--items__item--head">
                        <div class="s__activities--items__item--head__left">
                            VIỆT NAM | 3N2D | Trekking
                        </div>
                        <div class="s__activities--items__item--head__right">
                            <span><img src="~/assets/images/booked.svg"></span>
                            <span>Đã đặt 230</span>
                        </div>
                    </div>
                    <div class="s__activities--items__item--title">
                        <h3>
                            #DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn
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
    </div>
</template>

<script>
export default {
    name: "Product",
    props: ['productLists'],
    data: () => ({
        products: [],

    }),
    mounted () {
        this.products = this.productLists
    },
}

</script>

<style scoped>

</style>