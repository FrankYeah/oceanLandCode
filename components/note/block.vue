<template>
  <div class="note-block">
        <div class="note-block-head">補充區塊的標題</div>
        <div class="note-block-text">裡面有一天美軍駐防台灣時就有的酒吧，一旁有一間「無用學堂」，偶爾會開辦小活動，可以多關注。沿路上，你會看見許多路邊咖啡廳，基隆是台灣咖啡店密度最高的地區，每走一條街，就會閃見幾間店。我推薦可以沿路走到：委託行、崁仔頂二樓、仁愛市場</div>
      </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>

.note {
    
    &-block {
    margin-top: 90px;
    display: flex;
    justify-content: space-between;

    &-head {
      width: 400px;
      font-size: 30px;
      font-weight: bold;
    }

    &-text {
      width: 644px;
      font-size: 17px;
    }
    
  }
}

@media( max-width: 1023px ){

.note {

}

}

</style>
