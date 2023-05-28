<template>
  <div @click="closePopup" class="member-popup">
    <div @click.stop class="member-popup-box">
      <div
        :style="`background-image: url('${props.member.photo}')`"
        class="member-popup-photo"
      >
        <div class="member-popup-title-box">
          <div class="member-popup-title">{{ props.member.name }}</div>
          <div class="member-popup-en">{{ props.member.en }}</div>
        </div>
        <div class="member-popup-des">{{ props.member.pre }}</div>
      </div>
      <div class="member-popup-main">
        <img
          @click="closePopup"
          class="member-popup-close"
          src="@/assets/img/regular/close_b.png"
          alt="deco_wave"
        />
        <div class="member-popup-head">介紹</div>
        <div class="member-popup-text">{{ props.member.des }}</div>
        <div class="member-popup-social">
          <a
            class="member-popup-social-href"
            :href="`${props.member.mail}`"
            target="_blank"
          >
            <img
              class="member-popup-social-icon"
              src="@/assets/img/author/author_email_n.png"
              alt="deco_wave"
            />
          </a>
          <a
            class="member-popup-social-href"
            :href="`${props.member.website}`"
            target="_blank"
          >
            <img
              class="member-popup-social-icon"
              src="@/assets/img/author/author_web_n.png"
              alt="deco_wave"
            />
          </a>
          <a
            class="member-popup-social-href"
            :href="`${props.member.ig}`"
            target="_blank"
          >
            <img
              class="member-popup-social-icon"
              src="@/assets/img/author/author_ig_n.png"
              alt="deco_wave"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="mobile-popup-box">
      <div
        class="bg-box"
        :style="`background-image: url('${props.member.photo}')`"
      >
        <div class="title-box">
          <div class="title">{{ props.member.name }}</div>
          <div class="en">{{ props.member.en }}</div>
        </div>
        <div class="des">{{ props.member.pre }}</div>
        <img
          @click="closePopup"
          class="close"
          src="@/assets/img/regular/close_b.png"
          alt="deco_wave"
        />
      </div>
      <div class="content-box">
        <div class="head">介紹</div>
        <div class="text">{{ props.member.des }}</div>
        <div class="social">
          <a class="social-href" :href="`${props.member.mail}`" target="_blank">
            <img
              class="social-icon"
              src="@/assets/img/author/author_email_n.png"
              alt="deco_wave"
            />
          </a>
          <a
            class="social-href"
            :href="`${props.member.website}`"
            target="_blank"
          >
            <img
              class="social-icon"
              src="@/assets/img/author/author_web_n.png"
              alt="deco_wave"
            />
          </a>
          <a class="social-href" :href="`${props.member.ig}`" target="_blank">
            <img
              class="social-icon"
              src="@/assets/img/author/author_ig_n.png"
              alt="deco_wave"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["closePopup"]);

function closePopup() {
  emits("closePopup", false);
}

const props = defineProps(["member"]);
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
.mobile-popup-box {
  display: none;
}
@media screen and (max-width: 1200px) {
  .member-popup-box {
    display: none;
  }
  .member-popup {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;

    .mobile-popup-box {
      display: block;
      width: 80vw;
      height: 85vh;
      border-radius: 16px;
      background-color: #fff;
      
      .bg-box {
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 24px;
        position: relative;
        .title-box {
          display: flex;
          margin-bottom: 8px;
          .title {
            font-family: NotoSansCJKtc;
            font-size: 20px;
            font-weight: bold;
            line-height: 1.5;
            letter-spacing: 1px;
            color: #fff;
            margin-right: 8px;
          }
          .en {
            font-family: Lato;
            font-size: 18px;
            font-weight: 500;
            line-height: 1.56;
            letter-spacing: 0.9px;
            color: #fff;
          }
        }
        .des {
          font-family: NotoSansCJKtc;
          font-size: 15px;
          line-height: 1.87;
          letter-spacing: 1.5px;
          color: #fff;
        }
        .close {
          width: 23px;
          height: 23px;
          cursor: pointer;
          position: absolute;
          top: 30px;
          right: 30px;
        }
      }
      .content-box {
        padding: 24px;
        background-color: #fff;
        height: 60%;
       overflow: scroll;
        .head {
          font-family: NotoSansCJKtc;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.5;
          letter-spacing: 1px;
          color: #7ca1b5;
          margin-bottom: 18px;
        }
        .text {
          font-family: NotoSansCJKtc;
          font-size: 16px;
          line-height: 1.88;
          letter-spacing: 1.6px;
          color: #000;
          margin-bottom: 36px;
        }
        .social{
          display: flex;
          .social-href {
            margin-right: 12px;
          }

        }
      }
    }
  }
}
</style>
