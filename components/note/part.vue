<template>
  <div class="note-part">
    <div class="note-part-head">
      <div class="note-part-title">第一站：開胃點心</div>
      <div class="note-part-pre">時間 2 小時</div>
      <img
        class="note-part-icon"
        src="@/assets/img/other/deco_wave.png"
        alt="logo"
      />
    </div>
    <div class="note-part-text">
      剛到基隆市區，可以在基隆火車站前，看看新蓋的轉運站，不遠處是海洋，偶爾會看見黑鳶在海上盤旋準備抓魚。你走下階梯，走進孝三路，一整排都是住在市區的基隆人的美食地。這條街區，我推薦三個開胃點心：廖媽媽珍奶、豬肝腸、遠東水煎包。
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["en"]);
</script>

<style lang="scss" scoped>
.note {
  &-part {
    margin-top: 48px;
    display: flex;
    justify-content: space-between;

    &-head {
      width: 400px;
    }

    &-title {
      font-size: 30px;
      font-weight: bold;
    }

    &-pre {
      margin-top: 12px;
      font-size: 20px;
      font-weight: bold;
      color: #7ca1b5;
    }

    &-icon {
      width: 120px;
      height: 8px;
      margin-top: 24px;
    }

    &-text {
      width: 644px;
      font-size: 17px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .note {
    &-part {
      flex-direction: column;
      justify-content: center;
      &-head {
        width: 100%;
        padding: 0 30px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
      }
      &-icon {
        margin-bottom: 30px;
      }
      &-title {
        font-family: NotoSansCJKtc;
        font-size: 20px;
        font-weight: bold;
        line-height: 1.5;
        letter-spacing: 1px;
      }
      &-text {
        width: 100%;
        padding: 0 30px;
        font-size: 16px;
        line-height: 1.88;
        letter-spacing: 1.6px;
      }
    }
  }
}
</style>
