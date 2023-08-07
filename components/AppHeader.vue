<template>
  <div>
    <section class="s__header" :class="{'fixed animate__animated animate__fadeIn': isFixed || isHome !== true}">
      <div class="s__header--logo">
        <div>
          <img @click="showBoxNav()" v-if="!isMobile" src="~/assets/images/wild-logo.svg">
          <img class="logo" @click="showBoxNavMobile()" v-if="isMobile && isFixed" src="~/assets/images/wild-logo.svg">
          <img class="logo" @click="showBoxNavMobile()" v-if="isMobile && !isFixed"
               src="~/assets/images/logo-white.svg">
        </div>
        <div class="s__header--arrow" :class="{'active': activeNav}">
          <img @click="showBoxNav()" v-if="!isMobile" src="~/assets/images/icon-arrow-menu.svg">
          <img @click="showBoxNavMobile()" v-if="isMobile && isFixed" src="~/assets/images/icon-arrow-menu.svg">
          <img @click="showBoxNavMobile()" v-if="isMobile && !isFixed" src="~/assets/images/icon-arrow-menu-white.svg">
        </div>
      </div>
      <div v-if="!activeNav && !isMobile" class="s__header--search" :class="{'s__header--search__active': showSearch}"
           @click="hasBoxSearch()" v-on:focusout="hasBoxSearch()">
        <div class="s__header--search__wraps">
          <span class="is-desktop" v-if="!showSearch && !activeNav">Tìm kiếm trải nghiệm...</span>
          <span v-if="!showSearch && !activeNav"><img src="~/assets/images/icon-search.svg"></span>
          <div v-if="showSearch && !activeNav" class="s__header--search__text">
            <span>TÌM KIẾM</span>
            <span>TRẢI NGHIỆM</span>
          </div>
        </div>
      </div>
      <div v-if="isMobile && !navMobile" class="s__header--search" :class="{'s__header--search__active': showSearch}">
        <div class="s__header--search__wraps">
          <span class="is-desktop" v-if="!showSearch && !activeNav">Tìm kiếm trải nghiệm...</span>
          <span v-if="!showSearch && !activeNav"><img src="~/assets/images/icon-search.svg"></span>
        </div>
      </div>
      <div v-if="activeNav && !isMobile" class="s__header--text-nav">
        “<span>Adventure </span> is not only a trip, but also a <span> rush </span> of <span> adrenaline.</span>”
      </div>
      <div v-if="!navMobile" class="s__header--lang">
<!--        <div v-if="!showSearch" class="s__header&#45;&#45;lang__left">-->
<!--&lt;!&ndash;          <span class="is-desktop">TIẾNG VIỆT / VND</span>&ndash;&gt;-->
<!--&lt;!&ndash;          <span class="is-mobile">VN</span>&ndash;&gt;-->
<!--        </div>-->
        <div v-if="!showSearch" class="s__header--lang__right">
<!--          <span class="is-desktop">+84 886 677 950</span>-->
          <span class="is-mobile">
            <img v-if="isMobile && isFixed" class="img-mes" src="~assets/images/icon-messenger.svg">
            <img v-if="isMobile && !isFixed" class="img-mes" src="~assets/images/icon-message-white.svg">
          </span>
        </div>
        <div v-if="activeNav" class="s__header--lang__right">
          <img class="icon-close" @click="closeNav()" src="~/assets/images/icon-close.svg">
        </div>
      </div>
      <div v-click-outside="clickedParent" v-if="showSearch" :class="{'animate__animated animate__fadeIn': showSearch}"
           class="s__header--box-search">
        <Modal @clearModal="updateparent" :show="showHelp" :width="'624px'" :top="'100px'" :border-radius="'10px'"
               :height="'500px'">
          <div class="s__help--modal">
            <div class="s__help--title">
              Các loại đặt chỗ của intoWild
            </div>
            <div class="s__help--description">
              Mỗi hình thức tham gia tour sẽ có mức chi phí khác nhau. Nếu bạn là người mới, muốn được lo từ A-Z, hãy
              cùng đồng hành với intoWild trong Full-Trip. Còn nếu bạn có nhóm đông, tự tin có thể đi tự túc và nhận hỗ
              trợ của Wildbuddy bản địa thì hãy chọn Land-Tour để có chi phí tối ưu nhất nhé!
            </div>
            <div class="s__line mt-24px mb-32px"></div>
            <div class="s__help--type-tours">
              <div class="s__help--type-tours__button">
                <div @click="chooseType(type)" v-for="(type, index) in typeTours" :class="{'active' : type.active}"
                     :key="index" class="s__help--type-tours__button--item">
                  {{ type.name }}
                </div>
              </div>
              <div class="s__help--type-tours__description">
                {{ this.typeToursDescription }}
              </div>
            </div>
          </div>
        </Modal>
        <div class="s__header--box-search__wrap">
          <div class="s__header--box-search__wrap--location">
            <div class="s__header--box-search__wrap--label">
              Địa điểm
            </div>
            <div class="s__header--box-search__wrap--input" :class="{'active' : locationActive}"
                 @click="showBoxLocation()">
              <span v-if="!locationChoosed">Bạn muốn đi đâu?</span>
              <span v-else>{{ locationChoosed }}</span>
            </div>
          </div>
          <div class="s__header--box-search__wrap--type">
            <div class="s__header--box-search__wrap--label">
              Loại hoạt động
            </div>
            <div @click="showBoxActivity()" class="s__header--box-search__wrap--input"
                 :class="{'active' : activityActive}">
              <span v-if="!activityChoosed">Loại hoạt động bạn muốn trải nghiệm?</span>
              <span v-else>{{ activityChoosed }}</span>
            </div>
            <div v-if="activeBox" class="s__header--box-search__wrap--location__activity">
              <div class="item" @click="activeChoose('Cycling')">Cycling</div>
              <div class="item">Kayaking</div>
              <div class="item">SUP</div>
              <div class="item">Trekking</div>
            </div>
          </div>
          <div class="s__header--box-search__wrap--book">
            <div class="s__header--box-search__wrap--label">
              <span> Loại đặt chỗ</span>
              <span @click="modalHelp()"><img src="~/assets/images/icon-help.svg"></span>
            </div>
            <div @click="showBoxBook()" class="s__header--box-search__wrap--input" :class="{'active' : locationActive}">
              <span v-if="!bookChoosed">Chọn loại đặt chỗ</span>
              <span v-else>{{ bookChoosed }}</span>
            </div>
            <div v-if="activeBook" class="s__header--box-search__wrap--location__book">
              <div class="item" @click="bookChoose('Full Trip')">Full Trip</div>
              <div class="item">Land Tour</div>
              <div class="item">JoinIN</div>
            </div>
          </div>
          <div class="s__header--box-search__wrap--button">
            <img src="~/assets/images/icon-search.svg">
          </div>
          <div class="s__header--box-search__wrap--location__box" v-if="locationBox">
            <div class="s__header--box-search__wrap--location__here">
              <NuxtLink>
                <span><img src="~/assets/images/location.svg"></span>
                <span>Hoạt động ở gần bạn</span>
              </NuxtLink>
            </div>
            <div class="s__header--box-search__wrap--location__country">
              <div class="s__header--box-search__wrap--location__country--item" @click="locationChoose('Việt Nam')">
                <div class="img-item">
                  <img src="~/assets/images/vn.png">
                </div>
                <div class="title-item">
                  Indonesia
                </div>
              </div>
              <div class="s__header--box-search__wrap--location__country--item">
                <div class="img-item">
                  <img src="~/assets/images/vn.png">
                </div>
                <div class="title-item">
                  Indonesia
                </div>
              </div>
              <div class="s__header--box-search__wrap--location__country--item">
                <div class="img-item">
                  <img src="~/assets/images/vn.png">
                </div>
                <div class="title-item">
                  Indonesia
                </div>
              </div>
              <div class="s__header--box-search__wrap--location__country--item">
                <div class="img-item">
                  <img src="~/assets/images/vn.png">
                </div>
                <div class="title-item">
                  Indonesia
                </div>
              </div>
              <div class="s__header--box-search__wrap--location__country--item">
                <div class="img-item">
                  <img src="~/assets/images/vn.png">
                </div>
                <div class="title-item">
                  Indonesia
                </div>
              </div>
              <div class="s__header--box-search__wrap--location__country--item">
                <div class="img-item">
                  <img src="~/assets/images/vn.png">
                </div>
                <div class="title-item">
                  Indonesia
                </div>
              </div>
              <div class="s__header--box-search__wrap--location__country--item">
                <div class="img-item">
                  <img src="~/assets/images/vn.png">
                </div>
                <div class="title-item">
                  Indonesia
                </div>
              </div>
              <div class="s__header--box-search__wrap--location__country--item">
                <div class="img-item">
                  <img src="~/assets/images/vn.png">
                </div>
                <div class="title-item">
                  Indonesia
                </div>
              </div>

              <div class="s__header--box-search__wrap--location__country--item">
                <div class="img-item">
                  <img src="~/assets/images/vn.png">
                </div>
                <div class="title-item">
                  Indonesia
                </div>
              </div>
              <div class="s__header--box-search__wrap--location__country--item">
                <div class="img-item">
                  <img src="~/assets/images/vn.png">
                </div>
                <div class="title-item">
                  Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="s__header--box-nav" v-if="activeNav">
        <div class="s__header--box-nav__left">
          <div v-if="itemsNav.length > 0" v-for="item in itemsNav" class="item" :class="{'active': item.active}"
               @click="activeItemNav(item)">
            {{ item.name }}
          </div>
        </div>
        <div class="s__header--box-nav__right">
          <div v-if="rightNavLocation" class="s__header--box-nav__right--location">
            <div class="s__header--box-nav__right--location-wrap-items" v-if="!rightNavLocationItemDetail">
              <div @click="showDetailLocation()" v-for="(country,index) in locationCountries" :key="index"
                   class="s__header--box-nav__right--location-wrap-items__item">
                <div class="img-item">
                  <img :src="country.thumbnail">
                </div>
                <div class="title-item">
                  {{ country.name }}
                </div>
              </div>
            </div>
            <div class="s__header--box-nav__right--location-wrap-items" v-if="rightNavLocationItemDetail">
              <div v-for="(regions,index) in locationRegions" :key="index"
                   class="s__header--box-nav__right--location-wrap-items__item">
                <div class="img-item">
                  <img :src="regions.thumbnail">
                </div>
                <div class="title-item">
                  {{ regions.name }}
                </div>
              </div>
            </div>
            <div @click="backToLocation()" v-if="rightNavLocationItemDetail"
                 class="s__header--box-nav__right--location-wrap-items__back">
              <span><img src="~/assets/images/arrow-left-month.svg"></span>
              <span>Quay lại</span>
            </div>
          </div>
          <div v-if="rightNavLevel" class="s__header--box-nav__right--level">
            <div class="s__header--box-nav__right--level__item">
              <div class="img-item">
                <img src="~/assets/images/lv.png">
              </div>
              <div class="title-item">
                Người mới
              </div>
            </div>
            <div class="s__header--box-nav__right--level__item">
              <div class="img-item">
                <img src="~/assets/images/lv.png">
              </div>
              <div class="title-item">
                Người mới
              </div>
            </div>
            <div class="s__header--box-nav__right--level__item">
              <div class="img-item">
                <img src="~/assets/images/lv.png">
              </div>
              <div class="title-item">
                Người mới
              </div>
            </div>
            <div class="s__header--box-nav__right--level__item">
              <div class="img-item">
                <img src="~/assets/images/lv.png">
              </div>
              <div class="title-item">
                Người mới
              </div>
            </div>
          </div>
          <div v-if="rightNavTypeActivity" class="s__header--box-nav__right--type-activity">
            <div class="s__header--box-nav__right--type-activity__item">
              <div class="icon">
                <img src="~/assets/images/climbing.svg">
              </div>
              <div class="name">
                Rock Climbing
              </div>
            </div>
            <div class="s__header--box-nav__right--type-activity__item">
              <div class="icon">
                <img src="~/assets/images/climbing.svg">
              </div>
              <div class="name">
                Rock Climbing
              </div>
            </div>
            <div class="s__header--box-nav__right--type-activity__item">
              <div class="icon">
                <img src="~/assets/images/climbing.svg">
              </div>
              <div class="name">
                Rock Climbing
              </div>
            </div>
            <div class="s__header--box-nav__right--type-activity__item">
              <div class="icon">
                <img src="~/assets/images/climbing.svg">
              </div>
              <div class="name">
                Rock Climbing
              </div>
            </div>
            <div class="s__header--box-nav__right--type-activity__item">
              <div class="icon">
                <img src="~/assets/images/climbing.svg">
              </div>
              <div class="name">
                Rock Climbing
              </div>
            </div>
            <div class="s__header--box-nav__right--type-activity__item">
              <div class="icon">
                <img src="~/assets/images/climbing.svg">
              </div>
              <div class="name">
                Rock Climbing
              </div>
            </div>
            <div class="s__header--box-nav__right--type-activity__item">
              <div class="icon">
                <img src="~/assets/images/climbing.svg">
              </div>
              <div class="name">
                Rock Climbing
              </div>
            </div>
            <div class="s__header--box-nav__right--type-activity__item">
              <div class="icon">
                <img src="~/assets/images/climbing.svg">
              </div>
              <div class="name">
                Rock Climbing
              </div>
            </div>
            <div class="s__header--box-nav__right--type-activity__item">
              <div class="icon">
                <img src="~/assets/images/climbing.svg">
              </div>
              <div class="name">
                Rock Climbing
              </div>
            </div>
            <div class="s__header--box-nav__right--type-activity__item">
              <div class="icon">
                <img src="~/assets/images/climbing.svg">
              </div>
              <div class="name">
                Rock Climbing
              </div>
            </div>
          </div>
          <div v-if="rightNavCollection" class="s__header--box-nav__right--collection">
            <div class="s__header--box-nav__right--collection__item">
              <div class="img-item">
                <img src="~/assets/images/lv.png">
              </div>
              <div class="title-item">
                Weekend Getaway
              </div>
            </div>
            <div class="s__header--box-nav__right--collection__item">
              <div class="img-item">
                <img src="~/assets/images/lv.png">
              </div>
              <div class="title-item">
                Weekend Getaway
              </div>
            </div>
            <div class="s__header--box-nav__right--collection__item">
              <div class="img-item">
                <img src="~/assets/images/lv.png">
              </div>
              <div class="title-item">
                Weekend Getaway
              </div>
            </div>
            <div class="s__header--box-nav__right--collection__item">
              <div class="img-item">
                <img src="~/assets/images/lv.png">
              </div>
              <div class="title-item">
                Weekend Getaway
              </div>
            </div>
            <div class="s__header--box-nav__right--collection__item">
              <div class="img-item">
                <img src="~/assets/images/lv.png">
              </div>
              <div class="title-item">
                Weekend Getaway
              </div>
            </div>
            <div class="s__header--box-nav__right--collection__item">
              <div class="img-item">
                <img src="~/assets/images/lv.png">
              </div>
              <div class="title-item">
                Weekend Getaway
              </div>
            </div>
            <div class="s__header--box-nav__right--collection__item">
              <div class="img-item">
                <img src="~/assets/images/lv.png">
              </div>
              <div class="title-item">
                Weekend Getaway
              </div>
            </div>
            <div class="s__header--box-nav__right--collection__item">
              <div class="img-item">
                <img src="~/assets/images/lv.png">
              </div>
              <div class="title-item">
                Weekend Getaway
              </div>
            </div>
          </div>
          <div v-if="rightNavCoupon" class="s__header--box-nav__right--coupon">
            <masonry-wall :items="items" :ssr-columns="1" :column-width="300" :padding="16">
              <template #default="{ item, index }">
                <div style="height: 100px">
                  <h1>{{ item.title }}</h1>
                  <span>{{ item.description }}</span>
                </div>
              </template>
            </masonry-wall>
          </div>
        </div>
      </div>

      <!--mobile-->
      <div v-if="navMobile" class="s__header--close-mobile">
        <img @click="closeNavMobile()" src="~/assets/images/icon-close.svg">
      </div>
    </section>
    <section v-if="isMobile && navMobile" class="s__nav-mobile">
      <div class="s__nav-mobile--wrap">
        <ul>
          <li v-for="nav in itemsNav">{{ nav.name }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import MasonryWall from '@yeger/vue-masonry-wall'


export default {
  name: "AppHeader",
  components: {MasonryWall},
  props: ['isHome'],
  data: () => ({
    showSearch: false,
    locationActive: false,
    activityActive: false,
    locationBox: false,
    activeBox: false,
    activeBook: false,
    locationChoosed: '',
    activityChoosed: '',
    bookChoosed: '',
    activeNav: false,
    rightNavLocation: false,
    rightNavLevel: false,
    rightNavTypeActivity: false,
    rightNavCollection: false,
    rightNavLocationItemDetail: false,
    rightNavCoupon: false,
    itemsNav: [
      {
        id: 1,
        name: 'Trang chủ',
        active: true,
        hasHref: false,
        href: '#',
      },
      {
        id: 2,
        name: 'Địa điểm',
        active: false,
        hasHref: false,
        href: '#',
      },
      {
        id: 3,
        name: 'Cấp độ',
        active: false,
        hasHref: false,
        href: '#',
      },
      {
        id: 4,
        name: 'Loại hoạt động',
        active: false,
        hasHref: false,
        href: '#',
      },
      {
        id: 5,
        name: 'Bộ sưu tập',
        active: false,
        hasHref: false,
        href: '#',
      },
      {
        id: 6,
        name: 'Mã giảm giá',
        active: false,
        hasHref: false,
        href: '#',
      },
      {
        id: 7,
        name: 'intoWild Life',
        active: false,
        hasHref: false,
        href: '#',
      }
    ],
    scrollingUp: false,
    scrollingDown: false,
    isFixed: false,
    items: [
      {title: 'First', description: 'The first item.'},
      {title: 'Second', description: 'The second item.'},
      {title: 'Second', description: 'The second item.'},
      {title: 'Second', description: 'The second item.'},
      {title: 'Second', description: 'The second item.'},
      {title: 'Second', description: 'The second item.'},
    ],
    locationCountries: [
      {
        id: 1,
        thumbnail: '/assets/images/banner.jpg',
        name: "Việt Nam",
      },
      {
        id: 2,
        thumbnail: '/assets/images/banner.jpg',
        name: "Indonesia",
      },
      {
        id: 3,
        thumbnail: '/assets/images/banner.jpg',
        name: "Thái Lan",
      },
      {
        id: 4,
        thumbnail: '/assets/images/banner.jpg',
        name: "Philippines",
      },
      {
        id: 5,
        thumbnail: '/assets/images/banner.jpg',
        name: "Ấn Độ",
      },
      {
        id: 6,
        thumbnail: '/assets/images/banner.jpg',
        name: "Nepal",
      },
      {
        id: 7,
        thumbnail: '/assets/images/banner.jpg',
        name: "Mông Cổ",
      },
      {
        id: 8,
        thumbnail: '/assets/images/banner.jpg',
        name: "Pakistan",
      },
      {
        id: 9,
        thumbnail: '/assets/images/banner.jpg',
        name: "Kyrgyzstan",
      },
      {
        id: 10,
        thumbnail: '/assets/images/banner.jpg',
        name: "Georgia",
      }
    ],
    locationRegions: [
      {
        id: 1,
        thumbnail: '/assets/images/banner.jpg',
        name: "Miền bắc",
      },
      {
        id: 2,
        thumbnail: '/assets/images/banner.jpg',
        name: "Miền trung",
      },
      {
        id: 3,
        thumbnail: '/assets/images/banner.jpg',
        name: "Miền nam",
      },
    ],
    isMobile: false,
    pageWidth: 0,
    showHelp: false,
    typeTours: [
      {
        id: 1,
        name: 'Full Trip',
        active: true,
        description: 'Full Trip là trip khởi hành tại Việt Na. Giá trip đã bao gồm tất cả từ vé máy bay, ăn uống,... và có Wildbuddy người Việt Nam theo hỗ trợ xuyên suốt hành trình.'
      },
      {
        id: 2,
        name: 'Land Tour',
        active: false,
        description: 'Land Tour là tour khởi hành tại điểm đến. Giá tour không bao gồm vé máy bay, ăn uống và chi phí Wildbuddy người Việt Nam đi cùng, nhưng đã bao gồm full hành trình, chỗ ở và có Wildbuddy bản địa biết nói tiếng Anh hỗ trợ. Tùy vào số lượng người tham gia mà land tour có giá khác nhau.'
      },
      {
        id: 3,
        name: 'JoinIN',
        active: false,
        description: 'JoinIN là hình thức mua chung Land Tour để có mức giá nhóm tốt nhất. intoWild sẽ hỗ trợ gom nhóm, tư vấn trước chuyến đi và họp đoàn cho các bạn tham gia.'
      }
    ],
    typeToursDescription: '',
    navMobile: false,
  }),
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.typeToursDescription = this.typeTours[0].description
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
    onResize() {
      this.pageWidth = window.innerWidth
      if (this.pageWidth <= 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
        this.navMobile = false
      }
      console.log(1212, this.isMobile)
    },
    hasBoxSearch() {

      this.showSearch = !this.showSearch
      if (this.showSearch) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
      this.$emit('changeFixed', this.isFixed)

    },
    closeBoxSearch() {
      this.showSearch = false
    },
    showBoxLocation() {
      this.locationBox = !this.locationBox
      this.activeBox = false
      this.activeBook = false
    },
    locationChoose(local) {
      this.locationChoosed = local
      this.locationBox = false
    },
    showBoxActivity() {
      this.activeBox = !this.activeBox
      this.locationBox = false
      this.activeBook = false
    },
    showBoxBook() {
      this.activeBook = !this.activeBook
      this.activeBox = false
      this.locationBox = false
    },
    activeChoose(activity) {
      this.activeBox = false
      this.activityChoosed = activity
    },
    bookChoose(book) {
      this.activeBook = false
      this.bookChoosed = book
    },
    showBoxNav() {
      this.isFixed = !this.isFixed
      this.activeNav = !this.activeNav
      this.showSearch = false
      this.itemsNav[0].active = false
      this.itemsNav[1].active = true
      this.rightNavLocation = true
      this.rightNavLevel = false
      this.rightNavTypeActivity = false
      useHead({
        bodyAttrs: {
          class: this.navMobile || this.activeNav ? 'overflow-hidden' : ''
        }
      })
    },
    closeNav() {
      this.activeNav = false
      this.showSearch = false
      useHead({
        bodyAttrs: {
          class: ''
        }
      })
    },
    activeItemNav(item) {
      this.itemsNav.forEach((val, i) => {
        if (item.id === val.id) {
          this.itemsNav[i].active = true
          if (val.id === 1) {
            window.location.href = '/'
          }
          if (val.id === 2) {
            this.rightNavLocation = true
            this.rightNavLevel = false
            this.rightNavTypeActivity = false
            this.rightNavCollection = false
            this.rightNavCoupon = false
          } else if (val.id === 3) {
            this.rightNavLevel = true
            this.rightNavLocation = false
            this.rightNavTypeActivity = false
            this.rightNavCollection = false
            this.rightNavCoupon = false
          } else if (val.id === 4) {
            this.rightNavTypeActivity = true
            this.rightNavLevel = false
            this.rightNavLocation = false
            this.rightNavCollection = false
            this.rightNavCoupon = false
          } else if (val.id === 5) {
            this.rightNavCollection = true
            this.rightNavLevel = false
            this.rightNavLocation = false
            this.rightNavTypeActivity = false
            this.rightNavCoupon = false
          } else if (val.id === 6) {
            this.rightNavCollection = false
            this.rightNavLevel = false
            this.rightNavLocation = false
            this.rightNavTypeActivity = false
            this.rightNavCoupon = true
          }
        } else {
          this.itemsNav[i].active = false
        }
      })
    },
    showDetailLocation() {
      this.rightNavLocationItemDetail = true
    },
    handleScroll() {
      // Your scroll handling here
      console.log(1234, window.scrollY)
      if (window.scrollY > 90) {
        this.isFixed = true
      } else {
        this.isFixed = false
        if (this.navMobile){
          this.isFixed = true
        }
      }
      this.$emit('changeFixed', this.isFixed)
    },
    handleFocusOut() {
      alert(1)
    },
    async clickedParent() {
      await new Promise((resolve, reject) => setTimeout(resolve, 1));
      this.showSearch = false
    },
    modalHelp() {
      this.showHelp = true
    },
    updateparent(variable) {
      this.showHelp = variable
    },
    chooseType(type) {
      this.typeTours.forEach((val) => {
        if (type.id === val.id) {
          val.active = true
          this.typeToursDescription = val.description
        } else {
          val.active = false
        }
      })
    },
    showBoxNavMobile() {
      this.navMobile = !this.navMobile
      this.isFixed = true
      this.$emit('changeFixed', this.isFixed)
      useHead({
        bodyAttrs: {
          class: this.navMobile || this.activeNav ? 'overflow-hidden' : ''
        }
      })
    },
    closeNavMobile() {
      this.navMobile = !this.navMobile
      this.isFixed = !this.isFixed
      this.$emit('changeFixed', this.isFixed)
      useHead({
        bodyAttrs: {
          class: ''
        }
      })
    },
    backToLocation() {
      this.rightNavLocationItemDetail = false
    }
  }
}
</script>

<style scoped>

</style>
