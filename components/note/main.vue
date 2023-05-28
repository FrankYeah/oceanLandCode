<template>
  <div class="note-main">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps(["en"]);
</script>

<style lang="scss" scoped>
.note {
  &-main {
    max-width: 1088px;
    margin: auto;
  }
}

@media screen and (max-width: 1200px) {
  .note {
    &-main {
      width: 100%;
    }
  }
}
</style>
