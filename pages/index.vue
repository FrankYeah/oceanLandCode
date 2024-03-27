<template>
  <div class="index">

    <div class="index-main">
      <div class="index-main-outer">
        <div class="index-main-title">( store&travel )</div>
        <div class="index-main-head-box">
          <h1 class="index-main-head">與海有關</h1>
          <h2 class="index-main-head-en">
            Sea, Mountain,<span class="index-main-head-en-break"></span> Food
            and Treasure
          </h2>
        </div>
        <h2 class="index-main-en">ALL ABOUT SEAS IN KEELUNG</h2>
      </div>
      <div class="index-main-box">


        <div class="index-main-progress">
          <VerticalProgressBar :progress="percentage" />
        </div>
        <client-only>
          <swiper-container class="index-main-swiper" loop="true" effect="fade" :autoplay="{
            delay: autoplayTime,
            disableOnInteraction: false,
          }" :navigation="navigation" @autoplaytimeleft="autoplaytimeleft">
            <swiper-slide v-for="(img, index) in indexMainImgs" :key="index">
              <div class="index-main-pic" :style="`background-image: url('${img}')`"></div>
            </swiper-slide>
          </swiper-container>
        </client-only>

        <div class="index-main-card">
          <div class="index-main-row">
            <h2 class="index-main-card-title">與海有關</h2>
            <div class="index-main-arrow-box">
              <img class="index-main-arrow navigation-prev" src="@/assets/img/regular/arrow-slides_b_n.png" alt="logo">
              <img class="index-main-arrow-reverse navigation-next" src="@/assets/img/regular/arrow-slides_b_n.png"
                alt="logo">
            </div>
          </div>
          <h3 class="index-main-text">介紹我最愛的城市，挖掘與紀錄每一個基隆在地故事，我被感動過，才會熱愛這座城市。</h3>
          <h3 class="index-main-tag">＃基隆 ＃體驗 ＃人文</h3>
          <div class="index-main-about">
            <img class="index-main-wave" src="@/assets/img/other/deco_wave_w.png" alt="logo">
            <h3 class="index-main-about-text">閱讀關於</h3>
          </div>
        </div>

      </div>
    </div>

    <div class="index-map">
      <div class="index-map-img"></div>
    </div>

    <div class="index-store">
      <div class="index-store-left">
        <headName class="index-store-title" :en="'( FEATURED STORE )'" :text="'精選店家'" :text2="'Keelung Flavor'" />
        <h2 class="index-store-text">山群環抱俯瞰基隆，蘊藏著一間間店家，值得我們深入挖掘。</h2>
        <h2 class="index-store-en">Keelung Flavor</h2>
        <btnType class="index-store-btnType" :text="'三分鐘基隆旅遊懶人包'" :type="'transparent'" />
        <btnType :text="'全部店家'" :type="'blue'" class="index-store-all" />
      </div>
      <div class="index-store-right">
        <store v-for="(store, index) in featuredStore" :key="`${index}${store.title}`" :store="store"
          class="index-store-card" />
      </div>
    </div>

    <div class="index-tour">
      <div class="index-tour-outer">
        <div class="index-tour-row-box">
          <div class="index-tour-row">
            <headName :en="'( FEATURED TOUR )'" :text="'精選遊程'" :text2="'Keelung Landscape'" />
            <h2 class="index-tour-text">基隆有綿延的海岸，天然海泳池可與魚群共遊，有山群環抱俯瞰城市風景。</h2>
            <h2 class="index-tour-en">Keelung Landscape</h2>
          </div>
          <div class="index-tour-row index-tour-row-mini">
            <img class="index-tour-arrow tour-navigation-prev " src="@/assets/img/regular/arrow-slides_n.png" alt="logo">
            <img class="index-tour-arrow tour-navigation-next index-tour-arrow-last"
              src="@/assets/img/regular/arrow-slides_n.png" alt="logo">
            <btnType class="index-tour-btn" :text="'全部遊程'" :type="'blue'" />
          </div>
        </div>
        <div class="index-tour-box">
          <client-only>
            <swiper-container :navigation="tourNavigation" class="tourSwiper" :slidesPerView='1' :spaceBetween="10"
              :breakpoints='tourBreakpoints'>
              <swiper-slide class="index-tour-swiper-slide" v-for="(tour, index) in featuredTour"
                :key="`${index}${tour.name}`">
                <tour :tour="tour" class="index-tour-card" />
              </swiper-slide>
            </swiper-container>
          </client-only>

        </div>
      </div>
    </div>

    <div class="index-new">
      <div class="index-new-outer">
        <div class="index-new-title">
          <headName class="index-new-headName" :en="'( Latest News )'" :text="'最新活動'" />
        </div>
        <div class="index-new-inner">
          <div class="index-new-box">
            <news class="index-new-card" />
            <news class="index-new-card" />
            <news class="index-new-card" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { register } from 'swiper/element/bundle';
import { getStoreByType } from "~/api/index";

const indexMainImgs = reactive<any>([])
getStoreByType(1).then((res: any) => {
  let data = res.data.list.slice(0, 3)
  indexMainImgs.push(...(data.map((o: any) => o.coverImage)))
})

const featuredStore = reactive<any>([])
getStoreByType(1).then((res) => {
  Object.assign(featuredStore, res.data.list.slice(0, 6))
})

const featuredTour = reactive<any>([])
getStoreByType(1).then((res) => {
  Object.assign(featuredTour, res.data.list.slice(0, 6))
})

register();
const percentage = ref<number>(0);
const navigation = reactive({
  nextEl: '.navigation-next',
  prevEl: '.navigation-prev',
});

const tourNavigation = reactive({
  nextEl: '.tour-navigation-next',
  prevEl: '.tour-navigation-prev',
});

const autoplayTime = 5000;
const autoplaytimeleft = (e: any) => {
  const [swiper, time, progress] = e.detail;
  percentage.value = Math.round(time / autoplayTime * 100)
}

const tourBreakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  900: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
}

</script>

<style lang="scss" scoped>
.index {
  padding: 126px 0px 0px;

  &-main {
    max-width: 1200px;
    margin: auto;

    &-outer {
      margin-left: 100px;
    }

    &-title {
      font-size: 24px;
      font-weight: bold;
      color: #7ca1b5;
    }

    &-head-box {
      display: flex;
      align-items: flex-start;
      margin-top: 16px;
    }

    &-head {
      line-height: 1;
      letter-spacing: 10px;
      font-size: 90px;
      font-weight: bold;
    }

    &-head-en {
      width: 350px;
      margin-left: 31px;
      font-size: 36px;
      color: #48b4d8;
      font-family: 'authenia';
      transform: rotate(-6deg);
    }

    &-en {
      margin-top: 10px;
      line-height: 1;
      letter-spacing: 6px;
      font-size: 42px;
      font-weight: bold;
    }

    &-box {
      position: relative;
      margin-top: 32px;
    }

    &-pic {
      width: 1000px;
      height: 520px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      border-radius: 16px;
    }

    &-progress {
      position: absolute;
      bottom: 75px;
      height: 441px;
      right: 115px;
    }

    &-card {
      z-index: 1;
      position: absolute;
      right: 0px;
      top: 225px;
      width: 674px;
      padding: 36px 48px 80px;
      color: white;
      background-image: linear-gradient(to bottom, #8db3c8, #64b4d2);
      border-radius: 20px;

    }

    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-card-title {
      font-size: 30px;
      font-weight: bold;
    }

    &-arrow-box {
      display: flex;
      align-items: center;
    }

    &-arrow {
      width: 48px;
      height: 48px;
      margin-right: 30px;
      cursor: pointer;
    }

    &-arrow-reverse {
      transform: rotate(180deg);
    }

    &-text {
      width: 366px;
      margin-top: 18px;
      font-size: 16px;
    }

    &-tag {
      margin-top: 16px;
    }

    &-about {
      display: flex;
      align-items: center;
      margin-top: 24px;
    }

    &-wave {
      width: 84px;
      height: 6px;
      margin-right: 16px;
    }

  }

  &-map {
    max-width: 1200px;
    margin: 200px auto 0px;
    padding: 0px;

    &-img {
      width: 100%;
      height: 600px;
      margin: auto;
      background-color: burlywood;
    }

  }

  &-store {
    max-width: 1200px;
    margin: 200px auto 0px;
    display: flex;

    &-left {
      width: 338px;
      margin-right: 76px;
    }

    &-title {
      align-items: flex-start;
    }

    &-text {
      margin-top: 42px;
      font-size: 18px;
    }

    &-en {
      margin: 15px 0px 60px;
      font-size: 36px;
      font-family: "authenia";
      color: #48b4d8;
      transform: rotate(-6deg);
    }

    &-all {
      margin-top: 30px;
    }

    &-right {
      width: 900px;
      display: flex;
      flex-wrap: wrap;
    }

    &-card {
      margin: 0px 16px 54px 0px;
    }

  }

  &-tour {
    margin-top: 28px;
    padding: 160px 0px 0px;
    background-image: url('../assets/img/other/bg_wave.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;

    &-outer {
      max-width: 1200px;
      margin: auto;
    }

    &-row-box {
      display: flex;
      justify-content: space-between;
    }

    &-row {
      display: flex;
    }

    &-text {
      width: 250px;
      margin: 0px 24px 0px 24px;
      font-size: 18px;
    }

    &-en {
      font-size: 36px;
      color: #48b4d8;
      font-family: "authenia";
      transform: rotate(-6deg);
    }

    &-arrow {
      width: 48px;
      height: 48px;
      margin-right: 24px;
      cursor: pointer;
    }

    &-arrow-last {
      margin-right: 24px;
      transform: rotate(180deg);
    }

    &-btn {
      display: block;
    }

    &-box {
      display: flex;
      margin-top: 30px;
    }

    &-card {
      margin-right: 16px;
    }

  }

  &-new {
    padding: 200px 0px 184px;
    background-color: #F6F9FC;

    &-outer {
      max-width: 1200px;
      margin: auto;
    }

    &-title {
      display: flex;
      justify-content: center;
      padding-bottom: 60px;
    }

    &-inner {
      display: flex;
      justify-content: space-between;
      width: 1088px;
    }

    &-box {
      display: flex;
      flex-wrap: wrap;
      margin: -5px;

    }

    &-card {
      margin: 5px;
    }

  }
}

@media screen and (max-width: 1200px) {
  .index {
    padding: 78px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-main {
      max-width: 100vw;
      margin: auto;

      &-title {
        font-size: 14px;
      }

      &-outer {
        margin-left: 20px;
      }

      &-head-box {
        display: flex;
        align-items: flex-start;
        margin-top: 12px;
        width: 100%;
      }

      &-head {
        font-size: 48px;
        letter-spacing: 2.4px;
        margin: 13px 9.5px 0 0;
        white-space: nowrap;
      }

      &-head-en {
        font-size: 16px;
        margin: 2.1px 10.5px 11.9px 9.5px;
        letter-spacing: 0.8px;
        font-weight: normal;
        font-stretch: normal;

      }

      &-head-en-break::before {
        content: "\A";
        white-space: pre;
      }

      &-en {
        font-size: 18px;
        letter-spacing: 2.88px;
      }

      &-box {
        width: 100vw;
      }

      &-swiper {
        width: 100%;
      }

      &-progress {
        position: absolute;
        bottom: 13px;
        height: 441px;
        right: 15vw;
      }

      &-pic {
        width: 80vw;
        height: 458px;
        border-radius: 0 8px 0 0;
      }

      &-card {
        right: 10vw;
        width: 330px;
        height: 326px;
        border-radius: 8px;
      }

      &-card-title {
        font-size: 24px;
        letter-spacing: 1.2px;
      }

      &-arrow-box {
        position: absolute;
        bottom: 20px;
      }

      &-text {
        font-size: 15px;
        letter-spacing: 1.5px;
        width: 100%;
        margin-top: 12px;
      }

      &-tag {
        opacity: 0.7;
      }

      &-about {
        margin-top: 16px;
      }

      &-arrow {
        width: 36px;
        height: 36px;
        margin-right: 30px;
      }

      &-arrow-reverse {
        width: 36px;
        height: 36px;
        margin-right: 30px;
      }



    }

    &-map {
      width: 80vw;
      margin: 150px 10vw 0px 10vw;
      padding: 0px;

      &-img {
        width: 100%;
        height: 600px;
        margin: auto;
        background-color: burlywood;
      }
    }

    &-new {
      &-inner {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: auto;
      }
    }

    &-store {
      flex-direction: column;
      width: 100vw;

      &-en {
        display: none;
      }

      &-text {
        margin-top: 24px;
        margin-left: 30px;
        font-size: 17px;
        letter-spacing: 1.7px;
      }

      &-btnType {
        margin-top: 30px;
        margin-left: 30px;
      }

      &-all {
        margin-left: 30px;
      }

      &-right {
        width: 100vw;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }

    }

    &-tour {
      margin-top: 0px;
      padding: 110px 0px 0px;
      width: 100%;

      &-outer {
        width: 100%;
      }

      &-row {
        display: flex;
        flex-direction: column;
      }

      &-row-box {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &-text {
        font-size: 17px;
        letter-spacing: 1.7px;
        margin-top: 15px;
      }

      &-en {
        display: none;
      }

      &-row-mini {
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        margin-left: 30px;
        align-items: center;
      }

      &-arrow {
        width: 32px;
        height: 32px;
      }

      &-btn {
        margin-left: 75px;
      }

      &-swiper-slide {
        width: 100vw;
        padding: 0 30px;
        display: flex;
        justify-content: center;
      }
    }

    &-new {
      padding-top: 116px;

      &-headName {
        align-items: center;
      }

      &-box {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &-title {
        padding-bottom: 30px;
      }
    }

  }
}
</style>
