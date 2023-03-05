<template>
  <div @click="isPopup = true"
   class="store"
  >
    <div class="store-box">
      <div class="store-bg">
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
    <div v-if="isPopup" class="store-popup">
      <div class="store-popup-box">
        <img @click="isPopup = false"
         class="store-popup-close"
          src="@/assets/img/regular/close_n.png"
          alt="close"
        >
        <div class="store-popup-bg">
          <div class="store-popup-dot-box">
            <div v-for="(bg, index) in props.store.bg"
              :key="`${index}${bg}`"
              class="store-popup-dot"
            ></div>
          </div>
        </div>
        <div class="store-popup-row">
          <div class="store-popup-name"></div>
          <img class="store-popup-collect" src="@/assets/img/regular/like_n.png" alt="like">
        </div>
        <div class="store-popup-text"></div>
        <div class="store-popup-tag-box">
          <btnType v-for="(tag, index) in props.store.tag"
            :key="`${index}${tag}`"
            class="store-popup-tag"
            :text="tag"
            :type="'light'"
          />
        </div>
        <btnType class="store-popup-btn" :text="'詳細介紹'" :type="'blue'" />
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['store'])
const isPopup = ref(false)

</script>

<style lang="scss" scoped>

.store {

  &-box {
    width: 400px;
  }

  &-bg {
    width: 400px;
    height: 240px;
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
  }

  &-popup {

    &-box {
      
    }

    &-close {
      
    }

    &-bg {
      
    }

    &-dot-box {
      
    }

    &-dot {
      
    }

    &-row {
      
    }

    &-name {
      
    }

    &-collect {
      
    }

    &-text {
      
    }

    &-tag-box {
      
    }

    &-tag {
      
    }

    &-btn {
      
    }
    
  }
  
}

@media( max-width: 1023px ){

.store {
  

}

}

</style>
