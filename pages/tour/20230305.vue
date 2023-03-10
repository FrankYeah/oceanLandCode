<template>
  <articleOuter>
    
    <articleDeco2 />
    <noteMain>
      <notePre />
      <noteStage />
      <notePart />
      <noteImg />
      <noteBlock />
      <noteStory />
      <div class="note-stage">
        <div class="note-stage-row">
          <div class="note-stage-icon">1</div>
          <div v-for="(n) in 4"
            :key="n"
            class="note-stage-line"
          ></div>
          <div class="note-stage-icon">2</div>
          <div v-for="(n) in 4"
            :key="n"
            class="note-stage-line"
          ></div>
          <div class="note-stage-icon">3</div>
        </div>
      </div>

      <div class="note-part">
        <div class="note-part-head">
          <div class="note-part-title">第一站：開胃點心</div>
          <div class="note-part-pre">時間 2 小時</div>
          <img class="note-part-icon" src="@/assets/img/other/deco_wave.png" alt="logo">
        </div>
        <div class="note-part-text">剛到基隆市區，可以在基隆火車站前，看看新蓋的轉運站，不遠處是海洋，偶爾會看見黑鳶在海上盤旋準備抓魚。你走下階梯，走進孝三路，一整排都是住在市區的基隆人的美食地。這條街區，我推薦三個開胃點心：廖媽媽珍奶、豬肝腸、遠東水煎包。</div>
      </div>

      <div class="note-img">
        <div class="note-img-column">
          <div class="note-img-photo"></div>
          <div class="note-img-pre">廖媽媽珍奶</div>
        </div>
        <div class="note-img-column">
          <div class="note-img-photo"></div>
          <div class="note-img-pre">廖媽媽珍奶</div>
        </div>
        <div class="note-img-column">
          <div class="note-img-photo"></div>
          <div class="note-img-pre">廖媽媽珍奶</div>
        </div>
      </div>

      <div class="note-block">
        <div class="note-block-head">補充區塊的標題</div>
        <div class="note-block-text">裡面有一天美軍駐防台灣時就有的酒吧，一旁有一間「無用學堂」，偶爾會開辦小活動，可以多關注。沿路上，你會看見許多路邊咖啡廳，基隆是台灣咖啡店密度最高的地區，每走一條街，就會閃見幾間店。我推薦可以沿路走到：委託行、崁仔頂二樓、仁愛市場</div>
      </div>

      <div class="note-story">
        <div class="note-story-img"></div>
        <div class="note-story-column">
          <div>
            <div class="note-story-head">小標題</div>
            <img class="note-story-icon" src="@/assets/img/other/deco_wave.png" alt="logo">
            <div class="note-story-text">用來描述影片或補充影片內容的區塊。建議文字不要太多，兩三行就好。</div>
          </div>
          <div class="note-story-des">影片說明</div>
        </div>
      </div>

    </noteMain>

    <articleDeco2 />    
    <articleRecommend :list="storeList" />
    <articleFix />

  </articleOuter>
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

.note {

  

  &-stage {
    margin-top: 100px;

    &-row {
      display: flex;
      align-items: center;
    }

    &-icon {
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url('../../assets/img/step/step_c_a.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      color: white;
    }

    &-line {
      width: 10px;
      height: 1px;
      margin-right: 4px;
      background-color: #48b4d8;
    }

  }

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

  &-img {
    margin-top: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-column {
    }

    &-photo {
      width: 350px;
      height: 320px;
      border-radius: 16px;
      background-image: url('../../assets/img/scene/scene1.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }

    &-pre {
      margin-top: 12px;
      font-size: 14px;
      text-align: center;
      color: #5f6983;
    }
    
  }

  &-block {
    margin-top: 90px;
    display: flex;
    justify-content: space-between;

    &-head {
      width: 400px;
      font-size: 30px;
      font-weight: bold;
    }

    &-text {
      width: 644px;
      font-size: 17px;
    }
    
  }

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
      background-image: url('../../assets/img/scene/scene1.jpg');
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

@media( max-width: 1023px ){

.note {



}
}

</style>
