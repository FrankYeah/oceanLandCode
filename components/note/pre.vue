<template>
  <div class="note-pre">
      <div class="note-pre-outer">
        <div class="note-pre-left">
          <div class="note-pre-en">( TOUR )</div>
          <div class="note-pre-title">兩條基隆一日遊路線，看見基隆最美的風景</div>
          <div class="note-pre-link">
            <nuxt-link to="/">首頁</nuxt-link>
            <div class="note-pre-slash">/</div>
            <nuxt-link to="/store-list">店家</nuxt-link>
            <div class="note-pre-slash">/</div>
            <div class="note-pre-current">永晝海濱美術館</div>
          </div>
          <div class="note-pre-column">
            <img class="note-pre-wave" src="@/assets/img/other/deco_wave.png" alt="logo">
            <div class="note-pre-row">
              <div class="note-pre-head">帶路</div>
              <div class="note-pre-text">
                <div class="note-pre-bold">西打藍</div>
                <img class="note-pre-text-icon" src="@/assets/img/regular/view_n.png" alt="logo">
              </div>
            </div>
            <div class="note-pre-row">
              <div class="note-pre-head"></div>
              <div class="note-pre-text">我是與海有關創辦人。這條行程是自己的日常，我會帶朋友們這樣玩一整天玩一整天。並且會驕傲說：「我可不用帶你們逛廟口，也能玩市區一整天唷！」</div>
            </div>
            <div class="note-pre-row">
              <div class="note-pre-head">時間</div>
              <div class="note-pre-text">4 小時</div>
            </div>
            <div class="note-pre-row">
              <div class="note-pre-head">店家</div>
              <div class="note-pre-text">
                <div class="note-pre-bold">西打藍</div>
                <img class="note-pre-text-icon" src="@/assets/img/regular/view_n.png" alt="logo">
                <div class="note-pre-bold">、</div>
                <div class="note-pre-bold">西打藍</div>
                <img class="note-pre-text-icon" src="@/assets/img/regular/view_n.png" alt="logo">
                <div class="note-pre-bold">、</div>
                <div class="note-pre-bold">西打藍</div>
                <img class="note-pre-text-icon" src="@/assets/img/regular/view_n.png" alt="logo">
              </div>
            </div>
            <div class="note-pre-row">
              <div class="note-pre-head">發布</div>
              <div class="note-pre-text">2023-01-16</div>
            </div>
          </div>
          <div class="note-pre-row2">
            <img class="note-pre-icon" src="@/assets/img/regular/like_n.png" alt="logo">
            <div class="note-pre-des">尚未收藏</div>
            <img class="note-pre-icon" src="@/assets/img/regular/keep.png" alt="logo">
            <div class="note-pre-des">繼續閱讀</div>
          </div>
        </div>
        <div class="note-pre-right">
          <div class="note-pre-rotate">
            <div class="note-pre-photo"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>

.note {
    
    &-pre {

    &-outer {
      position: relative;
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      padding: 170px 0px 0px;
      margin: 0px auto;

    }

    &-left {
      width: 536px;
    }

    &-en {
      font-size: 20px;
      font-weight: bold;
      color: #7ca1b5;
    }

    &-title {
      margin-top: 12px;
      font-size: 36px;
      font-weight: bold;
    }

    &-link {
      display: flex;
      align-items: center;
      margin-top: 12px;
    }

    &-slash {
      margin: 0px 16px; 
    }

    &-current {
      margin: 0px;
      color: #bcbcbc;
    }

    &-column {
      position: relative;
      margin-top: 35px;
    }

    &-wave {
      position: absolute;
      top: 93px;
      left: -93px;
      width: 196px;
      height: 4px;
      transform: rotate(90deg);
      margin-right: 24px;
    }

    &-row {
      display: flex;
      margin: 0px 0px 13px 32px;
    }

    &-head {
      width: 36px;
      color: #7ca1b5;
    }

    &-text {
      width: 454px;
      display: flex;
      align-items: center;
      margin-left: 16px;
    }

    &-text-icon {
      width: 20px;
      height: 20px;
      margin-left: 4px;
    }

    &-bold {
      font-weight: 500;
    }

    &-row2 {
      display: flex;
      align-items: center;
      margin-top: 25px;
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

    &-right {
      
    }

    &-rotate {
      
    }

    &-photo {
      width: 400px;
      height: 520px;
      border-radius: 16px;
      background-color: #7ca1b5;
    }

  }
}

@media( max-width: 1023px ){

.note {

}

}

</style>
