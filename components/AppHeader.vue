<template>
  <div>
    <section class="s__header">
      <div class="s__header--logo">
        <NuxtLink>
          <img src="~/assets/images/wild-logo.svg">
        </NuxtLink>
        <div class="s__header--arrow" :class="{'active': activeNav}" @click="showBoxNav()">
          <img src="~/assets/images/icon-arrow-menu.svg">
        </div>
      </div>
      <div v-if="!activeNav" class="s__header--search" :class="{'s__header--search__active': showSearch}" @click="hasBoxSearch()">
        <span v-if="!showSearch && !activeNav">Tìm kiếm trải nghiệm...</span>
        <span v-if="!showSearch && !activeNav"><img src="~/assets/images/icon-search.svg"></span>
        <div v-if="showSearch && !activeNav" class="s__header--search__text">
          <span>TÌM KIẾM</span>
          <span>TRẢI NGHIỆM</span>
        </div>
      </div>
      <div v-if="activeNav" class="s__header--text-nav">
        “<span>Adventure </span> is not only a trip, but also a <span> rush </span> of <span> adrenaline.</span>”
      </div>
      <div class="s__header--lang">
        <div v-if="!showSearch" class="s__header--lang__left">
          TIẾNG VIỆT / VND
        </div>
        <div v-if="!showSearch" class="s__header--lang__right">
          +84 886 677 950
        </div>
        <div v-if="activeNav" class="s__header--lang__right">
          <img class="icon-close" @click="closeNav()" src="~/assets/images/icon-close.svg">
        </div>
      </div>
      <div v-if="showSearch" class="s__header--box-search">
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
              <span><img src="~/assets/images/icon-help.svg"></span>
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
              <div @click="showDetailLocation()" class="s__header--box-nav__right--location-wrap-items__item">
                <div class="img-item">
                  <img src="~/assets/images/vn.png">
                </div>
                <div class="title-item">
                  Việt Nam
                </div>
              </div>
              <div class="s__header--box-nav__right--location-wrap-items__item">
                <div class="img-item">
                  <img src="~/assets/images/vn.png">
                </div>
                <div class="title-item">
                  Việt Nam
                </div>
              </div>
            </div>
            <div class="s__header--box-nav__right--location-wrap-item-detail" v-if="rightNavLocationItemDetail">
              <div class="left">
                <div class="left__item">
                  Nha Trang
                </div>
                <div class="left__item">
                  Hà Giang
                </div>
                <div class="left__item">
                  Cao Bằng
                </div>
                <div class="left__item">
                  Cao Bằng
                </div>
                <div class="left__item">
                  Cao Bằng
                </div>
                <div class="left__item">
                  Cao Bằng
                </div>
                <div class="left__item">
                  Cao Bằng
                </div>
                <div class="left__item">
                  Cao Bằng
                </div>
                <div class="left__item">
                  Cao Bằng
                </div>
                <div class="left__item">
                  Cao Bằng
                </div>
                <div class="left__item">
                  Cao Bằng
                </div>
                <div class="left__item">
                  Cao Bằng
                </div>
                <div class="left__item">
                  Cao Bằng
                </div>
                <div class="left__item">
                  Cao Bằng
                </div>
                <div class="left__item">
                  Cao Bằng
                </div>

              </div>
              <div class="right">
                <div class="right__name">
                  Việt Nam
                </div>
                <div class="right__image">
                  <img src="~/assets/images/location-vn.jpg">
                </div>
              </div>
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
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
    ]
  }),
  methods: {
    hasBoxSearch() {
      this.showSearch = !this.showSearch
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
      this.activeNav = !this.activeNav
      this.showSearch = true
    },
    closeNav() {
      this.activeNav = false
      this.showSearch = false
    },
    activeItemNav(item) {
      this.itemsNav.forEach((val, i) => {
        if (item.id === val.id) {
          this.itemsNav[i].active = true
          if (val.id === 2) {
            this.rightNavLocation = true
            this.rightNavLevel = false
            this.rightNavTypeActivity = false
          }else if(val.id === 3) {
            this.rightNavLevel = true
            this.rightNavLocation = false
            this.rightNavTypeActivity = false
          }else if(val.id === 4) {
            this.rightNavTypeActivity = true
            this.rightNavLevel = false
            this.rightNavLocation = false
          }else if(val.id === 5) {
            this.rightNavCollection = true
            this.rightNavLevel = false
            this.rightNavLocation = false
            this.rightNavTypeActivity = false
          }
        } else {
          this.itemsNav[i].active = false
        }
      })
    },
    showDetailLocation() {
      this.rightNavLocationItemDetail = true
    }
  }
}
</script>

<style scoped>

</style>
