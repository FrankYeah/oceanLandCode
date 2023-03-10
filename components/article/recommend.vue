<template>
  <div class="article-store">
    <headName :en="'( STORES )'" :text="'店家推薦'" />
    <div class="article-store-box">
      <store v-for="(store, index) in props.list"
        :key="`${index}${store.name}`"
        :store="store"
        class="article-store-item"
      />
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['list'])

</script>

<style lang="scss" scoped>

.article {

  &-store {
    max-width: 1200px;
    margin: 100px auto 100px;

    &-box {
      display: flex;
      flex-wrap: wrap;
      margin-top: 60px;
    }

    &-item {
      margin: 0px 8px;
    }

  }
    
}

@media( max-width: 1023px ){

.know-more {

}

}

</style>
