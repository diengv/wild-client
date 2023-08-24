<template>
  <div>
    <section class="s__footer">
      <div class="s__footer register-info">
        <div class="register-info__gradient"></div>
        <div class="s__footer register-info__description">
          Bạn đã sẵn sàng cập nhật những <br> hoạt động mới nhất cùng intoWild?
        </div>
        <div class="s__footer register-info__button">
          <a href="#">
            Đăng ký nhận thông tin
          </a>
        </div>
      </div>
      <div v-if="!isMobile" class="s__footer main-footer">
        <div class="s__container">
          <div class="s__regulations">
            <div class="s__regulations--title">
              Các quy định cần lưu ý:
            </div>
            <div class="s__regulations--description">
              {{ regulations.slice(0, regulationsLenght) }}
              <span><strong @click="moreRegulations()" class="regulations__more"><span
                  v-if="!regulationsMore">Xem thêm</span> <span v-else>Ẩn bớt</span></strong> </span>
            </div>
          </div>
          <div class="s__line"></div>
          <div class="s__info">
            <div class="s__info--left">
              <div class="f__label">
                Liên hệ intoWild
              </div>
              <div class="info-company">
                <p>Địa chỉ giao dịch: 18Bis/47 Nguyễn Thị Minh Khai, P. Bến Nghé, Q. 1, TP.HCM</p>
                <p>Số điện thoại: 088 667 7950</p>
                <p>Email: talk@intowild.travel</p>
              </div>
              <div class="info-special">
                <a href="#"><img src="~/assets/images/facebook.svg"></a>
                <a href="#"><img src="~/assets/images/instagram.svg"></a>
                <a href="#"><img src="~/assets/images/whatsaap.svg"></a>
                <a href="#"><img src="~/assets/images/telegram.svg"></a>
              </div>
            </div>
            <div class="s__info--right">
              <div class="w-50">
                <div class="f__label">
                  Chính sách
                </div>
                <div class="f_link">
                  <a href="#">Điều khoản và điều kiện</a>
                  <a href="#">Chính sách hoàn hủy</a>
                  <a href="#">Trường hợp khẩn cấp</a>
                  <a href="#">Câu hỏi thường gặp</a>
                  <a href="#">Chính sách bảo mật</a>
                </div>
              </div>
              <div class="w-50">
                <div class="f__label">
                  Phương thức thanh toán
                </div>
                <div class="method-pay">
                  <img src="~/assets/images/techcombank.svg">
                  <img src="~/assets/images/vietcombank.svg">
                  <img src="~/assets/images/vnpay.svg">
                  <img src="~/assets/images/napas.svg">
                  <img src="~/assets/images/momo.svg">
                  <img src="~/assets/images/payon.svg">
                  <img src="~/assets/images/visa.svg">
                  <img src="~/assets/images/onepay.svg">
                </div>
              </div>
            </div>
          </div>
          <div class="s__sitemap">
            <div class="s__sitemap--item">
              <div class="f__label">
                Việt Nam
              </div>
              <div class="f_link" v-if="vietnamShow.length > 0">
                <a v-for="(vn,index) of vietnamShow" href="#" :key="index">{{ vn.name }}</a>
                <a v-if="!vietnamMore" @click="moreVN()" class="more__vn">Xem thêm</a>
              </div>
            </div>
            <div class="s__sitemap--item">
              <div class="f__label">
                Nước ngoài
              </div>
              <div class="f_link">
                <a href="#">Thái Lan</a>
                <a href="#">Indonesia</a>
                <a href="#">Nepal</a>
                <a href="#">India</a>
                <a href="#">Philippines</a>
                <a href="#">Tây Trung Á</a>
              </div>
            </div>
            <div class="s__sitemap--item">
              <div class="f__label">
                Bộ sưu tập
              </div>
              <div class="f_link">
                <a href="#">Hộ chiếu mạo hiểm</a>
                <a href="#">Cắm trại hoang dã</a>
                <a href="#">Lên rừng xuống biển</a>
                <a href="#">VBA Basketation</a>
              </div>
            </div>
            <div class="s__sitemap--item">
              <div class="f__label">
                Độ khó
              </div>
              <div class="f_link">
                <a href="#">Người mới</a>
                <a href="#">Kinh nghiệm</a>
                <a href="#">Nhà chinh phục</a>
                <a href="#">Chuyên gia</a>
              </div>

              <div class="f__label mt-48">
                Khuyến mãi
              </div>
              <div class="f_link">
                <a href="#">Mã giảm giá</a>
                <a href="#">Wild Ambassador</a>
              </div>
            </div>
            <div class="s__sitemap--item">
              <div class="f__label">
                Về intoWild
              </div>
              <div class="f_link">
                <a href="#">Kỳ nghỉ #Adventure</a>
                <a href="#">Liên hệ với chúng tôi</a>
                <a href="#">Tuyển dụng</a>
              </div>

              <div class="f__label mt-48">
                intoWild Life
              </div>
              <div class="f_link">
                <a href="#">Cẩm nang mạo hiểm</a>
                <a href="#">Chân dung nhà chinh phục</a>
                <a href="#">Kỳ nghỉ Adventure</a>
              </div>
            </div>
          </div>
          <div class="s__line cl-main"></div>
          <div class="s__copyright">
            <div class="s__copyright--left">
              © 2020 Bản quyền thuộc về Công ty TNHH The Into Company.<br>
              Số đăng kí kinh doanh: 0316569258 do Sở kế hoạch và đầu tư TP.HCM cấp ngày 02/11/2020.
            </div>
            <div class="s__copyright--right">
              <div class="w-50 d-flex">
                <span><img src="~/assets/images/dmca.svg"></span>
                <span><img src="~/assets/images/cbt.svg"></span>
              </div>
              <div class="w-50 d-flex flex-end">
                <span><img src="~/assets/images/into.svg"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isMobile" class="s__footer main-footer">
        <div class="s__container">
          <div class="s__regulations">
            <div class="s__regulations--title">
              <span @click="activeRegulations()">Các quy định cần lưu ý:</span>
            </div>
            <div v-if="mobileActiveRegulations" class="s__regulations--description">
              {{ regulations.slice(0, regulationsLenght) }}
              <span><strong @click="moreRegulations()" class="regulations__more"><span
                  v-if="!regulationsMore">Xem thêm</span> <span v-else>Ẩn bớt</span></strong> </span>
            </div>
          </div>
          <div class="s__line"></div>
          <div class="s__info-company">
            <div class="s__info-company__title">
              Liên hệ intoWild
            </div>
            <div class="s__info-company__item">
              Địa chỉ giao dịch: 02 Lê Thước, P. Thảo Điền, TP. Thủ Đức, TP. HCM
            </div>
            <div class="s__info-company__item">
              Số điện thoại: 088 667 7905
            </div>
            <div class="s__info-company__item">
              Email: talk@intowild.travel
            </div>
            <div class="info-special">
              <a href="#"><img src="~/assets/images/facebook.svg"></a>
              <a href="#"><img src="~/assets/images/instagram.svg"></a>
              <a href="#"><img src="~/assets/images/whatsaap.svg"></a>
              <a href="#"><img src="~/assets/images/telegram.svg"></a>
            </div>
          </div>
          <div class="s__line"></div>
          <div class="s__box-footer-mobile">
            <div @click="activePolicy()" class="s__box-footer-mobile__head">
              <span>Chính sách</span>
            </div>
            <div v-if="mobileActivePolicy" class="s__box-footer-mobile__content">
              <div class="f_link">
                <a href="#">Điều khoản và điều kiện</a>
                <a href="#">Chính sách hoàn hủy</a>
                <a href="#">Trường hợp khẩn cấp</a>
                <a href="#">Câu hỏi thường gặp</a>
                <a href="#">Chính sách bảo mật</a>
              </div>
            </div>
          </div>
          <div class="s__line"></div>
          <div class="s__box-footer-mobile">
            <div @click="activePolicy()" class="s__box-footer-mobile__head">
              <span class="af-payment">Phương thức thanh toán</span>
            </div>
            <div class="s__box-footer-mobile__content">
              <div class="f_link-pay">
                <span><img src="~/assets/images/p1.png"></span>
                <span><img src="~/assets/images/p2.png"></span>
                <span><img src="~/assets/images/p3.png"></span>
                <span><img src="~/assets/images/p4.png"></span>
                <span><img src="~/assets/images/p5.png"></span>
                <span><img src="~/assets/images/p6.png"></span>
                <span><img src="~/assets/images/p7.png"></span>
              </div>
            </div>
          </div>
          <div class="s__line"></div>
          <div class="s__box-footer-mobile">
            <div @click="activeVietNam()" class="s__box-footer-mobile__head">
              <span>Việt Nam</span>
            </div>
            <div v-if="mobileActiveVietNam" class="s__box-footer-mobile__content">
              <div class="f_link" v-if="vietnamShow.length > 0">
                <a v-for="(vn,index) of vietnamShow" href="#" :key="index">{{ vn.name }}</a>
                <a v-if="!vietnamMore" @click="moreVN()" class="more__vn">Xem thêm</a>
              </div>
            </div>
          </div>
          <div class="s__line"></div>
          <div class="s__box-footer-mobile">
            <div @click="activeForeign()" class="s__box-footer-mobile__head">
              <span>Nước ngoài</span>
            </div>
            <div v-if="mobileActiveForeign" class="s__box-footer-mobile__content">
              <div class="f_link">
                <a href="#">Thái Lan</a>
                <a href="#">Indonesia</a>
                <a href="#">Nepal</a>
                <a href="#">India</a>
                <a href="#">Philippines</a>
                <a href="#">Tây Trung Á</a>
              </div>
            </div>
          </div>
          <div class="s__line"></div>
          <div class="s__box-footer-mobile">
            <div @click="activeCollection()" class="s__box-footer-mobile__head">
              <span>Bộ sưu tập</span>
            </div>
            <div v-if="mobileActiveCollection" class="s__box-footer-mobile__content">
              <div class="f_link">
                <a href="#">Hộ chiếu mạo hiểm</a>
                <a href="#">Cắm trại hoang dã</a>
                <a href="#">Lên rừng xuống biển</a>
                <a href="#">VBA Basketation</a>
              </div>
            </div>
          </div>
          <div class="s__line"></div>
          <div class="s__box-footer-mobile">
            <div @click="activeLevel()" class="s__box-footer-mobile__head">
              <span>Độ khó</span>
            </div>
            <div v-if="mobileActiveLevel" class="s__box-footer-mobile__content">
              <div class="f_link">
                <a href="#">Người mới</a>
                <a href="#">Kinh nghiệm</a>
                <a href="#">Nhà chinh phục</a>
                <a href="#">Chuyên gia</a>
              </div>
            </div>
          </div>
          <div class="s__line"></div>
          <div class="s__box-footer-mobile">
            <div @click="activePromotion()" class="s__box-footer-mobile__head">
              <span>Khuyến mãi</span>
            </div>
            <div v-if="mobileActivePromotion" class="s__box-footer-mobile__content">
              <div class="f_link">
                <a href="#">Mã giảm giá</a>
                <a href="#">Wild Ambassador</a>
              </div>
            </div>
          </div>
          <div class="s__line"></div>
          <div class="s__box-footer-mobile">
            <div @click="activeIntoWildLife()" class="s__box-footer-mobile__head">
              <span>intoWild Life</span>
            </div>
            <div v-if="mobileActiveIntoWildLife" class="s__box-footer-mobile__content">
              <div class="f_link">
                <a href="#">Cẩm nang mạo hiểm</a>
                <a href="#">Chân dung nhà chinh phục</a>
                <a href="#">Kỳ nghỉ Adventure</a>
              </div>
            </div>
          </div>
          <div class="s__line"></div>
          <div class="s__box-footer-mobile">
            <div @click="activeIntoWildUs()" class="s__box-footer-mobile__head">
              <span>Về intoWIld</span>
            </div>
            <div v-if="mobileActiveIntoWildUs" class="s__box-footer-mobile__content">
              <div class="f_link">
                <a href="#">Kỳ nghỉ #Adventure</a>
                <a href="#">Liên hệ với chúng tôi</a>
                <a href="#">Tuyển dụng</a>
              </div>
            </div>
          </div>
          <div class="s__line"></div>
          <div class="s__box-footer-mobile">
            <div class="f_text">
              © 2020 Bản quyền thuộc về Công ty TNHH The Into Company.
            </div>
            <div class="f_text">
              Số đăng kí kinh doanh: 0316569258 do Sở kế hoạch và đầu tư TP.HCM cấp ngày 02/11/2020.
            </div>
          </div>
          <div class="s__box-footer-mobile">
            <div class="s__copyright--right">
              <div class="w-50 d-flex">
                <span><img src="~/assets/images/into.svg"></span>
              </div>
              <div class="w-50 d-flex flex-end">
                <span><img src="~/assets/images/dmca.svg"></span>
                <span><img src="~/assets/images/cbt.svg"></span>
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
  name: "AppFooter",
  data: () => ({
    regulations: '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur tristique felis, eget consectetur enim faciisis id. Donec ut dolor a diam fringilla scelerisque. Curabitur eu bibendum felis. Suspendisse vel augue pretium, scelerisque lectus ut, tristique nisi. Nullam nunc nulla, vestibulum vitae interdum eu, porta id ligula. Mauris cursus blandit nulla, venenatis lobortis velit. | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur tristique felis, eget consectetur enim facilisis id. Donec ut dolor a diam fringilla scelerisque. Curabitur eu bibendum felis. Suspendisse vel augue pretium, scelerisque lectus ut, tristique nisi. Nullam nunc nulla, vestibulum vitae interdum eu, porta id ligula. Mauris cursus blandit nulla, venenatis lobortis velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur tristique felis, eget consectetur enim facilisis id. Donec ut dolor a diam fringilla scelerisque. Curabitur eu bibendum felis. Suspendisse vel augue pretium, scel risque lectus ut, tristique nisi. Nullam nunc nulla, vestibulum vitae interdum eu, porta id ligula. Mauris cursus blandit nulla, venenatis lobortis velit.',
    regulationsMore: false,
    regulationsLenght: 400,
    vietnam: [
      {
        id: 1,
        name: 'Bình Phước'
      },
      {
        id: 2,
        name: 'Dak Lak'
      },
      {
        id: 3,
        name: 'Bình Thuận'
      },
      {
        id: 4,
        name: 'Cát Bà'
      },
      {
        id: 5,
        name: 'Ninh Thuận'
      },
      {
        id: 6,
        name: 'Yên Bái'
      },
      {
        id: 7,
        name: 'Sapa'
      },
      {
        id: 8,
        name: 'Hòa Bình'
      },
      {
        id: 9,
        name: 'Phú Quốc'
      },
      {
        id: 10,
        name: 'Nha Trang'
      },
      {
        id: 11,
        name: 'Quảng bình'
      },
    ],
    vietnamShow: [],
    vietnamMore: false,
    isMobile: false,
    pageWidth: 0,
    mobileActiveRegulations: false,
    mobileActivePolicy: false,
    mobileActiveVietNam: false,
    mobileActiveForeign: false,
    mobileActiveCollection: false,
    mobileActiveLevel: false,
    mobileActivePromotion: false,
    mobileActiveIntoWildLife: false,
    mobileActiveIntoWildUs: false,
  }),
  mounted() {
    this.vietnam.forEach((val, index) => {
      if (index < 10) {
        this.vietnamShow.push(val)
      }
    })
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
    moreRegulations() {
      this.regulationsMore = !this.regulationsMore
      if (this.regulationsMore) {
        this.regulationsLenght = this.regulations.length
      } else {
        this.regulationsLenght = 400
      }
    },
    moreVN() {
      this.vietnamMore = true
      this.vietnamShow = []
      this.vietnam.forEach((val, index) => {
        this.vietnamShow.push(val)
      })
    },
    onResize() {
      console.log('contac')
      this.pageWidth = window.innerWidth
      if (this.pageWidth <= 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    activeRegulations() {
      this.mobileActiveRegulations = !this.mobileActiveRegulations
    },
    activePolicy() {
      this.mobileActivePolicy = !this.mobileActivePolicy
    },
    activeVietNam() {
      this.mobileActiveVietNam = !this.mobileActiveVietNam
    },
    activeForeign() {
      this.mobileActiveForeign = !this.mobileActiveForeign
    },
    activeCollection() {
      this.mobileActiveCollection = !this.mobileActiveCollection
    },
    activeLevel() {
      this.mobileActiveLevel = !this.mobileActiveLevel
    },
    activePromotion() {
      this.mobileActivePromotion = !this.mobileActivePromotion
    },
    activeIntoWildLife() {
      this.mobileActiveIntoWildLife = !this.mobileActiveIntoWildLife
    },
    activeIntoWildUs() {
      this.mobileActiveIntoWildUs = !this.mobileActiveIntoWildUs
    },
  }
}
</script>

<style scoped>

</style>
