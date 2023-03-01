<template>
  <div class="footer">
    <div class="footer-outer">
      <div class="footer-left">
        <nuxt-link class="footer-href" to="/">
          <div class="footer-logo">與海有關</div>
        </nuxt-link>
          <div class="footer-copyright">© 2023 與海有關</div>
      </div>
      <div class="footer-right">
        <div class="footer-box">
          <div class="footer-title">Get in Touch</div>
          <div class="footer-mail">frank@siddharam.com</div>
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
          <div class="footer-title">Browse</div>
          <nuxt-link class="footer-href" to="/">
            <div class="footer-text">店家</div>
          </nuxt-link>
          <nuxt-link class="footer-href" to="/">
            <div class="footer-text">遊程</div>
          </nuxt-link>
          <nuxt-link class="footer-href" to="/">
            <div class="footer-text">關於</div>
          </nuxt-link>
          <nuxt-link class="footer-href" to="/">
            <div class="footer-text">加入 / 合作</div>
          </nuxt-link>
        </div>
        <div class="footer-box">
          <div class="footer-title">More</div>
          <nuxt-link class="footer-href" to="/">
            <div class="footer-row">
              <img class="footer-icon default-image" src="@/assets/img/footer/like.png" alt="logo">
              <img class="footer-icon hover-image" src="@/assets/img/navigation/like_h.png" alt="logo">
              <div class="footer-icon-text">收藏</div>
            </div>
          </nuxt-link>
          <nuxt-link class="footer-href" to="/">
            <div class="footer-row">
              <img class="footer-icon default-image" src="@/assets/img/footer/search.png" alt="logo">
              <img class="footer-icon hover-image" src="@/assets/img/navigation/search_h.png" alt="logo">
              <div class="footer-icon-text">搜尋</div>
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

@media( max-width: 1023px ){

.footer {
  

}

}

</style>
