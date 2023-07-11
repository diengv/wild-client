<template>
  <div class="s__payment">
    <Modal @clearModal="updateparent" :show="showChooseCoupon" :width="'624px'" :top="'100px'" :border-radius="'10px'"
           :height="'648px'">
      <div class="s__coupon--wrapper">
        <div class="s__coupon--wrapper__title">
          Tra cứu mã giảm giá
        </div>
        <div class="s__line"></div>
        <div class="s__coupon--wrapper__form">
          <input placeholder="Nhập mã của bạn" class="coupon_input"/>
          <button class="btn-search-coupon">Tìm mã</button>
        </div>
        <div class="s__coupon--wrapper__items">
          <div v-for="(cop,index) in coupons" class="s__coupon--wrapper__items--item">
            <div class="s__coupon--wrapper__items--item__left"
                 :style="{ 'background-color' : cop.bgStamp ? cop.bgStamp : 'rgba(1, 73, 64, 1)' }">
              <span>Giảm</span>
              <span v-if="cop.price">{{ cop.price }}</span>
              <span v-else>{{ cop.percent }}</span>
            </div>
            <div class="s__coupon--wrapper__items--item__right">
              <div class="s__coupon--wrapper__items--item__right--name"
                   :style="{color: cop.unconditional ? '#E7E7E7' : ''}">
                {{ cop.name }}
              </div>
              <div @click="detailCoupon(cop)" class="s__coupon--wrapper__items--item__right--detail"
                   :style="{color: cop.unconditional ? '#E7E7E7' : '',  cursor: cop.unconditional ? 'no-drop' : 'pointer'}">
                Điều kiện áp dụng mã
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>

    <Modal @clearModal="updateparentDetailCoupon" :show="showDetailCoupon" :width="'624px'" :top="'100px'"
           :border-radius="'10px'"
           :height="'648px'">
      <div class="s__coupon--wrapper__detail">
        <div class="s__coupon--wrapper__detail--header" :style="{'background': bgHeaderDetail}">
          <div class="net"><img src="~/assets/images/luoi.svg"></div>
          <div class="s__coupon--wrapper__detail--header__stamp">
            <span>Giảm</span>
            <span>100k</span>
          </div>
        </div>
        <div class="s__coupon--wrapper__detail--content">
          <div class="s__coupon--wrapper__detail--content__title">
            COVIDEND2021
          </div>
          <div class="s__coupon--wrapper__detail--content__description">
            Giảm 200K cho 20 đơn hàng đầu tiên
          </div>
          <p><strong>Điều kiện sử dụng:</strong></p>
          <p>- Áp dụng cho một số sản phẩm thuộc chủ đề <strong>Camping in the Wilderness.</strong></p>
          <p>- Mã <strong>COVIDEND2022</strong> giảm <strong>200K</strong> cho đơn hàng có giá trị trên <strong>2.000.000
            VND</strong>.</p>
          <p>- Mã có <strong>20</strong> lần sử dụng.</p>
          <p>- Mã chỉ áp dụng khi thanh toán bằng phương thức <strong>Thanh toán 100%</strong> và theo cổng thanh toán
            <strong>Chuyển
              khoản.</strong></p>
          <p>- Mã giảm giá áp dụng cho đặt chỗ từ ngày <strong>01/04/2022</strong> đến ngày <strong>30/04/2022.</strong>
          </p>
          <p>- Mã không được khôi phục vì bất cứ lý do nào</p>
          <p>- Mã sẽ hết hạn khi giá trị sử dụng bằng hoặc vượt quá <strong>4.000.000 VND.</strong></p>
          <div class="s__coupon--wrapper__detail--content__btn">
            <button>Sử dụng mã</button>
          </div>
        </div>
      </div>
    </Modal>
    <div class="s__header_payment">
      <div class="s__header_payment--logo">
        <a href="#">
          <img src="~/assets/images/wild-logo.svg">
        </a>
      </div>
      <div class="s__header_payment--time-count">
        <span class="time-remaining">Thời gian còn lại: </span>
        <span class="minute-remaining">{{ minute }}</span>
        <span>phút</span>
        <span class="remaining_ss">:</span>
        <span class="minute-remaining">{{ second }}</span>
        <span>giây</span>
      </div>
      <div class="s__header_payment--phone">+84 988 111 645</div>
    </div>
    <div class="s__container">
      <div class="s__payment--title">
        Xác nhận và thanh toán
      </div>
      <div class="s__line"></div>
      <div class="s__payment--content">
        <div class="s__payment--content__left">
          <div class="s__payment--info-activity">
            <div class="s__payment--info-activity__avatar">
              <img src="~/assets/images/thumbnail-activity.png">
            </div>
            <div class="s__payment--info-activity__info">
              <div class="s__payment--info-activity__info--name">
                #DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn
              </div>
              <div class="s__payment--info-activity__info--note">
                3 ngày 2 đêm | Diving | Nha Trang
              </div>
              <div class="s__payment--info-activity__info--wrap">
                <div class="s__payment--info-activity__info--wrap__departure--day">
                  <span>Ngày khởi hành:</span>
                  <span>02/11/2022</span>
                </div>
                <a class="s__payment--info-activity__info--wrap__change" href="#">Thay đổi</a>
              </div>
            </div>
          </div>
          <div class="s__payment--label">
            Tùy chọn <span class="note__required">*</span>
          </div>
          <div class="s__payment--content__form">
            <div class="s__payment--content__form--item">
              <div class="s__payment--content__form--item__label">
                Người lớn:
              </div>
              <div class="s__payment--content__form--item__input">
                <div class="btn-choose-number">
                  <span @click="minusAdult()" class="minus"><img src="~/assets/images/minus-active.svg"></span>
                  <span class="number">{{ adult }}</span>
                  <span @click="plusAdult()" class="plus"><img src="~/assets/images/plus-active.svg"></span>
                </div>
                <div class="btn-note-text">5.000.000 VND/người</div>
              </div>
            </div>
            <div class="s__payment--content__form--item">
              <div class="s__payment--content__form--item__label">
                Trẻ em:
              </div>
              <div class="s__payment--content__form--item__input">
                <div class="btn-choose-number">
                  <span @click="minusChildren()" class="minus"><img src="~/assets/images/minus-active.svg"></span>
                  <span class="number">{{ children }}</span>
                  <span @click="plusChildren()" class="plus"><img src="~/assets/images/plus-active.svg"></span>
                </div>
                <div class="btn-note-text">2.000.000 VND/người</div>
              </div>
            </div>
            <div class="s__payment--content__form--item note-form">
              * Hoạt động cần đăng ký tối thiểu 1 khách. Giá có thể sẽ thay đổi tùy thuộc vào số lượng khách.
            </div>
            <div class="s__payment--content__form--item">
              <div class="s__payment--content__form--item__label mt--30">
                Chọn thời gian đón:
              </div>
              <div class="s__payment--content__form--item__input flex-column">
                <select id="countries" class="s__select">
                  <option selected>09 PM</option>
                  <option value="US">10 PM</option>
                  <option value="CA">11 PM</option>
                  <option value="FR">12 PM</option>
                  <option value="DE">13 PM</option>
                </select>
                <div class="s__select--note">Thời gian phù hợp nhất để WildBuddy đón bạn</div>
              </div>
            </div>
          </div>

          <div class="s__payment--label mt-41">
            Thông tin liên lạc <span class="note__required">*</span>
          </div>
          <div class="s__payment--content__form">
            <div class="s__payment--content__form--item">
              <div class="s__payment--content__form--item__label">
                Tên của bạn:
              </div>
              <div class="s__payment--content__form--item__input">
                <input class="s__input"/>
              </div>
            </div>
            <div class="s__payment--content__form--item">
              <div class="s__payment--content__form--item__label">
                Số điện thoại:
              </div>
              <div class="s__payment--content__form--item__input">
                <input class="s__input"/>
              </div>
            </div>
            <div class="s__payment--content__form--item">
              <div class="s__payment--content__form--item__label">
                Email của bạn:
              </div>
              <div class="s__payment--content__form--item__input">
                <input class="s__input"/>
              </div>
            </div>
          </div>

          <div class="s__payment--label mt-41">
            Phương thức thanh toán
          </div>
          <div class="s__payment--content__form">
            <div class="s__payment--content__form--label-small">
              Loại thanh toán:
            </div>
            <div class="s__radio-button">
              <label class="container-radio">Đặt chỗ trước, thanh toán sau
                <input type="radio" name="radio">
                <span class="checkmark"></span>
              </label>
              <label class="container-radio">Trả trước 50%
                <input type="radio" name="radio">
                <span class="checkmark"></span>
              </label>
              <label class="container-radio">Thanh toán 100%
                <input type="radio" name="radio">
                <span class="checkmark"></span>
              </label>
            </div>

            <div class="s__payment--content__form--label-small">
              Cổng thanh toán:
            </div>
            <div class="s__payment-method">
              <div class="s__payment-method__item">
                <img src="~/assets/images/techcombank.png">
                <div class="text-transfer-bank">Chuyển khoản ngân hàng</div>
              </div>
              <div class="s__payment-method__item">
                <img src="~/assets/images/vietcombank.png">
                <div class="text-transfer-bank">Chuyển khoản ngân hàng</div>
              </div>
              <div class="s__payment-method__item">
                <img class="mt-15" src="~/assets/images/vnpay.png">
              </div>
              <div class="s__payment-method__item">
                <img class="mt-15" src="~/assets/images/visa.png">
              </div>
              <div class="s__payment-method__item">
                <img class="mt-15" src="~/assets/images/napas.png">
              </div>
              <div class="s__payment-method__item">
                <img src="~/assets/images/momo.png">
              </div>
              <div class="s__payment-method__item">
                <img class="mt-15" src="~/assets/images/payon.png">
              </div>
              <div class="s__payment-method__item">
                <img class="mt-15" src="~/assets/images/onepay.png">
              </div>
            </div>
            <div class="s__payment--content__form--label-small">
              Nhập mã giảm giá:
            </div>
            <div class="s__payment--coupon">
              <input class="s__input"/>
              <button class="btn-add-coupon">Áp dụng</button>
            </div>
            <div class="s__payment--coupon__search" @click="showCoupon()">
              <span>Tra cứu mã giảm giá</span>
            </div>
            <div class="s__payment--content__form--label-small">
              Ghi chú thêm của bạn:
            </div>
            <div class="s__payment--textarea">
              <textarea class="s__payment--note"></textarea>
            </div>
          </div>
        </div>
        <div class="s__payment--content__right">
          <div :class="{'is-scroll': isFixed}">
            <div class="s__activity--info__right--head no-border-radius">
              <div class="s__activity--info__right--head__item">
                <div class="s__activity--info__right--head__item--top">
                  <div class="s__activity--info__right--head__item--top__icon">
                    <img src="~/assets/images/icon-security.svg">
                  </div>
                  <div class="s__activity--info__right--head__item--top__label">
                    HOÀN HỦY
                    LINH HOẠT
                  </div>
                </div>
                <div class="s__activity--info__right--head__item--content">
                  Bạn sẽ nhận lại 100% giá trị cọc nếu thông báo huỷ trước ngày khởi hành theo quy định
                </div>
              </div>
              <div class="s__activity--info__right--head__item">
                <div class="s__activity--info__right--head__item--top">
                  <div class="s__activity--info__right--head__item--top__icon">
                    <img src="~/assets/images/icon-safety.svg">
                  </div>
                  <div class="s__activity--info__right--head__item--top__label">
                    THANH TOÁN AN TOÀN
                  </div>
                </div>
                <div class="s__activity--info__right--head__item--content">
                  Hỗ trợ đổi ngày đăng ký và thông tin của bạn được bảo mật ở tất cả các phương thức thanh toán
                </div>
              </div>
            </div>
            <div class="s__payment--info-review">
              <div class="s__payment--info-review__item">
                <div class="s__payment--info-review__item--left">
                  <span><img src="~/assets/images/icon-time.svg"></span>
                  <span>Ngày khởi hành:</span>
                </div>
                <div class="s__payment--info-review__item--right">
                  02/11/2022
                </div>
              </div>
              <div class="s__payment--info-review__item">
                <div class="s__payment--info-review__item--left">
                  <span><img src="~/assets/images/icon-person.svg"></span>
                  <span>Số thành viên:</span>
                </div>
                <div class="s__payment--info-review__item--right">
                  01 người lớn, 1 trẻ em
                </div>
              </div>
              <div class="s__payment--info-review__item">
                <div class="s__payment--info-review__item--left">
                  <span><img src="~/assets/images/type-payment.svg"></span>
                  <span>Loại thanh toán:</span>
                </div>
                <div class="s__payment--info-review__item--right">
<!--                  Đặt chỗ trước, thanh toán sau-->
                </div>
              </div>
              <div class="s__line my-24"></div>
              <div class="s__payment--info-review__calculate">
                <div class="s__payment--info-review__calculate--left">Giá người lớn:</div>
                <div class="s__payment--info-review__calculate--right">1 x 5.000.000 VND</div>
              </div>
              <div class="s__payment--info-review__calculate">
                <div class="s__payment--info-review__calculate--left">Giá trẻ em:</div>
                <div class="s__payment--info-review__calculate--right">1 x 2.000.000 VND</div>
              </div>
              <div class="s__payment--info-review__calculate">
                <div class="s__payment--info-review__calculate--left">Tạm tính:</div>
                <div class="s__payment--info-review__calculate--right">7.000.000 VND</div>
              </div>
              <div class="s__payment--info-review__calculate">
                <div class="s__payment--info-review__calculate--left">Phí tiện lợi:</div>
                <div class="s__payment--info-review__calculate--right">0 VND</div>
              </div>
              <div class="s__payment--info-review__calculate">
                <div class="s__payment--info-review__calculate--left">Giảm giá</div>
                <div class="s__payment--info-review__calculate--right">200.000 VND</div>
              </div>
              <div class="s__payment--info-review__calculate">
                <div class="s__payment--info-review__calculate--left">Voucher giảm giá</div>
                <div class="s__payment--info-review__calculate--right">0 VND</div>
              </div>
              <div class="s__line my-24"></div>
              <div class="s__payment--info-review__total">
                <div class="s__payment--info-review__total--left">CẦN THANH TOÁN:</div>
                <div class="s__payment--info-review__total--right">0 VND</div>
              </div>
              <div class="s__line my-24"></div>
              <div class="s__payment--info-review__calculate">
                <div class="s__payment--info-review__calculate--left flex-column-custom">
                  <span>Còn lại:</span>
                  <span class="note-payment">(Thanh toán khi tham gia hoạt động)</span>
                </div>
                <div class="s__payment--info-review__calculate--right">6.800.000 VND</div>
              </div>
            </div>
            <div class="s__payment--info_button">
              <div class="s__payment--info_button__left">
                <div class="s__payment--wrapcheck">
                  <label class="container--checkboxs">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="text-check-payment">
                  Chọn Gửi yêu cầu đồng nghĩa với việc bạn đồng ý tuân theo <a class="s__policy" href="#">Quy định về
                  thanh toán và hoàn hủy</a>
                </div>
              </div>
              <div class="s__payment--info_button__right">
                <button class="btn-payment">Thanh toán</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: "index",
  data: () => ({
    timeCount: moment(60 * 10 * 1000),
    showChooseCoupon: false,
    showDetailCoupon: false,
    coupons: [
      {
        id: 1,
        name: 'COVIDEND2021',
        price: '200K',
        percent: '',
        unconditional: false,
        aboutToExpire: false,
        bgStamp: null,
        bgHeadDetail: '#7dafad',
      },
      {
        id: 2,
        name: 'MUNGLE304',
        price: '',
        percent: '10%',
        unconditional: false,
        aboutToExpire: false,
        bgStamp: 'rgba(252, 220, 23, 1)',
        bgHeadDetail: 'rgb(236,231,205)',
      },
      {
        id: 3,
        name: 'COVIDEND2021',
        price: '200k',
        percent: '',
        unconditional: false,
        aboutToExpire: true,
        bgStamp: 'rgba(220, 80, 66, 1)',
        bgHeadDetail: 'rgb(211,174,170)',
      },
      {
        id: 4,
        name: 'COVIDEND2021',
        price: '200k',
        percent: '',
        unconditional: true,
        aboutToExpire: false,
        bgStamp: '#E7E7E7',
        bgHeadDetail: '',
      },
      {
        id: 5,
        name: 'COVIDEND2021',
        price: '',
        percent: '10%',
        unconditional: true,
        aboutToExpire: false,
        bgStamp: '#E7E7E7',
        bgHeadDetail: '',
      },
    ],
    bgHeaderDetail: '#C4FDF5',
    adult: 1,
    children: 0,
    isFixed: false
  }),
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    minute: function () {
      return this.timeCount.format('mm');
    },
    second: function () {
      return this.timeCount.format('ss');
    }
  },
  mounted() {
    setInterval(() => {
      this.timeCount = moment(this.timeCount.subtract(1, 'seconds'))
    }, 1000);
  },
  methods: {
    showCoupon() {
      this.showChooseCoupon = true
    },
    updateparent(variable) {
      this.showChooseCoupon = variable
    },
    updateparentDetailCoupon(variable) {
      this.showDetailCoupon = variable
    },
    detailCoupon(coupon) {
      if (!coupon.unconditional) {
        this.showDetailCoupon = true
      } else {

      }
    },
    showDetailCouponF() {

    },
    minusAdult() {
      if (this.adult > 1) {
        this.adult = this.adult - 1
      }
    },
    plusAdult() {
      this.adult = this.adult + 1
    },
    minusChildren() {
      if (this.adult > 1) {
        this.adult = this.adult - 1
      }
    },
    plusChildren() {
      this.children = this.children + 1
    },
    handleScroll() {
      // Your scroll handling here
      if (window.scrollY > 90) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>

<style scoped>

</style>
<script setup lang="ts">
</script>
