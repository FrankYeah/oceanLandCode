<template>
  <div class="footer" id="footerID">
    <div class="footer-outer">
      <div class="footer-left">
        <nuxt-link class="footer-href" to="/">
          <h2 class="footer-logo">與海有關</h2>
        </nuxt-link>
          <h3 class="footer-copyright">© 2023 與海有關</h3>
      </div>
      <div class="footer-right">
        <div class="footer-box">
          <h2 class="footer-title">Get in Touch</h2>
          <h2 class="footer-mail">hello@oceanland.tw</h2>
          <div class="footer-social">
            <a class="footer-href" href="https://www.instagram.com/sidd.blue/" target="_blank">
              <img class="footer-social-icon default-image" src="@/assets/img/footer/ig.png" alt="logo">
              <img class="footer-social-icon hover-image" src="@/assets/img/navigation/ig_h.png" alt="logo">
            </a>
            <a class="footer-href" href="https://www.instagram.com/sidd.blue/" target="_blank">
              <img class="footer-social-icon default-image" src="@/assets/img/footer/fb.png" alt="logo">
              <img class="footer-social-icon hover-image" src="@/assets/img/navigation/fb_h.png" alt="logo">
            </a>
          </div>
        </div>
        <div class="footer-box">
          <h2 class="footer-title">Browse</h2>
          <nuxt-link class="footer-href" to="/store-list">
            <h2 class="footer-text">店家</h2>
          </nuxt-link>
          <nuxt-link class="footer-href" to="/tour-list">
            <h2 class="footer-text">遊程</h2>
          </nuxt-link>
          <nuxt-link class="footer-href" to="/about">
            <h2 class="footer-text">關於</h2>
          </nuxt-link>
          <nuxt-link class="footer-href" to="/contact">
            <h2 class="footer-text">加入 / 合作</h2>
          </nuxt-link>
        </div>
        <div class="footer-box">
          <h2 class="footer-title">More</h2>
          <nuxt-link class="footer-href" to="/collect">
            <div class="footer-row">
              <img class="footer-icon default-image" src="@/assets/img/footer/like.png" alt="logo">
              <img class="footer-icon hover-image" src="@/assets/img/navigation/like_h.png" alt="logo">
              <h2 class="footer-icon-text">收藏</h2>
            </div>
          </nuxt-link>
          <nuxt-link class="footer-href" to="/search">
            <div class="footer-row">
              <img class="footer-icon default-image" src="@/assets/img/footer/search.png" alt="logo">
              <img class="footer-icon hover-image" src="@/assets/img/navigation/search_h.png" alt="logo">
              <h2 class="footer-icon-text">搜尋</h2>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>

.footer {
  padding: 60px 0px;
  color: white;
  background-image: linear-gradient(to bottom, #8db3c8, #64b4d2);

  &-outer {
    max-width: 1200px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 0px 15px;
  }

  &-left {

  }

  &-href {

    &:hover .default-image {
      display: none;
    }

    &:hover .hover-image {
      display: block;
    }
    
  }

  &-logo {
    font-size: 24px;
    font-weight: bold;
  }

  &-copyright {
    margin-top: 24px;
    font-size: 14px;
  }

  &-right {
    display: flex;
  }

  &-box {
    margin-right: 10vw;
  }

  &-title {
    font-size: 16px;
  }

  &-mail {
    margin-top: 24px;
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
  }

  &-social {
    display: flex;
    margin-top: 108px;
  }

  &-social-icon {
    width: 40px;
    margin-right: 30px;
  }

  &-text {
    margin-top: 24px;
    font-size: 18px;
    font-weight: bold;

    &:hover {
      color: #8a8a8a;
    }
  }

  &-row {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  &-icon {
    width: 30px;
    margin-right: 15px;
  }

  &-icon-text {
    font-size: 18px;
    font-weight: bold;
  }

}

@media screen and (max-width: 1200px){

.footer {
  height: 130px;
  padding: 0px;
  width: 100vw;
  &-right {
    display: none;
  }
  &-left {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-logo {
    font-size: 18px;
    margin-top: 32px;
  }
  &-copyright {
    font-size: 14px;
  }
}

}

</style>
