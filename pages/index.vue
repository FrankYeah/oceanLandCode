<template>
  <div class="index">

    <div class="index-main">
      <div class="index-main-outer">
        <div class="index-main-title">( store&travel )</div>
        <div class="index-main-head-box">
          <div class="index-main-head">與海有關</div>
          <div class="index-main-head-en">
            Sea, Mountain, Food
            and Treasure
          </div>
        </div>
        <div class="index-main-en">all about seas in keelung</div>
      </div>
      <div class="index-main-box">
        <div class="index-main-pic"></div>

        <div class="index-main-card">
          <div class="index-main-row">
            <div class="index-main-card-title">與海有關</div>
            <div class="index-main-arrow-box">
              <img class="index-main-arrow" src="@/assets/img/regular/arrow-slides_b_n.png" alt="logo">
              <img class="index-main-arrow index-main-arrow-reverse" src="@/assets/img/regular/arrow-slides_b_n.png" alt="logo">
            </div>
          </div>
          <div class="index-main-text">介紹我最愛的城市，挖掘與紀錄每一個基隆在地故事，我被感動過，才會熱愛這座城市。</div>
          <div class="index-main-tag">＃基隆 ＃體驗 ＃人文</div>
          <div class="index-main-about">
            <img class="index-main-wave" src="@/assets/img/other/deco_wave_w.png" alt="logo">
            <div class="index-main-about-text">閱讀關於</div>
          </div>
        </div>

      </div>
    </div>

    <div class="index-map">
      <img class="index-map-img" src="@/assets/img/scene/scene1.jpg" alt="logo">
    </div>

    <div class="index-store">
      <div class="index-store-left">
        <headName :en="'( Featured Store )'" :text="'精選店家'" />
        <div class="index-store-text">山群環抱俯瞰基隆，蘊藏著一間間店家，值得我們深入挖掘。</div>
        <div class="index-store-en">Keelung Flavor</div>
        <btnType :text="'三分鐘基隆旅遊懶人包'" />
        <btnType :text="'全部店家'" class="index-store-all" />
      </div>
      <div class="index-store-right">
        <store class="index-store-card" />
      </div>
    </div>

    <div class="index-tour">
      <div class="index-tour-row-box">
        <div class="index-tour-row">
          <headName :en="'( Featured Tour )'" :text="'精選遊程'" />
          <div class="index-tour-text">基隆有綿延的海岸，天然海泳池可與魚群共遊，有山群環抱俯瞰城市風景。</div>
          <div class="index-tour-en">Keelung Landscape</div>
        </div>
        <div class="index-tour-row">
          <img class="index-tour-arrow" src="@/assets/img/regular/arrow-slides_n.png" alt="logo">
          <img class="index-tour-arrow index-tour-arrow-last" src="@/assets/img/regular/arrow-slides_n.png" alt="logo">
          <btnType />
        </div>
      </div>
      <div class="index-tour-box">
        <tour class="index-tour-card" :text="'全部遊程'" />
      </div>
    </div>

    <div class="index-new">
      <div class="index-new-title">
        <headName :en="'( Latest News )'" :text="'最新活動'" />
      </div>
      <div class="index-new-outer">
        <div class="index-new-box">
          <news class="index-new-card" />
        </div>
        <div class="index-new-box">
          <news class="index-new-card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>

.index {
  padding: 126px 0px 0px;
  max-width: 1200px;
  margin: auto;
  
  &-main {

    &-outer {
      margin-left: 20vw;
    }

    &-title {
      font-size: 24px;
      font-weight: bold;
      color: #7ca1b5;
    }

    &-head-box {
      margin-top: 10px;
    }

    &-head {
      font-size: 90px;
      font-weight: bold;
    }

    &-head-en {
      font-size: 36px;
      color: #48b4d8;
    }

    &-en {
      margin-top: 10px;
      font-size: 42px;
      font-weight: bold;
    }

    &-box {
      position: relative;
      margin-top: 32px;
    }

    &-pic {
      width: 70vw;
    }

    &-card {
      position: absolute;
      right: 0px;
      bottom: 40px;
      width: 674px;
      padding: 36px 48px 80px;
      color: white;
      background-image: linear-gradient(to bottom, #8db3c8, #64b4d2);
    }

    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-card-title {
      font-size: 30px;
      font-weight: bold;
    }

    &-arrow-box {
      display: flex;
      align-items: center;
    }

    &-arrow {
      width: 48px;
      height: 48px;
      margin-left: 30px;
    }

    &-arrow-reverse {
      transform: rotate(180deg);
    }

    &-text {
      width: 366px;
      margin-top: 18px;
      font-size: 16px;
    }

    &-tag {
      margin-top: 16px;
    }

    &-about {
      display: flex;
      align-items: center;
      margin-top: 24px;
    }

    &-wave {
      width: 84px;
      height: 6px;
      margin-right: 16px;
    }
  }
  
  &-map {
    margin-top: 200px;
    padding: 0px;

    &-img {
      width: 60%;
      margin: auto;
      // background-color: burlywood;
    }
    
  }
  
  &-store {
    margin-top: 200px;
    display: flex;

    &-left {
      width: 338px;
      margin-right: 76px;
    }

    &-text {
      margin-top: 42px;
      font-size: 18px; 
    }

    &-en {
      margin: 15px 0px 60px;
      font-size: 36px;
    }

    &-all {
      margin-top: 30px;
    }

    &-right {
      display: flex;
      flex-wrap: wrap;
    }

    &-card {
      margin: 0px 16px 54px 0px;
    }
    
  }
  
  &-tour {
    margin-top: 118px;
    padding: 100px 0px 200px;
    // background-color: #F6F9FC;
    background-image: url('../assets/img/other/bg_wave.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;

    &-row-box {
      display: flex;
      justify-content: space-between;
    }

    &-row {
      display: flex;
    }

    &-text {
      margin: 0px 127px 0px 24px;
      font-size: 18px;
    }

    &-en {
      font-size: 36px;
      color: #48b4d8;
    }

    &-arrow {
      width: 48px;
      height: 48px;
      margin-right: 24px;
    }

    &-arrow-last {
      margin-right: 132px;
      transform: rotate(180deg);
    }

    &-box {
      
    }

    &-card {
      margin-right: 16px;
    }
    
  }
  
  &-new {
    padding-top: 200px;
    background-color: #F6F9FC;

    &-title {
      display: flex;
      justify-content: center;
      padding-bottom: 60px;
    }

    &-outer {
      display: flex;
      justify-content: space-between;
      width: 1088px;
    }

    &-box {
      
    }

    &-card {
      margin-bottom: 16px;
    }
    
  }
}

@media( max-width: 1023px ){

.index {



}
}

</style>
