<template>
  <div class="s__current_page position-relative" :class="{'is-more-mobile' : isBoxMoreMobile}">
    <LoadingBox v-if="isLoading"></LoadingBox>
    <div v-if="!isLoading">
      <Modal v-click-outside="clickedParent" @clearModal="updateparent" :show="searchMore" :width="'770px'"
             :top="'100px'"
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
                    <input @change="choiseBudget(bud)" v-model="bud.selected" type="checkbox">
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
                <a @click="fSearch()" class="btn-search">Tìm kiếm</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal @clearModal="updateparentBoxSearchMobile" :show="boxSearchMobile" :width="'770px'" :top="'100px'">
        <div class="title-box-search-more-mobile">
          <span v-if="typeSearchMore === 'type-activity'">Loại hoạt động</span>
          <span v-if="typeSearchMore === 'location'">Địa điểm</span>
          <span v-if="typeSearchMore === 'level'">Cấp độ</span>
          <span v-if="typeSearchMore === 'date-schedule'">Ngày khởi hành</span>
          <span v-if="typeSearchMore === 'type-booking'">Loại đặt chỗ</span>
          <span v-if="typeSearchMore === 'filter-other'">Bộ lọc khác</span>
        </div>
        <div class="content-box-search-more-mobile">
          <div class="content-box-search-more-mobile__title" v-if="typeSearchMore === 'type-activity'">
            <span>Bạn muốn chinh phục loại hoạt động nào?</span>
          </div>
          <div v-if="typeSearchMore === 'type-activity'" class="content-box-search-more-mobile__wrap type-activity">
            <div class="s__categories_filter--item active">
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
          </div>
          <div v-if="typeSearchMore === 'location'" class="content-box-search-more-mobile__wrap type-activity">
            <div class="position-relative box-location-filter">
              <div class="d-flex-wrap">
                <div v-for="loc in location" class="s__item_checkbox">
                  <label class="container--checkbox" :class="{'active': loc.selected}">
                    <span>{{ loc.name }}</span> <span v-if="loc.children && loc.children.length > 0"
                                                      class="icon-down-location"><img
                      src="~/assets/images/icon-down.svg"></span>
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
          </div>
          <div v-if="typeSearchMore === 'level'"
               class="content-box-search-more-mobile__wrap type-activity type-activity-level">
            <div @click="choiseLevel(lv)" v-for="lv in listLevel" class="filter--item-level"
                 :class="{'active' : lv.active}">{{ lv.name }}
            </div>
          </div>
          <div v-if="typeSearchMore === 'date-schedule'"
               class="content-box-search-more-mobile__wrap type-activity type-activity-level">
            <Calendar :initial-page="{ month: 4, year: 2019 }"
                      :color="selectedColor"
                      :attributes="attrs"/>
          </div>
          <div v-if="typeSearchMore === 'type-booking'"
               class="content-box-search-more-mobile__wrap type-activity type-activity-level">
            <div @click="choiseTypePlace(tp)" v-for="tp in listTypePlace" class="filter--item-level"
                 :class="{'active' : tp.active}">{{ tp.name }}
            </div>
          </div>
          <div v-if="typeSearchMore === 'filter-other'"
               class="content-box-search-more-mobile__wrap type-activity type-activity-level">
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
                        <input @change="choiseBudget(bud)" v-model="bud.selected" type="radio">
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
            </div>
          </div>
        </div>
        <div class="bottom-box-search-more-mobile">
          <span @click="reselect('search-more')" class="unchoise-search">Bỏ chọn tất cả</span>
          <span class="btn-search-mobile">
          <button @click="fSearch()">Tìm kiếm</button>
        </span>
        </div>
      </Modal>
      <section v-if="isMobile" class="s__head_filter--mobile">
        <div class="s__head_filter--mobile__left">
          <div class="s__head_filter--mobile__type-activity">
            <span @click="showBoxSearchMoreMobile('type-activity')">Loại hoạt động</span>
          </div>
        </div>
        <div class="s__head_filter--mobile__right">
          <span v-if="!isBoxMoreMobile" @click="showBoxMoreMobile()">Các bộ lọc khác</span>
        </div>
        <div v-click-outside="clickedParent" v-if="isBoxMoreMobile" class="s__head_filter--mobile__more">
          <div class="s__nothing">
            <div @click="showBoxSearchMoreMobile('location')"
                 :class="{'active': boxLocation || locationSelected.length > 0}"
                 class="s__head_filter--item">
              <span>Địa điểm</span>
            </div>
            <div @click="showBoxSearchMoreMobile('level')" :class="{'active': boxLevel}" class="s__head_filter--item">
              <span>Cấp độ hoạt động</span>
            </div>
            <div @click="showBoxSearchMoreMobile('date-schedule')" :class="{'active': boxDate}"
                 class="s__head_filter--item">
              <span>Ngày khởi hành</span>
            </div>
            <div @click="showBoxSearchMoreMobile('type-booking')" :class="{'active': boxTypePlace}"
                 class="s__head_filter--item">
              <span>Loại đặt chỗ</span>
            </div>
            <div @click="showBoxSearchMoreMobile('filter-other')" class="s__head_filter--item add-filter">
              <span><img src="~/assets/images/filter.svg"></span> <span>Thêm bộ lọc: </span><span>1</span>
            </div>
          </div>
        </div>
      </section>
      <div class="s__container">
        <section v-if="!isMobile" class="s__head_filter">
          <div @click="showBoxLocation()" :class="{'active': boxLocation || locationSelected.length > 0}"
               class="s__head_filter--item">
            <span v-if="locationSelected.length <= 0">Địa điểm</span>
            <span v-if="locationSelected.length > 0">{{ locationSelected.length }} Lựa chọn</span>
          </div>
          <div @click="showBoxLevel()" :class="{'active': boxLevel || levelSelected !== ''}"
               class="s__head_filter--item">
            <span v-if="levelSelected === ''">Cấp độ hoạt động</span>
            <span v-if="levelSelected !== ''">{{ levelNameSelected }}</span>
          </div>
          <div @click="showBoxDate()" :class="{'active': boxDate}" class="s__head_filter--item">
            <span>Ngày khởi hành</span>
          </div>
          <div @click="showBoxTypePlace()" :class="{'active': boxTypePlace || typeBookingSelected !== ''}"
               class="s__head_filter--item">
            <span v-if="typeBookingSelected === ''">Loại đặt chỗ</span>
            <span v-if="typeBookingSelected !== ''">{{ typeNameBookingSelected }}</span>
          </div>
          <div @click="showBoxSearchMore()" class="s__head_filter--item add-filter">
            <span><img src="~/assets/images/filter.svg"></span> <span>Thêm bộ lọc: </span><span>{{ moreFilter }}</span>
          </div>
          <div v-click-outside="clickedParent" class="s__head_filter--item__location" v-if="boxLocation">
            <div class="position-relative box-location-filter">
              <div class="d-flex-wrap">
                <div v-for="loc in location" class="s__item_checkbox">
                  <label class="container--checkbox" :class="{'active': loc.selected}">
                    <span>{{ loc.name }}</span> <span v-if="loc.children && loc.children.length > 0"
                                                      class="icon-down-location"><img
                      src="~/assets/images/icon-down.svg"></span>
                    <input @change="fLoacationSelected()" v-model="loc.selected" type="checkbox">
                    <span class="checkmark"></span>
                  </label>

                  <div v-if="loc.children && loc.children.length > 0 && loc.selected" class="s__checkbox--vietnam">
                    <div v-for="child in loc.children" class="s__item_checkbox">
                      <label class="container--checkbox">{{ child.name }}
                        <input @change="fLoacationSelected()" v-model="child.selected" type="checkbox">
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
                <a @click="fSearch()" class="btn-search">Tìm kiếm</a>
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
                <a @click="fSearch()" class="btn-search">Tìm kiếm</a>
              </div>
            </div>
          </div>
          <div v-click-outside="clickedParent" class="s__head_filter--item__type-place" v-if="boxTypePlace">
            <div @click="choiseTypePlace(tp)" v-for="tp in listTypePlace" class="filter--item-level"
                 :class="{'active' : tp.active}">{{ tp.name }}
            </div>
            <div class="s__line mt-5 mb-3 s__line--24"></div>
            <div class="s__bottom_filter">
              <div class="choose__again" @click="reselect('type-place')">
                Chọn lại
              </div>
              <div class="filter_btn-search">
                <a @click="fSearch()" class="btn-search">Tìm kiếm</a>
              </div>
            </div>
          </div>
          <div v-click-outside="clickedParent" class="s__head_filter--item__date" v-if="boxDate">
            <Calendar @input="fChangeDate()" mode="dateTime"
                      v-model.range="range"/>
          </div>
          <div v-if="hasOpacity" class="opacity__bg"></div>
        </section>
        <section v-if="!isMobile" class="s__categories_filter">

          <div @click="fChangeTypeActivity(type_activity)" v-for="type_activity in listTypeActivities"
               class="s__categories_filter--item" :class="{'active': type_activity.active}">
            <span v-if="!type_activity.active"><img :src="type_activity.thumbnail"></span>
            <span class="img-active-activity" v-if="type_activity.active"><img
                :src="type_activity.thumbnail_active"></span>
            <span>{{ type_activity.name }}</span>
          </div>

        </section>
        <section class="s__items_filter">
          <div v-if="hasData" class="s__items_filter--head">
            <h1>Chúng tôi có <span>126</span> hoạt động</h1>
          </div>
          <div v-if="!hasData" class="s__items_filter--head__not-has-data">
            <span><img src="~/assets/images/icon-not-has-data.svg"></span> <span>Thật tiếc chúng tôi không tìm thấy hoạt động nào phù hợp. Nhưng có thể bạn quan tâm các hoạt động dưới đây:</span>
          </div>
          <div class="s__activities--items">
            <div v-for="activity in listActivities" class="s__activities--items__item">
              <NuxtLink :to="'/activity/' + activity.slug">
                <div class="s__activities--items__item--image">
                  <div class="s__activities--items__item--image__icon">
                    <img src="~/assets/images/local.jpg">
                  </div>
                  <img :src="activity.thumbnail">
                </div>
                <div class="s__activities--items__item--head">
                  <div class="s__activities--items__item--head__left">
                    {{ activity.small_info }}
                  </div>
                  <div class="s__activities--items__item--head__right">
                    <span><img src="~/assets/images/booked.svg"></span>
                    <span>Đã đặt {{ activity.booking_number }}</span>
                  </div>
                </div>
                <div class="s__activities--items__item--title">
                  <h3>
                    {{ activity.title }}
                  </h3>
                </div>
                <div class="s__activities--items__item--price">
                  từ {{ activity.price }} VND/người
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="more_activity_filter">
            Xem thêm 114 hoạt động khác
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import {setupCalendar, Calendar, DatePicker} from 'v-calendar';
import 'v-calendar/style.css';
import {ref} from 'vue';
import axios from "axios";

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
        name: 'Kinh nghiệm ',
        active: false
      },
      {
        id: 4,
        name: 'Người mới',
        active: false
      }
    ],
    selectedColor: ref('blue'),
    range: ref({
      start: new Date(2023, 9, 6),
      end: new Date(2023, 9, 10),
    }),
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
        name: '500.000 - 1.500.000 VND',
        priceMin: 500000,
        priceMax: 1500000,
        selected: false,
      },
      {
        id: 3,
        name: '1.500.000 - 2.500.000 VND',
        priceMin: 1500000,
        priceMax: 2500000,
        selected: false,
      },
      {
        id: 4,
        name: '2.500.000 - 5.000.000 VND',
        priceMin: 2500000,
        priceMax: 5000000,
        selected: false,
      },
      {
        id: 5,
        name: 'Trên 500.000 VND',
        priceMin: 500000,
        priceMax: 50000000,
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
    ],
    isMobile: false,
    isBoxMoreMobile: false,
    boxSearchMobile: false,
    pageHeight: 0,
    typeSearchMore: '',
    locationSelected: [],
    levelSelected: '',
    dateSelected: '',
    typeBookingSelected: '',
    typeActivitySelected: '',
    number_of_member: 0,
    budgetSelected: '',
    language: '',
    moreFilter: 0,
    listTypeActivities: [
      {
        id: 1,
        name: 'Trekking',
        active: false,
        thumbnail: '/assets/images/icon-trekking.svg',
        thumbnail_active: '/assets/images/icon-white-trekking.svg'
      },
      {
        id: 2,
        name: 'Cycling',
        active: false,
        thumbnail: '/assets/images/icon-biking.svg',
        thumbnail_active: '/assets/images/icon-white-cycling.svg'
      },
      {
        id: 3,
        name: 'Diving',
        active: false,
        thumbnail: '/assets/images/icon-diving.svg',
        thumbnail_active: '/assets/images/icon-white-scuba-diving.svg'
      },
      {
        id: 4,
        name: 'Camping',
        active: false,
        thumbnail: '/assets/images/icon-camping.svg',
        thumbnail_active: '/assets/images/icon-white-camping.svg'
      },
      {
        id: 5,
        name: 'Kayaking',
        active: false,
        thumbnail: '/assets/images/icon-kayaking.svg',
        thumbnail_active: '/assets/images/icon-white-kayaking.svg'
      },
      {
        id: 6,
        name: 'Surfing',
        active: false,
        thumbnail: '/assets/images/icon-surfing.svg',
        thumbnail_active: '/assets/images/icon-white-surfing.svg'
      },
      {
        id: 7,
        name: 'SUP',
        active: false,
        thumbnail: '/assets/images/icon-sup.svg',
        thumbnail_active: '/assets/images/icon-white-sup.svg'
      },
      {
        id: 8,
        name: 'Snorkeling',
        active: false,
        thumbnail: '/assets/images/icon-free-diving.svg',
        thumbnail_active: '/assets/images/icon-white-snorkeling.svg'
      },
      {
        id: 9,
        name: 'Paragdiling',
        active: false,
        thumbnail: '/assets/images/icon-paragliding.svg',
        thumbnail_active: '/assets/images/icon-white-paragliding.svg'
      },
      {
        id: 10,
        name: 'Spearfishing',
        active: false,
        thumbnail: '/assets/images/icon-spear-fishing.svg',
        thumbnail_active: '/assets/images/icon-spear-fishing.svg'
      },
      {
        id: 11,
        name: 'Motorbiking',
        active: false,
        thumbnail: '/assets/images/icon-driving-1.svg',
        thumbnail_active: '/assets/images/icon-driving-1.svg'
      },
      {
        id: 12,
        name: 'Canyoning',
        active: false,
        thumbnail: '/assets/images/icon-climbing.svg',
        thumbnail_active: '/assets/images/icon-climbing.svg'
      },
      {
        id: 13,
        name: 'Abseiling',
        active: false,
        thumbnail: '/assets/images/icon-rappelling.svg',
        thumbnail_active: '/assets/images/icon-rappelling.svg'
      },
      {
        id: 14,
        name: 'DiveRaid',
        active: false,
        thumbnail: '/assets/images/icon-diving.svg',
        thumbnail_active: '/assets/images/icon-diving.svg'
      },
    ],
    levelNameSelected: '',
    typeNameBookingSelected: '',
    config: useRuntimeConfig(),
    isLoading: false,
    hasData: true,
    listActivities: [
      {
        id: 1,
        activity_id: 'actVNSG-CSP01',
        slug: '-land-tour--trekking-doi-ghorepani-poon-actNP-ICT06',
        title: '(Land Tour) Trekking Đồi Ghorepani Poon',
        small_info: 'VIỆT NAM | 3N2D | TREKKING',
        booking_number: 230,
        price: '13.400.000',
        thumbnail: '/assets/images/activity_1.jpg'
      },
      {
        id: 2,
        activity_id: 'actVNSG-CSP01',
        slug: '-land-tour--trekking-doi-ghorepani-poon-actNP-ICT06',
        title: '(Land Tour) Trekking Đồi Ghorepani Poon',
        small_info: 'VIỆT NAM | 3N2D | TREKKING',
        booking_number: 230,
        price: '13.400.000',
        thumbnail: '/assets/images/activity_2.jpg'
      },
      {
        id: 3,
        activity_id: 'actVNSG-CSP01',
        slug: '-land-tour--trekking-doi-ghorepani-poon-actNP-ICT06',
        title: '(Land Tour) Trekking Đồi Ghorepani Poon',
        small_info: 'VIỆT NAM | 3N2D | TREKKING',
        booking_number: 230,
        price: '13.400.000',
        thumbnail: '/assets/images/activity_3.jpg'
      }
    ]
  }),
  mounted() {
    this.pageWidth = window.innerWidth
    if (this.pageWidth <= 768) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    this.fSearch()
  },
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
      this.checkVietNam = !this.checkVietNam
    },
    testSelected() {
    },
    reselect(type) {
      if (type === 'location') {
        this.locationSelected = []
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
        this.number_of_member = '';
        this.budgetSelected = '';
        this.budget.forEach((val) => {
          val.selected = false
        })
        this.languages.forEach((val) => {
          val.selected = false
        })
      } else if (type === 'level') {
        this.levelSelected = ''
        this.listLevel.forEach((val) => {
          val.active = false
        })
      } else if (type === 'type-place') {
        this.typeBookingSelected = ''
        this.listTypePlace.forEach((val) => {
          val.active = false
        })
      }
    },
    async clickedParent() {
      console.log(121212, 'test')
      await new Promise((resolve, reject) => setTimeout(resolve, 1));
      this.boxLocation = false
      this.boxLevel = false
      this.boxTypePlace = false
      this.boxDate = false
      this.hasOpacity = false
      this.searchMore = false
      this.isBoxMoreMobile = false
    },
    updateparent(variable) {
      this.searchMore = variable
      if (this.searchMore) {
        useHead({
          bodyAttrs: {
            class: this.searchMore ? 'overflow-hidden' : ''
          }
        })
      } else {
        useHead({
          bodyAttrs: {
            class: ''
          }
        })
      }
    },
    updateparentBoxSearchMobile(variable) {
      this.boxSearchMobile = variable
      if (this.boxSearchMobile) {
        useHead({
          bodyAttrs: {
            class: this.boxSearchMobile ? 'overflow-hidden' : ''
          }
        })
      } else {
        useHead({
          bodyAttrs: {
            class: ''
          }
        })
      }
    },
    showBoxSearchMore() {
      this.searchMore = true
      useHead({
        bodyAttrs: {
          class: this.searchMore ? 'overflow-hidden' : ''
        }
      })
    },
    minusAdult() {
      if (this.adult > 1) {
        this.adult = this.adult - 1
      }
    },
    plusAdult() {
      this.adult = this.adult + 1
    },
    choiseBudget(bud) {
      this.budgetSelected = ''
      if (this.budget.length > 0) {
        this.budget.forEach((val) => {
          if (val.id === bud.id) {
            val.selected = true
            this.budgetSelected = val.id
          } else {
            val.selected = false
          }
        })
      }
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
    choiseTypePlace(tp) {
      this.listTypePlace.forEach((val) => {
        if (tp.id === val.id) {
          val.active = true
        } else {
          val.active = false
        }
      })
    },
    onResize() {
      this.pageWidth = window.innerWidth
      if (this.pageWidth <= 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    showBoxMoreMobile() {
      this.isBoxMoreMobile = !this.isBoxMoreMobile
    },
    showBoxSearchMoreMobile(type) {
      this.boxSearchMobile = true
      this.typeSearchMore = type
      useHead({
        bodyAttrs: {
          class: this.boxSearchMobile ? 'overflow-hidden' : ''
        }
      })
    },
    fLoacationSelected() {
      this.locationSelected = []

      if (this.location.length > 0) {
        this.location.forEach((val) => {
          if (val.selected) {
            this.locationSelected.push(val.id)
            if (val.children && val.children.length > 0) {
              val.children.forEach((v) => {
                if (v.selected) {
                  this.locationSelected.push(v.id)
                }
              })
            }
          }
        })
      }
    },
    async fSearch() {

      let typeActivitiesSelected = []
      this.listTypeActivities.forEach((val) => {
        if (val.active) {
          typeActivitiesSelected.push(val.id)
        }
      })

      let typeActivitiesSelectedJoin = ''
      if (typeActivitiesSelected.length > 0) {
        typeActivitiesSelectedJoin = typeActivitiesSelected.join(',')
      }

      let location = ''
      if (this.locationSelected.length > 0) {
        location = this.locationSelected.join(',')
      }

      if (this.listLevel.length > 0) {
        this.listLevel.forEach((val) => {
          if (val.active) {
            this.levelSelected = val.id
            this.levelNameSelected = val.name
          }
        })
      }

      if (this.listTypePlace.length > 0) {
        this.listTypePlace.forEach((val) => {
          if (val.active) {
            this.typeBookingSelected = val.id
            this.typeNameBookingSelected = val.name
          }
        })
      }
      if (this.budgetSelected !== '' && this.adult <= 0) {
        this.moreFilter = 1
      } else if (this.adult > 0 && this.budgetSelected === '') {
        this.moreFilter = 1
      } else if (this.budgetSelected !== '' && this.adult > 0) {
        this.moreFilter = 2
      } else {
        this.moreFilter = 0
      }

      this.$router.push({
        path: '/filter',
        query: {
          location: location,
          level: this.levelSelected,
          typePlace: this.typeBookingSelected,
          budget: this.budgetSelected,
          number_of_member: this.adult,
          type_activities: typeActivitiesSelectedJoin
        }
      });
      this.boxLocation = false
      this.boxLevel = false
      this.boxTypePlace = false
      this.boxDate = false
      this.hasOpacity = false
      this.searchMore = false
      this.isBoxMoreMobile = false

      this.isLoading = true
      await axios.get(this.config.public.baseUrl + '/v1/news/list')
          .then((res) => {
            this.isLoading = false
            this.hasData = false
          })
          .catch((error) => {
            this.isLoading = false
          });
    },
    fChangeDate() {

    },
    async fChangeTypeActivity(activity) {
      let typeActivitiesSelected = []
      this.listTypeActivities.forEach((val) => {
        if (val.id === activity.id) {
          val.active = !val.active
        }
        if (val.active) {
          typeActivitiesSelected.push(val.id)
        }
      })

      let typeActivitiesSelectedJoin = ''
      if (typeActivitiesSelected.length > 0) {
        typeActivitiesSelectedJoin = typeActivitiesSelected.join(',')
      }

      let location = ''
      if (this.locationSelected.length > 0) {
        location = this.locationSelected.join(',')
      }

      if (this.listLevel.length > 0) {
        this.listLevel.forEach((val) => {
          if (val.active) {
            this.levelSelected = val.id
          }
        })
      }

      if (this.listTypePlace.length > 0) {
        this.listTypePlace.forEach((val) => {
          if (val.active) {
            this.typeBookingSelected = val.id
          }
        })
      }
      if (this.budgetSelected !== '' && this.adult <= 0) {
        this.moreFilter = 1
      } else if (this.adult > 0 && this.budgetSelected === '') {
        this.moreFilter = 1
      } else if (this.budgetSelected !== '' && this.adult > 0) {
        this.moreFilter = 2
      } else {
        this.moreFilter = 0
      }

      this.$router.push({
        path: '/filter',
        query: {
          location: location,
          level: this.levelSelected,
          typePlace: this.typeBookingSelected,
          budget: this.budgetSelected,
          number_of_member: this.adult,
          type_activities: typeActivitiesSelectedJoin
        }
      });
      this.isLoading = true
      await axios.get(this.config.public.baseUrl + '/v1/news/list')
          .then((res) => {
            this.isLoading = false
            this.hasData = false
          })
          .catch((error) => {
            this.isLoading = false
          });
    }
  }
}
</script>

<style scoped>

</style>
