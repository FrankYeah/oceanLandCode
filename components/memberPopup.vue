<template>
<div @click="closePopup" class="member-popup">
    <div @click.stop class="member-popup-box">
      <div :style="`background-image: url('${props.member.photo}')`"
          class="member-popup-photo"
      >
        <div class="member-popup-title-box">
          <div class="member-popup-title">{{ props.member.name }}</div>
          <div class="member-popup-en">{{ props.member.en }}</div>
        </div>
        <div class="member-popup-des">{{ props.member.pre }}</div>
      </div>
      <div class="member-popup-main">
        <img @click="closePopup" class="member-popup-close" src="@/assets/img/regular/close_b.png" alt="deco_wave">
        <div class="member-popup-head">介紹</div>
        <div class="member-popup-text">{{ props.member.des }}</div>
        <div class="member-popup-social">
          <a class="member-popup-social-href" :href="`${props.member.mail}`" target="_blank">
            <img class="member-popup-social-icon" src="@/assets/img/author/author_email_n.png" alt="deco_wave">
          </a>
          <a class="member-popup-social-href" :href="`${props.member.website}`" target="_blank">
            <img class="member-popup-social-icon" src="@/assets/img/author/author_web_n.png" alt="deco_wave">
          </a>
          <a class="member-popup-social-href" :href="`${props.member.ig}`" target="_blank">
            <img class="member-popup-social-icon" src="@/assets/img/author/author_ig_n.png" alt="deco_wave">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const emits = defineEmits(['closePopup'])

function closePopup() {
  emits('closePopup', false)
}

const props = defineProps(['member'])

</script>

<style lang="scss" scoped>

.member-popup {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);

    &-box {
      position: relative;
      width: 812px;
      height: 540px;
      display: flex;
      border-radius: 16px;
      background-color: white;
    }

    &-photo {
      width: 400px;
      height: 100%;
      padding: 36px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      color: white;
    }

    &-title-box {
      display: flex;
      align-items: center;
    }

    &-title {
      font-size: 24px;
      font-weight: bold;
    }

    &-en {
      margin-left: 12px;
      font-size: 20px;
    }

    &-des {
      margin-top: 11px;
    }

    &-main {
      position: relative;
      width: 412px;
      padding: 24px 48px 36px;
    }

    &-close {
      position: absolute;
      top: 30px;
      right: 30px;
    }

    &-head {
      margin-top: 48px;
      font-size: 20px;
      color: #7ca1b5;
    }

    &-text {
      margin-top: 24px;
      line-height: 1.7;
      letter-spacing: 1.7px;

    }

    &-social {
      position: absolute;
      bottom: 36px;
      left: 48px;
      display: flex;
      align-items: center;
    }

    &-social-href {
      margin-right: 12px;
    }

    &-social-icon {
      width: 36px;
      height: 36px;
      cursor: pointer;
    }
    
  }

@media( max-width: 1023px ){

.to-top {
  
}

}

</style>
