<template>
  <div class="s__payment">
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
                  <span class="minus"><img src="~/assets/images/minus-active.svg"></span>
                  <span class="number">01</span>
                  <span class="plus"><img src="~/assets/images/plus-active.svg"></span>
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
                  <span class="minus"><img src="~/assets/images/minus-active.svg"></span>
                  <span class="number">01</span>
                  <span class="plus"><img src="~/assets/images/plus-active.svg"></span>
                </div>
                <div class="btn-note-text">2.000.000 VND/người</div>
              </div>
            </div>
            <div class="s__payment--content__form--item note-form">
              * Hoạt động cần đăng ký tối thiểu 1 khách. Giá có thể sẽ thay đổi tùy thuộc vào số lượng khách.
            </div>
            <div class="s__payment--content__form--item">
              <div class="s__payment--content__form--item__label">
                Chọn thời gian đón:
              </div>
              <div class="s__payment--content__form--item__input flex-column">
                <select id="countries" class="s__select">
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
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
                <input type="radio" checked="checked" name="radio">
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
                <img src="~/assets/images/vnpay.png">
              </div>
              <div class="s__payment-method__item">
                <img src="~/assets/images/visa.png">
              </div>
              <div class="s__payment-method__item">
                <img src="~/assets/images/napas.png">
              </div>
              <div class="s__payment-method__item">
                <img src="~/assets/images/momo.png">
              </div>
              <div class="s__payment-method__item">
                <img src="~/assets/images/payon.png">
              </div>
              <div class="s__payment-method__item">
                <img src="~/assets/images/onepay.png">
              </div>
            </div>
            <div class="s__payment--content__form--label-small">
              Nhập mã giảm giá:
            </div>
            <div class="s__payment--coupon">
              <input class="s__input"/>
              <button class="btn-add-coupon">Áp dụng</button>
            </div>
            <div class="s__payment--coupon__search">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>