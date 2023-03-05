<template>
  <div class="store-list">
    <headName class="store-list-head" :en="'( STORES )'" :text="'所有店家'" />
    <div class="store-list-area-row">
      <div class="store-list-area-box"
        v-for="(area, index) in areaList"
        :key="`${index}${area.name}`"
      >
        <div v-if="area.url" :style="`background-image: url('${area.url}')`"
          class="store-list-area-inner"
        >
          <div class="store-list-area-bg"></div>
          <div class="store-list-area-name">{{ area.name }}</div>
        </div>
        <div v-else :style="`background-color: black`"
          class="store-list-area-inner"
        >{{ area.name }}</div>
      </div>
    </div>

    <div class="store-list-type">
      <btnType v-for="(type, index) in typeList"
        :key="`${index}${type.name}`"
        class="store-list-type-btn"
        :text="`${type.name}`"
        :type="'round'"
      />
    </div>
    <div class="store-list-box">
      <store v-for="(store, index) in storeList"
        :key="`${index}${store.name}`"
        :store="store"
        class="store-list-item"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>

const areaList = reactive([
  { name: '所有地區', url: '' },
  { name: '正濱', url: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/47455930/afcb8113-e2bc-4757-959f-9016d06ff98f.jpg' },
  { name: '八斗子', url: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg' },
  { name: '市區', url: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg' }
])

const typeList = reactive([
  { name: '所有分類' },
  { name: '咖啡廳'},
  { name: '麵包店' },
  { name: '甜點店' }
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

</script>

<style lang="scss" scoped>

.store-list {
  padding: 120px 0px 164px;
  max-width: 1200px;
  margin: auto;
  text-align: center;

  &-head {
    
  }

  &-area-row {
    display: flex;
    justify-content: center;
    margin-top: 18px;
  }

  &-area-box {
    margin: 0px 8px 8px;
    padding: 6px;
    border: solid 1px #bcbcbc;
    border-radius: 12px;
  }

  &-area-inner {
    position: relative;
    width: 148px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    color: white;
    border-radius: 8px;
  }

  &-area-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(black, 0.3);
    border-radius: 8px;
  }

  &-area-name {
    position: inherit;
  }

  &-type {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  &-type-btn {
    margin: 0px 8px;
  }

  &-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &-item {
    margin: 0px 8px 36px;
  }

}

@media( max-width: 1023px ){

.store-list {



}
}

</style>
