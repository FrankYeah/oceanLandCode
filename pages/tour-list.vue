<template>
  <div class="tour-list">
    <div class="tour-list-outer">
      <headName class="tour-list-head" :en="'( TOURS )'" :text="'所有遊程'" />

      <div class="tour-list-filter">
        <div class="tour-list-filter-sum">共 <span style="color: #7ca1b5;">16</span> 個遊程</div>
        <div class="tour-list-filter-time">時間排序</div>
        <img class="tour-list-filter-img" src="@/assets/img/regular/sort-forward_n.png" alt="sort-forward_n">
      </div>

      <div class="tour-list-box">
        <tour v-for="(tour, index) in tourList"
          :key="`${index}${tour.name}`"
          :tour="tour"
          class="tour-list-item"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

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

.tour-list {
  padding: 120px 0px 164px;
  text-align: center;
  background-color: #f6f9fc;

  &-outer {
    max-width: 1200px;
    margin: auto;
  }
  
  &-filter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 48px 8px 0px;

    &-sum {

    }

    &-time {
      margin-left: 24px;
    }

    &-img {
      margin-left: 20px;
      cursor: pointer;
    }
  }

  &-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 18px;
  }

  &-item {
    margin: 0px 8px 36px;

    /* 如果最後一行是2個元素 */
    // https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/

    &:last-child:nth-child(3n-1) {
      margin-right: 408px;
    }
  }

}

@media( max-width: 1023px ){

.tour-list {



}
}

</style>
