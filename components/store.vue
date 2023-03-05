<template>
  <div class="store">
    <div @click="isPopup = true" class="store-box">
      <div :style="`background-image: url('${props.store.bg[1]}')`"
       class="store-bg">
        <div class="store-bg-row">
          <btnType v-for="(tag, index) in props.store.tag"
            :key="`${index}${tag}`"
            :text="tag"
            :type="'white'"
            class="store-bg-btn"
          />
        </div>
      </div>
      <div class="store-inner">
        <div class="store-row">
          <div class="store-name">{{ props.store.name }}</div>
          <div class="store-share">
            <nuxt-link class="store-share-link" :to="`/store/${props.store.url}`">
              <img class="store-share-img" src="@/assets/img/regular/view_n.png" alt="view_n">
            </nuxt-link>
            <img class="store-share-collect" src="@/assets/img/regular/like_n.png" alt="like_n">
          </div>
        </div>
        <div class="store-text">{{ props.store.des }}</div>
      </div>
    </div>

    <!-- popup -->
    
    <div v-if="isPopup"
      @click="isPopup = false"
      class="store-popup"
    >
      <div @click.stop class="store-popup-box">
        <img @click="isPopup = false"
         class="store-popup-close"
          src="@/assets/img/regular/close_n.png"
          alt="close"
        >
        <div  :style="`background-image: url('${props.store.bg[1]}')`"
          class="store-popup-bg"
        >
          <div class="store-popup-dot-box">
            <div v-for="(bg, index) in props.store.bg"
              :key="`${index}${bg}`"
              class="store-popup-dot"
            ></div>
          </div>
        </div>
        <div class="store-popup-down">
          <div class="store-popup-row">
            <div class="store-popup-name">{{ props.store.name }}</div>
            <img class="store-popup-collect" src="@/assets/img/regular/like_n.png" alt="like">
          </div>
          <div class="store-popup-row-box">
            <div>
              <div class="store-popup-text">{{ props.store.des }}</div>
              <div class="store-popup-tag-box">
                <btnType v-for="(tag, index) in props.store.tag"
                  :key="`${index}${tag}`"
                  class="store-popup-tag"
                  :text="tag"
                  :type="'sblue'"
                />
              </div>
              <btnType class="store-popup-btn" :text="'詳細介紹'" :type="'light'" />
            </div>
            <div>
              <div class="store-popup-grey">
                <div class="store-popup-grey-row">
                  <img class="store-popup-grey-icon" src="@/assets/img/regular/like_n.png" alt="like">
                  <div class="store-popup-grey-text">{{ props.store.location }}</div>
                </div>
                <div class="store-popup-grey-line"></div>
                <div class="store-popup-grey-row">
                  <img class="store-popup-grey-icon" src="@/assets/img/regular/like_n.png" alt="like">
                  <div class="store-popup-grey-text">{{ props.store.tel }}</div>
                </div>
                <div class="store-popup-grey-line"></div>
                <div class="store-popup-grey-row">
                  <img class="store-popup-grey-icon" src="@/assets/img/regular/like_n.png" alt="like">
                  <div class="store-popup-grey-text" v-html="props.store.time"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

const props = defineProps(['store'])
let isPopup = ref(false)

function test() {
  console.log(isPopup.value)
  isPopup.value = !isPopup.value
}

</script>

<style lang="scss" scoped>

.store {

  &-box {
    width: 384px;
    cursor: pointer;
  }

  &-bg {
    height: 240px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 16px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    border-radius: 16px;
  }

  &-bg-row {
    display: flex;
  }

  &-bg-btn {
    margin-right: 8px;
  }

  &-inner {
    padding: 13px 16px 18px;
  }

  &-row {
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
  }

  &-name {
    font-size: 20px;
    font-weight: bold;
  }

  &-share {
    display: flex;
  }

  &-share-link {
    
  }

  &-share-img {
    
  }

  &-share-collect {
    margin-right: 12px;
  }

  &-text {
    margin-top: 12px;
    text-align: left;
  }

  &-popup {
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
      width: 674px;
      border-radius: 16px;
    }

    &-close {
      position: absolute;
      top: 26px;
      right: 30px;
      width: 36px;
      height: 36px;
      cursor: pointer;
    }

    &-bg {
      height: 350px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    &-dot-box {
      width: 100%;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
    }

    &-dot {
      width: 8px;
      height: 8px;
      margin: 0px 8px;
      border-radius: 100%;
      background-color: white;
      cursor: pointer;
    }

    &-down {
      padding: 30px 36px;
      background-color: white;
    }

    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-name {
      font-size: 24px;
      font-weight: bold;
    }

    &-collect {
      
    }

    &-row-box {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
    }

    &-text {
      text-align: left;
    }

    &-tag-box {
      display: flex;
      margin-top: 18px;
    }

    &-tag {
      margin: 0px 10px 10px 0px;
    }

    &-btn {
      margin: 26px 0px 0px;
      cursor: pointer;
    }

    &-grey {
      width: 224px;
      margin-left: 24px;
      padding: 18px 23px;
      background-color: #f8f8f8;

      &-row {
        display: flex;
      }

      &-icon {
        width: 20px;
        height: 20px;
      }

      &-text {
        margin-left: 8px;
        font-size: 14px;
        text-align: left;
      }

      &-line {
        height: 1px;
        margin: 12px 0px;
        background-color: #e8e8e8;
      }
    }
    
  }
  
}

@media( max-width: 1023px ){

.store {
  

}

}

</style>
