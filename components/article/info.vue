<template>
  <div class="article-info">
    <div class="article-info-head-box">
      <div class="article-info-line-short"></div>
      <div class="article-info-head">INFO</div>
      <div class="article-info-line-short"></div>
    </div>
    <div class="article-info-box">
      <div class="article-info-row">
        <div class="article-info-title">全稱</div>
        <div class="article-info-text">永晝海濱美術館｜基隆正濱漁港</div>
      </div>
      <div class="article-info-row">
        <div class="article-info-title">全稱</div>
        <div class="article-info-text">永晝海濱美術館｜基隆正濱漁港</div>
      </div>
      <div class="article-info-row">
        <div class="article-info-title">全稱</div>
        <div class="article-info-text">永晝海濱美術館｜基隆正濱漁港</div>
      </div>
    </div>
    <div class="article-info-line"></div>
  </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>

.article {

  &-info {
    max-width: 1200px;
    margin: 236px auto 0px;

    &-head-box {
      display: flex;
      align-items: center;
      margin-bottom: 14px;
    }

    &-line-short {
      width: 45%;
      height: 1px;
      background-color: #7ca1b5;
    }

    &-head {
      margin: 0px 18px;
      font-size: 36px;
      font-weight: bold;
      color: #7ca1b5;
    }

    &-box {
      display: flex;
      flex-wrap: wrap;
    }

    &-row {
      width: 50%;
      display: flex;
      margin-bottom: 12px;
    }

    &-title {
      color: #7ca1b5;
      margin-right: 16px;
    }

    &-text {
      
    }

    &-line {
      height: 1px;
      margin: 30px 0px 0px;
      background-color: #7ca1b5;
    }

  }
    
}

@media( max-width: 1023px ){

.article {

}

}

</style>
