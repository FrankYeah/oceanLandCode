<template>
  <div class="box">
    <div class="title">我是次標題</div>
    <img class="wave" src="@/assets/img/other/deco_wave.png" alt="logo">
    <div class="content" style="margin-bottom: 30px;">
      為創造一個永續的創意發生機制，2021年星濱山成立「永晝海濱美術館」，透過藝術、教育以及地方故事整合，沿著海港構築一座地域型的無牆美術館。2022年主題為「　　　　　　　　　　　　　　　　　　　」，共10組展覽內容、多場導覽，一起探尋基隆山海貌。
    </div>
    <div class="content">
      進駐正濱漁港，將插畫、錄像、植物、攝影藝術創作，結合漁網師傅、海女、修船廠師傅等當地職人專業，帶領觀者思考那些漁港人們的生活故事，同時期盼這座沒有邊界的美術館，使大家再認識基隆正濱漁港。讓建於日治時期、曾經引領風騷的正濱漁港，在藝術創作者的視角之下，有了嶄新面貌。
    </div>
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
  margin-top: 60px;

  .title {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1.2px;
  }

  .wave {
    margin-top: 16px;
    margin-bottom: 32px;
    width: 90px;
    height: 6px;
  }

  .content {
    width: 644px;
    font-size: 17px;
    letter-spacing: 1.7px;
  }
}

@media screen and (max-width: 1200px) {
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  .title {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.9px;
  }

  .wave {
    margin-top: 16px;
    margin-bottom: 32px;
    width: 90px;
    height: 6px;

  }

  .content {
    width: 330px;
    font-size: 17px;
    letter-spacing: 1.7px;
  }
}

}
</style>
