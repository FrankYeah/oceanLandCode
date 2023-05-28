<template>
  <div class="article-pre">
    <div class="article-pre-left">
      <div class="article-pre-en">( STORE )</div>
      <div class="article-pre-title">永晝海濱美術館</div>
      <div class="article-pre-row">
        <img class="article-pre-wave" src="@/assets/img/other/deco_wave.png" alt="logo">
        <div class="article-pre-column">
          <div class="article-pre-text">整座漁港就是美術館，讓海濱成為一個沒有邊界的美術館。用藝術去寫下土地與大海交會的故事。</div>
          <div class="article-pre-tag-box">
            <div class="article-pre-tag">咖啡</div>
            <div class="article-pre-tag">咖啡</div>
            <div class="article-pre-tag">咖啡</div>
            <div class="article-pre-tag">咖啡</div>
            <div class="article-pre-tag">咖啡</div>
          </div>
          <div class="article-pre-row2">
            <img class="article-pre-icon" src="@/assets/img/regular/like_n.png" alt="logo">
            <div class="article-pre-des">尚未收藏</div>
            <img class="article-pre-icon" src="@/assets/img/regular/keep.png" alt="logo">
            <div class="article-pre-des">繼續閱讀</div>
          </div>
        </div>
      </div>
      <div class="article-pre-img"></div>
    </div>
    <div class="article-pre-right">
      <div class="article-pre-link">
        <nuxt-link to="/">首頁</nuxt-link>
        <div class="article-pre-slash">/</div>
        <nuxt-link to="/store">店家</nuxt-link>
        <div class="article-pre-slash">/</div>
        <div class="article-pre-current">永晝海濱美術館</div>
      </div>
      <div class="article-pre-photo"></div>
    </div>
    <div class="article-pre-bg"></div>
  </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>

.article {

  &-pre {
    position: relative;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    padding: 170px 0px 0px;
    margin: 0px auto;

    &-left {
      width: calc(50% - 8px);
    }

    &-en {
      font-size: 24px;
      font-weight: bold;
      color: #7ca1b5;
    }

    &-title {
      font-size: 60px;
      font-weight: bold;
      margin-top: 12px;
    }

    &-row {
      position: relative;
      display: flex;
    }

    &-wave {
      position: absolute;
      top: 100px;
      left: -52px;
      width: 120px;
      height: 4px;
      transform: rotate(90deg);
      margin-right: 24px;
    }

    &-column {
      max-width: 363px;
      margin-left: 40px;
    }

    &-text {
      margin-top: 41px;
      font-size: 18px;
    }

    &-tag-box {
      display: flex;
      flex-wrap: wrap;
      margin: 26px 0px 22px;
    }

    &-tag {
      margin: 0px 8px 8px 0px;
      padding: 6px 12px;
      border-radius: 8px;
      background-color: #e7f0f4;
      font-size: 14px;
    }

    &-row2 {
      display: flex;
      align-items: center;
    }

    &-icon {
      width: 36px;
      height: 36px;
      margin-right: 12px;
      cursor: pointer;
    }

    &-des {
      margin-right: 42px;
    }

    &-img {
      height: 373px;
      margin-top: 30px;
      border-radius: 16px;
      background-image: url('../../assets/img/scene/scene1.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }

    &-right {
      width: calc(50% - 8px);
    }

    &-link {
      display: flex;
      align-items: center;
      margin-top: 90px;
    }

    &-slash {
      margin: 0px 16px; 
    }

    &-current {
      color: #bcbcbc;
      margin: 0px;
    }

    &-photo {
      height: 746px;
      margin-top: 24px;
      border-radius: 16px;
      background-image: url('../../assets/img/scene/scene1.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }

    &-bg {
      position: absolute;
      bottom: -200px;
      width: 100%;
      height: 400px;
      background-image: url('../../assets/img/other/bg_deco.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      z-index: -1;
    }

  }  
    
}

@media screen and (max-width: 1200px){
  .article {
    &-pre {
      max-width: 100vw;
      flex-direction: column;
      padding: 80px 20px;
      &-left {
        width: 100%;
      }
      &-en {
        font-size: 14px;
        line-height: 1.71;
      }
      &-title {
        line-height: 1.5;
        font-size: 28px;
      }
      &-wave {
        top: 60px;
        left: -35px;
        width: 85px;
        height: 5px;
      }
      &-text {
        letter-spacing: 1.6px;
        font-size: 16px;
        margin-top: 19px;
      }
      &-column {
        margin-left: 30px;
      }
      &-des {
        font-size: 16px;
        line-height: 1.88;
        margin-right: 20px;
      }
      &-bg {
        bottom: 980px;
      }
      &-right {
        display: none;
      }
    }
  }
}
</style>
