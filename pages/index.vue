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
        <div class="index-main-box">
          <div class="index-main-pic"></div>
          <div class="index-main-card">
            <div class="index-main-row">
              <div class="index-main-card-title">與海有關</div>
              <div class="index-main-arrow-box">
                <img class="index-main-arrow" src="@/assets/img/regular/arrow-slides_n.png" alt="logo">
                <img class="index-main-arrow" src="@/assets/img/regular/arrow-slides_n.png" alt="logo">
              </div>
            </div>
            <div class="index-main-text">介紹我最愛的城市，挖掘與紀錄每一個基隆在地故事，我被感動過，才會熱愛這座城市。</div>
            <div class="index-main-tag">＃基隆 ＃體驗 ＃人文</div>
            <div class="index-main-about">
              <img class="index-main-wave" src="@/assets/img/other/deco_wave.png" alt="logo">
              <div class="index-main-text">閱讀關於</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="index-map">
      <img class="index-map-img" src="@/assets/img/other/deco_wave.png" alt="logo">
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
        <div class="index-store-box">
          <store class="index-store-card" />
        </div>
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
          <img class="index-tour-arrow" src="@/assets/img/other/deco_wave.png" alt="logo">
          <img class="index-tour-arrow" src="@/assets/img/other/deco_wave.png" alt="logo">
          <btnType />
        </div>
      </div>
      <div class="index-tour-box">
        <tour class="index-tour-card" />
      </div>
    </div>

    <div class="index-new">
      <div class="index-new-title">
        <headName :en="'( Latest News )'" :text="'最新活動'" />
      </div>
      <div class="index-new-box">
        <news class="index-new-card" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>

.index {
  
  &-main {

    &-outer {

    }

    &-title {
      
    }

    &-head-box {
      
    }

    &-head {
      
    }

    &-head-en {
      
    }

    &-en {
      
    }

    &-box {
      
    }

    &-pic {
      
    }

    &-card {
      
    }

    &-row {
      
    }

    &-card-title {
      
    }

    &-arrow-box {
      
    }

    &-arrow {
      
    }

    &-text {
      
    }

    &-tag {
      
    }

    &-about {
      
    }

    &-wave {
      
    }
  }
  
  &-map {

    &-img {
      
    }
    
  }
  
  &-store {

    &-left {
      
    }

    &-text {
      
    }

    &-en {
      
    }

    &-all {
      
    }

    &-right {
      
    }

    &-box {
      
    }

    &-card {
      
    }
    
  }
  
  &-tour {

    &-row-box {
      
    }

    &-row {
      
    }

    &-text {
      
    }

    &-en {
      
    }

    &-arrow {
      
    }

    &-box {
      
    }

    &-card {
      
    }
    
  }
  
  &-new {

    &-title {
      
    }

    &-box {
      
    }

    &-card {
      
    }
    
  }
}

@media( max-width: 1023px ){

.index {



}
}

</style>
