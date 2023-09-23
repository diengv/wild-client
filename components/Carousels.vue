<template>
    <div class="carousel">
        <div class="inner" ref="inner" :style="innerStyles">
            <div class="card" v-for="card in cards" :key="card.id">
                <a href="#">
                    <div class="carousel__item--image">
                        <div class="carousel__item--image__icon">
                            <img src="~/assets/images/local.jpg">
                        </div>
                        <img :src="card.image[0]?.thumbnail">
                    </div>
                    <div class="carousel__item--head">
                        <div class="carousel__item--head__left">
                            {{card.product.nation ?  card.product.nation.name : '' }} | {{card.product.act_time ?  card.product.act_time.title : ''}} | {{card.product.act_type ? card.product.act_type.title: '' }}
                        </div>
                        <div class="carousel__item--head__right">
                            <span><img src="~/assets/images/booked.svg"></span>
                            <span>Đã đặt 230</span>
                        </div>
                    </div>
                    <div class="carousel__item--title">
                        <h3>{{ card.product.title }}</h3>
                    </div>
                    <div class="carousel__item--price">từ {{cards.product.product_prices.price_groups ? cards.product.product_prices[0].price_groups[0].price : ''}} VND/người</div>
                </a>
            </div>
        </div>
        <button class="c_prev" @click="prev"><img src="~/assets/images/arrow-pre-slider.svg"></button>
        <button class="c_next" @click="next"><img src="~/assets/images/arrow-next-slider.svg"></button>
    </div>
</template>
<script>
export default {
    name: "carousels",
    props: ['slidersExperienceOne', 'stepPixel'],
    data: () => ({
        cards: [],
        innerStyles: {},
        step: '',
        transitioning: false
    }),
    mounted() {
        this.cards = this.slidersExperienceOne
        this.setStep()
        this.resetTranslate()
    },
    methods: {
        setStep() {

            this.step = `${this.stepPixel}px`
        },

        next() {

            if (this.transitioning) return

            this.transitioning = true

            this.moveLeft()
            this.afterTransition(() => {
                const card = this.cards.shift()
                this.cards.push(card)
                this.resetTranslate()
                this.transitioning = false
            })
        },

        prev() {
            if (this.transitioning) return

            this.transitioning = true

            this.moveRight()

            this.afterTransition(() => {
                const card = this.cards.pop()
                this.cards.unshift(card)
                this.resetTranslate()
                this.transitioning = false
            })
        },

        moveLeft() {
            const innerWidth = this.$refs.inner.scrollWidth
            const totalCards = this.cards.length
            this.step = `${innerWidth / totalCards}px`
            this.innerStyles = {
                transform: `translateX(-${this.step})
                    translateX(-${this.step})`
            }
        },

        moveRight() {
            const innerWidth = this.$refs.inner.scrollWidth
            const totalCards = this.cards.length
            this.step = `${innerWidth / totalCards}px`
            this.innerStyles = {
                transform: `translateX(${this.step})
                    translateX(-${this.step})`
            }
        },

        afterTransition(callback) {
            const listener = () => {
                callback()
                this.$refs.inner.removeEventListener('transitionend', listener)
            }
            this.$refs.inner.addEventListener('transitionend', listener)
        },

        resetTranslate() {
            this.innerStyles = {
                transition: 'none',
                transform: `translateX(-${this.step})`
            }
        }
    }
}
</script>
<style scoped lang="scss">
.carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.c_prev {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.c_next {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.inner {
  transition: transform 0.1s;
  white-space: nowrap;
}

.card {
  width: 370px;
  margin-right: 30px;
  display: inline-flex;

  /* optional */
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
</style>