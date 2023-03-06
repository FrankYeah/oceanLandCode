<template>
  <nuxt-link :to="`/tour/${props.tour.url}`" class="tour">
    <div :style="`background-image: url('${props.tour.bg}')`"
      class="tour-bg"
    >
      <div class="tour-title">{{ props.tour.name }}</div>
      <div :style="`background-image: url('${props.tour.writer}')`"
        class="tour-writer"
      ></div>
    </div>
    <div class="tour-text">{{ props.tour.des }}</div>
    <div class="tour-line"></div>
    <div class="tour-collect">
      <div class="tour-collect-box">
        <div class="tour-collect-person"></div>
        <div class="tour-collect-text">+1,380 人已收藏</div>
      </div>
      <img class="tour-collect-icon" src="@/assets/img/regular/like_n.png" alt="like_n">
    </div>
  </nuxt-link>
</template>

<script setup>

const props = defineProps(['tour'])

</script>

<style lang="scss" scoped>

.tour {
  width: 384px;
  border-radius: 16px;
  background-color: white;
  
  &-bg {
    height: 240px;
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

@media( max-width: 1023px ){

.tour-list {
  

}

}

</style>
