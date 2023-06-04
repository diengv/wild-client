<template>
  <div>
    <section class="s__header">
      <div class="s__header--logo">
        <NuxtLink>
          <img src="~/assets/images/wild-logo.svg">
        </NuxtLink>
        <div class="s__header--arrow" v-if="!showSearch">
          <img src="~/assets/images/icon-arrow-menu.svg">
        </div>
      </div>
      <div class="s__header--search" :class="{'s__header--search__active': showSearch}" @click="hasBoxSearch()">
        <span v-if="!showSearch">Tìm kiếm trải nghiệm...</span>
        <span v-if="!showSearch"><img src="~/assets/images/icon-search.svg"></span>
        <div v-if="showSearch" class="s__header--search__text">
          <span>TÌM KIẾM</span>
          <span>TRẢI NGHIỆM</span>
        </div>
      </div>
      <div class="s__header--lang">
        <div v-if="!showSearch" class="s__header--lang__left">
          TIẾNG VIỆT / VND
        </div>
        <div v-if="!showSearch" class="s__header--lang__right">
          +84 886 677 950
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
    bookChoosed: ''
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
    },
    locationChoose(local) {
      this.locationChoosed = local
      this.locationBox = false
    },
    showBoxActivity() {
      this.activeBox = !this.activeBox
    },
    showBoxBook() {
      this.activeBook = !this.activeBook
    },
    activeChoose(activity) {
      this.activeBox = false
      this.activityChoosed = activity
    },
    bookChoose(book) {
      this.activeBook = false
      this.bookChoosed = book
    }
  }
}
</script>

<style scoped>

</style>
