<template>
  <div class="s__current_page">
    <div class="s__container">
      <section class="s__head_filter">
        <div @click="showBoxLocation()" :class="{'active': boxLocation}" class="s__head_filter--item">
          <span>Địa điểm</span>
        </div>
        <div class="s__head_filter--item">
          <span>Cấp độ hoạt động</span>
        </div>
        <div class="s__head_filter--item">
          <span>Ngày khởi hành</span>
        </div>
        <div class="s__head_filter--item">
          <span>Loại đặt chỗ</span>
        </div>
        <div class="s__head_filter--item add-filter">
          <span><img src="~/assets/images/filter.svg"></span> <span>Thêm bộ lọc: </span><span>1</span>
        </div>
        <div class="s__head_filter--item__location" v-if="boxLocation">
          <div class="d-flex-wrap">
            <div class="s__item_checkbox">
              <label class="container--checkbox">Indonesia
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Thái Lan
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Philippines
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Ấn Độ
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Nepal
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Mông Cổ
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Parkistan
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Kyrgyzstan
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Georgia
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label  class="container--checkbox" :class="{'active': checkVietNam}"><span>Việt Nam</span> <span class="icon-down-location"><img src="~/assets/images/icon-down.svg"></span>
                <input @change="checkedVietNam()" type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>

          </div>
          <div v-if="checkVietNam" class="s__checkbox--vietnam">
            <div class="s__item_checkbox">
              <label class="container--checkbox">DakLak
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Lâm Đồng
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Quảng Bình
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Hà Giang
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Nha Trang
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">DakNong
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Lào Cai
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Bình Thuận
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Đà Nẵng
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Ninh Thuận
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Hạ Long
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Phú Quốc
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Ninh Thuận
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Sapa
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Khánh Hòa
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="s__item_checkbox">
              <label class="container--checkbox">Yên Bái
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="s__line mt-5 mb-3"></div>
          <div class="s__bottom_filter">
            <div class="choose__again">
              Chọn lại
            </div>
            <div class="filter_btn-search">
              <a class="btn-search" href="#">Tìm kiếm</a>
            </div>
          </div>
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
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data: () => ({
    boxLocation: false,
    boxLevel: false,
    boxDate: false,
    boxTypePlace: false,
    hasOpacity: false,
    checkVietNam: false
  }),
  methods: {
    showBoxLocation() {
      this.boxLocation = !this.boxLocation
      if (this.boxLocation){
        this.hasOpacity = true
      }else {
        this.hasOpacity = false
      }
    },
    checkedVietNam(){
      console.log(1212)
      this.checkVietNam = !this.checkVietNam
    }
  }
}
</script>

<style scoped>

</style>
