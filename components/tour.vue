<template>
  <nuxt-link :to="`/tour/20230305`" >
    <div class="tour">
      <div :style="`background-image: url('${props.tour.coverImage}')`"
      class="tour-bg"
    >
      <h2 class="tour-title">{{ props.tour.title }}</h2>
      <div :style="`background-image: url('${props.tour.coverImage}')`"
        class="tour-writer"
      ></div>
    </div>
    <h2 class="tour-text">{{ props.tour.title }}</h2>
    <div class="tour-line"></div>
    <div class="tour-collect">
      <div class="tour-collect-box">
        <div class="tour-collect-person"></div>
        <h3 class="tour-collect-text">+1,380 人已收藏</h3>
      </div>
      <img class="tour-collect-icon" src="@/assets/img/regular/like_n.png" alt="like_n">
    </div>
    </div>
   
  </nuxt-link>
</template>

<script setup>

const props = defineProps(['tour'])

</script>

<style lang="scss" scoped>

.tour {
  width: 280px;
    
  &-bg {
    border-radius: 14px 14px 0px 0px;
    height: 173px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px 24px 20px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
  }
  
  &-title {
    font-size: 20px;
    font-weight: bold;
    color: white;
  }
  
  &-writer {
    width: 36px;
    height: 36px;
    border-radius: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
  }
  
  &-text {
    padding: 20px 24px;
    height: 80px;
    background-color: white;
    text-align: left;
  }

  &-line {
    height: 1px;
    background-color: #e8e8e8;
  }
  
  &-collect {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px 24px;
    border-radius: 0px 0px 14px 14px ;
    background-color: #fff;
    
    &-box {
      display: flex;
      align-items: center;
      
    }
    
    &-person {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      background-color: black;
    }
    
    &-text {
      margin-left: 12px;
    }
    
    &-icon {
      width: 36px;
      height: 36px;
      cursor: pointer;
    }
    
  }

}

@media screen and (max-width: 1200px){
  .tour {
    width: 294px;
    &-bg {
      height: 160px;
      border-radius: 10px 10px 0px 0px;
    }
  }
}

</style>
