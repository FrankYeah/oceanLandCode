<template>
  <div class="btn-type">
    <div :class="['btn-type-btn',
      {'btn-type-transparent': props.type == 'transparent'},
      {'btn-type-blue': props.type == 'blue'},
      {'btn-type-sblue': props.type == 'sblue'},
      {'btn-type-white': props.type == 'white'},
      {'btn-type-light': props.type == 'light'},
      {'btn-type-round': props.type == 'round'},
    ]"
    >{{ props.text }}</div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps(['type', 'text'])

</script>

<style lang="scss" scoped>

.btn-type {
  display: flex;

  &-btn {

  }

  &-transparent {
    padding: 12px 30px;
    border-radius: 8px;
    border: solid 1px #8db3c8;
    color: #4d7083;
    font-size: 16px;
  }

  &-blue {
    padding: 12px 30px;
    border-radius: 8px;
    background-color: #48b4d8;
    font-size: 20px;
    font-weight: bold;
    color: white;
  }

  &-sblue {
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #e7f0f4;
  }

  &-white {
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  &-light {
    padding: 10px 24px;
    border-radius: 8px;
    background-color: #8db3c8;
    color: white;
  }

  &-round {
    padding: 12px 24px;
    border-radius: 48px;
    border: solid 1px #bcbcbc;
  }
  
}

@media( max-width: 1023px ){

.footer {
  

}

}

</style>
