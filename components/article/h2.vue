<template>
  <div class="box">
    <div class="title">我是次標題<br />示範主標超過兩行文字的行距呈現</div>
    <img class="wave" src="@/assets/img/other/deco_wave.png" alt="logo">
    <div class="content">
      為創造一個永續的創意發生機制，星濱山成立「永晝海濱美術館」，透過藝術、教育以及地方故事整合，沿著海港構築一座地域型的無牆美術館。2022年主題為「山頂的嘰嘰喳喳，斜斜的生活x斜斜的基隆」，共10組展覽內容、多場導覽，一起探尋基隆山海貌。
    </div>
    <articleCard class="card" />
    <img class="img" src="@/assets/img/scene/scene1.jpg" alt="logo">
    <div class="img-text">影片說明</div>
  </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 644px;
    margin: 60px auto 0px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  .wave {
    margin: 16px auto 0px;
  }

  .content {
    width: 644px;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 1.7px;
    text-align: left;
    margin-top: 36px;
  }

  .card {
    margin-top: 36px;
  }

  .img {
    width: 812px;
    height: 456px;
    border-radius: 16px;
    margin-top: 60px;
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

    .title {
      width: auto;
      font-size: 18px;

    }

    .wave {
      width: 90px;
      height: 6px;
    }

    .content {
      width: auto;
      font-size: 16px;
      margin-top: 30px;
    }

    .card {
      margin-top: 24px;
    }

    .img {
      width: 330px;
      height: 185px;
      margin-top: 30px;
    }

  }
}</style>
