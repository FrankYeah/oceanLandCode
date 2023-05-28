<template>
  <div class="article">
      <slot />
  </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>

.article {
  padding-bottom: 100px;

  background-color: #f6f9fc;
}

@media screen and (max-width: 1200px){
  .article {
    overflow: hidden;
  }

}

</style>
