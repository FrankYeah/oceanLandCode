<template>
  <div class="box">
    <div class="title-text">我是主標題<br />示範主標超過兩行文字的行距呈現</div>
    <img class="wave" src="@/assets/img/other/deco_wave.png" alt="logo">
    <div class="content">
      為創造一個永續的創意發生機制，2021年星濱山成立「永晝海濱美術館」，透過藝術、教育以及地方故事整合，沿著海港構築一座地域型的無牆美術館。2022年主題為「山頂的嘰嘰喳喳，斜斜的生活x斜斜的基隆」，共10組展覽內容、多場導覽，一起探尋基隆山海貌。
    </div>
    <img class="img" src="@/assets/img/scene/scene1.jpg" alt="logo">
    <div class="img-text">圖片說明基隆山景圖</div>
  </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>
.box {
  width: 644px;
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-text {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }

  .wave {
    width: 120px;
    height: 8px;
    margin: 24px auto 0px;
  }

  .content {
    margin: 36px auto 0px;
    font-size: 17px;
  }

  .img {
    width: 812px;
    height: 374px;
    border-radius: 16px;
    margin-top: 36px;
  }

  .img-text {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 1.4px;
    text-align: center;
    color: #5f6983;
    margin-top: 12px;
  }
}

@media screen and (max-width: 1200px) {
  .box {
    width: 100%;
    padding: 0 30px;

    .title-text {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .wave {
      width: 90px;
      height: 6px;
    }

    .img {
      width: 330px;
      height: 152px;
      border-radius: 12px;
    }
  }
}

</style>
