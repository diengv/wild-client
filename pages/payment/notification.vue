<template>
 <div class="s__payment--notification">
   <div class="s__header_payment">
     <div v-if="!isMobile" class="s__header_payment--logo">
       <a href="#">
         <img src="~/assets/images/wild-logo.svg">
       </a>
     </div>
     <div v-if="!isMobile" class="s__header_payment--phone">+84 988 111 645</div>
     <div v-if="isMobile" class="s__header_payment--back-home">
       <span><img src="~/assets/images/icon-home.svg"></span>
       <span>Trở về trang chủ</span>
     </div>
   </div>
   <div class="s__container">
     <div class="s__payment--content">
       <div class="s__payment--content__left w-630--left-noti">
          <div class="s__payment--notification__title mt-40px">
            Chúc mừng bạn đã đăng ký thành công cho hoạt động
          </div>
         <div class="s__payment--notification__name">
           #DiveRAID - Khóa huấn luyện lặn sâu 3 ngày cùng Dive Master Shawn
         </div>
         <div class="s__payment--notification__date">
           3 ngày 2 đêm | Diving | Nha Trang
         </div>
         <div class="s__payment--notification__thumbnail">
           <img src="~/assets/images/paymented.png">
         </div>
         <div class="s__payment--notification__content">
           <p>Xin chào, </p>
           <p>Cảm ơn bạn đã chọn intoWild làm bạn đồng hành trong chuyến đi sắp tới.  Chúng tôi sẽ gửi email xác nhận đăng ký dựa theo thông tin bạn đã đăng ký như sau: </p>
           <p>Họ và Tên: <strong>Nguyễn Minh Trường </strong> </p>
           <p>Số điện thoại: <strong>0908836995 </strong> </p>
           <p>Email:  <strong>truong@minh.nguyen </strong> </p>
           <p>Phương thức thanh toán: <strong>Thẻ ATM nội địa thông qua VNPAY </strong> </p>
           <p>Đừng quên kiểm tra hộp thư điện tử để cập nhật những thông tin cần thiết, chuẩn bị cho chuyến phiêu lưu của bạn nhé! Hẹn sớm gặp lại bạn trong chuyến đi!</p>
         </div>

         <div class="s__payment--notification__row">
            <button class="btn-add-schedule"><span><img src="~/assets/images/icon-calender.svg"></span><span>Thêm vào lịch</span></button>
         </div>
         <div class="s__payment--notification__row">
           <div class="s__payment--notification__follow--title">
             Theo dõi những nội dung thú vị nhất từ intoWild
           </div>
           <div class="s__payment--notification__follow--items">
             <div class="s__payment--notification__follow--item">Cộng đồng du lịch mạo hiểm</div>
             <div class="s__payment--notification__follow--item">Facebook intoWild</div>
             <div class="s__payment--notification__follow--item">Instagram intoWild</div>
             <div class="s__payment--notification__follow--item">Blog intoWild Life</div>
           </div>
         </div>
       </div>
       <div v-if="!isMobile" class="s__payment--content__right mt-80">
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
         <div v-if="!isMobile" class="s__payment--info-review">
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
               Đặt chỗ trước, thanh toán sau
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
         <div v-if="!isMobile" class="s__payment--info_button">
            <button class="btn-back-home">Trở về trang chủ</button>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>
<script>
export default {
  name: "notification",
  data: () => ({
    isMobile: false,
    pageWidth: 0,
  }),
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
  },
  methods: {
    onResize() {
      this.pageWidth = window.innerWidth
      if (this.pageWidth <= 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
  }
}
</script>
<style scoped lang="scss">

</style>