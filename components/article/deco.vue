<template>
  <div class="article-deco">
    <div  v-for="(n) in 10"
      :key="n"
      class="article-deco-dot"
    ></div>
  </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>

.article {

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
    
}

@media( max-width: 1023px ){

.know-more {

}

}

</style>
