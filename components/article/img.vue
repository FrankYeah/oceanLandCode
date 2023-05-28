<template>
  <div class="box">
    <div class="img-box">
      <img class="img img-top" src="@/assets/img/scene/scene1.jpg" alt="logo">
      <img class="img" src="@/assets/img/scene/scene1.jpg" alt="logo">
    </div>
    <div class="img-text">圖片說明基隆山景圖</div>
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

  .img-box {
    display: flex;
    justify-content: center;

    .img {
      width: 398px;
      height: 373px;
      border-radius: 16px;
    }

    .img-top {
      margin-right: 16px;
    }
  }

  .img-text {
    margin-top: 12px;
    font-size: 14px;
    letter-spacing: 1.4px;
    color: #5f6983;
  }
}

@media screen and (max-width: 1200px) {

  .box {
    margin-top: 30px;

    .img-box {
      display: flex;
      flex-direction: column;
      align-items: center;

      .img {
        width: 330px;
        height: 308px;
        border-radius: 12px;
      }

      .img-top {
        margin-right: 0px;
        margin-bottom: 12px;
      }
    }
  }

}
</style>
