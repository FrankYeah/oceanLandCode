<template>
  <div class="news">
    <div class="news-column">
      <div class="news-time">
        <div>WED.</div>
        <div>2023.01.04</div>
      </div>
      <img class="news-icon" src="@/assets/img/regular/view_n.png" alt="logo">
    </div>
    <div class="news-column">
      <div class="news-head">首座寵物公園落腳暖暖運動公園，預計明年六月前完成啟用</div>
      <div class="news-text">基隆市除今年於各區辦理狗狗森友會活動，提供飼主與毛小孩共同報名參加狗狗闖關遊戲、搭船遊基隆港、搭船登基隆嶼，共度開心周末休閒時光外，市府積極尋找長期供狗狗遊樂空間，打造基隆首座寵物公園。</div>
    </div>
  </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>

.news {
  width: 536px;
  padding: 24px 30px;
  display: flex;
  border-radius: 8px;
  background-color: #fff;

  &-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:first-child {
      margin-right: 12px;
    }
  }

  &-time {
    font-weight: bold;
    color: #7ca1b5;
  }

  &-icon {
    width: 36px;
    height: 36px;
    cursor: pointer;
  }

  &-head {
    font-size: 20px;
    font-weight: bold;
  }

  &-text {
    margin-top: 16px;
  }
  
}

@media screen and (max-width: 1200px){

.news {
  padding: 24px;
  flex-direction: column;
  width: 80vw;
  &-column:first-child {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
  }
}

}

</style>
