<template>
  <div class="tour-list">
    <div class="tour-list-outer">
      <headName class="tour-list-head" :en="'( TOURS )'" :text="'所有遊程'" />

      <div class="tour-list-filter">
        <h2 class="tour-list-filter-sum">共 <span style="color: #7ca1b5;">{{ tourQuantity }}</span> 個遊程</h2>
        <h2 class="tour-list-filter-time">時間排序</h2>
        <img class="tour-list-filter-img" src="@/assets/img/regular/sort-forward_n.png" alt="sort-forward_n">
      </div>

      <div class="tour-list-box">
        <tour v-for="(tour, index) in currentTour" :key="index" :tour="tour" class="tour-list-item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getStoreByType } from "~/api/index";

const allTour = reactive<any>([])
const currentTour = reactive<any>([])
const tourQuantity = ref(0)
let storeLength = 8
getStoreByType(1).then((res) => {
  Object.assign(allTour, res.data.list)
  Object.assign(currentTour, allTour.slice(0, storeLength))
  tourQuantity.value = allTour.length
})

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll);
  }
});

const handleScroll = (e: any) => {
  let footerElement: any = document.getElementById("footerID");
  let footerHeight = footerElement.offsetHeight;
  let isBottom =
    Math.ceil(window.scrollY) + window.innerHeight >= (document.documentElement.offsetHeight) - footerHeight;
  if (isBottom) {
    storeLength += 8
    Object.assign(currentTour, allTour.slice(0, storeLength))
  }
}

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

    &-sum {}

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

@media screen and (max-width: 1200px) {

  .tour-list {
    padding: 120px 0px 164px;
    text-align: center;
    background-color: #f6f9fc;

    &-outer {
      width: 100%;
      margin: auto;
    }

    &-filter {
      justify-content: center;

      &-sum {
        margin-right: 60px;
        font-size: 16px;
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
      justify-content: center;
      margin-top: 18px;
    }

    &-item {
      margin: 0px 8px 36px;

      /* 如果最後一行是2個元素 */
      // https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/

      &:last-child:nth-child(3n-1) {
        margin-right: 0px;
      }
    }

  }
}
</style>
