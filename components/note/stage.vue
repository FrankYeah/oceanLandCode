<template>
  <div class="note-stage">
    <div class="note-stage-row">
      <div class="note-stage-icon">1</div>
      <div v-for="n in 4" :key="n" class="note-stage-line"></div>
      <div class="note-stage-icon">2</div>
      <div v-for="n in 4" :key="n" class="note-stage-line"></div>
      <div class="note-stage-icon">3</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["en"]);
</script>

<style lang="scss" scoped>
.note {
  &-stage {
    margin-top: 100px;

    &-row {
      display: flex;
      align-items: center;
    }

    &-icon {
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("../../assets/img/step/step_c_a.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      color: white;
    }

    &-line {
      width: 10px;
      height: 1px;
      margin-right: 4px;
      background-color: #48b4d8;
    }
  }
}

@media screen and (max-width: 1200px) {
  .note {
    &-stage {
      &-row {
        justify-content: center;
      }
    }
  }
}
</style>
