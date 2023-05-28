<template>
  <div class="note-story">
    <div class="note-story-img"></div>
    <div class="note-story-column">
      <div>
        <div class="note-story-head">小標題</div>
        <img
          class="note-story-icon"
          src="@/assets/img/other/deco_wave.png"
          alt="logo"
        />
        <div class="note-story-text">
          用來描述影片或補充影片內容的區塊。建議文字不要太多，兩三行就好。
        </div>
      </div>
      <div class="note-story-des">影片說明</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["en"]);
</script>

<style lang="scss" scoped>
.note {
  &-story {
    margin-top: 90px;
    display: flex;
    border-radius: 16px;
    border: solid 1px #8db3c8;

    &-img {
      width: 674px;
      min-height: 378px;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      background-image: url("../../assets/img/scene/scene1.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }

    &-column {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 42px 42px 38px;
    }

    &-head {
      font-size: 20px;
      font-weight: bold;
    }

    &-icon {
      width: 90px;
      height: 6px;
      margin-top: 12px;
    }

    &-text {
      margin-top: 24px;
      font-size: 17px;
    }

    &-des {
      margin-top: 50px;
      font-size: 14px;
      color: #5f6983;
    }
  }
}

@media screen and (max-width: 1200px) {
  .note {
    &-story {
      width: 90%;
      flex-direction: column;
      margin: auto;
      margin-top: 30px;
      overflow: hidden;
      &-img {
        width: 100%;
        height: 186px;
        border-radius: 0px;
      }
      &-column {
        padding: 16px 20px;
      }
      &-head {
        font-family: NotoSansCJKtc;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.88;
        letter-spacing: 1.6px;
        text-align: center;
      }
      &-icon {
        width: 90px;
        height: 6px;
        margin: auto;
        margin-top: 12px;
      }
      &-text {
        font-family: NotoSansCJKtc;
        font-size: 16px;
        line-height: 1.88;
        letter-spacing: 1.6px;
      }
      &-des {
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }
    }
  }
}
</style>
