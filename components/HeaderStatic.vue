<template>
  <div class="header">
    <div class="header-box">
      <nuxt-link to="/">
        <div class="header-logo">與海有關</div>
      </nuxt-link>
      <img class="header-location" src="@/assets/img/other/location.png" alt="logo">
      <div class="header-keelung">基隆</div>
      <img class="header-weather" src="@/assets/img/other/weather.png" alt="logo">
      <div class="header-line"></div>
      <div class="header-temp">14°C</div>
    </div>
    <div class="header-box">
      <nuxt-link to="/" class="header-href">
        <div class="header-text">店家</div>
      </nuxt-link>
      <nuxt-link to="/" class="header-href">
        <div class="header-text">遊程</div>
      </nuxt-link>
      <nuxt-link to="/" class="header-href">
        <div class="header-text">關於</div>
      </nuxt-link>
      <nuxt-link to="/" class="header-href">
        <div class="header-text">聯繫/合作</div>
      </nuxt-link>
      <nuxt-link to="/" class="header-href">
        <div class="header-text">三分鐘基隆旅遊懶人包</div>
      </nuxt-link>
    </div>
    <div class="header-box">
      <a class="header-href" href="https://www.instagram.com/sidd.blue/" target="_blank">
        <img class="header-icon default-image" src="@/assets/img/navigation/ig_n.png" alt="logo">
        <img class="header-icon hover-image" src="@/assets/img/navigation/ig_h.png" alt="logo">
      </a>
      <a class="header-href" href="https://www.instagram.com/sidd.blue/" target="_blank">
        <img class="header-icon default-image" src="@/assets/img/navigation/fb_n.png" alt="logo">
        <img class="header-icon hover-image" src="@/assets/img/navigation/fb_h.png" alt="logo">
      </a>
      <div class="header-line"></div>
      <nuxt-link to="/" class="header-href">
        <img class="header-icon default-image" src="@/assets/img/navigation/like_n.png" alt="logo">
        <img class="header-icon hover-image" src="@/assets/img/navigation/like_h.png" alt="logo">
      </nuxt-link>
      <nuxt-link to="/" class="header-href">
        <img class="header-icon default-image" src="@/assets/img/navigation/search_n.png" alt="logo">
        <img class="header-icon hover-image" src="@/assets/img/navigation/search_h.png" alt="logo">
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>

.header {
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0%);
  max-width: 1200px;
  padding: 0px 15px;
  width: calc(100vw - 0px);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-box {
    display: flex;
    align-items: center;
  }

  &-logo {
    margin-right: 14px;
    font-size: 24px;
    font-weight: bold;

    &:hover {
      color: #8a8a8a;
    }
  }

  &-location {
    width: 36px;
    height: 36px;
  }

  &-keelung {
    font-size: 20px;
    font-weight: bold;
  }

  &-weather {
    
  }

  &-temp {
    font-size: 20px;
    font-weight: bold;
  }

  &-line {
    width: 1px;
    height: 24px;
    margin: 0px 10px;
    background-color: black;
  }

  &-href {
    margin: 0px 8px;

    &:hover .default-image {
      display: none;
    }

    &:hover .hover-image {
      display: block;
    }
  }

  &-text {
    font-size: 18px;
    font-weight: bold;

    &:hover {
      color: #8a8a8a;
    }
  }

  &-icon {
    
  }

}

@media( max-width: 1023px ){

.header {
  

}

}

</style>
