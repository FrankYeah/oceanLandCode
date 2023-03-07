<template>
  <div class="about">
    <div class="about-bg">
      <div class="about-bg-left">
        <div class="about-bg-en">( VISION )</div>
        <div class="about-bg-title">與海有關願景</div>
        <img class="about-bg-wave" src="@/assets/img/other/deco_wave_w.png" alt="deco_wave">
        <div class="about-bg-read">
          <img class="about-bg-down" src="@/assets/img/regular/keep_w.png" alt="sort-forward_n">
          <div>繼續閱讀</div>
        </div>
      </div>
      <div class="about-bg-right">
        <div class="about-bg-text">我是「與海有關」發起人西打藍。</div>
        <div class="about-bg-text">基隆，是我最愛的城市，</div>
        <div class="about-bg-text">我在這裡出生、工作、創業，</div>
        <div class="about-bg-text-more">經常被基隆一個店家、景致、人給感動。</div>
        <div class="about-bg-text">於是想用自己文字、網站開發專業，</div>
        <div class="about-bg-text">和幾位同樣喜歡基隆的朋友，</div>
        <div class="about-bg-text">好好紀錄這座城市的故事。</div>
        <div class="about-bg-name">西打藍</div>
      </div>
    </div>

    <div class="about-row">
      <div class="about-box">
        <img class="about-wave" src="@/assets/img/other/deco_wave.png" alt="deco_wave">
        <div class="about-title">
          介紹我最愛的城市
          挖掘有意思的在地故事，故事背後都有人
        </div>
        <div class="about-text">為創造一個永續的創意發生機制，星濱山成立「永晝海濱美術館」，透過藝術、教育以及地方故事整合，沿著海港構築一座地域型的無牆美術館。2022年主題為「山頂的嘰嘰喳喳，斜斜的生活x斜斜的基隆」，共10組展覽內容、多場導覽，一起探尋基隆山海貌。</div>
      </div>
      <div class="about-square"></div>
    </div>

    <div class="about-row">
      <div class="about-square"></div>
      <div class="about-box about-box-reverse">
        <img class="about-wave" src="@/assets/img/other/deco_wave.png" alt="deco_wave">
        <div class="about-title">
          介紹我最愛的城市
          挖掘有意思的在地故事，故事背後都有人
        </div>
        <div class="about-text">為創造一個永續的創意發生機制，星濱山成立「永晝海濱美術館」，透過藝術、教育以及地方故事整合，沿著海港構築一座地域型的無牆美術館。2022年主題為「山頂的嘰嘰喳喳，斜斜的生活x斜斜的基隆」，共10組展覽內容、多場導覽，一起探尋基隆山海貌。</div>
      </div>
    </div>

    <div class="about-banner"></div>

    <div class="about-group">
      <div class="about-group-row">
        <headName class="about-group-title" :en="'( TEAM )'" :text="'團隊介紹'" />
        <div class="about-group-text">來自世界各地與在地創作者，共創基隆文化推廣。</div>
        <div class="about-group-en">Culture and People</div>
      </div>
      <div class="about-group-card-outer">

        <div v-for="(member, index) in memberList"
          :key="`${index}${member.name}`"
          class="about-group-card"
        >
          <div :style="`background-image: url('${member.photo}')`"
            class="about-group-card-img"
          ></div>
          <div class="about-group-card-row">
            <div>
              <div class="about-group-card-pre">{{ member.pre }}</div>
              <div class="about-group-card-name-box">
                <div class="about-group-card-name">{{ member.name }}</div>
                <div class="about-group-card-en">{{ member.en }}</div>
              </div>
              <div class="about-group-card-social">
                <a class="about-group-card-href" :href="`${member.mail}`" target="_blank">
                  <img class="about-group-card-icon" src="@/assets/img/author/author_email_n.png" alt="deco_wave">
                </a>
                <a class="about-group-card-href" :href="`${member.website}`" target="_blank">
                  <img class="about-group-card-icon" src="@/assets/img/author/author_web_n.png" alt="deco_wave">
                </a>
                <a class="about-group-card-href" :href="`${member.ig}`" target="_blank">
                  <img class="about-group-card-icon" src="@/assets/img/author/author_ig_n.png" alt="deco_wave">
                </a>
              </div>
            </div>
            <img @click="popupMember(index)" class="about-group-card-pop" src="@/assets/img/regular/view_n.png" alt="deco_wave">
          </div>
        </div>

      </div>
    </div>

    <memberPopup v-if="isPopup" @closePopup="closePopup" :member="currentMember" />

    <div class="about-thank">
      <headName class="about-thank-title" :en="'( THANKS )'" :text="'感謝單位'" />
      <div class="about-thank-line"></div>
      <div class="about-thank-outer">
        <div v-for="(thank, index) in thankList"
          :key="`${index}${thank.name}`"
          class="about-thank-box"
        >
          <div class="about-thank-title">{{ thank.name }}</div>
          <div class="about-thank-row">
            <div class="about-thank-img"></div>
            <div class="about-thank-text">{{ thank.text }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

const isPopup = ref(false)
const currentMember = ref({ 
  photo: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg',
  pre: '與海有關創辦人',
  name: '西打藍',
  en: 'Siddharam',
  mail: 'https://www.instagram.com/sidd.blue',
  website: 'https://www.instagram.com/sidd.blue',
  ig: 'https://www.instagram.com/sidd.blue',
  des: '2020/2 成為自由工作者，建立西打藍個人品牌，協助客戶建立品牌網站、採訪寫作，同時是「雞籠怪奇」一員。2020 年「雞籠怪奇」在基隆舉辦「怪奇博物館」實境解謎遊戲與戲劇演出；2021 年「雞籠怪奇」舉辦「怪奇逃走中 - 混血探員」實境解謎遊戲。2022 年出版 2 本書：《修煉——全民服務的數位轉型》、《看海記事：基隆港職人生活誌》，2023 年還有一本新書。'
})

const memberList = reactive([
  { 
    photo: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg',
    pre: '與海有關創辦人',
    name: '西打藍',
    en: 'Siddharam',
    mail: 'https://www.instagram.com/sidd.blue',
    website: 'https://www.instagram.com/sidd.blue',
    ig: 'https://www.instagram.com/sidd.blue',
    des: '2020/2 成為自由工作者，建立西打藍個人品牌，協助客戶建立品牌網站、採訪寫作，同時是「雞籠怪奇」一員。2020 年「雞籠怪奇」在基隆舉辦「怪奇博物館」實境解謎遊戲與戲劇演出；2021 年「雞籠怪奇」舉辦「怪奇逃走中 - 混血探員」實境解謎遊戲。2022 年出版 2 本書：《修煉——全民服務的數位轉型》、《看海記事：基隆港職人生活誌》，2023 年還有一本新書。'
  },
  { 
    photo: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg',
    pre: '與海有關創辦人',
    name: '西打藍',
    en: 'Siddharam',
    mail: 'https://www.instagram.com/sidd.blue',
    website: 'https://www.instagram.com/sidd.blue',
    ig: 'https://www.instagram.com/sidd.blue',
    des: '2020/2 成為自由工作者，建立西打藍個人品牌，協助客戶建立品牌網站、採訪寫作，同時是「雞籠怪奇」一員。2020 年「雞籠怪奇」在基隆舉辦「怪奇博物館」實境解謎遊戲與戲劇演出；2021 年「雞籠怪奇」舉辦「怪奇逃走中 - 混血探員」實境解謎遊戲。2022 年出版 2 本書：《修煉——全民服務的數位轉型》、《看海記事：基隆港職人生活誌》，2023 年還有一本新書。'
  },
  { 
    photo: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg',
    pre: '與海有關創辦人',
    name: '西打藍',
    en: 'Siddharam',
    mail: 'https://www.instagram.com/sidd.blue',
    website: 'https://www.instagram.com/sidd.blue',
    ig: 'https://www.instagram.com/sidd.blue',
    des: '2020/2 成為自由工作者，建立西打藍個人品牌，協助客戶建立品牌網站、採訪寫作，同時是「雞籠怪奇」一員。2020 年「雞籠怪奇」在基隆舉辦「怪奇博物館」實境解謎遊戲與戲劇演出；2021 年「雞籠怪奇」舉辦「怪奇逃走中 - 混血探員」實境解謎遊戲。2022 年出版 2 本書：《修煉——全民服務的數位轉型》、《看海記事：基隆港職人生活誌》，2023 年還有一本新書。'
  },
  { 
    photo: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg',
    pre: '與海有關創辦人',
    name: '西打藍',
    en: 'Siddharam',
    mail: 'https://www.instagram.com/sidd.blue',
    website: 'https://www.instagram.com/sidd.blue',
    ig: 'https://www.instagram.com/sidd.blue',
    des: '2020/2 成為自由工作者，建立西打藍個人品牌，協助客戶建立品牌網站、採訪寫作，同時是「雞籠怪奇」一員。2020 年「雞籠怪奇」在基隆舉辦「怪奇博物館」實境解謎遊戲與戲劇演出；2021 年「雞籠怪奇」舉辦「怪奇逃走中 - 混血探員」實境解謎遊戲。2022 年出版 2 本書：《修煉——全民服務的數位轉型》、《看海記事：基隆港職人生活誌》，2023 年還有一本新書。'
  },
  { 
    photo: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg',
    pre: '與海有關創辦人',
    name: '西打藍',
    en: 'Siddharam',
    mail: 'https://www.instagram.com/sidd.blue',
    website: 'https://www.instagram.com/sidd.blue',
    ig: 'https://www.instagram.com/sidd.blue',
    des: '2020/2 成為自由工作者，建立西打藍個人品牌，協助客戶建立品牌網站、採訪寫作，同時是「雞籠怪奇」一員。2020 年「雞籠怪奇」在基隆舉辦「怪奇博物館」實境解謎遊戲與戲劇演出；2021 年「雞籠怪奇」舉辦「怪奇逃走中 - 混血探員」實境解謎遊戲。2022 年出版 2 本書：《修煉——全民服務的數位轉型》、《看海記事：基隆港職人生活誌》，2023 年還有一本新書。'
  },
])

currentMember.value = memberList[0]


function popupMember(index:any) {
  console.log(index)
  isPopup.value = true
  currentMember.value = memberList[index] 
}

function closePopup(popup:boolean) {
  isPopup.value = popup
}

const thankList = reactive([
  {
    photo: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg',
    name: '陽明海運',
    text: '基隆市除今年於各區辦理狗。基隆市除。'
  },
  {
    photo: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg',
    name: '陽明海運',
    text: '基隆市除今年於各區辦理狗。基隆市除。'
  },
  {
    photo: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg',
    name: '',
    text: '基隆市除今年於各區辦理狗。基隆市除。'
  },
])

</script>

<style lang="scss" scoped>

.about {
  padding-top: 60px;

  &-bg {
    width: 100vw;
    height: calc(100vh - 60px);
    margin-bottom: 100px;
    padding-top: 20vh;
    background-image: url('../assets/img/scene/scene1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    display: flex;
    justify-content: center;
    color: white;

    &-left {
      width: 400px;
      margin-right: 100px;
    }

    &-en {
      font-size: 14px;
    }

    &-title {
      margin-top: 6px;
      font-size: 36px;
      font-weight: bold;
    }

    &-wave {
      margin-top: 6px;
    }

    &-read {
      display: flex;
      align-items: center;
      margin-top: 40vh;
      cursor: pointer;
    }

    &-down {
      width: 30px;
      height: 30px;
      margin-right: 12px;
    }

    &-right {
      width: 400px;
      margin-left: 100px;
    }

    &-text {
      margin-top: 20px;
      font-size: 20px;
      font-weight: bold;
    }

    &-text-more {
      margin-top: 42px;
      font-size: 20px;
      font-weight: bold;
    }

    &-name {
      margin-top: 36px;
      font-size: 20px;
      font-weight: bold;
      text-align: right;
    }

  }

  &-row {
    max-width: 1200px;
    padding: 100px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
  }

  &-box {
    width: 500px;
    margin-right: 112px;
  }

  &-box-reverse {
    margin: 0px 0px 0px 112px;
  }

  &-wave {
    width: 120px;
    height: 8px;
  }

  &-title {
    margin-top: 30px;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
  }

  &-text {
    margin-top: 30px;
    font-size: 17px;
    letter-spacing: 1.7px;
    line-height: 1.7;
  }

  &-square {
    width: 478px;
    height: 400px;
    background-image: url('../assets/img/scene/scene1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    border-radius: 40%;
  }

  &-banner {
    width: 100%;
    height: 500px;
    margin-top: 100px;
    background-image: url('../assets/img/scene/scene1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
  }

  &-group {
    max-width: 1200px;
    margin: 100px auto 0px;

    &-row {
      display: flex;
      align-items: center;
      margin: 0px 8px;
    }

    &-title {
      align-items: flex-start;
    }

    &-text {
      width: 338px;
      margin-left: 127px;
      font-size: 18px;
    }

    &-en {
      margin-left: 25px;
      font-size: 36px;
      color: #48b4d8;
    }

    &-card-outer {
      margin: 60px 0px 164px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &-card {
      margin: 0px 8px 36px;

      /* 如果最後一行是2個元素 */
      // https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/

      &:last-child:nth-child(3n-1) {
        margin-right: 426px;
      }

      &-img {
        width: 352px;
        height: 320px;
        border-radius: 16px;
        background-image: url('../assets/img/scene/scene1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        background-position-y: center;
      }

      &-row {
        padding: 16px 20px;
        display: flex;
        justify-content: space-between;
      }

      &-pre {  
        font-size: 14px;
        color: #7ca1b5;
      }

      &-name-box {
        display: flex;
        align-items: center;
        margin-top: 6px;
      }

      &-name {
        font-size: 20px;
        font-weight: bold;
      }

      &-en {
        margin-left: 8px;
        font-size: 18px;
        color: #7ca1b5;
      }

      &-social {
        margin-top: 17px;
        display: flex;
        align-items: center;
      }

      &-href {
        margin-right: 12px;
      }

      &-icon {
        width: 36px;
        height: 36px;
        cursor: pointer;
      }

      &-pop {
        width: 36px;
        height: 36px;
        cursor: pointer;
      }
      
    }
    
  }

  &-thank {
    max-width: 1088px;
    margin: 0px auto 172px;

    &-title {

    }

    &-line {
      height: 1px;
      margin: 60px 0px 24px;
      background-color: #8db3c8;
    }

    &-outer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &-box {
      width: 485px;
      margin-bottom: 48px;
    }

    &-title {
      font-size: 18px;
      color: #7ca1b5;
    }

    &-row {
      display: flex;
      margin-top: 14px;
    }

    &-img {
      width: 240px;
      height: 160px;
      border-radius: 8px;
      background-color: #8db3c8;
    }

    &-text {
      width: 232px;
      margin: 24px 0px 0px 24px;
    }
    
  }
  
}

@media( max-width: 1023px ){

.index {



}
}

</style>
