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
.article-fix {
  display: none;
}


@media screen and (max-width: 1200px) {
  .article {

    &-fix {
      margin-top: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 78px;

      &-href {
        margin-right: 8px;
        cursor: pointer;
      }

      &-icon {
        cursor: pointer;
      }

      &-line {
        margin-right: 8px;
        width: 42px;
        height: 1px;
        background-color: #7ca1b5;
        transform: rotate(90deg);
      }

    }

  }
}
</style>
