<template>
  <div class="store">
    <div @click="isPopup = true" class="store-box">
      <div :style="`background-image: url('${props.store.bg[1]}')`" class="store-bg">
        <div class="store-bg-row">
          <btnType v-for="(tag, index) in props.store.tag" :key="`${index}${tag}`" :text="tag" :type="'white'"
            class="store-bg-btn" />
        </div>
      </div>
      <div class="store-inner">
        <div class="store-row">
          <div class="store-name">{{ props.store.name }}</div>
          <div class="store-share">
            <img class="store-share-img" src="@/assets/img/regular/view_n.png" alt="view_n">
            <img class="store-share-collect" src="@/assets/img/regular/like_n.png" alt="like_n">
          </div>
        </div>
        <div class="store-text">{{ props.store.des }}</div>
      </div>
    </div>

    <!-- popup -->

    <div v-if="isPopup" @click="close" class="store-popup">
      <div @click.stop class="store-popup-box">
        <img @click="close" class="store-popup-close" src="@/assets/img/regular/close_n.png" alt="close">
        <!-- <div  :style="`background-image: url('${props.store.bg[1]}')`"
          class="store-popup-bg"
        >
          <div class="store-popup-dot-box">
            <div v-for="(bg, index) in props.store.bg"
              :key="`${index}${bg}`"
              class="store-popup-dot"
            ></div>
          </div>
        </div> -->
        <swiper-container id="swipercontainer" class="swipercontainer" :injectStyles='[`
          .swiper-pagination-bullet-active {
            color: #fff;
            background: #fff;
          }`]' :pagination="{ clickable: true }">
          <swiper-slide :style="`background-image: url('${props.store.bg[1]}')`">
            <div class="store-popup-dot-box"></div>
          </swiper-slide>
          <swiper-slide :style="`background-image: url('${props.store.bg[1]}')`">
            <div class="store-popup-dot-box"></div>
          </swiper-slide>
          <swiper-slide :style="`background-image: url('${props.store.bg[1]}')`">
            <div class="store-popup-dot-box"></div>
          </swiper-slide>

        </swiper-container>
        <div class="store-popup-down">
          <div class="store-popup-row">
            <div class="store-popup-name">{{ props.store.name }}</div>
            <img class="store-popup-collect" src="@/assets/img/regular/like_n.png" alt="like">
          </div>
          <div class="store-popup-row-box">
            <div>
              <div class="store-popup-text">{{ props.store.des }}</div>
              <div class="store-popup-tag-box">
                <btnType v-for="(tag, index) in props.store.tag" :key="`${index}${tag}`" class="store-popup-tag"
                  :text="tag" :type="'sblue'" />
              </div>
              <nuxt-link class="store-share-link" :to="`/store/${props.store.url}`">
                <btnType class="store-popup-btn" :text="'詳細介紹'" :type="'light'" />
              </nuxt-link>
            </div>
            <div>
              <div class="store-popup-grey">
                <div class="store-popup-grey-row">
                  <img class="store-popup-grey-icon" src="@/assets/img/info/address.png" alt="like">
                  <div class="store-popup-grey-text">{{ props.store.location }}</div>
                </div>
                <div class="store-popup-grey-line"></div>
                <div class="store-popup-grey-row">
                  <img class="store-popup-grey-icon" src="@/assets/img/info/phone.png" alt="like">
                  <div class="store-popup-grey-text">{{ props.store.tel }}</div>
                </div>
                <div class="store-popup-grey-line"></div>
                <div class="store-popup-grey-row">
                  <img class="store-popup-grey-icon" src="@/assets/img/info/time.png" alt="like">
                  <div class="store-popup-grey-text" v-html="props.store.time"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

const props = defineProps(['store'])
console.log("props", props)
let isPopup = ref(false)

const close = () => {
  isPopup.value = false
}
onMounted(() => {

  // const swiperEl = document.querySelector(".swipercontainer");
  // console.log(swiperEl)
  // const params = {
  //     injectStyles: [`
  //     .swiper-pagination-bullet {
  //       width: 20px;
  //       height: 20px;
  //       text-align: center;
  //       line-height: 20px;
  //       font-size: 12px;
  //       color: #000;
  //       opacity: 1;
  //       background: rgba(0, 0, 0, 0.2);
  //     }

  //     .swiper-pagination-bullet-active {
  //       color: #fff;
  //       background: #007aff;
  //     }
  //     `],
  //     pagination: {
  //       clickable: true,
  //       renderBullet: function (index, className) {
  //         return '<span class="' + className + '">' + (index + 1) + "</span>";
  //       },
  //     },
  //   }

  //   Object.assign(swiperEl, params)

  //   swiperEl.initialize();
})
</script>

<style lang="scss" scoped>
.store {

  &-box {
    width: 384px;
    cursor: pointer;
  }

  &-bg {
    height: 240px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 16px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    border-radius: 16px;
  }

  &-bg-row {
    display: flex;
    overflow: auto;
  }

  &-bg-row::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &-bg-btn {
    margin-right: 8px;
  }

  &-inner {
    padding: 13px 16px 18px;
  }

  &-row {
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
  }

  &-name {
    font-size: 20px;
    font-weight: bold;
  }

  &-share {
    display: flex;
  }

  &-share-link {}

  &-share-img {}

  &-share-collect {
    margin-right: 12px;
  }

  &-text {
    margin-top: 12px;
    text-align: left;
  }

  &-popup {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 200;

    &-box {
      position: relative;
      width: 674px;
      border-radius: 16px;
      overflow: auto;
    }

    &-close {
      position: absolute;
      top: 26px;
      right: 30px;
      width: 36px;
      height: 36px;
      cursor: pointer;
    }

    &-bg {
      height: 350px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      border-radius: 16px 16px 0 0;
    }

    .swipercontainer {
      height: 350px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      border-radius: 16px 16px 0 0;
    }

    swiper-slide {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }


    &-dot-box {
      width: 100%;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
    }

    &-dot {
      width: 8px;
      height: 8px;
      margin: 0px 8px;
      border-radius: 100%;
      background-color: white;
      cursor: pointer;
    }

    &-down {
      padding: 30px 36px;
      background-color: white;
      border-radius: 0 0 16px 16px;
    }

    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-name {
      font-size: 24px;
      font-weight: bold;
    }

    &-collect {}

    &-row-box {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
    }

    &-text {
      text-align: left;
    }

    &-tag-box {
      display: flex;
      flex-wrap: wrap;
      margin-top: 18px;
    }

    &-tag {
      margin: 0px 10px 10px 0px;
    }

    &-btn {
      margin: 26px 0px 0px;
      cursor: pointer;
    }

    &-grey {
      width: 224px;
      margin-left: 24px;
      padding: 18px 23px;
      background-color: #f8f8f8;

      &-row {
        display: flex;
      }

      &-icon {
        width: 20px;
        height: 20px;
      }

      &-text {
        margin-left: 8px;
        font-size: 14px;
        text-align: left;
      }

      &-line {
        height: 1px;
        margin: 12px 0px;
        background-color: #e8e8e8;
      }
    }

  }

}

@media screen and (max-width: 1200px) {

  .store {
    &-box {
      width: 330px;
      cursor: pointer;
    }

    &-bg {
      height: 160px;
    }

    &-row {
      display: flex;
      align-items: center;
      margin-top: 0px;
    }

    &-name {
      font-size: 18px;
      letter-spacing: 0.9px;
    }

    &-text {
      font-size: 15px;
      letter-spacing: 1.5px;
      margin-top: 8px;
    }

    &-popup {
      &-box {
        width: 90vw;
        height: 90vh;
        border-radius: 16px;
      }

      &-bg {
        height: 180px;
      }

      &-row-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 12px;
      }

      &-name {
        line-height: 1.5;
        font-size: 20px;
      }

      &-text {
        letter-spacing: 1.5px;
        font-size: 15px;
      }

      &-btn {
        margin: 10px 0px 20px 0;
      }

      &-down {
        padding: 20px 22px;

      }

      &-grey {
        width: 100%;
        margin: 0;
        padding: 14px 20px;
      }
    }


  }

}
</style>
