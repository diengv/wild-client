<template>
  <div>
    <Modal @clearModal="updateparentMobile" :show="showHelpMobile" :width="'624px'" :top="'100px'"
           :border-radius="'10px'"
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
        <div class="s__header--search__wraps" @click="showBoxSearchMobile()">
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
              <div v-for="type in typeActivies" class="item" @click="activeChoose(type.name )">{{ type.name }}</div>
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
              <div v-for="type in typeTours" class="item" @click="bookChoose(type.name)">{{ type.name }}</div>
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
              <div @click="showDetailLocation(country)" v-for="(country,index) in locationCountries" :key="index"
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
              <div @click="goToFilterLocation(regions)" v-for="(regions,index) in locationRegions" :key="index"
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
            <div @click="goToFilterLevel(level)" v-for="level in activityLevels" class="s__header--box-nav__right--level__item">
              <div class="img-item">
                <img :src="level.thumbnail">
              </div>
              <div class="title-item">
                {{ level.name }}
              </div>
            </div>
          </div>
          <div v-if="rightNavTypeActivity" class="s__header--box-nav__right--type-activity">
            <div @click="goToFilterTypeActivity(type)" v-for="type in typeActivies" class="s__header--box-nav__right--type-activity__item">
              <div class="icon">
                <img :src="type.thumbnail">
              </div>
              <div class="name">
                {{ type.name }}
              </div>
            </div>
          </div>
          <div v-if="rightNavCollection" class="s__header--box-nav__right--collection">
            <div @click="goToFilterThemes(theme)" v-for="theme in activityThemes" class="s__header--box-nav__right--collection__item">
              <div class="img-item">
                <img :src="theme.thumbnail">
              </div>
              <div class="title-item">
                {{ theme.name }}
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
          <li @click="goToPageDetailMobile(nav)" v-for="nav in itemsNav">{{ nav.name }}</li>
        </ul>
      </div>
    </section>
    <section v-if="navMobileDetail" class="s__nav-mobile--detail">
      <div @click="backToNav()" class="s__nav-mobile--detail__header">
        <span><img src="~/assets/images/icon-arrow-back.svg"></span>
        <span>Quay lại</span>
      </div>
      <div class="s__nav-mobile--detail__content">
        <div class="s__nav-mobile--detail__content--title">
          {{ this.titleNavMobileParent }}
        </div>
        <div v-if="navMobileLocation" class="s__nav-mobile--detail__content--wrap">
          <div class="s__nav-mobile--items">
            <div @click="goToPageDetailChildMobile('location')" v-if="locationCountries.length > 0"
                 v-for="country in locationCountries" class="s__nav-mobile--items__item">
              <div class="s__nav-mobile--items__item--image">
                <img :src="country.thumbnail">
              </div>
              <div class="s__nav-mobile--items__item--title">
                {{ country.name }}
              </div>
            </div>
          </div>
        </div>
        <div v-if="navMobileLevel" class="s__nav-mobile--detail__content--wrap">
          <div class="s__nav-mobile--items">
            <div v-if="locationRegions.length > 0" v-for="lv in levelList" class="s__nav-mobile--items__item">
              <div class="s__nav-mobile--items__item--image">
                <img :src="lv.thumbnailMobile">
              </div>
              <div class="s__nav-mobile--items__item--title">
                {{ lv.name }}
              </div>
            </div>
          </div>
        </div>
        <div v-if="navMobileType" class="s__nav-mobile--detail__content--wrap">
          <div class="s__nav-mobile--items__type">
            <div v-if="typeActivies.length > 0" v-for="type in typeActivies" class="s__nav-mobile--items__type__item">
              <div class="s__nav-mobile--items__type__item--image">
                <img :src="type.thumbnail">
              </div>
              <div class="s__nav-mobile--items__type__item--title">
                {{ type.name }}
              </div>
            </div>
          </div>
        </div>
        <div v-if="navMobileCollection" class="s__nav-mobile--detail__content--wrap">
          <div class="s__nav-mobile--items">
            <div v-if="collections.length > 0" v-for="cl in collections" class="s__nav-mobile--items__item">
              <div class="s__nav-mobile--items__item--image">
                <img :src="cl.thumbnail">
              </div>
              <div class="s__nav-mobile--items__item--title">
                {{ cl.name }}
              </div>
            </div>
          </div>
        </div>
        <div v-if="navMobileCoupon" class="s__nav-mobile--detail__content--wrap">
          <div class="s__nav-mobile--items__coupons">
            <div v-if="collections.length > 0" v-for="cl in collections" class="s__nav-mobile--items__coupons__item">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="navMobileDetailChild" class="s__nav-mobile--detail--child">
      <div @click="backToNavParent()" class="s__nav-mobile--detail--child__header">
        <span><img src="~/assets/images/icon-arrow-back.svg"></span>
        <span>Quay lại</span>
      </div>
      <div class="s__nav-mobile--detail--child__content">
        <div class="s__nav-mobile--detail__content--title">
          Địa điểm/Việt Nam
        </div>
        <div v-if="navMobileLocationChildren" class="s__nav-mobile--detail__content--wrap">
          <div class="s__nav-mobile--items">
            <div v-if="locationRegions.length > 0" v-for="reg in locationRegions" class="s__nav-mobile--items__item">
              <div class="s__nav-mobile--items__item--image">
                <img :src="reg.thumbnail">
              </div>
              <div class="s__nav-mobile--items__item--title">
                {{ reg.name }}
              </div>
            </div>
          </div>
        </div>
        <div v-if="navMobileLevelChildren" class="s__nav-mobile--detail__content--wrap">
          <div class="s__nav-mobile--items">
            <div v-if="locationRegions.length > 0" v-for="lv in levelList" class="s__nav-mobile--items__item">
              <div class="s__nav-mobile--items__item--image">
                <img :src="lv.thumbnailMobile">
              </div>
              <div class="s__nav-mobile--items__item--title">
                {{ lv.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="boxMobileSearch" class="s__box-search-mobile">
      <div class="s__box-search-mobile__header">
        <div class="s__box-search-mobile__header--title">
          <span v-if="!showBoxLocationMobile">Tìm kiếm</span>
          <span v-if="!showBoxLocationMobile" class="has-color-yellow">Trải nghiệm</span>
          <span @click="backSearchLocation()" class="icon-back-mobile" v-if="showBoxLocationMobile"><img
              src="~/assets/images/icon-arrow-back.svg"></span>
          <span @click="backSearchLocation()" class="text-back" v-if="showBoxLocationMobile">Quay lại</span>
        </div>
        <div v-if="!showBoxLocationMobile" class="s__box-search-mobile__header--button">
          <img @click="closeBoxSearchMobile()" src="~/assets/images/icon-close.svg">
        </div>
      </div>
      <div class="s__box-search-mobile__wrapper">
        <div v-if="!showBoxLocationMobile">
          <div class="s__box-search-mobile__wrapper--box">
            <div v-if="!activeLocateSearchMobile" @click="showBoxSearchLocateMobile()"
                 class="s__box-search-mobile__wrapper--box__header">
              <div class="s__box-search-mobile__wrapper--box__header--left">
                Địa điểm
              </div>
              <div class="s__box-search-mobile__wrapper--box__header--right">
                Thêm địa điểm
              </div>
            </div>
            <div v-if="activeLocateSearchMobile" class="s__box-search-mobile__wrapper--box__content">
              <div class="s__box-search-mobile__wrapper--box__content--title">
                Bạn muốn khám phá địa điểm nào?
              </div>
              <div class="s__box-search-mobile__wrapper--box__content--wrap">
                <div @click="searchLocationMobile()" class="s__mobile-input-search">
                  <span><img src="~/assets/images/icon-search-mobile.svg"></span>
                  <span>Tìm kiếm địa điểm</span>
                </div>
                <div class="s__mobile-input-search-near">
                  <span><img src="~assets/images/icon-locate.svg"></span>
                  <span>Địa điểm ở gần bạn</span>
                </div>
              </div>
            </div>
          </div>
          <div class="s__box-search-mobile__wrapper--box">
            <div v-if="!activeTypeActivitySearchMobile" @click="showBoxSearchActivityMobile()"
                 class="s__box-search-mobile__wrapper--box__header">
              <div class="s__box-search-mobile__wrapper--box__header--left">
                Loại hoạt động
              </div>
              <div class="s__box-search-mobile__wrapper--box__header--right">
                Thêm loại hoạt động
              </div>
            </div>
            <div v-if="activeTypeActivitySearchMobile" class="s__box-search-mobile__wrapper--box__content">
              <div class="s__box-search-mobile__wrapper--box__content--title">
                Bạn muốn khám phá địa điểm nào?
              </div>
              <div class="s__box-search-mobile__wrapper--box__content--wrap">
                <div v-for="type in typeActivies" class="type_activity-search-item">
                  {{ type.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="s__box-search-mobile__wrapper--box">
            <div v-if="!activeTypeBookingSearchMobile" @click="showBoxSearchBookingMobile()"
                 class="s__box-search-mobile__wrapper--box__header">
              <div class="s__box-search-mobile__wrapper--box__header--left">
                Loại đặt chỗ
              </div>
              <div class="s__box-search-mobile__wrapper--box__header--right">
                Thêm loại đặt chỗ
              </div>
            </div>
            <div v-if="activeTypeBookingSearchMobile" class="s__box-search-mobile__wrapper--box__content">
              <div class="s__box-search-mobile__wrapper--box__content--title">
                Bạn muốn trải nghiệm loại hoạt động nào?<img @click="modalHelpMobile()" class="icon-helf-mobile"
                                                             src="~/assets/images/icon-help.svg">
              </div>
              <div class="s__box-search-mobile__wrapper--box__content--wrap">
                <div v-for="type in typeTours" class="type_activity-search-item">
                  {{ type.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="s__box-search-mobile__wrapper--location-detail">
            <div class="s__box-search-mobile__wrapper--location-detail__title">
              Bạn muốn đi đâu?
            </div>
            <div class="s__box-search-mobile__wrapper--location-detail__content">
              <div class="s__nav-mobile--items px-0">
                <div @click="goToPageDetailChildMobile('location')" v-if="locationCountries.length > 0"
                     v-for="country in locationCountries" class="s__nav-mobile--items__item">
                  <div class="s__nav-mobile--items__item--image">
                    <img :src="country.thumbnail">
                  </div>
                  <div class="s__nav-mobile--items__item--title">
                    {{ country.name }}
                  </div>
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
import MasonryWall from '@yeger/vue-masonry-wall'
import axios from "axios";

export default {
  name: "AppHeader",
  components: {MasonryWall},
  props: ['isHome'],
  data: () => ({
    config: useRuntimeConfig(),
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
    locationCountries: [],
    locationRegions: [],
    levelList: [
      {
        id: 1,
        thumbnailDesktop: '/assets/images/lv1.png',
        thumbnailMobile: '/assets/images/lv1.png',
        name: 'Người mới'
      },
      {
        id: 2,
        thumbnailDesktop: '/assets/images/lv2.png',
        thumbnailMobile: '/assets/images/lv2.png',
        name: 'Kinh nghiệm'
      },
      {
        id: 3,
        thumbnailDesktop: '/assets/images/lv3.png',
        thumbnailMobile: '/assets/images/lv3.png',
        name: 'Nhà trinh phục'
      },
      {
        id: 4,
        thumbnailDesktop: '/assets/images/lv4.png',
        thumbnailMobile: '/assets/images/lv4.png',
        name: 'Chuyên gia'
      }
    ],
    isMobile: false,
    pageWidth: 0,
    showHelp: false,
    typeTours: [],
    typeToursDescription: '',
    navMobile: false,
    navMobileDetail: false,
    navMobileDetailChild: false,
    navMobileLocation: false,
    navMobileLocationChildren: false,
    titleNavMobileParent: '',
    titleNavMobileChildren: '',
    navMobileLevel: false,
    navMobileType: false,
    navMobileCollection: false,
    navMobileCoupon: false,
    navMobileLevelChildren: false,
    typeActivies: [],
    collections: [
      {
        id: 1,
        name: 'Weekend Getway',
        thumbnail: '/assets/images/cl1.png'
      },
      {
        id: 2,
        name: 'Adventure Trips',
        thumbnail: '/assets/images/cl2.png'
      },
      {
        id: 3,
        name: 'Hộ chiếu mạo hiểm',
        thumbnail: '/assets/images/cl3.png'
      },
      {
        id: 4,
        name: 'Wild Camping',
        thumbnail: '/assets/images/cl4.png'
      },
      {
        id: 5,
        name: 'Weekend Getway',
        thumbnail: '/assets/images/cl5.png'
      },
      {
        id: 6,
        name: 'Adventure Trips',
        thumbnail: '/assets/images/cl6.png'
      },
      {
        id: 7,
        name: 'Hộ chiếu mạo hiểm',
        thumbnail: '/assets/images/cl7.png'
      },
      {
        id: 8,
        name: 'Wild Camping',
        thumbnail: '/assets/images/cl8.png'
      }
    ],
    boxMobileSearch: false,
    activeLocateSearchMobile: false,
    activeTypeActivitySearchMobile: false,
    activeTypeBookingSearchMobile: false,
    showHelpMobile: false,
    showBoxLocationMobile: false,
    activityLevels: [],
    activityThemes: [],
    locationParent: null
  }),
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
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
    },
    async hasBoxSearch() {
      this.showSearch = !this.showSearch
      if (this.showSearch) {
        this.isFixed = true
        await axios.get(this.config.public.baseUrl + '/search-option')
            .then(res => {
              if (res.data) {
                if (res.data.bkType && res.data.bkType.length > 0) {
                  this.typeTours = []
                  res.data.bkType.forEach((val, index) => {
                    this.typeTours.push({
                      id: val.id,
                      name: val.title,
                      active: index === 0 ? true : false,
                      description: val.description
                    })
                  })
                  this.typeToursDescription = this.typeTours[0].description
                }

                if (res.data.actType && res.data.actType.length > 0) {
                  this.typeActivies = []
                  res.data.actType.forEach((val, index) => {
                    this.typeActivies.push({
                      id: val.id,
                      name: val.title,
                      thumbnail: val.media
                    })
                  })
                }
              }
            })
            .catch(err => {

            })
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
      this.getLocation()
      this.isFixed = true
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
    async getLocation() {
      await axios.get(this.config.public.baseUrl + '/location/list')
          .then(res => {
            if (res.data) {
              if (res.data.length > 0) {
                this.locationCountries = []
                res.data.forEach(val => {
                  this.locationCountries.push({
                    id: val.id,
                    thumbnail: val.image[0] ? val.image[0].original_url : '',
                    name: val.title,
                    name_en: val.title_en,
                    children: val.children,
                  })
                })
              }
            }
          })
          .catch(err => {

          })
    },
    async getActivityLevel() {
      await axios.get(this.config.public.baseUrl + '/activity/level')
          .then(res => {
            if (res.data) {
              if (res.data.length > 0) {
                this.activityLevels = []
                res.data.forEach(val => {
                  this.activityLevels.push({
                    id: val.id,
                    thumbnail: val.image[0] ? val.image[0].original_url : '',
                    name: val.title,
                  })
                })
              }
            }
          })
          .catch(err => {

          })
    },
    async getActivityType() {
      await axios.get(this.config.public.baseUrl + '/activity/type')
          .then(res => {
            if (res.data) {
              if (res.data.length > 0) {
                this.typeActivies = []
                res.data.forEach(val => {
                  this.typeActivies.push({
                    id: val.id,
                    thumbnail: val.image[0] ? val.image[0].original_url : '',
                    name: val.title,
                  })
                })
              }
            }
          })
          .catch(err => {

          })
    },
    async getActivityThemes() {
      await axios.get(this.config.public.baseUrl + '/activity/themes')
          .then(res => {
            if (res.data) {
              if (res.data.length > 0) {
                this.activityThemes = []
                res.data.forEach(val => {
                  this.activityThemes.push({
                    id: val.id,
                    thumbnail: val.image[0] ? val.image[0].original_url : '',
                    name: val.title,
                  })
                })
              }
            }
          })
          .catch(err => {

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
            this.getLocation()
          } else if (val.id === 3) {
            this.rightNavLevel = true
            this.rightNavLocation = false
            this.rightNavTypeActivity = false
            this.rightNavCollection = false
            this.rightNavCoupon = false
            this.getActivityLevel()
          } else if (val.id === 4) {
            this.rightNavTypeActivity = true
            this.rightNavLevel = false
            this.rightNavLocation = false
            this.rightNavCollection = false
            this.rightNavCoupon = false
            this.getActivityType()
          } else if (val.id === 5) {
            this.rightNavCollection = true
            this.rightNavLevel = false
            this.rightNavLocation = false
            this.rightNavTypeActivity = false
            this.rightNavCoupon = false
            this.getActivityThemes()
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
    showDetailLocation(country) {
      if (country.children && country.children.length > 0) {
        this.rightNavLocationItemDetail = true
        this.locationRegions = []
        this.locationParent = country.id
        country.children.forEach(val => {
          this.locationRegions.push({
            id: val.id,
            thumbnail: val.image[0] ? val.image[0].original_url : '',
            name: val.title,
            name_en: val.title_en,
          })
        })
      } else {
        this.rightNavLocationItemDetail = false
        this.activeNav = false
        this.$router.push({
          path: '/filter',
          query: {
            location: country.id,
          }
        });
      }
    },
    goToFilterLocation(location){
      this.activeNav = false
      this.$router.push({
        path: '/filter',
        query: {
          location: this.locationParent+','+location.id,
        }
      });
    },
    handleScroll() {
      // Your scroll handling here
      if (window.scrollY > 90) {
        this.isFixed = true
      } else {
        this.isFixed = false
        if (this.navMobile) {
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
    modalHelpMobile() {
      this.showHelpMobile = true
    },
    updateparent(variable) {
      this.showHelp = variable
    },
    updateparentMobile(variable) {
      this.showHelpMobile = variable
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
    },
    goToPageDetailMobile(nav) {
      if (nav.id === 1) {
        window.location = '/'
      } else {
        this.navMobileDetail = true
        if (nav.id === 2) {
          this.navMobileLocation = true
          this.navMobileLevel = false
          this.navMobileType = false
          this.navMobileCollection = false
          this.navMobileCoupon = false
          this.titleNavMobileParent = 'Địa điểm'
        } else if (nav.id === 3) {
          this.navMobileLocation = false
          this.navMobileLevel = true
          this.navMobileType = false
          this.navMobileCollection = false
          this.navMobileCoupon = false
          this.titleNavMobileParent = 'Cấp độ'
        } else if (nav.id === 4) {
          this.navMobileLocation = false
          this.navMobileLevel = false
          this.navMobileType = true
          this.navMobileCollection = false
          this.navMobileCoupon = false
          this.titleNavMobileParent = 'Loại hoạt động'
        } else if (nav.id === 5) {
          this.navMobileLocation = false
          this.navMobileLevel = false
          this.navMobileType = false
          this.navMobileCollection = true
          this.navMobileCoupon = false
          this.titleNavMobileParent = 'Bộ sưu tập'
        } else if (nav.id === 6) {
          this.navMobileLocation = false
          this.navMobileLevel = false
          this.navMobileType = false
          this.navMobileCollection = false
          this.navMobileCoupon = true
          this.titleNavMobileParent = 'Mã giảm giá'
        }

        useHead({
          bodyAttrs: {
            class: 'overflow-hidden'
          }
        })
      }
    },
    backToNav() {
      this.navMobileDetail = false
    },
    goToPageDetailChildMobile(type) {
      this.navMobileDetailChild = true
      if (type === 'location') {
        this.navMobileLocationChildren = true
        this.titleNavMobileParent = 'Địa điểm/Việt Nam'
      }
    },
    backToNavParent() {
      this.navMobileDetailChild = false
    },
    showBoxSearchMobile() {
      this.boxMobileSearch = !this.boxMobileSearch
      if (this.boxMobileSearch) {
        useHead({
          bodyAttrs: {
            class: 'overflow-hidden'
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
    closeBoxSearchMobile() {
      this.boxMobileSearch = false
      useHead({
        bodyAttrs: {
          class: ''
        }
      })
    },
    showBoxSearchLocateMobile() {
      this.activeLocateSearchMobile = true
      this.activeTypeActivitySearchMobile = false
      this.activeTypeBookingSearchMobile = false
    },
    showBoxSearchActivityMobile() {
      this.activeLocateSearchMobile = false
      this.activeTypeActivitySearchMobile = true
      this.activeTypeBookingSearchMobile = false
    },
    showBoxSearchBookingMobile() {
      this.activeLocateSearchMobile = false
      this.activeTypeActivitySearchMobile = false
      this.activeTypeBookingSearchMobile = true
    },
    searchLocationMobile() {
      this.showBoxLocationMobile = true
    },
    backSearchLocation() {
      this.showBoxLocationMobile = false
    },
    goToFilterLevel(level){
      this.activeNav = false
      this.$router.push({
        path: '/filter',
        query: {
          level: level.id,
        }
      });
    },
    goToFilterTypeActivity(type){
      this.activeNav = false
      this.$router.push({
        path: '/filter',
        query: {
          type_activities: type.id,
        }
      });
    },
    goToFilterThemes(themes){
      this.activeNav = false
      this.$router.push({
        path: '/filter',
        query: {
          themes: themes.id,
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
