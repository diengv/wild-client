<template>
  <div>
    <section class="s__slider">
      <div class="s__slider--main">
        <div class="s__slider--main__image">
          <div class="s__slider--main__image--gradient"></div>
          <img :class="{'animate__animated animate__fadeIn' : effectSlider }" v-if="slidersActive"
               :src="slidersActive.banner ?slidersActive.banner: ''">
        </div>
        <div class="s__slider--main__description">
          <div class="s__slider--main__description--title" v-if="slidersActive">
            {{ slidersActive.title }}
          </div>
          <div class="s__slider--main__description--short" v-if="slidersActive" v-html="slidersActive.description">

          </div>
          <div class="s__slider--main__description--button">
            <a href="#">Xem thêm</a>
          </div>
        </div>
        <div class="s__slider--main__thumbnail" :class="{'height-small' : heightSmall}">
          <div v-if="!isMobile" v-for="(slider, index) in slidersShow" :key="index"
               class="s__slider--main__thumbnail--item"
               :class="{'active': (index + 1) === activeSlider}">
            <div class="s__opacity"></div>
            <img :src="slider.thumbnail">
          </div>
          <div @click="scrollToActivity()" class="s__slider--main__thumbnail--next"
               :class="{'small-screen': smallScreen}">
            <img src="~/assets/images/sl-next.svg">
          </div>
        </div>
        <div class="s__slider--main__dots">
          <div v-if="isMobile" v-for="(slider, index) in slidersShow" :key="index"
               class="s__slider--main__thumbnail--item"
               :class="{'active': (index + 1) === activeSlider}">
          </div>
        </div>
      </div>
    </section>
    <section class="s__topic" id="boxActivity" ref="boxActivity">
      <div class="s__container">
        <div class="s__box_label">
          <h2>Hoạt động theo chủ đề</h2>
        </div>
        <div class="s__box_description">
          Bạn đã sẵn sàng cho những ngọn núi cao hơn 5000m, những đại dương sâu thẳm với rất nhiều san hô, cá mập hay
          các thảo nguyên đa xanh mướt và lạnh ngắt? Hãy sẵn sàng cuốn hộ chiếu của bạn cho bộ sưu tập những hành trình
          và trải nghiệm mạo hiểm tại nước ngoài của intoWild nhé!
        </div>
        <div class="s__topic--top">
          <div class="s__topic--top__left">
            <div class="s__topic--top__item">
              <div class="s__opacity-item"></div>
              <div class="s__topic--top__item--image">
                <img src="~/assets/images/t-1.jpg">
              </div>
              <div class="s__topic--top__item--info has-bg w-345 has-left">
                <div class="s__topic--top__item--info__title">
                  <h3>Weekend Getaway</h3>
                </div>
                <div class="s__topic--top__item--info__description">
                  Ý tưởng cho chuyến đi cuối tuần: chèo Kayak, chinh phục thảo nguyên hay len lỏi khám phá thành phố
                  mới..
                </div>
                <div class="s__topic--top__item--info__button">
                  <a href="#">Khám phá</a>
                </div>
              </div>
            </div>
          </div>
          <div class="s__topic--top__right">
            <div class="s__topic--top__right--head">
              <div class="s__opacity-item"></div>
              <div class="s__topic--top__item">
                <div class="s__topic--top__item--image">
                  <img src="~/assets/images/t-1.jpg">
                </div>
                <div class="s__topic--top__item--info w-345">
                  <div class="s__topic--top__item--info__title">
                    <h3>Adventure Trip</h3>
                  </div>
                  <div class="s__topic--top__item--info__description">
                    Cuộc phiêu lưu mạo hiểm cho những cuồng chân ưa thách thức và bứt phá giới hạn...
                  </div>
                  <div class="s__topic--top__item--info__button">
                    <a href="#">Khám phá</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="s__topic--top__right--bottom">
              <div class="s__topic--top__right--bottom__left">
                <div class="s__opacity-item"></div>
                <div class="s__topic--top__item">
                  <div class="s__topic--top__item--image">
                    <img src="~/assets/images/t-1.jpg">
                  </div>
                  <div class="s__topic--top__item--info w-345">
                    <div class="s__topic--top__item--info__title">
                      <h3>Adventure Trip</h3>
                    </div>
                    <div class="s__topic--top__item--info__description">
                      Cuộc phiêu lưu mạo hiểm cho những cuồng chân ưa thách thức và bứt phá giới hạn...
                    </div>
                    <div class="s__topic--top__item--info__button">
                      <a href="#">Khám phá</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="s__topic--top__right--bottom__right">
                <div class="s__opacity-item"></div>
                <div class="s__topic--top__item">
                  <div class="s__topic--top__item--image">
                    <img src="~/assets/images/t-1.jpg">
                  </div>
                  <div class="s__topic--top__item--info w-345">
                    <div class="s__topic--top__item--info__title">
                      <h3>Adventure Trip</h3>
                    </div>
                    <div class="s__topic--top__item--info__description">
                      Cuộc phiêu lưu mạo hiểm cho những cuồng chân ưa thách thức và bứt phá giới hạn...
                    </div>
                    <div class="s__topic--top__item--info__button">
                      <a href="#">Khám phá</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="s__topic--slider">
          <div class="s__topic--slider__head">
            <span>1/2</span>
            <span class="icon-slider"><img src="~/assets/images/arrow-white.svg"></span>
            <span class="icon-slider next active"><img src="~/assets/images/arrow-white.svg"></span>
          </div>
          <div class="s__topic--slider__content">
            <div class="s__topic--slider__content--item is-desktop">
              <div class="s__topic--top__item">
                <div class="s__opacity-item"></div>
                <div class="s__topic--top__item--image">
                  <img src="~/assets/images/t-1.jpg">
                </div>
                <div class="s__topic--top__item--info">
                  <div class="s__topic--top__item--info__title">
                    <h3>Weekend Getaway</h3>
                  </div>
                  <div class="s__topic--top__item--info__description">
                    Ý tưởng cho chuyến đi cuối tuần: chèo Kayak, chinh phục thảo nguyên hay len lỏi khám phá thành phố
                    mới..
                  </div>
                  <div class="s__topic--top__item--info__button">
                    <a href="#">Khám phá</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="s__topic--slider__content--item is-desktop">
              <div class="s__topic--top__item">
                <div class="s__opacity-item"></div>
                <div class="s__topic--top__item--image">
                  <img src="~/assets/images/t-1.jpg">
                </div>
                <div class="s__topic--top__item--info">
                  <div class="s__topic--top__item--info__title">
                    <h3>Weekend Getaway</h3>
                  </div>
                  <div class="s__topic--top__item--info__description">
                    Ý tưởng cho chuyến đi cuối tuần: chèo Kayak, chinh phục thảo nguyên hay len lỏi khám phá thành phố
                    mới..
                  </div>
                  <div class="s__topic--top__item--info__button">
                    <a href="#">Khám phá</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="is-mobile slider-topic">
        <Carousel :items-to-show="1.5" :wrap-around="true">
          <Slide v-for="slide in 10" :key="slide">
            <div class="carousel__item">
              <a href="#">
                <div class="s__topic--slider__content--item">
                  <div class="s__topic--top__item">
                    <div class="s__topic--top__item--image">
                      <img src="~/assets/images/t-1.jpg">
                    </div>
                    <div class="s__topic--top__item--info">
                      <div class="s__topic--top__item--info__title">
                        <h3>Adventure Trip</h3>
                      </div>
                      <div class="s__topic--top__item--info__description">
                        Ý tưởng cho chuyến đi cuối tuần: chèo Kayak, chinh phục thảo nguyên hay len lỏi khám phá thành
                        phố
                        mới..
                      </div>
                      <div class="s__topic--top__item--info__button">
                        <a href="#">Khám phá</a>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </Slide>
          <template #addons>
            <Navigation/>
          </template>
        </Carousel>
      </div>
    </section>
    <section class="s__endow">
      <div class="s__container">
        <div class="s__box_label">
          <h2>Ưu đãi dành cho bạn</h2>
        </div>
        <div class="s__endow--content">
          <div class="s__endow--content__left">
            <div class="s__endow--content__left--item"></div>
            <!--            <div class="s__endow&#45;&#45;content__left&#45;&#45;button">-->
            <!--              <a href="#">Xem thêm</a>-->
            <!--            </div>-->
          </div>
          <div class="s__endow--content__right">
            <div class="s__endow--content__left--item">
              <Carousel :wrap-around="true" :autoplay="2000">
                <Slide v-for="slide in 10" :key="slide">
                  <div class="carousel__item"></div>
                </Slide>

                <template #addons>
                  <Pagination/>
                  <Navigation/>
                </template>
              </Carousel>
            </div>
            <!--            <div class="s__endow&#45;&#45;content__left&#45;&#45;button">-->
            <!--              <a href="#">Xem thêm</a>-->
            <!--            </div>-->
          </div>
        </div>
      </div>
    </section>
    <section class="s__experience">
      <div class="s__experience--head">
        <div class="s__container">
          <div class="s__experience--head__title">
            <span>Trải nghiệm được </span> <span class="color-yellow">intoWild bình chọn</span>
          </div>
          <div class="s__experience--head__description">
            Danh sách các hoạt động được lựa chọn từ những WildBuddy giàu kinh nghiệm, lịch trình thú vị và trải nghiệm
            thực sự xứng đáng cho chuyến đi du lịch mạo hiểm tiếp theo của bạn.
          </div>
        </div>
      </div>
      <div class="s__experience--content">
        <div class="s__experience--one is-desktop">
          <Carousels :sliders-data="slidersExperienceOne" :step-pixel="'60'"></Carousels>
        </div>
        <div class="s__experience--one is-desktop">
          <Carousels :sliders-data="slidersExperienceOne" :step-pixel="'261'"></Carousels>
        </div>
      </div>
      <div class="s__experience--three is-mobile">
        <div class="s__experience--three__item">
          <a href="#">
            <div class="carousel__item--image">
              <div class="carousel__item--image__icon">
                <img src="~/assets/images/local.jpg">
              </div>
              <img src="~/assets/images/endow_1.jpg">
            </div>
            <div class="carousel__item--head">
              <div class="carousel__item--head__left">
                VIỆT NAM | 3N2D | Trekking
              </div>
              <div class="carousel__item--head__right">
                <span><img src="~/assets/images/booked.svg"></span>
                <span>Đã đặt 230</span>
              </div>
            </div>
            <div class="carousel__item--title">
              <h3>#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn</h3>
            </div>
            <div class="carousel__item--price">từ 7.526.000 VND/người</div>
          </a>
        </div>
        <div class="s__experience--three__item">
          <a href="#">
            <div class="carousel__item--image">
              <div class="carousel__item--image__icon">
                <img src="~/assets/images/local.jpg">
              </div>
              <img src="~/assets/images/endow_1.jpg">
            </div>
            <div class="carousel__item--head">
              <div class="carousel__item--head__left">
                VIỆT NAM | 3N2D | Trekking
              </div>
              <div class="carousel__item--head__right">
                <span><img src="~/assets/images/booked.svg"></span>
                <span>Đã đặt 230</span>
              </div>
            </div>
            <div class="carousel__item--title">
              <h3>#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn</h3>
            </div>
            <div class="carousel__item--price">từ 7.526.000 VND/người</div>
          </a>
        </div>
        <div class="s__experience--three__item">
          <a href="#">
            <div class="carousel__item--image">
              <div class="carousel__item--image__icon">
                <img src="~/assets/images/local.jpg">
              </div>
              <img src="~/assets/images/endow_1.jpg">
            </div>
            <div class="carousel__item--head">
              <div class="carousel__item--head__left">
                VIỆT NAM | 3N2D | Trekking
              </div>
              <div class="carousel__item--head__right">
                <span><img src="~/assets/images/booked.svg"></span>
                <span>Đã đặt 230</span>
              </div>
            </div>
            <div class="carousel__item--title">
              <h3>#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn</h3>
            </div>
            <div class="carousel__item--price">từ 7.526.000 VND/người</div>
          </a>
        </div>
        <div class="s__experience--three__item">
          <a href="#">
            <div class="carousel__item--image">
              <div class="carousel__item--image__icon">
                <img src="~/assets/images/local.jpg">
              </div>
              <img src="~/assets/images/endow_1.jpg">
            </div>
            <div class="carousel__item--head">
              <div class="carousel__item--head__left">
                VIỆT NAM | 3N2D | Trekking
              </div>
              <div class="carousel__item--head__right">
                <span><img src="~/assets/images/booked.svg"></span>
                <span>Đã đặt 230</span>
              </div>
            </div>
            <div class="carousel__item--title">
              <h3>#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn</h3>
            </div>
            <div class="carousel__item--price">từ 7.526.000 VND/người</div>
          </a>
        </div>
        <div class="s__experience--three__item">
          <a href="#">
            <div class="carousel__item--image">
              <div class="carousel__item--image__icon">
                <img src="~/assets/images/local.jpg">
              </div>
              <img src="~/assets/images/endow_1.jpg">
            </div>
            <div class="carousel__item--head">
              <div class="carousel__item--head__left">
                VIỆT NAM | 3N2D | Trekking
              </div>
              <div class="carousel__item--head__right">
                <span><img src="~/assets/images/booked.svg"></span>
                <span>Đã đặt 230</span>
              </div>
            </div>
            <div class="carousel__item--title">
              <h3>#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn</h3>
            </div>
            <div class="carousel__item--price">từ 7.526.000 VND/người</div>
          </a>
        </div>
        <div class="s__experience--three__item">
          <a href="#">
            <div class="carousel__item--image">
              <div class="carousel__item--image__icon">
                <img src="~/assets/images/local.jpg">
              </div>
              <img src="~/assets/images/endow_1.jpg">
            </div>
            <div class="carousel__item--head">
              <div class="carousel__item--head__left">
                VIỆT NAM | 3N2D | Trekking
              </div>
              <div class="carousel__item--head__right">
                <span><img src="~/assets/images/booked.svg"></span>
                <span>Đã đặt 230</span>
              </div>
            </div>
            <div class="carousel__item--title">
              <h3>#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn</h3>
            </div>
            <div class="carousel__item--price">từ 7.526.000 VND/người</div>
          </a>
        </div>
        <div class="s__experience--three__item">
          <a href="#">
            <div class="carousel__item--image">
              <div class="carousel__item--image__icon">
                <img src="~/assets/images/local.jpg">
              </div>
              <img src="~/assets/images/endow_1.jpg">
            </div>
            <div class="carousel__item--head">
              <div class="carousel__item--head__left">
                VIỆT NAM | 3N2D | Trekking
              </div>
              <div class="carousel__item--head__right">
                <span><img src="~/assets/images/booked.svg"></span>
                <span>Đã đặt 230</span>
              </div>
            </div>
            <div class="carousel__item--title">
              <h3>#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn</h3>
            </div>
            <div class="carousel__item--price">từ 7.526.000 VND/người</div>
          </a>
        </div>
        <div class="s__experience--three__item">
          <a href="#">
            <div class="carousel__item--image">
              <div class="carousel__item--image__icon">
                <img src="~/assets/images/local.jpg">
              </div>
              <img src="~/assets/images/endow_1.jpg">
            </div>
            <div class="carousel__item--head">
              <div class="carousel__item--head__left">
                VIỆT NAM | 3N2D | Trekking
              </div>
              <div class="carousel__item--head__right">
                <span><img src="~/assets/images/booked.svg"></span>
                <span>Đã đặt 230</span>
              </div>
            </div>
            <div class="carousel__item--title">
              <h3>#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn</h3>
            </div>
            <div class="carousel__item--price">từ 7.526.000 VND/người</div>
          </a>
        </div>
        <div class="btn-more-experience-mobile">
          <button class="btn-experience-mobile">Hiển thị thêm</button>
        </div>
      </div>
    </section>
    <section class="s__activities">
      <div class="s__container">
        <div class="s__box_label">
          <h2>Các hoạt động khác của intoWild</h2>
        </div>
        <div class="s__activities--items">
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
    </section>
    <section class="s__customers">
      <div class="s__container--1326">
        <div class="s__customers--title">
          Cảm nhận của khách hàng
        </div>
        <div v-if="!isMobile" class="s__customers--items">
          <div class="s__customers--items__item">
            <div class="h-176">
              <div class="item-customer">
                <div class="item-customer__head">
                  <div class="item-customer__head--avatar">
                    <img src="~/assets/images/avatar-customer.jpg">
                  </div>
                  <div class="item-customer__head--info">
                    <div class="name">
                      Tam Tam
                    </div>
                    <div class="star">
                      <span v-for="star in 5"><img src="~/assets/images/star.svg"></span>
                      <span class="total_star">5,0</span>
                    </div>
                  </div>
                  <div class="item-customer__head--icon">
                    <span><img src="~/assets/images/question.svg"></span>
                  </div>
                </div>
                <div class="item-customer__content">
                  Đừng ngần ngại đặt chuyến tham quan với những người bạn tốt bụng và thân thiện.
                </div>
              </div>
            </div>
            <div class="h-272">
              <div class="item-customer">
                <div class="item-customer__head">
                  <div class="item-customer__head--avatar">
                    <img src="~/assets/images/avatar-customer.jpg">
                  </div>
                  <div class="item-customer__head--info">
                    <div class="name">
                      Tam Tam
                    </div>
                    <div class="star">
                      <span v-for="star in 5"><img src="~/assets/images/star.svg"></span>
                      <span class="total_star">5,0</span>
                    </div>
                  </div>
                  <div class="item-customer__head--icon">
                    <span><img src="~/assets/images/question.svg"></span>
                  </div>
                </div>
                <div class="item-customer__content">
                  Đừng ngần ngại đặt chuyến tham quan với những người bạn tốt bụng và thân thiện.
                </div>
              </div>
            </div>
          </div>
          <div class="s__customers--items__item">
            <div class="h-248">
              <div class="item-customer">
                <div class="item-customer__head">
                  <div class="item-customer__head--avatar">
                    <img src="~/assets/images/avatar-customer.jpg">
                  </div>
                  <div class="item-customer__head--info">
                    <div class="name">
                      Tam Tam
                    </div>
                    <div class="star">
                      <span v-for="star in 5"><img src="~/assets/images/star.svg"></span>
                      <span class="total_star">5,0</span>
                    </div>
                  </div>
                  <div class="item-customer__head--icon">
                    <span><img src="~/assets/images/question.svg"></span>
                  </div>
                </div>
                <div class="item-customer__content">
                  Đừng ngần ngại đặt chuyến tham quan với những người bạn tốt bụng và thân thiện.
                </div>
              </div>
            </div>
            <div class="h-200">
              <div class="item-customer">
                <div class="item-customer__head">
                  <div class="item-customer__head--avatar">
                    <img src="~/assets/images/avatar-customer.jpg">
                  </div>
                  <div class="item-customer__head--info">
                    <div class="name">
                      Tam Tam
                    </div>
                    <div class="star">
                      <span v-for="star in 5"><img src="~/assets/images/star.svg"></span>
                      <span class="total_star">5,0</span>
                    </div>
                  </div>
                  <div class="item-customer__head--icon">
                    <span><img src="~/assets/images/question.svg"></span>
                  </div>
                </div>
                <div class="item-customer__content">
                  Đừng ngần ngại đặt chuyến tham quan với những người bạn tốt bụng và thân thiện.
                </div>
              </div>
            </div>
          </div>
          <div class="s__customers--items__item">
            <div class="h-200">
              <div class="item-customer">
                <div class="item-customer__head">
                  <div class="item-customer__head--avatar">
                    <img src="~/assets/images/avatar-customer.jpg">
                  </div>
                  <div class="item-customer__head--info">
                    <div class="name">
                      Tam Tam
                    </div>
                    <div class="star">
                      <span v-for="star in 5"><img src="~/assets/images/star.svg"></span>
                      <span class="total_star">5,0</span>
                    </div>
                  </div>
                  <div class="item-customer__head--icon">
                    <span><img src="~/assets/images/question.svg"></span>
                  </div>
                </div>
                <div class="item-customer__content">
                  Đừng ngần ngại đặt chuyến tham quan với những người bạn tốt bụng và thân thiện.
                </div>
              </div>
            </div>
            <div class="h-272">
              <div class="item-customer">
                <div class="item-customer__head">
                  <div class="item-customer__head--avatar">
                    <img src="~/assets/images/avatar-customer.jpg">
                  </div>
                  <div class="item-customer__head--info">
                    <div class="name">
                      Tam Tam
                    </div>
                    <div class="star">
                      <span v-for="star in 5"><img src="~/assets/images/star.svg"></span>
                      <span class="total_star">5,0</span>
                    </div>
                  </div>
                  <div class="item-customer__head--icon">
                    <span><img src="~/assets/images/question.svg"></span>
                  </div>
                </div>
                <div class="item-customer__content">
                  Đừng ngần ngại đặt chuyến tham quan với những người bạn tốt bụng và thân thiện.
                </div>
              </div>
            </div>
          </div>
          <div class="s__customers--items__item">
            <div class="h-272">
              <div class="item-customer">
                <div class="item-customer__head">
                  <div class="item-customer__head--avatar">
                    <img src="~/assets/images/avatar-customer.jpg">
                  </div>
                  <div class="item-customer__head--info">
                    <div class="name">
                      Tam Tam
                    </div>
                    <div class="star">
                      <span v-for="star in 5"><img src="~/assets/images/star.svg"></span>
                      <span class="total_star">5,0</span>
                    </div>
                  </div>
                  <div class="item-customer__head--icon">
                    <span><img src="~/assets/images/question.svg"></span>
                  </div>
                </div>
                <div class="item-customer__content">
                  Đừng ngần ngại đặt chuyến tham quan với những người bạn tốt bụng và thân thiện.
                </div>
              </div>
            </div>
            <div class="h-176">
              <div class="item-customer">
                <div class="item-customer__head">
                  <div class="item-customer__head--avatar">
                    <img src="~/assets/images/avatar-customer.jpg">
                  </div>
                  <div class="item-customer__head--info">
                    <div class="name">
                      Tam Tam
                    </div>
                    <div class="star">
                      <span v-for="star in 5"><img src="~/assets/images/star.svg"></span>
                      <span class="total_star">5,0</span>
                    </div>
                  </div>
                  <div class="item-customer__head--icon">
                    <span><img src="~/assets/images/question.svg"></span>
                  </div>
                </div>
                <div class="item-customer__content">
                  Đừng ngần ngại đặt chuyến tham quan với những người bạn tốt bụng và thân thiện.
                </div>
              </div>
            </div>
          </div>
          <div class="s__customers--items__item">
            <div class="h-200">
              <div class="item-customer">
                <div class="item-customer__head">
                  <div class="item-customer__head--avatar">
                    <img src="~/assets/images/avatar-customer.jpg">
                  </div>
                  <div class="item-customer__head--info">
                    <div class="name">
                      Tam Tam
                    </div>
                    <div class="star">
                      <span v-for="star in 5"><img src="~/assets/images/star.svg"></span>
                      <span class="total_star">5,0</span>
                    </div>
                  </div>
                  <div class="item-customer__head--icon">
                    <span><img src="~/assets/images/question.svg"></span>
                  </div>
                </div>
                <div class="item-customer__content">
                  Đừng ngần ngại đặt chuyến tham quan với những người bạn tốt bụng và thân thiện.
                </div>
              </div>
            </div>
            <div class="h-248">
              <div class="item-customer">
                <div class="item-customer__head">
                  <div class="item-customer__head--avatar">
                    <img src="~/assets/images/avatar-customer.jpg">
                  </div>
                  <div class="item-customer__head--info">
                    <div class="name">
                      Tam Tam
                    </div>
                    <div class="star">
                      <span v-for="star in 5"><img src="~/assets/images/star.svg"></span>
                      <span class="total_star">5,0</span>
                    </div>
                  </div>
                  <div class="item-customer__head--icon">
                    <span><img src="~/assets/images/question.svg"></span>
                  </div>
                </div>
                <div class="item-customer__content">
                  Đừng ngần ngại đặt chuyến tham quan với những người bạn tốt bụng và thân thiện.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {Carousel, Slide, Navigation, Pagination} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import axios from "axios";

export default {
  name: "index",
  props: ['pageHeight'],
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data: () => ({
    config: useRuntimeConfig(),
    currentSlide: 0,
    sliders: [],
    slidersActive: {},
    activeSlider: 1,
    pageHeight: 0,
    slidersShow: [],
    smallScreen: false,
    effectSlider: false,
    experienceOne: [
      {
        id: 1,
        thumbnail: 'assets/images/banner.jpg',
        note: 'VIỆT NAM | 3N2D | Trekking',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
        bookingCount: 230
      },
      {
        id: 2,
        thumbnail: 'assets/images/banner.jpg',
        note: 'VIỆT NAM | 3N2D | Trekking',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
        bookingCount: 230
      },
      {
        id: 3,
        thumbnail: 'assets/images/banner.jpg',
        note: 'VIỆT NAM | 3N2D | Trekking',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
        bookingCount: 230
      },
      {
        id: 4,
        thumbnail: 'assets/images/banner.jpg',
        note: 'VIỆT NAM | 3N2D | Trekking',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
        bookingCount: 230
      },
      {
        id: 5,
        thumbnail: 'assets/images/banner.jpg',
        note: 'VIỆT NAM | 3N2D | Trekking',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
        bookingCount: 230
      },
      {
        id: 6,
        thumbnail: 'assets/images/banner.jpg',
        note: 'VIỆT NAM | 3N2D | Trekking',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
        bookingCount: 230
      },
      {
        id: 7,
        thumbnail: 'assets/images/banner.jpg',
        note: 'VIỆT NAM | 3N2D | Trekking',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
        bookingCount: 230
      },
      {
        id: 8,
        thumbnail: 'assets/images/banner.jpg',
        note: 'VIỆT NAM | 3N2D | Trekking',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
        bookingCount: 230
      },
      {
        id: 9,
        thumbnail: 'assets/images/banner.jpg',
        note: 'VIỆT NAM | 3N2D | Trekking',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
        bookingCount: 230
      },
      {
        id: 10,
        thumbnail: 'assets/images/banner.jpg',
        note: 'VIỆT NAM | 3N2D | Trekking',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
        bookingCount: 230
      },
    ],
    heightSmall: false,
    isMobile: false,
    pageWidth: 0,
    sliderOne: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    innerStylesOne: {},
    stepOne: '',
    transitioningOne: false,
    slidersExperienceOne: [
      {
        id: 1,
        thumbnail: 'assets/images/endow_1.jpg',
        description: 'VIỆT NAM | 3N2D | Trekking',
        bookedCount: '230',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
      },
      {
        id: 2,
        thumbnail: 'assets/images/endow_1.jpg',
        description: 'VIỆT NAM | 3N2D | Trekking',
        bookedCount: '230',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
      },
      {
        id: 3,
        thumbnail: 'assets/images/endow_1.jpg',
        description: 'VIỆT NAM | 3N2D | Trekking',
        bookedCount: '230',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
      },
      {
        id: 4,
        thumbnail: 'assets/images/endow_1.jpg',
        description: 'VIỆT NAM | 3N2D | Trekking',
        bookedCount: '230',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
      },
      {
        id: 5,
        thumbnail: 'assets/images/endow_1.jpg',
        description: 'VIỆT NAM | 3N2D | Trekking',
        bookedCount: '230',
        title: '#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn',
        price: 'từ 7.526.000 VND/người',
      }
    ],
      reviewProducts: []
  }),
  beforeMount() {
    this.changer()
  },
  mounted() {
    this.getSlider()
    this.slidersActive = this.sliders[0]
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    this.pageHeight = window.innerHeight
    if (this.pageHeight <= 768) {
      this.slidersShow = []
      this.heightSmall = true
      this.sliders.forEach((val, index) => {
        if (index <= 5) {
          this.slidersShow.push(val)
        }
      })

      this.smallScreen = true
    }

    this.pageWidth = window.innerWidth
    if (this.pageWidth <= 768) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  methods: {
    async getSlider() {
      await axios.get(this.config.public.baseUrl + '/theme/slider')
          .then((res) => {
            if (res.data[0].images && res.data[0].images.length > 0) {
              res.data[0].images.forEach((val) => {
                this.sliders.push({
                  id: val.slide_id,
                  thumbnail: val.image[0].preview_thumbnail,
                  banner: val.image[0].original_url,
                  title: val.title,
                  description: val.description,
                  active: false,
                  url: val.url,
                })
              })
              this.smallScreen = false
              this.slidersShow = []
              this.sliders.forEach((val, index) => {
                if (index <= 5) {
                  this.slidersShow.push(val)
                }
              })
            }
          })
          .catch((error) => {

          });
    },
    onResize() {
      this.pageHeight = window.innerHeight
      if (this.pageHeight <= 768) {
        if (this.isMobile) {
          this.slidersShow = []
          this.sliders.forEach((val, index) => {
            if (index <= 3) {
              this.slidersShow.push(val)
            }
          })

          this.smallScreen = true
        } else {
          this.smallScreen = false
          this.slidersShow = []
          this.sliders.forEach((val, index) => {
            if (index <= 5) {
              this.slidersShow.push(val)
            }
          })
        }
      } else {
        this.smallScreen = false
        this.slidersShow = []
        this.sliders.forEach((val, index) => {
          if (index <= 5) {
            this.slidersShow.push(val)
          }
        })
      }

      this.pageWidth = window.innerWidth
      if (this.pageWidth <= 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
        this.navMobile = false
      }

    },
    imagesReturn(img) {
      return require(img)
    },
    slideTo(val) {
      this.currentSlide = val
    },
    moveSlider(amount) {
      let newActive
      const newIndex = this.activeSlider + amount
      if (newIndex > this.slidersShow.length) newActive = 1
      if (newIndex === 0) newActive = this.slidersShow
      this.activeSlider = newActive || newIndex
    },
    changer: function () {

      setInterval(() => {
        let newActive
        const newIndex = this.activeSlider + 1
        if (newIndex > this.slidersShow.length) newActive = 1
        if (newIndex === 0) newActive = this.slidersShow
        this.activeSlider = newActive || newIndex
        this.sliders.forEach((val, index) => {
          if (index === (this.activeSlider - 1)) {
            this.slidersActive = val
            this.effectSlider = true
          }
        })
      }, 3000);

    },
    scrollToActivity() {
      setTimeout(() => this.$refs.boxActivity.scrollIntoView({block: 'start', behavior: 'smooth'}), 200);
      window.scrollBy(0, -73);
    },
      getProductReviews(){

      }
  },
}
</script>

<style scoped>

</style>
