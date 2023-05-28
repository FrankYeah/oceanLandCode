<template>
  <div class="article-deco2">
    <div v-for="(n) in 120" :key="n" class="article-deco2-dot"></div>
  </div>
  <div class="mobile-deco2">
    <div v-for="(n) in 20" :key="n" class="dot"></div>
  </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>
.article {

  &-deco2 {
    margin: 100px auto 0px;
    display: flex;
    justify-content: space-evenly;

    &-dot {
      width: 2px;
      height: 13px;
      background-color: #70b3ee;
    }
  }

}

.mobile-deco2 {
  display: none;
}

@media(max-width: 1023px) {
  .article-deco2 {
    display: none;
  }

  .mobile-deco2 {
    margin: 100px auto 0px;
    display: flex;
    justify-content: space-evenly;

    .dot {
      width: 2px;
      height: 12px;
      background-color: #70b3ee;
    }
  }

}
</style>
