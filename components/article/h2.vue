<template>
  <div class="article-h2">
    <div class="article-h2-text">我是主標題</div>
    <div class="article-h2-text-next">示範主標超過兩行文字的行距呈現</div>
    <img class="article-h2-wave" src="@/assets/img/other/deco_wave.png" alt="logo">
  </div>
  </template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>

.article {

  &-h2 {
    width: 644px;
    margin: 60px auto 0px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;

    &-text {
      
    }

    &-text-next {
      
    }

    &-wave {
      margin: 16px auto 0px;
    }

  }
    
}

@media( max-width: 1023px ){

.know-more {

}

}

</style>
