<template>
  <div class="collect">
    <div class="collect-text-box">
      <headName :en="'( COLLECT )'" :text="'收藏'" />
      <h2 class="collect-text">已收藏 <span style="color: #7ca1b5;">7</span> 篇店家及 <span style="color: #7ca1b5;">3</span> 篇遊程</h2>
    </div>
    <div class="collect-banner">
      <div v-for="(n) in innerWidth>1200? 120: 40" :key="n"
       class="collect-dot"
      ></div>
    </div>

    <div class="collect-store">
      <h2 class="collect-store-head">店家</h2>
      <img class="collect-store-img" src="@/assets/img/other/deco_wave.png" alt="logo">
      <div class="collect-store-box">
        <store v-for="(store, index) in featuredStore" :key="index" :store="store"
          class="collect-store-item" />
      </div>
    </div>

    <div class="collect-store">
      <h2 class="collect-store-head">遊程</h2>
      <img class="collect-store-img" src="@/assets/img/other/deco_wave.png" alt="logo">
      <div class="collect-store-box">
        <tour v-for="(tour, index) in featuredTour" :key="index" :tour="tour" class="collect-store-item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getStoreByType } from "~/api/index";

const featuredStore = reactive<any>([])
getStoreByType(1).then((res) => {
  Object.assign(featuredStore, res.data.list.slice(0, 6))
})

const featuredTour = reactive<any>([])
getStoreByType(1).then((res) => {
  Object.assign(featuredTour, res.data.list.slice(0, 6))
})

const innerWidth = ref(0)
onMounted(() => {
  window.addEventListener('resize', () => {
    innerWidth.value = window.innerWidth
  });
})

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

@media screen and (max-width: 1200px){


  .collect-store {
    width: 100%;

    .collect-store-box {

      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .collect-store-item:last-child:nth-child(3n-1) {
      margin-right: 0px;
    }
  }
}

</style>
