<template>
  <div class="note-img">
    <div class="note-img-column">
      <div class="note-img-photo"></div>
      <div class="note-img-pre">廖媽媽珍奶</div>
    </div>
    <div class="note-img-column">
      <div class="note-img-photo"></div>
      <div class="note-img-pre">廖媽媽珍奶</div>
    </div>
    <div class="note-img-column">
      <div class="note-img-photo"></div>
      <div class="note-img-pre">廖媽媽珍奶</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["en"]);
</script>

<style lang="scss" scoped>
.note {
  &-img {
    margin-top: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-column {
    }

    &-photo {
      width: 350px;
      height: 320px;
      border-radius: 16px;
      background-image: url("../../assets/img/scene/scene1.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }

    &-pre {
      margin-top: 12px;
      font-size: 14px;
      text-align: center;
      color: #5f6983;
    }
  }
}

@media screen and (max-width: 1200px) {
  .note {
    &-img {
      flex-direction: column;
      &-pre {
       margin-bottom: 20px;
      }
    }
  }
}
</style>
