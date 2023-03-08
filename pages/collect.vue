<template>
  <div class="collect">
    <div class="collect-text-box">
      <headName :en="'( SEARCH )'" :text="'搜尋'" />
      <div class="collect-text">已收藏<span style="color: #7ca1b5;">7</span> 篇店家及 <span style="color: #7ca1b5;">3</span> 篇遊程</div>
    </div>
    <div class="collect-banner">
      <div v-for="(n) in 120" :key="n"
       class="collect-dot"
      ></div>
    </div>

    <div class="collect-store">
      <div class="collect-store-head">店家</div>
      <img class="collect-store-img" src="@/assets/img/other/deco_wave.png" alt="logo">
      <div class="collect-store-box">
        <store v-for="(store, index) in storeList"
          :key="`${index}${store.name}`"
          :store="store"
          class="collect-store-item"
        />
      </div>
    </div>

    <div class="collect-store">
      <div class="collect-store-head">遊程</div>
      <img class="collect-store-img" src="@/assets/img/other/deco_wave.png" alt="logo">
      <div class="collect-store-box">
        <tour v-for="(tour, index) in tourList"
          :key="`${index}${tour.name}`"
          :tour="tour"
          class="collect-store-item"
        />
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
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
    writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  },
])

</script>

<style lang="scss" scoped>

.collect {
  padding: 0px 0px 164px;
  background-color: #f6f9fc;

  &-text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 0px 100px;
  }

  &-text {
    margin-top: 60px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  &-banner {
    margin: 100px 0px 42px;
    display: flex;
    justify-content: space-evenly;
  }

  &-dot {
    width: 1px;
    height: 13px;
    background-color: #70b3ee;
  }

  &-store {
    max-width: 1200px;
    margin: auto;

    &-head {
      margin-top: 58px;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }

    &-img {
      margin: 16px auto 0px;
    }

    &-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 36px;
    }

    &-item {
      margin: 0px 8px 36px;

      &:last-child:nth-child(3n-1) {
        margin-right: 408px;
      }
    }
    
  }
  
}

@media( max-width: 1023px ){

.collect {



}
}

</style>
