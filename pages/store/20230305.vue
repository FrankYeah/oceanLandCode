<template>
  <div class="article">
    <div class="article-pre">
      <div class="article-pre-left">
        <div class="article-pre-en">( STORE )</div>
        <div class="article-pre-title">永晝海濱美術館</div>
        <div class="article-pre-row">
          <img class="article-pre-wave" src="@/assets/img/other/deco_wave.png" alt="logo">
          <div class="article-pre-column">
            <div class="article-pre-text">整座漁港就是美術館，讓海濱成為一個沒有邊界的美術館。用藝術去寫下土地與大海交會的故事。</div>
            <div class="article-pre-tag-box">
              <div class="article-pre-tag">咖啡</div>
              <div class="article-pre-tag">咖啡</div>
              <div class="article-pre-tag">咖啡</div>
              <div class="article-pre-tag">咖啡</div>
              <div class="article-pre-tag">咖啡</div>
            </div>
            <div class="article-pre-row2">
              <img class="article-pre-icon" src="@/assets/img/regular/like_n.png" alt="logo">
              <div class="article-pre-des">尚未收藏</div>
              <img class="article-pre-icon" src="@/assets/img/regular/keep.png" alt="logo">
              <div class="article-pre-des">繼續閱讀</div>
            </div>
          </div>
        </div>
        <div class="article-pre-img"></div>
      </div>
      <div class="article-pre-right">
        <div class="article-pre-link">
          <nuxt-link to="/">首頁</nuxt-link>
          <div>/</div>
          <nuxt-link to="/store">店家</nuxt-link>
          <div>/</div>
          <div class="article-pre-current">永晝海濱美術館</div>
        </div>
        <div class="article-pre-photo"></div>
      </div>
      <div class="article-pre-bg"></div>
    </div>
    

    <div class="article-info">
      <div class="article-info-head-box">
        <div class="article-info-line-short"></div>
        <div class="article-info-head">INFO</div>
        <div class="article-info-line-short"></div>
      </div>
      <div class="article-info-box">
        <div class="article-info-row">
          <div class="article-info-title">全稱</div>
          <div class="article-info-text">永晝海濱美術館｜基隆正濱漁港</div>
        </div>
        <div class="article-info-row">
          <div class="article-info-title">全稱</div>
          <div class="article-info-text">永晝海濱美術館｜基隆正濱漁港</div>
        </div>
        <div class="article-info-row">
          <div class="article-info-title">全稱</div>
          <div class="article-info-text">永晝海濱美術館｜基隆正濱漁港</div>
        </div>
      </div>
      <div class="article-info-line"></div>
    </div>

    <div class="article-main">
      <div class="article-h1">
        <div class="article-h1-text">我是主標題</div>
        <div class="article-h1-text-next">示範主標超過兩行文字的行距呈現</div>
        <img class="article-h1-wave" src="@/assets/img/other/deco_wave.png" alt="logo">
      </div>
      <!-- 有一些不同表現形式 -->
      <div class="article-text">為創造一個永續的創意發生機制，2021年星濱山成立「永晝海濱美術館」，透過藝術、教育以及地方故事整合，沿著海港構築一座地域型的無牆美術館。2022年主題為「山頂的嘰嘰喳喳，斜斜的生活x斜斜的基隆」，共10組展覽內容、多場導覽，一起探尋基隆山海貌。</div>
      <div class="article-card">
        <div class="article-card-text">透過藝術、教育以及地方故事整合，沿著海港構築一座地域型的無牆美術館</div>
        <div class="article-card-name">—— Jhane</div>
      </div>
      <div class="article-img">
        <img class="article-img-photo" src="@/assets/img/scene/scene1.jpg" alt="logo">
        <div class="article-img-text">示範主標超過兩行文字的行距呈現</div>
      </div>
      
      <div class="article-h2">
        <div class="article-h2-text">我是主標題</div>
        <div class="article-h2-text-next">示範主標超過兩行文字的行距呈現</div>
        <img class="article-h2-wave" src="@/assets/img/other/deco_wave.png" alt="logo">
      </div>
      <div class="article-h3">
        <div class="article-h3-text">我是主標題</div>
        <div class="article-h3-text-next">示範主標超過兩行文字的行距呈現</div>
        <img class="article-h3-wave" src="@/assets/img/other/deco_wave.png" alt="logo">
      </div>
      
      <div class="article-deco">
        <div  v-for="(n) in 10"
          :key="n"
          class="article-deco-dot"
        ></div>
      </div>
    </div>

    <div class="article-author">
      <div class="article-author-head-box">
        <div class="article-author-line-short"></div>
        <div class="article-author-head">AUTHOR</div>
        <div class="article-author-line-short"></div>
      </div>
      <div class="article-author-box">
        <div class="article-author-logo-box">
          <div class="article-author-logo"></div>
        </div>
        <div class="article-author-column">
          <div class="article-author-title">特約作者</div>
          <div class="article-author-name">西打藍</div>
          <div class="article-author-text">我喜歡寫字，工作前三年，我在雜誌、報社、網路媒體擔任文字記者，跑過移民工、人文、科技線，也曾至越南、印尼、美國採訪。</div>
          <div class="article-author-row">
            <a class="article-author-href" :href="``" target="_blank">
              <img class="article-author-icon" src="@/assets/img/author/author_email_n.png" alt="deco_wave">
            </a>
            <a class="article-author-href" :href="``" target="_blank">
              <img class="article-author-icon" src="@/assets/img/author/author_web_n.png" alt="deco_wave">
            </a>
            <a class="article-author-href" :href="``" target="_blank">
              <img class="article-author-icon" src="@/assets/img/author/author_ig_n.png" alt="deco_wave">
            </a>
            <a class="article-author-href" :href="``" target="_blank">
              <img class="article-author-icon" src="@/assets/img/author/author_fb_n.png" alt="deco_wave">
            </a>
          </div>
        </div>
      </div>
      <div class="article-author-line"></div>
    </div>

    <div class="article-deco2">
      <div  v-for="(n) in 120"
        :key="n"
        class="article-deco2-dot"
      ></div>
    </div>

    <div class="article-store">
      <headName :en="'( STORES )'" :text="'店家推薦'" />
      <div class="article-store-box">
        <store v-for="(store, index) in storeList"
          :key="`${index}${store.name}`"
          :store="store"
          class="article-store-item"
        />
      </div>
    </div>

    <div class="article-fix">
      <a class="article-fix-href" :href="``" target="_blank">
        <img class="article-fix-icon" src="@/assets/img/share/share_fb_n.png" alt="deco_wave">
      </a>
      <a class="article-fix-href" :href="``" target="_blank">
        <img class="article-fix-icon" src="@/assets/img/share/share_link_n.png" alt="deco_wave">
      </a>
      <a class="article-fix-href" :href="``" target="_blank">
        <img class="article-fix-icon" src="@/assets/img/share/share_email_n.png" alt="deco_wave">
      </a>
      <div class="article-fix-line"></div>
      <img class="article-fix-icon" src="@/assets/img/more/more_collect_a_n.png" alt="logo">
    </div>
  </div>
</template>

<script lang="ts" setup>

const storeList = reactive([
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
])

</script>

<style lang="scss" scoped>

.article {
  padding-bottom: 100px;

  &-pre {
    position: relative;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    padding: 170px 0px 0px;
    margin: 0px auto;

    &-left {
      width: calc(50% - 8px);
    }

    &-en {
      font-size: 24px;
      font-weight: bold;
      color: #7ca1b5;
    }

    &-title {
      font-size: 60px;
      font-weight: bold;
      margin-top: 12px;
    }

    &-row {
      position: relative;
      display: flex;
    }

    &-wave {
      position: absolute;
      top: 100px;
      left: -52px;
      width: 120px;
      height: 4px;
      transform: rotate(90deg);
      margin-right: 24px;
    }

    &-column {
      max-width: 363px;
      margin-left: 40px;
    }

    &-text {
      margin-top: 41px;
      font-size: 18px;
    }

    &-tag-box {
      display: flex;
      flex-wrap: wrap;
      margin: 26px 0px 22px;
    }

    &-tag {
      margin: 0px 8px 8px 0px;
      padding: 6px 12px;
      border-radius: 8px;
      background-color: #e7f0f4;
      font-size: 14px;
    }

    &-row2 {
      display: flex;
      align-items: center;
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

    &-img {
      height: 373px;
      margin-top: 30px;
      border-radius: 16px;
      background-image: url('../../assets/img/scene/scene1.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }

    &-right {
      width: calc(50% - 8px);
    }

    &-link {
      display: flex;
      align-items: center;
      margin-top: 90px;

      & div {
        margin: 0px 16px;
      }
    }

    &-current {
      color: #bcbcbc;
    }

    &-photo {
      height: 746px;
      margin-top: 24px;
      border-radius: 16px;
      background-image: url('../../assets/img/scene/scene1.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }

    &-bg {
      position: absolute;
      bottom: -200px;
      width: 100%;
      height: 400px;
      background-image: url('../../assets/img/other/bg_deco.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      z-index: -1;
    }

  }  

  &-info {
    max-width: 1200px;
    margin: 236px auto 0px;

    &-head-box {
      display: flex;
      align-items: center;
      margin-bottom: 14px;
    }

    &-line-short {
      width: 45%;
      height: 1px;
      background-color: #7ca1b5;
    }

    &-head {
      margin: 0px 18px;
      font-size: 36px;
      font-weight: bold;
      color: #7ca1b5;
    }

    &-box {
      display: flex;
      flex-wrap: wrap;
    }

    &-row {
      width: 50%;
      display: flex;
      margin-bottom: 12px;
    }

    &-title {
      color: #7ca1b5;
      margin-right: 16px;
    }

    &-text {
      
    }

    &-line {
      height: 1px;
      margin: 30px 0px 0px;
      background-color: #7ca1b5;
    }

  }  

  &-main {
    max-width: 812px;
    margin: auto;
  }

  &-h1 {
    width: 644px;
    margin: 100px auto 0px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;

    &-text {
      
    }

    &-text-next {
      
    }

    &-wave {
      margin: 24px auto 0px;
    }

  }

  &-text {
    width: 644px;
    margin: 36px auto 0px;
    font-size: 17px;

    &- {
      
    }

    &- {
      
    }

    &- {
      
    }

  }

  &-card {
    width: 692px;
    padding: 20px 24px;
    margin: 36px auto 0px;
    border: solid 1px #7ca1b5;
    border-left: solid 4px #4d7083;

    &-text {
      font-size: 20px;
      color: #4d7083;
    }

    &-name {
      margin-top: 6px;
      color: #7ca1b5;
    }

  }

  &-img {
    margin: 60px 0px 0px;

    &-photo {
      height: 456px;
      margin: auto;
      border-radius: 16px;
    }

    &-text {
      margin-top: 12px;
      font-size: 14px;
      text-align: center;
    }

    &- {
      
    }

    &- {
      
    }

  }

  &-h2 {
    width: 644px;
    margin: 60px auto 0px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;

    &-text {
      
    }

    &-text-next {
      
    }

    &-wave {
      margin: 16px auto 0px;
    }

  }

  &-h3 {
    width: 644px;
    margin: 60px auto 0px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;

    &-text {
      
    }

    &-text-next {
      
    }

    &-wave {
      margin: 12px auto 0px;
    }

  }

  &-deco {
    width: 144px;
    margin: 60px auto 0px;
    display: flex;
    justify-content: space-evenly;

    &-dot {
      width: 2px;
      height: 13px;
      background-color: #70b3ee;
    }

  }

  &-deco2 {
    margin: 100px auto 0px;
    display: flex;
    justify-content: space-evenly;

    &-dot {
      width: 2px;
      height: 13px;
      background-color: #70b3ee;
    }
  }

  &-author {
    max-width: 812px;
    margin: 106px auto 0px;

    &-head-box {
      display: flex;
      align-items: center;
    }

    &-line-short {
      width: 45%;
      height: 1px;
      background-color: #7ca1b5;
    }

    &-head {
      margin: 0px 18px;
      font-size: 36px;
      font-weight: bold;
      color: #7ca1b5;
    }

    &-box {
      display: flex;
      margin: 20px 84px 36px;
    }

    &-logo-box {
      width: 76px;
      height: 76px;
      border-radius: 100%;
      border: solid 1px #48b4d8;
    }

    &-logo {
      width: 76px;
      height: 76px;
      background-color: #70b3ee;
      border-radius: 100%;
    }

    &-column {
      margin-left: 22px;
    }

    &-title {
      font-size: 14px;
      color: #7ca1b5;
    }

    &-name {
      margin-top: 4px;
      font-size: 20px;
      font-weight: bold;
    }

    &-text {
      width: 548px;
      margin-top: 12px;
    }

    &-row {
      margin-top: 24px;
      display: flex;
      align-items: center;
    }

    &-href {
      margin-right: 12px;
    }

    &-icon {
      width: 36px;
      height: 36px;
    }

    &-line {
      height: 1px;
      background-color: #7ca1b5;
    }

  }

  &-store {
    max-width: 1200px;
    margin: 100px auto 100px;

    &-box {
      display: flex;
      flex-wrap: wrap;
      margin-top: 60px;
    }

    &-item {
      margin: 0px 8px;
    }

  }

  &-fix {
    position: fixed;
    top: 30vh;
    right: 48px;

    &-href {
      margin-bottom: 16px;
      cursor: pointer;
    }

    &-icon {
      margin-bottom: 16px;
      cursor: pointer;
    }

    &-line {
      width: 42px;
      height: 1px;
      margin-bottom: 16px;
      background-color: #7ca1b5;
    }

  }
  
}

@media( max-width: 1023px ){

.article {



}
}

</style>
