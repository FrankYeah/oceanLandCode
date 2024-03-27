<template>
  <div class="box">
    <div class="store-list">
      <headName class="store-list-head" :en="'( STORES )'" :text="'所有店家'" />
      <div class="store-list-area-row">
        <div class="store-list-area-box" v-for="(area, index) in areaList" :key="`${index}${area.name}`">
          <div v-if="area.url" :style="`background-image: url('${area.url}')`" class="store-list-area-inner">
            <div class="store-list-area-bg"></div>
            <h2 class="store-list-area-name">{{ area.name }}</h2>
          </div>
          <h2 v-else :style="`background-color: black`" class="store-list-area-inner">{{ area.name }}</h2>
        </div>
      </div>
      <div class="store-list-area-mineRow">
        <client-only>
          <el-select v-model="value" class="store-list-area-mineRow" placeholder="所有地區" size="large">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </client-only>
      </div>

      <div class="store-list-type">
        <btnType v-for="(type, index) in typeList" :key="`${index}${type.name}`" class="store-list-type-btn"
          :text="`${type.name}`" :type="'round'" />
      </div>

      <div class="store-list-filter">
        <h2 class="store-list-filter-sum">共 <span style="color: #7ca1b5;">{{ storeQuantity }}</span> 間店家</h2>
        <h2 class="store-list-filter-time">時間排序</h2>
        <img class="store-list-filter-img" src="@/assets/img/regular/sort-forward_n.png" alt="sort-forward_n">
      </div>

      <div class="store-list-box">
        <store v-for="(store, index) in currentStore" :key="`${index}${store.title}`" :store="store"
          class="store-list-item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAllStore } from "~/api/index";

const allStore = reactive<any>([])
const currentStore = reactive<any>([])
const storeQuantity = ref(0)
let storeLength = 9

getAllStore().then((res) => {
  Object.assign(allStore, res.data.list)
  Object.assign(currentStore, allStore.slice(0, storeLength))
  storeQuantity.value = allStore.length
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
    storeLength += 9
    Object.assign(currentStore, allStore.slice(0, storeLength))
  }
}

const areaList = reactive([
  { name: '所有地區', url: '' },
  { name: '正濱', url: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/47455930/afcb8113-e2bc-4757-959f-9016d06ff98f.jpg' },
  { name: '八斗子', url: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg' },
  { name: '市區', url: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg' }
])

const typeList = reactive([
  { name: '所有分類' },
  { name: '咖啡廳' },
  { name: '麵包店' },
  { name: '甜點店' },
  { name: '咖啡廳' },
  { name: '麵包店' },
  { name: '咖啡廳' },
  { name: '麵包店' },
  { name: '咖啡廳' },
  { name: '麵包店' },
])

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  background-color: #f6f9fc;

}

.store-list {
  padding: 120px 0px 164px;
  max-width: 1200px;
  margin: auto;
  text-align: center;

  &-head {}

  &-area-row {
    display: flex;
    justify-content: center;
    margin-top: 18px;
  }

  &-area-mineRow {
    display: none;
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

  &-filter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 60px 8px 0px;

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
    justify-content: flex-start;
    margin-top: 18px;
  }

  &-item {
    margin: 0px 8px 36px;

    /* 如果最後一行是2個元素 */
    // https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/

    // &:last-child:nth-child(3n-1) {
    //   margin-right: 408px;
    // }
  }

}

@media screen and (max-width: 1200px) {
  .store-list {
    width: 80vw;

    &-head {
      align-items: center;
    }

    &-area {
      &-row {
        display: none;
      }

      &-mineRow {
        display: block;
        width: 100%;
        padding: 10px 5px;
        position: relative;
      }

      &-select {
        width: 100%;
        height: 42px;
        border-radius: 6px;
        border: solid 1px #8db3c8;
      }


    }

    &-type {
      display: flex;
      flex-wrap: wrap;

      &-btn {
        margin: 0px 5px 10px 0px;
      }
    }

    &-box {
      justify-content: center;
    }
  }
}
</style>
