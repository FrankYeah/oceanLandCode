<template>
  <div class="head-name">
    <h2 class="head-name-en">{{ props.en }}</h2>
    <div class="head-name-title-box">
      <h3 class="head-name-title">{{ props.text }}</h3>
      <h3 class="head-name-title2">{{ props.text2 }}</h3>
    </div>
    <img class="head-name-wave" src="@/assets/img/other/deco_wave.png" alt="logo">
  </div>
</template>

<script setup>

const props = defineProps(['text','text2' , 'en'])

</script>

<style lang="scss" scoped>

.head-name {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-en {
    font-weight: bold;
    font-size: 14px;
    color: #7ca1b5;
  }

  &-title {
    margin-top: 10px;
    font-weight: bold;
    line-height: 1;
    font-size: 36px;
  }

  &-title2 {
    display: none;
  }

  &-wave {
    margin-top: 12px;
  }

}

@media screen and (max-width: 1200px){

.head{
  &-name{
    margin-left: 30px;
    justify-content: start;
    &-en{
      font-size: 14px;
      letter-spacing: 1.4px;
    }
    &-title-box{
      display: flex;
    }
    &-title{
      font-size: 28px;
      letter-spacing: 1.4px;
    }
    &-title2{
      display: block;
      margin-left: 10px;
      font-size: 24px;
      letter-spacing: 1.2px;
      font-family: "authenia";
      color: #48b4d8;
      transform: rotate(-6deg);
    }
    &-wave{
      width: 60px;
      height: 4px;
    }
  }
}

}



</style>
