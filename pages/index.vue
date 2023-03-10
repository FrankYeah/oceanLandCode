<template>
  <div class="index">

    <div class="index-main">
      <div class="index-main-outer">
        <div class="index-main-title">( store&travel )</div>
        <div class="index-main-head-box">
          <div class="index-main-head">與海有關</div>
          <div class="index-main-head-en">
            Sea, Mountain, Food
            and Treasure
          </div>
        </div>
        <div class="index-main-en">all about seas in keelung</div>
      </div>
      <div class="index-main-box">
        <div class="index-main-pic"></div>

        <div class="index-main-card">
          <div class="index-main-row">
            <div class="index-main-card-title">與海有關</div>
            <div class="index-main-arrow-box">
              <img class="index-main-arrow" src="@/assets/img/regular/arrow-slides_b_n.png" alt="logo">
              <img class="index-main-arrow index-main-arrow-reverse" src="@/assets/img/regular/arrow-slides_b_n.png" alt="logo">
            </div>
          </div>
          <div class="index-main-text">介紹我最愛的城市，挖掘與紀錄每一個基隆在地故事，我被感動過，才會熱愛這座城市。</div>
          <div class="index-main-tag">＃基隆 ＃體驗 ＃人文</div>
          <div class="index-main-about">
            <img class="index-main-wave" src="@/assets/img/other/deco_wave_w.png" alt="logo">
            <div class="index-main-about-text">閱讀關於</div>
          </div>
        </div>

      </div>
    </div>

    <div class="index-map">
      <div class="index-map-img"></div>
    </div>

    <div class="index-store">
      <div class="index-store-left">
        <headName class="index-store-title" :en="'( Featured Store )'" :text="'精選店家'" />
        <div class="index-store-text">山群環抱俯瞰基隆，蘊藏著一間間店家，值得我們深入挖掘。</div>
        <div class="index-store-en">Keelung Flavor</div>
        <btnType :text="'三分鐘基隆旅遊懶人包'" :type="'transparent'" />
        <btnType :text="'全部店家'" :type="'blue'" class="index-store-all" />
      </div>
      <div class="index-store-right">
        <store v-for="(store, index) in storeList"
        :key="`${index}${store.name}`"
        :store="store"
        class="index-store-card"
      />
      </div>
    </div>

    <div class="index-tour">
      <div class="index-tour-outer">
        <div class="index-tour-row-box">
          <div class="index-tour-row">
            <headName :en="'( Featured Tour )'" :text="'精選遊程'" />
            <div class="index-tour-text">基隆有綿延的海岸，天然海泳池可與魚群共遊，有山群環抱俯瞰城市風景。</div>
            <div class="index-tour-en">Keelung Landscape</div>
          </div>
          <div class="index-tour-row">
            <img class="index-tour-arrow" src="@/assets/img/regular/arrow-slides_n.png" alt="logo">
            <img class="index-tour-arrow index-tour-arrow-last" src="@/assets/img/regular/arrow-slides_n.png" alt="logo">
            <btnType class="index-tour-btn" :text="'全部遊程'" :type="'blue'" />
          </div>
        </div>
        <div class="index-tour-box">
          <tour v-for="(tour, index) in tourList"
            :key="`${index}${tour.name}`"
            :tour="tour"
            class="index-tour-card"
          />
        </div>
      </div>
    </div>

    <div class="index-new">
      <div class="index-new-outer">
        <div class="index-new-title">
          <headName :en="'( Latest News )'" :text="'最新活動'" />
        </div>
        <div class="index-new-inner">
          <div class="index-new-box">
            <news class="index-new-card" />
            <news class="index-new-card" />
          </div>
          <div class="index-new-box">
            <news class="index-new-card" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const storeList = reactive([
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
])

const tourList = reactive([
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
    writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
    writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  },
  // { 
  //   name: '見書店',
  //   url: '20230305',
  //   des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
  //   bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
  //   writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  // },
  // { 
  //   name: '見書店',
  //   url: '20230305',
  //   des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
  //   bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
  //   writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  // },
  // { 
  //   name: '見書店',
  //   url: '20230305',
  //   des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
  //   bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
  //   writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  // },
  // { 
  //   name: '見書店',
  //   url: '20230305',
  //   des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
  //   bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
  //   writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  // },
  // { 
  //   name: '見書店',
  //   url: '20230305',
  //   des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
  //   bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
  //   writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  // },
])

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
      background-color: #7ca1b5;
    }

    &-card {
      position: absolute;
      right: 0px;
      bottom: 40px;
      width: 674px;
      padding: 36px 48px 80px;
      color: white;
      background-image: linear-gradient(to bottom, #8db3c8, #64b4d2);
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
      margin-left: 30px;
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
    }

    &-arrow {
      width: 48px;
      height: 48px;
      margin-right: 24px;
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
      
    }

    &-card {
      margin-bottom: 16px;
    }
    
  }
}

@media( max-width: 1023px ){

.index {



}
}

</style>
