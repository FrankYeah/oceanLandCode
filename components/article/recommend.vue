<template>
  <div class="box">
    <headName class="tour-head" :en="'( STORES )'" :text="'店家推薦'" />
    <div class="store-box">
      <store v-for="(store, index) in allStore" :key="`${index}${store.title}`" :coverImage="store.coverImage"
        :tag="store.tag" :title="store.title" :des="store.des" url="20230305" :location="store.location"
        :phone="store.phone" :businessHours="store.businessHours" class="item" />
    </div>
    <headName class="tour-head" :en="'( TOURS )'" :text="'遊程推薦'" />
    <div class="tour-box">
      <tour v-for="(tour, index) in props.list.tourList" :key="`${index}${tour.name}`" :tour="tour" class="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAllStore } from "~/api/index";

const allStore  = reactive<any>([])

getAllStore().then((res) => {
  Object.assign(allStore,res.data.list.slice(1,10))
})
const props = defineProps(['list'])
</script>

<style lang="scss" scoped>
.box {
  max-width: 1200px;
  margin: 100px auto 100px;

  .tour-head {
    margin-top: 118px;
    margin-bottom: 71px;
  }

  .store-box {
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;

    .item {
      margin: 0px 8px;
    }
  }

  .tour-box {
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .item {
      margin-right: 16px;
      margin-bottom: 16px;
    }
  }
}


@media screen and (max-width: 1200px) {
  .box {
    width: 100%;

    .tour-head {
      margin-top: 118px;
      margin-bottom: 71px;
      display: flex;
      justify-content: center;
    }

    .store-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 60px;

      .item {
        margin: 0px 8px;
      }
    }

    .tour-box {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;

      .item {
        margin-right: 16px;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
