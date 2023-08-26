<template>
  <div class="s__activity">
    <Modal @clearModal="updateparent" :show="showChooseDate" :width="'1290px'" :top="'0px'" :border-radius="'0px'"
           :overflow-y="'scroll'">
      <div class="s__activity--choose-date">
        <div class="s__activity--choose-date__category">
          <div class="s__activity--choose-date__category--tabs">
            <div @click="changeCategory(category)" v-for="(category, index) in categories" :key="index"
                 class="s__activity--choose-date__category--tabs__item" :class="{'active': category.active}">
              {{ category.name }}
            </div>
          </div>
        </div>
        <div class="s__activity--choose-date__years__months">
          <div class="__years">
            <div @click="changeYear(y,index)" v-for="(y, index) in listYear" :key="index" class="__years--item"
                 :class="{'active': y.active, 'p-left': pLeft}">
              {{ y.name }}
            </div>
          </div>
          <div class="__months">
            <div v-if="!monthRight && listMonth.length > 9" class="opacity-arrow-right-month">
              <img src="~/assets/images/opacity-right-month.svg">
            </div>
            <div v-if="!monthLeft && listMonth.length > 9" class="opacity-arrow-left-month">
              <img src="~/assets/images/opacity-left-month.svg">
            </div>
            <div class="s__activity--choose-date__months" :class="{'month-flex-end': monthRight}">
              <div v-for="(month, index) in listMonth" :key="index" class="s__activity--choose-date__months--item"
                   :class="{'month-disable': month.isDisable, 'month-active': month.active && !month.isDisable}">
                {{ month.name }}
              </div>
              <div @click="showMonthRight()" v-if="!monthRight && listMonth.length > 9" class="btn-arrow-right-month">
                <img src="~/assets/images/arrow-right-month.svg">
              </div>
              <div @click="showMonthLeft()" v-if="!monthLeft && monthRight" class="btn-arrow-left-month">
                <img src="~/assets/images/arrow-left-month.svg">
              </div>
            </div>
          </div>
        </div>
        <div class="s__activity--choose-date__tables">
          <table id="customers">
            <tr>
              <th width="276px">Thời gian</th>
              <th width="250px">Giá nhóm 1-3 người</th>
              <th width="250px">Giá nhóm 4-6 người</th>
              <th width="250px">Giá nhóm 7-10 người</th>
              <th></th>
            </tr>
            <tr>
              <td>
                <div class="table-time">
                  <span>02 - 04/11</span>
                  <span>Thứ 4 - Thứ 6</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <button class="btn-book">Đặt chỗ</button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="table-time">
                  <span>02 - 04/11</span>
                  <span>Thứ 4 - Thứ 6</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <button class="btn-book">Đặt chỗ</button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="table-time">
                  <span>02 - 04/11</span>
                  <span>Thứ 4 - Thứ 6</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <button class="btn-book">Đặt chỗ</button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="table-time">
                  <span>02 - 04/11</span>
                  <span>Thứ 4 - Thứ 6</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <button class="btn-book">Đặt chỗ</button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="table-time">
                  <span>02 - 04/11</span>
                  <span>Thứ 4 - Thứ 6</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span>5.000.000 VND</span>
                </div>
              </td>
              <td>
                <button class="btn-book">Đặt chỗ</button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="table-time">
                  <span>02 - 04/11</span>
                  <span>Thứ 4 - Thứ 6</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="table-time">
                  <span>02 - 04/11</span>
                  <span>Thứ 4 - Thứ 6</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="table-time">
                  <span>02 - 04/11</span>
                  <span>Thứ 4 - Thứ 6</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="table-time">
                  <span>02 - 04/11</span>
                  <span>Thứ 4 - Thứ 6</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="table-time">
                  <span>02 - 04/11</span>
                  <span>Thứ 4 - Thứ 6</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="table-time">
                  <span>02 - 04/11</span>
                  <span>Thứ 4 - Thứ 6</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="table-time">
                  <span>02 - 04/11</span>
                  <span>Thứ 4 - Thứ 6</span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td>
                <div class="table-price">
                  <span class="price-large">4.800.000 VND <small>/người</small></span>
                  <span></span>
                </div>
              </td>
              <td></td>
            </tr>

          </table>
        </div>
      </div>
    </Modal>
    <LibraryImage @clearLibrary="updateparentLibrary" :show="showLibrary">
      <div class="s__library--content">
        <div class="s__library--content__count">
          1/6
        </div>
        <div class="s__library--content__image">
          <div class="s__library--content__image--wrap">
            <img class="img-main-lib" src="assets/images/banner.jpg">
          </div>
          <div class="s__library--content__image--pre">
            <img src="~/assets/images/arrow-left-month.svg">
          </div>
          <div class="s__library--content__image--next">
            <img src="~/assets/images/arrow-right-month.svg">
          </div>
        </div>
        <div class="s__library--content__thumnails">
          <div class="s__library--content__thumnails--item active">
            <img src="~/assets/images/banner.jpg">
            <div class="s__opacity-item-bg"></div>
          </div>
          <div class="s__library--content__thumnails--item">
            <img src="~/assets/images/banner.jpg">
            <div class="s__opacity-item-bg"></div>
          </div>
          <div class="s__library--content__thumnails--item">
            <img src="~/assets/images/banner.jpg">
            <div class="s__opacity-item-bg"></div>
          </div>
          <div class="s__library--content__thumnails--item">
            <img src="~/assets/images/banner.jpg">
            <div class="s__opacity-item-bg"></div>
          </div>
          <div class="s__library--content__thumnails--item">
            <img src="~/assets/images/banner.jpg">
            <div class="s__opacity-item-bg"></div>
          </div>
        </div>
      </div>
    </LibraryImage>
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
    <div v-if="isFixed" class="s__header--activity">
      <div class="s__container">
        <div class="s__header--activity__wrap">
          <div class="s__header--activity__left">
            <ul>
              <li :class="{'active' : activeScroll === 'activity'}">
                <a @click="toScroll('activity')">Về hoạt động</a>
              </li>
              <li :class="{'active' : activeScroll === 'schedule'}">
                <a @click="toScroll('schedule')">Lịch trình</a>
              </li>
              <li :class="{'active' : activeScroll === 'important'}">
                <a @click="toScroll('important')">Thông tin quan trọng</a>
              </li>
              <li :class="{'active' : activeScroll === 'review'}">
                <a @click="toScroll('review')">Review</a>
              </li>
            </ul>
          </div>
          <div v-if="!isMobile" class="s__header--activity__right">
            <div class="s__header--activity__right--info">
              <div class="price">
                <span>Giá từ:</span>
                <span class="text-price">4.400.000 VND</span>
                <span>/người</span>
              </div>
              <div class="note">Đặt chỗ trước, thanh toán sau</div>
            </div>
            <div class="s__header--activity__right--button">
              <a @click="chooseDate()">chọn ngày</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="s__container">
      <div v-if="!isMobile" class="s__activity--breadcrumb">
        <a class="s__activity--breadcrumb__item" href="#">Trang chủ</a>
        <a class="s__activity--breadcrumb__item" href="#">Người mới</a>
        <span
            class="s__activity--breadcrumb__current">#DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn</span>
      </div>
      <div class="s__activity--title">
        <h1>LeTu Adventure - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn</h1>
      </div>
      <div class="s__activity--star-share">
        <div class="star">
          <span><img src="~assets/images/star.svg"></span>
          <span><img src="~assets/images/star.svg"></span>
          <span><img src="~assets/images/star.svg"></span>
          <span><img src="~assets/images/star.svg"></span>
          <span><img src="~assets/images/star.svg"></span>
        </div>
        <div class="star__point">4.6</div>
        <div class="star__rate"><a href="#">5 đánh giá</a></div>
        <div class="star__line"></div>
        <div class="star__share">
          <div class="star__share--icon"><img src="~/assets/images/icon-share.svg"></div>
          <div class="star__share--text"><a href="#">Chia sẻ</a></div>
        </div>
      </div>
      <div class="s__activity--level">
        <span class="s__activity--level__title">
          Cấp độ trải nghiệm:
        </span>
        <span class="s__activity--level__it">Người mới</span>
        <!--        <span class="s__activity&#45;&#45;level__help"><img src="~/assets/images/icon-helps.svg"></span>-->
      </div>
      <div v-if="!isMobile" class="s__activity--view__all">
        <a @click="showLibraryModal()">Xem tất cả hình ảnh</a>
      </div>
      <div v-if="!isMobile" class="s__activity--view__images">
        <div class="s__activity--view__images--left position-relative">
          <div class="s__activity--view__images--item">
            <img src="~/assets/images/im-1.png">
          </div>
          <div class="s__icon_local">
            <img src="~/assets/images/local.jpg">
          </div>
        </div>
        <div class="s__activity--view__images--right">
          <div class="s__activity--view__images--item">
            <img src="~/assets/images/im-2.png">
          </div>
          <div class="s__activity--view__images--item">
            <img src="~/assets/images/im-3.png">
          </div>
        </div>
      </div>
      <div class="s__line"></div>
      <div class="s__activity--info">
        <div class="s__activity--info__left">
          <div class="s__activity--info__left--short">
            Kỹ thuật lặn RAID là một trong những kỹ thuật lặn mới nhất, kết hợp tất cả các ưu điểm của những bằng lặn
            truyền thống. Chúng tôi, những chuyên gia duy nhất về kỹ thuật này ở VIệt Nam sẵn sàng chia sẻ kiến thức và
            giúp bạn trở thành một thợ lặn chuyện nghiệp.
          </div>
          <div class="s__activity--info__left--intros">
            <div class="s__activity--info__left--intros__item">
              <div class="s__activity--info__left--intros__item--icon">
                <img src="~/assets/images/icon-language.svg">
              </div>
              <div class="s__activity--info__left--intros__item--info">
                <span class="i-label">Ngôn ngữ</span>
                <span class="i-description">Tiếng Việt, Tiếng Anh, Tiếng Nga, Tiếng Hàn</span>
              </div>
            </div>
            <div class="s__activity--info__left--intros__item">
              <div class="s__activity--info__left--intros__item--icon">
                <img src="~/assets/images/icon-time.svg">
              </div>
              <div class="s__activity--info__left--intros__item--info">
                <span class="i-label">Thời gian</span>
                <span class="i-description">3 ngày 2 đêm</span>
              </div>
            </div>
            <div class="s__activity--info__left--intros__item">
              <div class="s__activity--info__left--intros__item--icon">
                <img src="~/assets/images/icon-person.svg">
              </div>
              <div class="s__activity--info__left--intros__item--info">
                <span class="i-label">Số lượng</span>
                <span class="i-description">14 người</span>
              </div>
            </div>
            <div class="s__activity--info__left--intros__item">
              <div class="s__activity--info__left--intros__item--icon">
                <img src="~/assets/images/icon-reg-per.svg">
              </div>
              <div class="s__activity--info__left--intros__item--info">
                <span class="i-label">Đăng ký tối thiểu</span>
                <span class="i-description">01 người</span>
              </div>
            </div>
            <div class="s__activity--info__left--intros__item">
              <div class="s__activity--info__left--intros__item--icon">
                <img src="~/assets/images/icon-weather.svg">
              </div>
              <div class="s__activity--info__left--intros__item--info">
                <span class="i-label">Thời điểm tổ chức</span>
                <span class="i-description">Tháng 9 đến tháng 12</span>
              </div>
            </div>
            <div class="s__activity--info__left--intros__item">
              <div class="s__activity--info__left--intros__item--icon">
                <img src="~/assets/images/icon-warning.svg">
              </div>
              <div class="s__activity--info__left--intros__item--info">
                <span class="i-label">Không phù hợp với</span>
                <span class="i-description">Người có bệnh tim, cao huyết áp, bệnh về thần kinh, người nhẹ hơn 35kg và phụ nữ mang thai</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!isMobile" class="s__activity--info__right">
          <div class="s__activity--info__right--head">
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
          <div class="s__activity--info__right--bottom">
            <div class="s__activity--info__right--bottom__price-old">
              4.600.000 VND/người
            </div>
            <div class="s__activity--info__right--bottom__price-sale">
              <span>Giá từ</span>
              <span>4.400.000 VND/người</span>
            </div>
            <div class="s__activity--info__right--bottom__description">Đăng ký trước, thanh toán sau</div>
            <div class="s__activity--info__right--bottom__choose-date">
              <button class="btn btn-choose-date" @click="chooseDate()">Chọn ngày</button>
            </div>
            <div class="s__line"></div>
            <div class="s__activity--info__right--bottom__coupons">
              <div class="s__activity--info__right--bottom__coupons--label">
                2 mã giảm giá:
              </div>
              <div class="s__activity--info__right--bottom__coupons--items">
                <div class="coupon-item" @click="detailCoupon()">
                  Giảm 10%
                </div>
                <div class="coupon-item" @click="detailCoupon()">
                  Giảm 200K
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="s__activity--box">
        <div class="s__activity--box__title">
          <h2>Trải nghiệm nổi bật</h2>
        </div>
        <div class="s__activity--box__content mb-104">
          <Carousel :items-to-show="itemSlider">
            <Slide v-for="slide in 10" :key="slide">
              <div class="carousel__item">
                <div class="s__activity--experience">
                  <a href="#">
                    <div class="s__activity--experience__icon">
                      <img src="~/assets/images/icon-biking.svg">
                    </div>
                    <div class="s__activity--experience__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna
                    </div>
                  </a>
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation/>
            </template>
          </Carousel>
        </div>
      </div>
      <div class="s__activity--box" ref="activity">
        <div class="s__activity--box__title">
          <h2>Thông tin chuyến đi</h2>
        </div>
        <div class="s__activity--box__content mb-104">
          <div class="s__activity--info-travel">
            <div class="s__activity--info-travel__left">
              <div class="s__activity--info-travel__left--description">
                Đây là khóa học kéo dài 03 ngày, bước đầu tiên để bạn trở thành thợ lặn bình khí có chứng chỉ. Chứng chỉ
                DiveRAID mở ra cơ hội để bạn tự do lặn ở khắp nơi trên Thế giới cũng như chủ động lặn một mình ở độ sâu
                tối đa lên tới 20m. Xuyên suốt khóa huấn luyện, bạn sẽ được trang bị kiến thức nền tảng quan trọng về
                bình dưỡng khí, các kiểm soát cơ thể và những kỹ năng thiết yếu ở dưới mặt nước. Khóa học sẽ bao gồm
                buổi tập ở hồ bơi sâu và 04 lần lặn thực tế ở biển.
              </div>
              <div class="s__activity--info-travel__left--convetrate-place">
                <div class="icon-convetrate-place">
                  <img src="~/assets/images/icon-point.svg">
                </div>
                <div class="info-convetrate-place">
                  <span>Địa điểm tập trung</span>
                  <span>Khách sạn của bạn tại Nha Trang.</span>
                </div>
              </div>
            </div>
            <div class="s__activity--info-travel__right">
              <img src="~/assets/images/im-map.png">
            </div>
          </div>
          <div class="s__activity--dates" ref="schedule">
            <div @click="showContentDate(date)" v-for="date in listDates" class="s__activity--dates__item"
                 :class="{'active' : date.active}">
              <div class="s__activity--dates__item--title">
                {{ date.title }}
              </div>
              <div v-if="date.active" class="s__activity--dates__item--content">
                <div class="list-activity-note">
                  <div class="list-activity-note__item">
                    <span><img src="~/assets/images/icon-moon.svg"></span>
                    <span class="strong-text">Ngủ đêm:</span>
                    <span>Tự túc.</span>
                  </div>
                  <div class="list-activity-note__item">
                    <span><img src="~/assets/images/icon-eat.svg"></span>
                    <span class="strong-text">Bữa ăn:</span>
                    <span> Không bao gồm.</span>
                  </div>
                  <div class="list-activity-note__item">
                    <span><img src="~/assets/images/icon-activity.svg"></span>
                    <span class="strong-text">Hoạt động chính: </span>
                    <span>Diving</span>
                  </div>
                  <div class="list-activity-note__content">
                    {{ date.content }}
                  </div>
                </div>
                <div class="list-activity-note-highlight">
                  <div class="list-activity-note-highlight__head">
                    <div class="list-activity-note-highlight__head--title">
                      HIGHLIGHT
                    </div>
                    <div class="list-activity-note-highlight__head--button">
                      <div class="s__topic--slider__head">
                        <span>1/2</span>
                        <span class="icon-slider"><img src="~/assets/images/arrow-white.svg"></span>
                        <span class="icon-slider next active"><img src="~/assets/images/arrow-white.svg"></span>
                      </div>
                    </div>
                  </div>
                  <div class="list-activity-note-highlight__content">
                    <img src="~/assets/images/thumbnail-activity.png">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="s__activity--wild-buddy">
            <div class="s__activity--wild-buddy__left">
              <div class="s__activity--wild-buddy__left--head">
                <div class="s__activity--wild-buddy__left--head__avatar">
                  <img src="~/assets/images/avatar-dh.png">
                </div>
                <div class="s__activity--wild-buddy__left--head__info">
                  <span>WildBuddy đồng hành</span>
                  <span>Team Lê Tú</span>
                </div>
              </div>
              <div class="s__activity--wild-buddy__left--bottom">
                Tôi đã có hơn 20 năm lặn chuyên nghiệp. Được xếp hạng trong danh sách "the Raid Instructor Trainer" năm
                2018, tôi đã dạy hơn 700 khóa học tại các cơ quan lặn khác nhau. Tôi hiện đang sống ở Việt Nam và sở hữu
                trung tâm lặn và quán bar của riêng mình ở Nha Trang. Trọng tâm của tôi là đào tạo những "Raid
                Instructor" có trình độ cao.
              </div>
            </div>
            <div class="s__activity--wild-buddy__right">
              <div class="s__activity--wild-buddy__right--title">
                WildBuddy của bạn có gì?
              </div>
              <div class="s__activity--wild-buddy__right--content">
                <div class="s__activity--wild-buddy__right--content__item">
                  Chúng tôi cam kết sẽ đem lại những chuyến phiêu lưu thú vị nhất ở đại dương.
                </div>
                <div class="s__activity--wild-buddy__right--content__item">
                  Chương trình đào tạo quốc tế, sẽ vượt xa mong đợi của bạn.
                </div>
                <div class="s__activity--wild-buddy__right--content__item">
                  Giúp bạn có cảm nhận sâu sắc hơn về văn hóa Việt Nam, bởi kỷ niệm sẽ là thứ theo bạn mãi mãi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="s__activity--box" ref="important">
        <div class="s__activity--box__title">
          <h2>Thông tin quan trọng</h2>
        </div>
        <div class="s__activity--box__content--inline">
          <div class="s__half">
            <div class="s__wrap--important">
              <div v-for="(inc, index) in includesShow" :key="index" v-bind:key="index"
                   class="s__wrap--important__include">
                {{ inc }}
              </div>
              <div v-if="!includesMore" @click="showMoreInclude()" class="show__more">Xem thêm</div>
            </div>
          </div>
          <div class="s__half">
            <div class="s__wrap--important">
              <div v-for="(inc, index) in notIncludedShow" :key="index" v-bind:key="index"
                   class="s__wrap--important__notIncluded">
                {{ inc }}
              </div>
              <div v-if="!notIncludedMore" @click="showMoreNoteIncluded()" class="show__more">Xem thêm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="s__take-away">
      <div class="bg-take-away">
        <img src="~/assets/images/bg-take-away.svg">
      </div>
      <div class="s__container">
        <div class="s__take-away__wrap">
          <div class="s__take-away__wrap--title">
            Bạn cần mang theo
          </div>
          <div class="s__take-away__wrap--content">
            <div class="s__take-away__wrap--content__item">
              <span><img src="~/assets/images/icon-bag.svg"></span>
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div class="s__take-away__wrap--content__item">
              <span><img src="~/assets/images/icon-bag.svg"></span>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
            </div>
            <div class="s__take-away__wrap--content__item">
              <span><img src="~/assets/images/icon-bag.svg"></span>
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div class="s__take-away__wrap--content__item">
              <span><img src="~/assets/images/icon-bag.svg"></span>
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div class="s__take-away__wrap--content__item">
              <span><img src="~/assets/images/icon-bag.svg"></span>
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div class="s__take-away__wrap--content__item">
              <span><img src="~/assets/images/icon-bag.svg"></span>
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div class="s__take-away__wrap--content__item">
              <span><img src="~/assets/images/icon-bag.svg"></span>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
            </div>
            <div class="s__take-away__wrap--content__item">
              <span><img src="~/assets/images/icon-bag.svg"></span>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
            </div>
            <div class="s__take-away__wrap--content__item">
              <span><img src="~/assets/images/icon-bag.svg"></span>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="s__container">
      <div class="s__activity--box">
        <div class="s__activity--box__title mt-80">
          <h2>Câu hỏi thường gặp</h2>
        </div>
        <div class="s__activity--box__content--question">
          <div v-for="qa in questionAnswer" class="s__activity--box__content--question__item">
            <div @click="showAnswer(qa)" class="s__activity--box__content--question__item--qs"
                 :class="{'active': qa.active}">
              {{ qa.question }}
            </div>
            <div v-if="qa.active" class="s__activity--box__content--question__item--aw">
              {{ qa.answer }}
            </div>
          </div>
        </div>
      </div>
      <div class="s__activity--box" ref="review">
        <div class="s__activity--box__title mt-80">
          <h2><span>12  </span>đánh giá từ khách hàng</h2>
        </div>
        <div class="s__activity--box__content--rate">
          <div v-if="isMobile" class="s__activity--box__content--rate__right">
            <div class="m_rate_left">
              <div class="s__activity--box__content--rate__right--total">
                4.6
              </div>
              <div class="s__activity--box__content--rate__right--star">
                <span><img src="~/assets/images/star.svg"></span>
                <span><img src="~/assets/images/star.svg"></span>
                <span><img src="~/assets/images/star.svg"></span>
                <span><img src="~/assets/images/star.svg"></span>
                <span><img src="~/assets/images/star.svg"></span>
              </div>
              <div class="s__activity--box__content--rate__right--link-rate">
                <a href="#">Gửi đánh giá của bạn</a>
              </div>
            </div>
            <div class="m_rate_right">
              <div class="s__activity--box__content--rate__right--list-rate">
                <div class="s__activity--box__content--rate__right--list-rate__item">
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="text-rate">5 đánh giá</span>
                </div>
                <div class="s__activity--box__content--rate__right--list-rate__item">
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="text-rate">5 đánh giá</span>
                </div>
                <div class="s__activity--box__content--rate__right--list-rate__item">
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="text-rate">5 đánh giá</span>
                </div>
                <div class="s__activity--box__content--rate__right--list-rate__item">
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="text-rate">5 đánh giá</span>
                </div>
                <div class="s__activity--box__content--rate__right--list-rate__item">
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="start"><img src="~/assets/images/star.svg"></span>
                  <span class="text-rate">5 đánh giá</span>
                </div>
              </div>
            </div>
          </div>
          <div class="s__activity--box__content--rate__left">
            <div v-for="cus in customersSaid" class="s__activity--box__content--rate__left--item">
              <div class="s__activity--box__content--rate__left--item__head">
                <div class="s__activity--box__content--rate__left--item__head--avatar">
                  <img src="~/assets/images/avatar-dh.png">
                </div>
                <div class="s__activity--box__content--rate__left--item__head--info">
                  <div class="name">{{ cus.name }}</div>
                  <div class="date">{{ cus.dateSaid }}</div>
                  <div class="star">
                    <span><img src="~/assets/images/star.svg"></span>
                    <span><img src="~/assets/images/star.svg"></span>
                    <span><img src="~/assets/images/star.svg"></span>
                    <span><img src="~/assets/images/star.svg"></span>
                    <span><img src="~/assets/images/star.svg"></span>
                  </div>
                </div>
              </div>
              <div class="s__activity--box__content--rate__left--item__bottom">
                {{ cus.said.slice(0, cus.lenghtTxt) }}
              </div>
              <p @click="moreRegulations(cus)" v-if="cus.said.length > cus.lenghtTxt" class="more__cus"><span>Xem thêm</span></p>
            </div>
          </div>
          <div v-if="!isMobile" class="s__activity--box__content--rate__right">
            <div class="s__activity--box__content--rate__right--total">
              4.6
            </div>
            <div class="s__activity--box__content--rate__right--star">
              <span><img src="~/assets/images/star.svg"></span>
              <span><img src="~/assets/images/star.svg"></span>
              <span><img src="~/assets/images/star.svg"></span>
              <span><img src="~/assets/images/star.svg"></span>
              <span><img src="~/assets/images/star.svg"></span>
            </div>
            <div class="s__activity--box__content--rate__right--link-rate">
              <a href="#">Gửi đánh giá của bạn</a>
            </div>
            <div class="s__line"></div>
            <div class="s__activity--box__content--rate__right--list-rate">
              <div class="s__activity--box__content--rate__right--list-rate__item">
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="text-rate">5 đánh giá</span>
              </div>
              <div class="s__activity--box__content--rate__right--list-rate__item">
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="text-rate">5 đánh giá</span>
              </div>
              <div class="s__activity--box__content--rate__right--list-rate__item">
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="text-rate">5 đánh giá</span>
              </div>
              <div class="s__activity--box__content--rate__right--list-rate__item">
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="text-rate">5 đánh giá</span>
              </div>
              <div class="s__activity--box__content--rate__right--list-rate__item">
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="start"><img src="~/assets/images/star.svg"></span>
                <span class="text-rate">5 đánh giá</span>
              </div>
            </div>
          </div>
        </div>
        <div class="s__activity--box__content--rate-paginate">
          <ul>
            <li class="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
      <div class="s__activity--register-group">
        <div class="s__activity--register-group__left">
          <img src="~/assets/images/reg.png">
        </div>
        <div class="s__activity--register-group__right">
          <div class="s__activity--register-group__right--title">
            Đăng ký
            theo nhóm riêng?
          </div>
          <div class="s__activity--register-group__right--description">
            Bạn có thể gửi yêu cầu đăng ký nhóm riêng bất kể số lượng thành viên.
          </div>
          <div class="s__activity--register-group__right--button">
            <a href="#">gửi yêu cầu</a>
          </div>
        </div>
      </div>
      <div class="s__activity--box mb-76">
        <div class="s__activity--box__title">
          <h2>Các hoạt động khác cùng địa điểm</h2>
          <div class="s__activity--box__next-prev">
            <div class="s__topic--slider__head">
              <span>1/2</span>
              <span class="icon-slider"><img src="~/assets/images/arrow-white.svg"></span>
              <span class="icon-slider next active"><img src="~/assets/images/arrow-white.svg"></span>
            </div>
          </div>
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
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="s__info-activity-mobile">
      <div class="s__info-activity-mobile-wrapper">
        <div @click="showMoreInfoActivity()" class="s__info-activity-mobile__head">
          <div class="s__info-activity-mobile__head--wrap">
            <img :class="{'active-more-activity' : activeMoreActivity}" src="~/assets/images/icon-open-info.svg">
          </div>
        </div>
        <div v-if="!activeMoreActivity" class="s__info-activity-mobile__less">
          <div class="s__info-activity-mobile__less--left">
            <div class="s__info-activity-mobile__less--left__price">7.526.000 VND/người</div>
            <div class="s__info-activity-mobile__less--left__des">Đăng ký trước, thanh toán sau</div>
          </div>
          <div class="s__info-activity-mobile__less--right">
            <button class="btn-choose-date-activity">Chọn ngày</button>
          </div>
        </div>
        <div v-if="activeMoreActivity" class="s__info-activity-mobile__more">
          <div v-if="isMobile" class="s__activity--info__right">
            <div class="s__activity--info__right--head">
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
            <div class="s__activity--info__right--bottom">
              <div class="s__activity--info__right--bottom__price-old">
                4.600.000 VND/người
              </div>
              <div class="s__activity--info__right--bottom__price-sale">
                <span>Giá từ</span>
                <span>4.400.000 VND/người</span>
              </div>
              <div class="s__activity--info__right--bottom__description">Đăng ký trước, thanh toán sau</div>
              <div class="s__activity--info__right--bottom__choose-date">
                <button class="btn btn-choose-date" @click="chooseDate()">Chọn ngày</button>
              </div>
              <div class="s__line"></div>
              <div class="s__activity--info__right--bottom__coupons">
                <div class="s__activity--info__right--bottom__coupons--label">
                  2 mã giảm giá:
                </div>
                <div class="s__activity--info__right--bottom__coupons--items">
                  <div class="coupon-item" @click="detailCoupon()">
                    Giảm 10%
                  </div>
                  <div class="coupon-item" @click="detailCoupon()">
                    Giảm 200K
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Carousel, Slide, Navigation} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import LibraryImage from "../../components/LibraryImage";


export default {
  name: "index",
  components: {
    LibraryImage,
    Carousel,
    Slide,
    Navigation
  },
  data: () => ({
    listDates: [
      {
        id: 1,
        active: true,
        title: 'NGÀY 1 - HỌC NHỮNG KIẾN THỨC NỀN TẢNG',
        content: 'Bạn sẽ được trang bị kiến thức nền tảng quan trọng về bình dưỡng khí, các kiểm soát cơ thể và những kỹ năng thiết yếu ở dưới mặt nước. Khóa học sẽ cung cấp đến bạn một tài khoản trực tuyết để bạn dễ dàng xem lại các nội dung lý thuyết của chương trình bất cứ khi nào bạn cần. Ngày đầu tiên này, bạn cũng sẽ được làm quen với các kỹ thuật lặn DiveRAID ở hồ bơi sâu tại trung tâm Nha Trang.'
      },
      {
        id: 2,
        active: false,
        title: 'NGÀY 2 - OPEN WATER',
        content: 'Bạn sẽ được trang bị kiến thức nền tảng quan trọng về bình dưỡng khí, các kiểm soát cơ thể và những kỹ năng thiết yếu ở dưới mặt nước. Khóa học sẽ cung cấp đến bạn một tài khoản trực tuyết để bạn dễ dàng xem lại các nội dung lý thuyết của chương trình bất cứ khi nào bạn cần. Ngày đầu tiên này, bạn cũng sẽ được làm quen với các kỹ thuật lặn DiveRAID ở hồ bơi sâu tại trung tâm Nha Trang.'
      },
      {
        id: 3,
        active: false,
        title: 'NGÀY 3 - DIVERAID 20M',
        content: 'Bạn sẽ được trang bị kiến thức nền tảng quan trọng về bình dưỡng khí, các kiểm soát cơ thể và những kỹ năng thiết yếu ở dưới mặt nước. Khóa học sẽ cung cấp đến bạn một tài khoản trực tuyết để bạn dễ dàng xem lại các nội dung lý thuyết của chương trình bất cứ khi nào bạn cần. Ngày đầu tiên này, bạn cũng sẽ được làm quen với các kỹ thuật lặn DiveRAID ở hồ bơi sâu tại trung tâm Nha Trang.'
      }
    ],
    includes: ['Chương trình kiến thức lý thuyết thông qua lớp học online.', 'Một buổi huấn luyện ở hồ bơi hoặc bãi nước nông', 'Bốn buổi lặn chuyên sâu trong hai ngày liên tục.', 'Bốn buổi lặn chuyên sâu trong hai ngày liên tục.', 'Bốn buổi lặn chuyên sâu trong hai ngày liên tục.'],
    notIncluded: ['Chi phí cá nhân.', 'Hình lưu niệm.', 'Chi phí tips.', 'Chi phí tips.', 'Chi phí tips.'],
    limitInclude: 3,
    includesShow: [],
    notIncludedShow: [],
    includesMore: false,
    notIncludedMore: false,
    questionAnswer: [
      {
        id: 1,
        active: false,
        question: 'Chính sách hoàn hủy',
        answer: 'There are plenty of kayaks available, with a mix of single and doubles, depending on your preference.',
      },
      {
        id: 2,
        active: false,
        question: 'Trải nghiệm an toàn',
        answer: 'There are plenty of kayaks available, with a mix of single and doubles, depending on your preference.',
      },
      {
        id: 3,
        active: false,
        question: 'Chính sách thanh toán',
        answer: 'There are plenty of kayaks available, with a mix of single and doubles, depending on your preference.',
      },
      {
        id: 4,
        active: false,
        question: 'Thời tiết ở đây thế nào?',
        answer: 'There are plenty of kayaks available, with a mix of single and doubles, depending on your preference.',
      },
      {
        id: 5,
        active: false,
        question: 'Lịch trình này có phù hợp cho trẻ em không?',
        answer: 'There are plenty of kayaks available, with a mix of single and doubles, depending on your preference.',
      },
      {
        id: 6,
        active: false,
        question: 'Tôi có thể mang theo fly cam không?',
        answer: 'There are plenty of kayaks available, with a mix of single and doubles, depending on your preference.',
      }
    ],
    isFixed: false,
    isFixedNav: false,
    showChooseDate: false,
    showLibrary: false,
    listYear: [
      {
        id: 1,
        active: true,
        name: '2022'
      },
      {
        id: 2,
        active: false,
        name: '2023'
      },
      {
        id: 3,
        active: false,
        name: '2024'
      }
    ],
    listMonth: [
      // {
      //   id: 1,
      //   active: false,
      //   isDisable: true,
      //   name: 'Tháng 1'
      // },
      // {
      //   id: 2,
      //   active: false,
      //   isDisable: true,
      //   name: 'Tháng 2'
      // },
      // {
      //   id: 3,
      //   active: false,
      //   isDisable: true,
      //   name: 'Tháng 3'
      // },
      // {
      //   id: 4,
      //   active: false,
      //   isDisable: true,
      //   name: 'Tháng 4'
      // },
      // {
      //   id: 5,
      //   active: false,
      //   isDisable: true,
      //   name: 'Tháng 5'
      // },
      // {
      //   id: 6,
      //   active: false,
      //   isDisable: true,
      //   name: 'Tháng 6'
      // },
      // {
      //   id: 7,
      //   active: false,
      //   isDisable: true,
      //   name: 'Tháng 7'
      // },
      // {
      //   id: 8,
      //   active: false,
      //   isDisable: true,
      //   name: 'Tháng 8'
      // },
      {
        id: 9,
        active: false,
        isDisable: false,
        name: 'Tháng 9'
      },
      {
        id: 10,
        active: false,
        isDisable: false,
        name: 'Tháng 10'
      },
      {
        id: 11,
        active: false,
        isDisable: false,
        name: 'Tháng 11'
      },
      {
        id: 12,
        active: true,
        isDisable: false,
        name: 'Tháng 12'
      },
    ],
    categories: [
      {
        id: 1,
        name: 'Land tour',
        active: true
      },
      {
        id: 2,
        name: 'JoinIN',
        active: false
      }
    ],
    pLeft: false,
    monthLeft: false,
    monthRight: false,
    showDetailCoupon: false,
    activeScroll: '',
    customersSaid: [
      {
        id: 1,
        name: 'Drifter',
        thumbnail: '',
        dateSaid: 'Tháng 01/2018',
        starRate: 5,
        lenghtTxt: 390,
        said: 'Bucketlist item ticked, this January! Its an indescribable experience in harsh subzero conditions, the terrain is what keeps you going....The walk on the frozen river is an adventure of a lifetime, the beauty of the ice sheets and the deep blue river flowing in between is a mesmerize.',
      },
      {
        id: 2,
        name: 'Hùng',
        thumbnail: '',
        dateSaid: 'Tháng 01/2018',
        starRate: 5,
        lenghtTxt: 390,
        said: 'Bucketlist item ticked, this January! Its an indescribable experience in harsh subzero conditions, the terrain is what keeps you going....The walk on the frozen river is an adventure of a lifetime, the beauty of the ice sheets and the deep blue river flowing in between is a mesmerize. The walk on the frozen river is an adventure of a lifetime, the beauty of the ice sheets and the deep blue river flowing in between is a mesmerize.The walk on the frozen river is an adventure of a lifetime, the beauty of the ice sheets and the deep blue river flowing in between is a mesmerize.',
      },
      {
        id: 2,
        name: 'Hùng',
        thumbnail: '',
        dateSaid: 'Tháng 01/2018',
        starRate: 5,
        lenghtTxt: 390,
        said: 'Bucketlist item ticked, this January! Its an indescribable experience in harsh subzero conditions, the terrain is what keeps you going....The walk on the frozen river is an adventure of a lifetime, the beauty of the ice sheets and the deep blue river flowing in between is a mesmerize. The walk on the frozen river is an adventure of a lifetime, the beauty of the ice sheets and the deep blue river flowing in between is a mesmerize.The walk on the frozen river is an adventure of a lifetime, the beauty of the ice sheets and the deep blue river flowing in between is a mesmerize.',
      }
    ],
    regulationsLenght: 390,
    pageWidth: 0,
    isMobile: false,
    itemSlider: 3,
    activeMoreActivity: false,
  }),
  beforeMount() {
      window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.includes.forEach((val, index) => {
      if (index < 3) {
        this.includesShow.push(val)
      }
    })

    this.notIncluded.forEach((val, index) => {
      if (index < 3) {
        this.notIncludedShow.push(val)
      }
    })

    this.pageWidth = window.innerWidth
    if (this.pageWidth <= 768) {
      this.isMobile = true
      this.itemSlider = 1.8
    } else {
      this.isMobile = false
    }

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })

    useHead({
      bodyAttrs: {
        class: 'is-page-activities'
      }
    })
  },
  methods: {
    updateparentDetailCoupon(variable) {
      this.showDetailCoupon = variable
    },
    showContentDate(date) {
      this.listDates.forEach((val) => {
        if (val.id === date.id) {
          val.active = true
        } else {
          val.active = false
        }
      })
    },
    showMoreInclude() {
      this.includesMore = true
      this.includesShow = []
      this.includes.forEach((val, index) => {
        this.includesShow.push(val)
      })
    },
    showMoreNoteIncluded() {
      this.notIncludedMore = true
      this.notIncludedShow = []
      this.notIncluded.forEach((val, index) => {
        this.notIncludedShow.push(val)
      })
    },
    showAnswer(qa) {
      this.questionAnswer.forEach((val) => {
        if (val.id === qa.id) {
          val.active = !val.active
        } else {
          val.active = false
        }
      })
    },
    handleScroll() {
      // Your scroll handling here
      if (window.scrollY > 95) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
      let activity = this.$refs.activity.scrollTop
      let schedule = this.$refs.schedule.scrollTop
      let important = this.$refs.important.scrollTop
      let review = this.$refs.review.scrollTop
      if (window.scrollY >= activity){
        this.activeScroll = 'activity'
      }else if (window.scrollY >= schedule){
        this.activeScroll = 'schedule'
      }else if (window.scrollY >= important){
        this.activeScroll = 'important'
      }else if (window.scrollY >= review){
        this.activeScroll = 'review'
      }
    },
    chooseDate() {
      this.showChooseDate = true
    },
    updateparent(variable) {
      this.showChooseDate = variable
    },
    updateparentLibrary(variable) {
      this.showLibrary = variable
    },
    changeCategory(category) {
      this.categories.forEach((val) => {
        if (val.id === category.id) {
          val.active = true
        } else {
          val.active = false
        }
      })
    },
    changeYear(y, index) {
      this.listYear.forEach((val) => {
        if ((index + 1) === this.listYear.length) {
          this.pLeft = true
        } else {
          this.pLeft = false
        }
        if (val.id === y.id) {
          val.active = true
        } else {
          val.active = false
        }
      })
    },
    showMonthRight() {
      this.monthRight = true
      this.monthLeft = false
    },
    showMonthLeft() {
      this.monthRight = false
      this.monthLeft = true
    },
    showLibraryModal() {
      this.showLibrary = true
    },
    detailCoupon(coupon) {
      this.showDetailCoupon = true
    },
    toScroll(into) {
      if (into === 'activity') {
        this.activeScroll = 'activity'
        setTimeout(() => this.$refs.activity.scrollIntoView({block: 'start', behavior: 'smooth'}), 200);
        window.scrollBy(0, 73);
      }
      if (into === 'schedule') {
        this.activeScroll = 'schedule'
        setTimeout(() => this.$refs.schedule.scrollIntoView({block: 'start', behavior: 'smooth'}), 200);
        window.scrollBy(0, 73);
      }
      if (into === 'important') {
        this.activeScroll = 'important'
        setTimeout(() => this.$refs.important.scrollIntoView({block: 'start', behavior: 'smooth'}), 200);
        window.scrollBy(0, 73);
      }
      if (into === 'review') {
        this.activeScroll = 'review'
        setTimeout(() => this.$refs.review.scrollIntoView({block: 'start', behavior: 'smooth'}), 200);
        window.scrollBy(0, 73);
      }
    },
    moreRegulations(cus) {
      this.customersSaid.forEach((val) => {
        if (val.id === cus.id){
          cus.lenghtTxt = val.said.length
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
    showMoreInfoActivity(){
      this.activeMoreActivity = !this.activeMoreActivity
    }
  }
}
</script>

<style scoped>

</style>
