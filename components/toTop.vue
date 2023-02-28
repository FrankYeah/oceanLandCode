<template>
  <div @click="scrollToTop" class="to-top">
    <img v-if="showButton" class="to-top-icon" src="@/assets/img/other/to-top.png" alt="logo">
  </div>
</template>

<script lang="ts" setup>

const scrollTop = ref(0);
const showButton = ref(false);

const handleScroll = () => {
  scrollTop.value = window.scrollY;
  showButton.value = scrollTop.value > 100;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

</script>

<style lang="scss" scoped>

.to-top {
  position: fixed;
  right: 48px;
  bottom: 20vh;

  &-icon {
    width: 48px;
    cursor: pointer;
  }
  
}

@media( max-width: 1023px ){

.to-top {
  

}

}

</style>
