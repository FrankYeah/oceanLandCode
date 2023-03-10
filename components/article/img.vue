<template>
  <div class="article-img">
    <img class="article-img-photo" src="@/assets/img/scene/scene1.jpg" alt="logo">
    <div class="article-img-text">示範主標超過兩行文字的行距呈現</div>
  </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>

.article {

  &-img {
    margin: 60px 0px 0px;

    &-photo {
      height: 456px;
      margin: auto;
      border-radius: 16px;
    }

    &-text {
      margin-top: 12px;
      font-size: 14px;
      text-align: center;
    }

    &- {
      
    }

    &- {
      
    }

  }
    
}

@media( max-width: 1023px ){

.know-more {

}

}

</style>
