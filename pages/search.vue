<template>
  <div class="search">
    <div class="search-text-box">
      <headName :en="'( SEARCH )'" :text="'搜尋'" />
      <div class="search-tag-box">
        <h2 v-for="(tag, index) in tags" :key="`${index}${tag}`" class="search-tag">#{{ tag }}</h2>
      </div>
    </div>
    <div class="search-search-box">
      <div class="el-input-box">
        <el-input class="search-search" v-model="searchText" maxlength="30" placeholder="海邊"></el-input>
        <img class="search-icon" src="@/assets/img/navigation/search_n.png" alt="logo">
      </div>
    </div>
    <h2 class="search-text">"{{ searchText }}"，搜尋出 <span style="color: #7ca1b5;">7</span> 篇店家及 <span
        style="color: #7ca1b5;">3</span> 篇遊程</h2>
    <div class="search-banner">
      <div v-for="(n) in innerWidth > 1200 ? 120 : 40" :key="n" class="search-dot"></div>
    </div>

    <div class="search-store">
      <h2 class="search-store-head">店家</h2>
      <img class="search-store-img" src="@/assets/img/other/deco_wave.png" alt="logo">
      <div class="search-store-box">
        <store v-for="(store, index) in featuredStore" :key="`${index}${store.title}`" :store="store"
          class="search-store-item" />
      </div>
    </div>

    <div class="search-store">
      <h2 class="search-store-head">遊程</h2>
      <img class="search-store-img" src="@/assets/img/other/deco_wave.png" alt="logo">
      <div class="search-store-box">
        <tour v-for="(tour, index) in featuredTour" :key="index" :tour="tour" class="search-store-item" />
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
