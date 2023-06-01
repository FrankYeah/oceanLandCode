<template>
  <div class="search">
    <div class="search-text-box">
      <headName :en="'( SEARCH )'" :text="'搜尋'" />
      <div class="search-tag-box">
        <div v-for="(tag, index) in tags" :key="`${index}${tag}`" class="search-tag">#{{ tag }}</div>
      </div>
    </div>
    <div class="search-search-box">
      <div class="el-input-box">
        <el-input class="search-search" v-model="searchText" maxlength="30" placeholder="海邊"></el-input>
        <img class="search-icon" src="@/assets/img/navigation/search_n.png" alt="logo">
      </div>
    </div>
    <div class="search-text">"{{ searchText }}"，搜尋出 <span style="color: #7ca1b5;">7</span> 篇店家及 <span
        style="color: #7ca1b5;">3</span> 篇遊程</div>
    <div class="search-banner">
      <div v-for="(n) in innerWidth>1200? 120: 40" :key="n" class="search-dot"></div>
    </div>

    <div class="search-store">
      <div class="search-store-head">店家</div>
      <img class="search-store-img" src="@/assets/img/other/deco_wave.png" alt="logo">
      <div class="search-store-box">
        <store v-for="(store, index) in storeList" :key="`${index}${store.name}`" :store="store"
          class="search-store-item" />
      </div>
    </div>

    <div class="search-store">
      <div class="search-store-head">遊程</div>
      <img class="search-store-img" src="@/assets/img/other/deco_wave.png" alt="logo">
      <div class="search-store-box">
        <tour v-for="(tour, index) in tourList" :key="`${index}${tour.name}`" :tour="tour" class="search-store-item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const innerWidth = ref(0)
onMounted(() => {
  
  window.addEventListener('resize', () => {
    innerWidth.value = window.innerWidth
  });
})
const searchText = ref('')

const tags = reactive([
  '三分鐘基隆旅遊懶人包',
  '海產',
  '特色小吃',
  '活動',
  '咖啡廳',
  '甜點',
  '景點',
  '海邊景色',
  '書店',
])

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
.search {
  padding: 0px 0px 164px;
  background-color: #f6f9fc;

  &-text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 0px 100px;
  }

  &-tag-box {
    width: 536px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  &-tag {
    margin: 0px 8px 6px;
    font-size: 17px;
    color: #48b4d8;
    cursor: pointer;
  }

  &-search-box {

    display: flex;
    justify-content: center;
    margin-top: 20px;

    .el-input-box {
      position: relative;
    }
  }

  &-search {
    width: 536px;
  }

  &-icon {
    position: absolute;
    top: 6px;
    right: 50%;
    width: 36px;
    height: 36px;
    transform: translate(250px, 0%);
    cursor: pointer;
  }

  &-text {
    margin-top: 20px;
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

@media screen and (max-width: 1200px) {
  .search-text-box {
    width: 100%;
    padding-bottom: 16px;

    .search-tag-box {
      width: 100%;
    }
  }

 
 

  .search-search-box {
    width: 100%;

    .search-search {
      width: 330px;
    }

    .search-icon {
      right: 79%;
    }

  }

  .search-store {
    width: 100%;

    .search-store-box {

      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .search-store-item:last-child:nth-child(3n-1) {
      margin-right: 0px;
    }
  }


}
</style>
