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
        <div class="article-info-title">地址</div>
        <div class="article-info-text">基隆市中正區中正路 539 號</div>
      </div>
      <div class="article-info-row">
        <div class="article-info-title">營業</div>
        <div class="article-info-text">平日：13:00–18:00<br>（週二公休）</div>
      </div>
      <div class="article-info-row">
        <div class="article-info-title">聯絡</div>
        <div class="article-info-text">02 2428 1159</div>
      </div>
      <div class="article-info-row">
        <div class="article-info-title">撰寫</div>
        <div class="article-info-text">西打藍</div>
      </div>
      <div class="article-info-row">
        <div class="article-info-title">撰寫</div>
        <div class="article-info-text">西打藍</div>
      </div>
      <div class="article-info-row">
        <div class="article-info-title">發布</div>
        <div class="article-info-text">2023-01-16</div>
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

@media screen and (max-width: 1200px){
  .article {
    &-info {
      max-width: 100vw;
      margin: 50px 0 0 0px;
      padding: 0px 20px;
      &-line-short {
        width: 34%;
      }
      &-head-box {
        justify-content: center;
      }
      &-head {
        font-size: 20px;
        letter-spacing: 2px;
      }
      &-box {
        flex-direction: column;
        padding-left: 16px;
      }
      &-title {
        margin-right: 16px;
        white-space: nowrap;
      }
      &-text {
        white-space: nowrap;
      }
    }
  }
}

</style>
