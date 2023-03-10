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
}

@media( max-width: 1023px ){

.know-more {

}

}

</style>
