<template>
    <div class="progress-bar" >
      <div class="progress-value"  :style="{ height: 100-progress + '%' }"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      progress: {
        type: Number,
        required: true,
        validator: (value) => value >= 0 && value <= 100
      }
    }
  };
  </script>
  
  <style scoped>
  .progress-bar {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
    border: solid 1px #8db3c8;
    height: 220px;
    width: 0;
  }
  .progress-value {
    background-color: #7ca1b5;
    border-radius: 4px;
    width: 4px;
    margin-top: -1px;
  }
  </style>
  