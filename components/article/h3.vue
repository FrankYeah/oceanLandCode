<template>
  <div class="article-h3">
    <div class="article-h3-text">我是主標題</div>
    <div class="article-h3-text-next">示範主標超過兩行文字的行距呈現</div>
    <img class="article-h3-wave" src="@/assets/img/other/deco_wave.png" alt="logo">
  </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>

.article {

  &-h3 {
    width: 644px;
    margin: 60px auto 0px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;

    &-text {
      
    }

    &-text-next {
      
    }

    &-wave {
      margin: 12px auto 0px;
    }

  }
    
}

@media( max-width: 1023px ){

.know-more {

}

}

</style>
