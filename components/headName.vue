<template>
  <div class="head-name">
    <div class="head-name-en">{{ props.en }}</div>
    <div class="head-name-title">{{ props.text }}</div>
    <img class="head-name-wave" src="@/assets/img/other/deco_wave.png" alt="logo">
  </div>
</template>

<script setup>

const props = defineProps(['text', 'en'])

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

  &-wave {
    margin-top: 12px;
  }

}

@media( max-width: 1023px ){

.know-more {

}

}

</style>
