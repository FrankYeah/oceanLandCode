<template>
  <div class="article-main">
      <slot />
  </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>

.article {

  &-main {
    max-width: 812px;
    margin: auto;
  }
    
}

@media( max-width: 1023px ){

.know-more {

}

}

</style>
