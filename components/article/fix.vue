<template>
  <div class="article-fix">
    <a class="article-fix-href" :href="``" target="_blank">
      <img class="article-fix-icon" src="@/assets/img/share/share_fb_n.png" alt="deco_wave">
    </a>
    <a class="article-fix-href" :href="``" target="_blank">
      <img class="article-fix-icon" src="@/assets/img/share/share_link_n.png" alt="deco_wave">
    </a>
    <a class="article-fix-href" :href="``" target="_blank">
      <img class="article-fix-icon" src="@/assets/img/share/share_email_n.png" alt="deco_wave">
    </a>
    <div class="article-fix-line"></div>
    <img class="article-fix-icon" src="@/assets/img/more/more_collect_a_n.png" alt="logo">
  </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>

.article {

  &-fix {
    position: fixed;
    top: 30vh;
    right: 48px;

    &-href {
      margin-bottom: 16px;
      cursor: pointer;
    }

    &-icon {
      margin-bottom: 16px;
      cursor: pointer;
    }

    &-line {
      width: 42px;
      height: 1px;
      margin-bottom: 16px;
      background-color: #7ca1b5;
    }

  }
    
}

@media( max-width: 1023px ){

.know-more {

}

}

</style>
