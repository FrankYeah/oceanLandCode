<template>
  <div class="article-text">
    為創造一個永續的創意發生機制，2021年星濱山成立「永晝海濱美術館」，透過藝術、教育以及地方故事整合，沿著海港構築一座地域型的無牆美術館。2022年主題為「山頂的嘰嘰喳喳，斜斜的生活x斜斜的基隆」，共10組展覽內容、多場導覽，一起探尋基隆山海貌。
  </div>
  <img class="img" src="@/assets/img/scene/scene1.jpg" alt="logo">
  <div class=""></div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>
.article {

  &-text {
    width: 644px;
    margin: 36px auto 0px;
    font-size: 17px;

  }

}

.img {
  width: 812px;
  height: 374px;
  border-radius: 16px;
  margin-top: 36px;
}

@media screen and (max-width: 1200px) {

  .article {
    &-text {
      width: 100%;
      padding: 0px 20px;
      margin-top: 30px;
    }
  }

}
</style>
