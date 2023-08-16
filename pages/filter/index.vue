<template>
  <div class="s__current_page">
    <Modal v-click-outside="clickedParent" @clearModal="updateparent" :show="searchMore" :width="'770px'" :top="'100px'"
           :border-radius="'10px'"
           :height="'610px'">
      <div class="s__search-more-title">
        Thêm bộ lọc
      </div>
      <div class="s__search-more-wrap">
        <div class="s__search-more-box">
          <div class="s__search-more-box__title">
            Số thành viên
          </div>
          <div class="s__search-more-box__content">
            <div class="s__payment--content__form">
              <div class="s__payment--content__form--item">
                <div class="s__payment--content__form--item__label w-110">
                  Người lớn:
                </div>
                <div class="s__payment--content__form--item__input">
                  <div class="btn-choose-number">
                    <span @click="minusAdult()" class="minus"><img src="~/assets/images/minus-active.svg"></span>
                    <span class="number">{{ adult }}</span>
                    <span @click="plusAdult()" class="plus"><img src="~/assets/images/plus-active.svg"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="s__search-more-box">
          <div class="s__search-more-box__title">
            Ngân sách
          </div>
          <div class="s__search-more-box__content mt-30">
            <div class="d-flex-wrap">
              <div v-for="bud in budget" class="s__item_checkbox">
                <label class="container--checkbox" :class="{'active': bud.selected}">
                  <span>{{ bud.name }}</span>
                  <input @change="choiseBudget()" v-model="bud.selected" type="checkbox">
                  <span class="checkmark"></span>
                </label>
              </div>

            </div>
          </div>
        </div>
        <div class="s__search-more-box">
          <div class="s__search-more-box__title">
            Ngôn ngữ
          </div>
          <div class="s__search-more-box__content mt-30">
            <div class="d-flex-wrap">
              <div v-for="lang in languages" class="s__item_checkbox">
                <label class="container--checkbox" :class="{'active': lang.selected}">
                  <span>{{ lang.name }}</span>
                  <input v-model="lang.selected" type="checkbox">
                  <span class="checkmark"></span>
                </label>
              </div>

            </div>
          </div>
        </div>
        <div class="s__line s__line--customs "></div>
        <div class="s__search-more-bottom">
          <div class="s__bottom_filter">
            <div class="choose__again" @click="reselect('search-more')">
              Chọn lại
            </div>
            <div class="filter_btn-search">
              <a class="btn-search" href="#">Tìm kiếm</a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
    <div class="s__container">
      <section class="s__head_filter">
        <div @click="showBoxLocation()" :class="{'active': boxLocation}" class="s__head_filter--item">
          <span>Địa điểm</span>
        </div>
        <div @click="showBoxLevel()" :class="{'active': boxLevel}" class="s__head_filter--item">
          <span>Cấp độ hoạt động</span>
        </div>
        <div @click="showBoxDate()" :class="{'active': boxDate}" class="s__head_filter--item">
          <span>Ngày khởi hành</span>
        </div>
        <div @click="showBoxTypePlace()" :class="{'active': boxTypePlace}" class="s__head_filter--item">
          <span>Loại đặt chỗ</span>
        </div>
        <div @click="showBoxSearchMore()" class="s__head_filter--item add-filter">
          <span><img src="~/assets/images/filter.svg"></span> <span>Thêm bộ lọc: </span><span>1</span>
        </div>
        <div v-click-outside="clickedParent" class="s__head_filter--item__location" v-if="boxLocation">
          <div class="position-relative box-location-filter">
            <div class="d-flex-wrap">
              <div v-for="loc in location" class="s__item_checkbox">
                <label class="container--checkbox" :class="{'active': loc.selected}">
                  <span>{{ loc.name }}</span> <span v-if="loc.children && loc.children.length > 0"
                                                    class="icon-down-location"><img src="~/assets/images/icon-down.svg"></span>
                  <input @change="testSelected()" v-model="loc.selected" type="checkbox">
                  <span class="checkmark"></span>
                </label>

                <div v-if="loc.children && loc.children.length > 0 && loc.selected" class="s__checkbox--vietnam">
                  <div v-for="child in loc.children" class="s__item_checkbox">
                    <label class="container--checkbox">{{ child.name }}
                      <input v-model="child.selected" type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="s__line mt-5 mb-3 s__line--custom"></div>
          <div class="s__bottom_filter">
            <div class="choose__again" @click="reselect('location')">
              Chọn lại
            </div>
            <div class="filter_btn-search">
              <a class="btn-search" href="#">Tìm kiếm</a>
            </div>
          </div>
        </div>
        <div v-click-outside="clickedParent" class="s__head_filter--item__level" v-if="boxLevel">
          <div @click="choiseLevel(lv)" v-for="lv in listLevel" class="filter--item-level"
               :class="{'active' : lv.active}">{{ lv.name }}
          </div>
          <div class="s__line mt-5 mb-3 s__line--24"></div>
          <div class="s__bottom_filter">
            <div class="choose__again" @click="reselect('level')">
              Chọn lại
            </div>
            <div class="filter_btn-search">
              <a class="btn-search" href="#">Tìm kiếm</a>
            </div>
          </div>
        </div>
        <div v-click-outside="clickedParent" class="s__head_filter--item__type-place" v-if="boxTypePlace">
          <div @click="choiseTypePlace(tp)" v-for="tp in listTypePlace" class="filter--item-level" :class="{'active' : tp.active}">{{ tp.name }}</div>
          <div class="s__line mt-5 mb-3 s__line--24"></div>
          <div class="s__bottom_filter">
            <div class="choose__again" @click="reselect('type-place')">
              Chọn lại
            </div>
            <div class="filter_btn-search">
              <a class="btn-search" href="#">Tìm kiếm</a>
            </div>
          </div>
        </div>
        <div v-click-outside="clickedParent" class="s__head_filter--item__date" v-if="boxDate">
          <Calendar :initial-page="{ month: 4, year: 2019 }"
                    :color="selectedColor"
                    :attributes="attrs"/>
        </div>
        <div v-if="hasOpacity" class="opacity__bg"></div>
      </section>
      <section class="s__categories_filter">
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-trekking.svg"></span>
          <span>Trekking</span>
        </div>
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-biking.svg"></span>
          <span>Cycling</span>
        </div>
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-diving.svg"></span>
          <span>Diving</span>
        </div>
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-camping.svg"></span>
          <span>Camping</span>
        </div>
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-kayaking.svg"></span>
          <span>Kayaking</span>
        </div>
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-surfing.svg"></span>
          <span>Surfing</span>
        </div>
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-sup.svg"></span>
          <span>SUP</span>
        </div>
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-free-diving.svg"></span>
          <span>Snorkeling</span>
        </div>
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-paragliding.svg"></span>
          <span>Paragdiling</span>
        </div>
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-spear-fishing.svg"></span>
          <span>Spearfishing</span>
        </div>
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-driving-1.svg"></span>
          <span>Motorbiking</span>
        </div>
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-climbing.svg"></span>
          <span>Canyoning</span>
        </div>
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-rappelling.svg"></span>
          <span>Abseiling</span>
        </div>
        <div class="s__categories_filter--item">
          <span><img src="~/assets/images/icon-diving.svg"></span>
          <span>DiveRaid</span>
        </div>
      </section>
      <section class="s__items_filter">
        <div class="s__items_filter--head">
          <h1>Chúng tôi có <span>126</span> hoạt động</h1>
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
        <div class="more_activity_filter">
          Xem thêm 114 hoạt động khác
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {setupCalendar, Calendar, DatePicker} from 'v-calendar';
import 'v-calendar/style.css';
import {ref} from 'vue';

export default {
  name: "index",
  components: {Calendar, DatePicker},
  data: () => ({
    boxLocation: false,
    boxLevel: false,
    boxDate: false,
    boxTypePlace: false,
    hasOpacity: false,
    checkVietNam: false,
    date: null,

    listLevel: [
      {
        id: 1,
        name: 'Người mới',
        active: false
      },
      {
        id: 2,
        name: 'Nhà chinh phục',
        active: false
      },
      {
        id: 3,
        name: 'NKinh ',
        active: false
      },
      {
        id: 4,
        name: 'Người mới',
        active: false
      }
    ],
    selectedColor: ref('blue'),
    attrs: ref([
      {
        key: 'test',
        highlight: true,
        dates: {start: new Date(2019, 3, 15), end: new Date(2019, 3, 19)},
      }
    ]),
    listTypePlace: [
      {
        id: 1,
        name: 'Full Trip',
        active: false
      },
      {
        id: 2,
        name: 'Land Tour',
        active: false
      },
      {
        id: 3,
        name: 'JoinIN ',
        active: false
      },
    ],
    picked: new Date(),
    location: [
      {
        id: 1,
        name: 'Indonesia',
        selected: false
      },
      {
        id: 2,
        name: 'Thái Lan',
        selected: false
      },
      {
        id: 3,
        name: 'Philippines',
        selected: false
      },
      {
        id: 4,
        name: 'Ấn Độ',
        selected: false
      }, {
        id: 5,
        name: 'Nepal',
        selected: false
      }, {
        id: 6,
        name: 'Mông Cổ',
        selected: false
      },
      {
        id: 7,
        name: 'Parkistan',
        selected: false
      },
      {
        id: 8,
        name: 'Kyrgyzstan',
        selected: false
      },
      {
        id: 9,
        name: 'Georgia',
        selected: false
      },
      {
        id: 10,
        name: 'Việt Nam',
        selected: false,
        children: [
          {
            id: 1,
            name: 'Miền Bắc',
            selected: false
          },
          {
            id: 2,
            name: 'Miền Trung',
            selected: false
          },
          {
            id: 3,
            name: 'Miền Nam',
            selected: false
          }
        ]
      }
    ],
    searchMore: false,
    adult: 0,
    budget: [
      {
        id: 1,
        name: '0 - 500.000 VND',
        priceMin: 0,
        priceMax: 500000,
        selected: false,
      },
      {
        id: 2,
        name: '0 - 500.000 VND',
        priceMin: 0,
        priceMax: 500000,
        selected: false,
      },
      {
        id: 3,
        name: '0 - 500.000 VND',
        priceMin: 0,
        priceMax: 500000,
        selected: false,
      },
      {
        id: 4,
        name: '0 - 500.000 VND',
        priceMin: 0,
        priceMax: 500000,
        selected: false,
      },
      {
        id: 5,
        name: '0 - 500.000 VND',
        priceMin: 0,
        priceMax: 500000,
        selected: false,
      },
      {
        id: 6,
        name: '0 - 500.000 VND',
        priceMin: 0,
        priceMax: 500000,
        selected: false,
      }
    ],
    languages: [
      {
        id: 1,
        name: 'Tiếng Anh',
        selected: false
      },
      {
        id: 2,
        name: 'Tiếng Pháp',
        selected: false
      }
    ]
  }),
  methods: {
    showBoxLocation() {
      this.boxLocation = !this.boxLocation
      if (this.boxLocation) {
        this.hasOpacity = true
      } else {
        this.hasOpacity = false
      }
    },
    showBoxLevel() {
      this.boxLevel = !this.boxLevel
      if (this.boxLevel) {
        this.hasOpacity = true
      } else {
        this.hasOpacity = false
      }
    },
    showBoxTypePlace() {
      this.boxTypePlace = !this.boxTypePlace
      if (this.boxTypePlace) {
        this.hasOpacity = true
      } else {
        this.hasOpacity = false
      }
    },
    showBoxDate() {
      this.boxDate = !this.boxDate
      if (this.boxDate) {
        this.hasOpacity = true
      } else {
        this.hasOpacity = false
      }
    },
    checkedVietNam() {
      console.log(1212)
      this.checkVietNam = !this.checkVietNam
    },
    testSelected() {
      console.log(1234, this.location)
    },
    reselect(type) {
      if (type === 'location') {
        this.location.forEach((val) => {
          val.selected = false
          if (val.children && val.children.length > 0) {
            val.children.forEach((j) => {
              j.selected = false
            })
          }
        })
      } else if (type === 'search-more') {
        this.adult = 0;
        this.budget.forEach((val) => {
          val.selected = false
        })
        this.languages.forEach((val) => {
          val.selected = false
        })
      }else if(type === 'level'){
        this.listLevel.forEach((val) => {
          val.active = false
        })
      }else if(type === 'type-place'){
        this.listTypePlace.forEach((val) => {
          val.active = false
        })
      }
    },
    async clickedParent() {
      await new Promise((resolve, reject) => setTimeout(resolve, 1));
      this.boxLocation = false
      this.boxLevel = false
      this.boxTypePlace = false
      this.boxDate = false
      this.hasOpacity = false
      this.searchMore = false
    },
    updateparent(variable) {
      this.searchMore = variable
    },
    showBoxSearchMore() {
      this.searchMore = true
    },
    minusAdult() {
      if (this.adult > 1) {
        this.adult = this.adult - 1
      }
    },
    plusAdult() {
      this.adult = this.adult + 1
    },
    choiseBudget() {

    },
    choiseLevel(lv) {
      this.listLevel.forEach((val) => {
        if (lv.id === val.id) {
          val.active = true
        } else {
          val.active = false
        }
      })
    },
    choiseTypePlace(tp){
      this.listTypePlace.forEach((val) => {
        if (tp.id === val.id) {
          val.active = true
        } else {
          val.active = false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
