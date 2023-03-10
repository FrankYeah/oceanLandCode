<template>
  <div class="article-card">
    <div class="article-card-text">透過藝術、教育以及地方故事整合，沿著海港構築一座地域型的無牆美術館</div>
    <div class="article-card-name">—— Jhane</div>
  </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>

.article {

  &-card {
    width: 692px;
    padding: 20px 24px;
    margin: 36px auto 0px;
    border: solid 1px #7ca1b5;
    border-left: solid 4px #4d7083;

    &-text {
      font-size: 20px;
      color: #4d7083;
    }

    &-name {
      margin-top: 6px;
      color: #7ca1b5;
    }

  }
    
}

@media( max-width: 1023px ){

.know-more {

}

}

</style>
