<template>
<div class="member-popup">
      <div class="member-popup-box">
        <div :style="`background-image: url('${props.member.photo}')`"
            class="member-popup-img"
        >
          <div class="member-popup-title-box">
            <div class="member-popup-title">{{ props.member.name }}</div>
            <div class="member-popup-en">{{ props.member.en }}</div>
          </div>
          <div class="member-popup-des">{{ props.member.pre }}</div>
        </div>
        <div class="member-popup-main">
          <img @click="closePopup" class="member-group-close" src="@/assets/img/regular/close_n.png" alt="deco_wave">
          <div class="member-popup-head">介紹</div>
          <div class="member-popup-text">{{ props.member.desc }}</div>
          <div class="member-popup-social">
            <a class="member-group-social-href" :href="`${props.member.mail}`" target="_blank">
              <img class="member-group-social-icon" src="@/assets/img/author/author_email_n.png" alt="deco_wave">
            </a>
            <a class="member-group-social-href" :href="`${props.member.website}`" target="_blank">
              <img class="member-group-social-icon" src="@/assets/img/author/author_web_n.png" alt="deco_wave">
            </a>
            <a class="member-group-social-href" :href="`${props.member.ig}`" target="_blank">
              <img class="member-group-social-icon" src="@/assets/img/author/author_ig_h.png" alt="deco_wave">
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

    &-box {
      
    }

    &-img {
      
    }

    &-title-box {
      
    }

    &-title {
      
    }

    &-en {
      
    }

    &-des {
      
    }

    &-main {
      
    }

    &-close {
      
    }

    &-head {
      
    }

    &-text {
      
    }

    &-social {
      
    }

    &-social-href {
      
    }

    &-social-icon {
      
    }
    
  }

@media( max-width: 1023px ){

.to-top {
  
}

}

</style>
