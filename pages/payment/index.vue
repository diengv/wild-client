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
    <Modal  @clearModal="updateparentDateMobile" class="m__choise_date" :show="showChooseDateMobile" :width="'314px'" :top="'100px'" :border-radius="'10px'"
           :height="'648px'">
      <div v-click-outside="clickedParent" class="box-choise-header">
        <div class="box-choise-header-nav">
          <span class="box-choise-header-nav__prev disabled"><img src="~/assets/images/icon-vector.svg"></span>
          <span class="box-choise-header-nav__next"><img src="~/assets/images/icon-vector.svg"></span>
        </div>
        2022
      </div>
      <div class="box-choise-month">
        <div class="box-choise-month__item">Tháng 1</div>
        <div class="box-choise-month__item">Tháng 2</div>
        <div class="box-choise-month__item">Tháng 3</div>
        <div class="box-choise-month__item">Tháng 4</div>
        <div class="box-choise-month__item">Tháng 4</div>
        <div class="box-choise-month__item">Tháng 4</div>
        <div class="box-choise-month__item">Tháng 4</div>
        <div class="box-choise-month__item">Tháng 4</div>
        <div class="box-choise-month__item">Tháng 4</div>
        <div class="box-choise-month__item">Tháng 4</div>
        <div class="box-choise-month__item">Tháng 4</div>
        <div class="box-choise-month__item">Tháng 4</div>
      </div>
    </Modal>
    <Modal @clearModal="updateparentDate" :show="showChooseDate" :width="'1290px'" :top="'0px'" :border-radius="'0px'"
           :overflow-y="'scroll'">
      <div class="s__activity--choose-date">
        <div v-if="isMobile" class="s__activity--choose-date__title_modal">Thời gian & Giá</div>
        <div class="s__activity--choose-date__category">
          <div class="s__activity--choose-date__category--tabs">
            <div @click="changeCategory(category)" v-for="(category, index) in categories" :key="index"
                 class="s__activity--choose-date__category--tabs__item" :class="{'active': category.active}">
              {{ category.name }}
            </div>
          </div>
        </div>
        <div v-if="!isMobile" class="s__activity--choose-date__years__months">
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
        <div @click="showBoxChoiseDateMobile()" v-if="isMobile" class="s__activity--choose-date__years__months s__activity--choose-date__years__months--mobile">
            <span>2022</span>
            <span>Tháng 11</span>
        </div>
        <div v-if="!isMobile" class="s__activity--choose-date__tables">
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
        <div v-if="isMobile" class="s__activity--choose-date__tables">
          <table id="customers">
            <tr>
              <th width="276px">Thời gian</th>
              <th width="250px">
                <div @click="boxChoiseGroup()" class="select-box-form-activity">
                  Giá nhóm 1-3 người
                  <div v-if="isBoxChoiseGroup" class="select-box-form-activity-wrap">
                    <ul>
                      <li>Giá nhóm 1-3 người</li>
                      <li>Giá nhóm 4-6 người</li>
                      <li>Giá nhóm 7-10 người</li>
                    </ul>
                  </div>
                </div>
              </th>
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
                  <span class="price-large">4.800.000 VND</span>
                  <span>5.000.000 VND  <small>/người</small></span>
                  <div class="btn-book-mobile">Đặt chỗ</div>
                </div>
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
                  <span class="price-large">4.800.000 VND</span>
                  <span>5.000.000 VND  <small>/người</small></span>
                  <div class="btn-book-mobile">Đặt chỗ</div>
                </div>
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
                  <span class="price-large">4.800.000 VND</span>
                  <span>5.000.000 VND  <small>/người</small></span>
                  <div class="btn-book-mobile">Đặt chỗ</div>
                </div>
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
                  <span class="price-large">4.800.000 VND</span>
                  <span>5.000.000 VND  <small>/người</small></span>
                  <div class="btn-book-mobile">Đặt chỗ</div>
                </div>
              </td>
            </tr>
          </table>
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
      <div v-if="!isMobile" class="s__header_payment--logo">
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
      <div v-if="!isMobile" class="s__header_payment--phone">+84 988 111 645</div>
    </div>
    <div class="s__container">
      <div class="s__payment--title">
        <span v-if="!isMobile">Xác nhận và thanh toán</span>
        <span v-if="isMobile">Bước 2: Xác nhận và Thanh toán</span>
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
              <div v-if="!isMobile" class="s__payment--info-activity__info--wrap">
                <div class="s__payment--info-activity__info--wrap__departure--day">
                  <span>Ngày khởi hành:</span>
                  <span>02/11/2022</span>
                </div>
                <a class="s__payment--info-activity__info--wrap__change" @click="changeDate()">Thay đổi</a>
              </div>
            </div>
          </div>
          <div class="s__payment--info-activity__info--wrap">
            <div class="s__payment--info-activity__info--wrap__departure--day">
              <span>Ngày khởi hành:</span>
              <span>02/11/2022</span>
            </div>
            <a class="s__payment--info-activity__info--wrap__change" @click="changeDate()">Thay đổi</a>
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
            <!--            <div class="s__payment&#45;&#45;content__form&#45;&#45;item">-->
            <!--              <div class="s__payment&#45;&#45;content__form&#45;&#45;item__label">-->
            <!--                Trẻ em:-->
            <!--              </div>-->
            <!--              <div class="s__payment&#45;&#45;content__form&#45;&#45;item__input">-->
            <!--                <div class="btn-choose-number">-->
            <!--                  <span @click="minusChildren()" class="minus"><img src="~/assets/images/minus-active.svg"></span>-->
            <!--                  <span class="number">{{ children }}</span>-->
            <!--                  <span @click="plusChildren()" class="plus"><img src="~/assets/images/plus-active.svg"></span>-->
            <!--                </div>-->
            <!--                <div class="btn-note-text">2.000.000 VND/người</div>-->
            <!--              </div>-->
            <!--            </div>-->
            <div class="s__payment--content__form--item note-form">
              * Hoạt động cần đăng ký tối thiểu 1 khách. Giá có thể sẽ thay đổi tùy thuộc vào số lượng khách.
            </div>
            <!--            <div class="s__payment&#45;&#45;content__form&#45;&#45;item">-->
            <!--              <div class="s__payment&#45;&#45;content__form&#45;&#45;item__label mt&#45;&#45;30">-->
            <!--                Chọn thời gian đón:-->
            <!--              </div>-->
            <!--              <div class="s__payment&#45;&#45;content__form&#45;&#45;item__input flex-column">-->
            <!--                <select id="countries" class="s__select">-->
            <!--                  <option selected>09 PM</option>-->
            <!--                  <option value="US">10 PM</option>-->
            <!--                  <option value="CA">11 PM</option>-->
            <!--                  <option value="FR">12 PM</option>-->
            <!--                  <option value="DE">13 PM</option>-->
            <!--                </select>-->
            <!--                <div class="s__select&#45;&#45;note">Thời gian phù hợp nhất để WildBuddy đón bạn</div>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>

          <div class="s__payment--label mt-41">
            Thông tin liên lạc <span class="note__required">*</span>
          </div>
          <div class="s__payment--content__form" :class="{'form-mobile' : isMobile}">
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
                Ngày sinh:
              </div>
              <div class="s__payment--content__form--item__input">
                <VueDatePicker v-model="date" :enableTimePicker="false"></VueDatePicker>
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
              <label v-for="pay in payments" class="container-radio">{{ pay.name }}
                <input @change="choisePayment(pay)" v-model="pay.selected" type="radio" name="radio">
                <span class="checkmark"></span>
              </label>
            </div>

            <div class="s__payment--content__form--label-small">
              Cổng thanh toán:
            </div>
            <div class="s__payment-method">
              <div v-for="pay in paymentMethod" class="s__payment-method__item" :class="{'active' : pay.licensedPay}">
                <img :src="pay.thumbnail">
                <div v-if="pay.note" class="text-transfer-bank">{{ pay.note }}</div>
                <div class="s__opacity_white"></div>
              </div>

            </div>
            <div class="s__payment--content__form--label-small">
              Nhập mã giảm giá:
            </div>
            <div class="s__payment--coupon">
              <input class="s__input" :class="{'input-coupon-mobile' : isMobile}"/>
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
            <div class="s__payment--coupon__search" @click="showCoupon()">
              <span>Quy định về Thanh toán và hoàn hủy</span>
            </div>
          </div>
        </div>
        <div v-if="!isMobile" class="s__payment--content__right">
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
    <div v-if="isMobile" class="s__info-activity-mobile s__info-activity-mobile-payment">
      <div class="s__info-activity-mobile-wrapper">
        <div @click="showMoreInfoActivity()" class="s__info-activity-mobile__head">
          <div class="s__info-activity-mobile__head--wrap">
            <img :class="{'active-more-activity' : activeMoreActivity}" src="~/assets/images/icon-open-info.svg">
          </div>
        </div>
        <div v-if="!activeMoreActivity" class="s__info-activity-mobile__less">
          <div class="s__info-activity-mobile__less--left">
            <div class="s__info-activity-mobile__less--left__des">CẦN THANH TOÁN</div>
            <div class="s__info-activity-mobile__less--left__price">7.526.000 VND/người</div>
          </div>
          <div class="s__info-activity-mobile__less--right">
            <button class="btn-choose-date-activity">Chọn ngày</button>
          </div>
        </div>
        <div v-if="activeMoreActivity" class="s__info-activity-mobile__more s__info-activity-mobile__more--payment">
          <div v-if="isMobile" class="s__payment--content__right s__payment--content__right-mobile">
            <div>
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
                <div class="s__payment--info_button__right">
                  <button class="btn-payment btn-payment-review">Thanh toán</button>
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
import moment from 'moment';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: "index",
  components: {
    VueDatePicker
  },
  data: () => ({
    timeCount: moment(60 * 10 * 1000),
    showChooseCoupon: false,
    showChooseDate: false,
    showChooseDateMobile: false,
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
    isFixed: false,
    date: '01/01/2023',
    monthLeft: false,
    monthRight: false,
    pLeft: false,
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
    paymentMethod: [
      {
        id: 1,
        name: 'techcombank',
        note: 'Chuyển khoản ngân hàng',
        thumbnail: '/assets/images/techcombank.png',
        licensedPay: false
      },
      {
        id: 2,
        name: 'vietcombank',
        note: 'Chuyển khoản ngân hàng',
        thumbnail: '/assets/images/vietcombank.png',
        licensedPay: false
      },
      {
        id: 3,
        name: 'vnpay',
        note: '',
        thumbnail: '/assets/images/vnpay.png',
        licensedPay: false
      },
      {
        id: 4,
        name: 'momo',
        note: '',
        thumbnail: '/assets/images/momo.png',
        licensedPay: false
      },
      {
        id: 5,
        name: 'atm',
        note: '',
        thumbnail: '/assets/images/atm.png',
        licensedPay: false
      },
      {
        id: 6,
        name: 'visa',
        note: '',
        thumbnail: '/assets/images/visa.png',
        licensedPay: false
      },
      {
        id: 7,
        name: 'onepay',
        note: '',
        thumbnail: '/assets/images/onepay.png',
        licensedPay: false
      }
    ],
    payments: [
      {
        id: 1,
        name: 'Đặt chỗ trước, thanh toán sau',
        selected: false
      },
      {
        id: 2,
        name: 'Trả trước 50%',
        selected: false
      },
      {
        id: 3,
        name: 'Thanh toán 100%',
        selected: false
      },
      {
        id: 4,
        name: 'Trả góp',
        selected: false
      }
    ],
    isMobile: false,
    pageHeight: 0,
    activeMoreActivity: false,
    isBoxChoiseGroup: false,

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
    updateparentDate(variable) {
      this.showChooseDate = variable
    },
    updateparentDateMobile(variable) {
      this.showChooseDateMobile = variable
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
    changeDate() {
      this.showChooseDate = true
    },
    choisePayment(pay) {
      if (pay.id === 1) {
        this.paymentMethod.forEach((val) => {
          if (val.id === 1 || val.id === 2 || val.id === 3) {
            val.licensedPay = true
          }
        })
      } else {
        this.paymentMethod.forEach((val) => {
          val.licensedPay = false
        })
      }
    },
    onResize() {
      this.pageWidth = window.innerWidth
      if (this.pageWidth <= 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    showMoreInfoActivity() {
      this.activeMoreActivity = !this.activeMoreActivity
    },
    boxChoiseGroup(){
      this.isBoxChoiseGroup = !this.isBoxChoiseGroup
    },
    showBoxChoiseDateMobile(){
      this.showChooseDateMobile = !this.showChooseDateMobile
    },
    async clickedParent() {
      await new Promise((resolve, reject) => setTimeout(resolve, 1));
      this.showChooseDateMobile = false
    },
  }
}
</script>

<style scoped>

</style>
