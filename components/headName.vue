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

  &-en {

  }

  &-title {
    
  }

  &-wave {
    
  }

}

@media( max-width: 1023px ){

.know-more {

}

}

</style>
