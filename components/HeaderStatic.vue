<template>
  <div class="header">
    <div class="header-outer">
      <div class="header-box">
        <nuxt-link to="/">
          <div class="header-logo">與海有關</div>
        </nuxt-link>
        <div class="header-situation">
          <img class="header-location" src="@/assets/img/other/location.png" alt="logo">
          <div class="header-keelung">基隆</div>
          <img class="header-weather" src="@/assets/img/other/weather.png" alt="logo">
          <div class="header-line"></div>
          <div class="header-temp">14°C</div>
          <div class="header-hamburger" @click="openModal"></div>
          
        </div>
      </div>
      <div class="header-box">
        <nuxt-link to="/store-list" class="header-href">
          <div class="header-text">店家</div>
        </nuxt-link>
        <nuxt-link to="/tour-list" class="header-href">
          <div class="header-text">遊程</div>
        </nuxt-link>
        <nuxt-link to="/about" class="header-href">
          <div class="header-text">關於</div>
        </nuxt-link>
        <nuxt-link to="/contact" class="header-href">
          <div class="header-text">聯繫/合作</div>
        </nuxt-link>
        <nuxt-link to="/lazy" class="header-href">
          <div class="header-text">三分鐘基隆旅遊懶人包</div>
        </nuxt-link>
      </div>
      <div class="header-box">
        <a class="header-href" href="https://www.instagram.com/sidd.blue/" target="_blank">
          <img class="header-icon default-image" src="@/assets/img/navigation/ig_n.png" alt="logo">
          <img class="header-icon hover-image" src="@/assets/img/navigation/ig_h.png" alt="logo">
        </a>
        <a class="header-href" href="https://www.instagram.com/sidd.blue/" target="_blank">
          <img class="header-icon default-image" src="@/assets/img/navigation/fb_n.png" alt="logo">
          <img class="header-icon hover-image" src="@/assets/img/navigation/fb_h.png" alt="logo">
        </a>
        <div class="header-line"></div>
        <nuxt-link to="/collect" class="header-href">
          <img class="header-icon default-image" src="@/assets/img/navigation/like_n.png" alt="logo">
          <img class="header-icon hover-image" src="@/assets/img/navigation/like_h.png" alt="logo">
        </nuxt-link>
        <nuxt-link to="/search" class="header-href">
          <img class="header-icon default-image" src="@/assets/img/navigation/search_n.png" alt="logo">
          <img class="header-icon hover-image" src="@/assets/img/navigation/search_h.png" alt="logo">
        </nuxt-link>
      </div>
    </div>
  </div>
  <div v-if="isModalOpen" class="modal">
            <div class="header-modal">
              <div class="header-box">
                <nuxt-link to="/">
                  <div class="header-logo">與海有關</div>
                </nuxt-link>
                <div class="header-situation">
                  <img class="header-location" src="@/assets/img/other/location_w.png" alt="logo">
                  <div class="header-keelung">基隆</div>
                  <img class="header-weather" src="@/assets/img/other/weather_w.png" alt="logo">
                  <div class="header-line header-modal-line"></div>
                  <div class="header-temp">14°C</div>
                  <button class="header-x" @click="closeModal">✕</button>
                </div>
              </div>
              <div class="header-modal-contentBox">
                <div class="header-modal-content">
                  <nuxt-link to="/lazy" @click="closeModal" class="header-modal-item">
                    <div v-if="isActiveRoute('/lazy')" class="header-modal-item-circle"></div>
                    <div class="header-modal-item-title" :class="{ 'color-white': isActiveRoute('/lazy') }">推薦</div>
                    <div class="header-modal-item-miniText">三分鐘基隆旅遊懶人包</div>
                  </nuxt-link>
                  <div class="header-modal-dl"></div>
                  <nuxt-link to="/store-list"  @click="closeModal" class="header-modal-item mb30">
                    <div v-if="isActiveRoute('/store-list')" class="header-modal-item-circle"></div>
                    <div class="header-modal-item-title" :class="{ 'color-white': isActiveRoute('/store-list') }">店家</div>
                    <div class="header-modal-item-text">STORE</div>
                  </nuxt-link>
                  <nuxt-link to="/tour-list" @click="closeModal" class="header-modal-item mb30">
                    <div v-if="isActiveRoute('/tour-list')" class="header-modal-item-circle"></div>
                    <div class="header-modal-item-title" :class="{ 'color-white': isActiveRoute('/tour-list') }">遊程</div>
                    <div class="header-modal-item-text">TOUR</div>
                  </nuxt-link>
                  <nuxt-link to="/about" @click="closeModal" class="header-modal-item mb30">
                    <div v-if="isActiveRoute('/about')" class="header-modal-item-circle"></div>
                    <div class="header-modal-item-title" :class="{ 'color-white': isActiveRoute('/about') }">關於</div>
                    <div class="header-modal-item-text">ABOUT</div>
                  </nuxt-link>
                  <nuxt-link to="/contact" @click="closeModal" class="header-modal-item">
                    <div v-if="isActiveRoute('/contact')" class="header-modal-item-circle"></div>
                    <div class="header-modal-item-title" :class="{ 'color-white': isActiveRoute('/contact') }">加入<br/>合作</div>
                    <div class="header-modal-item-text">JOIN IN</div>
                  </nuxt-link>
                  <div>
                    <div class="header-modal-item-function">
                      <nuxt-link class="header-modal-item-href" @click="closeModal" style="margin-right: 24px;" to="/collect">
                        <div class="header-modal-item-row">
                          <img class="header-modal-item-icon" src="@/assets/img/footer/like.png" alt="logo">
                        </div>
                      </nuxt-link>
                      <nuxt-link class="header-modal-item-href" @click="closeModal" to="/search">
                        <div class="header-modal-item-row">
                          <img class="header-modal-item-icon" src="@/assets/img/footer/search.png" alt="logo">
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="header-modal-dl"></div>
                  <div class="header-modal-item-touch">Get in Touch</div>
                  <div class="header-modal-item-mail">hello@oceanland.tw</div>
                  <div class="header-modal-item-social">
                    <a class="header-modal-item-href" style="margin-right: 16px;" href="https://www.instagram.com/sidd.blue/" target="_blank">
                      <img class="header-modal-item-icon" src="@/assets/img/footer/ig.png" alt="logo">
                    </a>
                    <a class="header-modal-item-href" href="https://www.instagram.com/sidd.blue/" target="_blank">
                      <img class="header-modal-item-icon" src="@/assets/img/footer/fb.png" alt="logo">
                    </a>
                  </div>
                  <div class="header-modal-dl" style="margin-bottom: 20px;"></div>
                  <div class="header-modal-item-copyright">© 2023 與海有關</div>
                </div>
               
              </div>
            </div>
          </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      currentPath:""
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
      this.currentPath = useRouter().currentRoute.value.path;
    },
    isActiveRoute(route) {
      return this.currentPath === route;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    disableScrolling(event) {
      event.preventDefault();
    }
  },
  watch: {
   
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100vw;
  background-color: white;
  z-index: 2;

  &-outer {
    max-width: 1200px;
    height: 60px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
  }

  &-box {
    display: flex;
    align-items: center;
  }

  &-logo {
    margin-right: 14px;
    font-size: 24px;
    font-weight: bold;

    &:hover {
      color: #8a8a8a;
    }
  }

  &-location {
    width: 36px;
    height: 36px;
  }

  &-situation {
    display: flex;
    align-items: center;
  }

  &-hamburger {
    display: none;
  }

  &-keelung {
    font-size: 20px;
    font-weight: bold;
  }

  &-weather {}

  &-temp {
    font-size: 20px;
    font-weight: bold;
  }

  &-line {
    width: 1px;
    height: 24px;
    margin: 0px 10px;
    background-color: black;
  }

  &-href {
    margin: 0px 8px;

    &:hover .default-image {
      display: none;
    }

    &:hover .hover-image {
      display: block;
    }
  }

  &-text {
    font-size: 18px;
    font-weight: bold;

    &:hover {
      color: #8a8a8a;
    }
  }

  &-icon {}

}

@media screen and (max-width: 1200px) {
  //白色文字
  .color-white {
    color: white !important;
    opacity: 1 !important;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(#8db3c8, #64b4d2);
    z-index: 999;
  }

  .mb30 {
    margin: 30px 0;
  }

  .header {
    &-box:nth-child(n + 2) {
      display: none;
    }

    &-logo {
      font-size: 18px;
    }

    &-location {
      width: 30px;
      height: 30px;
    }

    &-keelung {
      font-size: 16px;
    }

    &-weather {
      width: 30px;
      height: 30px;
    }

    &-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
    }

    &-outer {
      height: 48px;
      padding-top: 30px;
    }

    &-line {
      height: 20px;
    }

    &-temp {
      font-size: 18px;
    }

    &-hamburger {
      display: block;
      width: 30px;
      height: 13px;
      cursor: pointer;
      border-top: 2px solid #000;
      border-bottom: 2px solid #000;
      margin-left: 20px;
    }

    &-x {
      display: block;
      width: 30px;
      cursor: pointer;
      margin-left: 20px;
      font-size: 24px;
    }

    &-modal {
      position: relative;
      width: 100vw;
      height: 100vh;
      border-radius: 5px;
      overflow: auto;
      padding: 20px;
      box-sizing: border-box;
      color: #fff;
      &-line {
        background-color: #fff;
      }
      &-contentBox {
        display: flex;
        justify-content: center;
      }
      &-content {
        width: 80vw;
      }
      &-item {
        display: flex;
        height: 45px;
        align-items: center;
        position: relative;
        &-title {
          opacity: 0.6;
          color: #fff;
          letter-spacing: 2.8px;
          font-size: 14px;
          margin-right: 20px;
          font-weight: 500;
        }
        &-function {
          display: flex;
          padding-left: 50px;
          margin: 25px 0;
        }
        &-text {
          font-size: 36px;
          letter-spacing: 1.8px;
          font-weight: bold;
          color: #fff;
        }
        &-miniText {
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 1.6px;
          color: #fff;
        }
        &-miniText {
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 1.6px;
          color: #fff;
        }
        &-touch {
          font-size: 14px;
          letter-spacing: 0.7px;
          font-weight: 500;
          margin-top: 36px;
        }
        &-mail {
          margin-top: 16px;
          font-size: 18px;
          text-decoration: underline;
          letter-spacing: 0.9px;
        }
        &-social {
          display: flex;
          margin: 36px 0;
          margin-left: -8px;
        }
        &-copyright {
          display: flex;
          justify-content: center;
          font-size: 14px;
          letter-spacing: 1.4px;
          margin-bottom: 131px;
        }
        &-circle {
          width: 10px;
          height: 10px;
          background-color: #fff;
          border-radius: 50%;
          position: absolute;
          left: -23px;
        }
      }
      &-dl {
        width: 100%;
        height: 1px;
        background-color: #fff;
        margin: 10px 0px;
      }
    }
    

  }
}
</style>
