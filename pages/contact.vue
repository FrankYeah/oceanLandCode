<template>
  <div class="contact">
    <div class="contact-outer">
      <headName
        class="contact-title"
        :en="'( JOIN IN )'"
        :text="'加入 / 合作'"
      />
      <div class="contact-box">
        <h2 class="contact-head">收到您的訊息後，我們將盡快回覆您</h2>
        <h2 class="contact-text">以下欄位皆為必填</h2>

        <div class="contact-row">
          <div class="contact-title-box">
            <h2 class="contact-icon">※</h2>
            <h2 class="contact-name">合作項目</h2>
          </div>

          <el-select
            class="contact-select"
            v-model="inputInfo.item"
            placeholder="選擇合作項目"
          >
            <el-option
              v-for="(work, index) in workList"
              :key="index"
              :label="work"
              :value="work"
            >
            </el-option>
          </el-select>
        </div>

        <div class="contact-row">
          <div class="contact-title-box">
            <h2 class="contact-icon">※</h2>
            <h2 class="contact-name">您的稱呼</h2>
          </div>
          <el-input
            class="contact-input"
            v-model="inputInfo.name"
            maxlength="50"
            placeholder="如何稱呼您？"
          ></el-input>
        </div>

        <div class="contact-row">
          <div class="contact-title-box">
            <h2 class="contact-icon">※</h2>
            <h2 class="contact-name">聯繫方式</h2>
          </div>
          <el-input
            class="contact-input"
            v-model="inputInfo.contact"
            maxlength="50"
            placeholder="LINE / FB / IG / 電子郵件 / 電話"
          ></el-input>
        </div>

        <div class="contact-row">
          <div class="contact-title-box">
            <h2 class="contact-icon">※</h2>
            <h2 class="contact-name">來信說明</h2>
          </div>
          <el-input
            class="contact-textarea"
            v-model="inputInfo.text"
            maxlength="200"
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 10 }"
            placeholder="描述"
          ></el-input>
        </div>

        <div class="contact-btn-box">
          <h2 class="contact-btn">送出</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const workList = reactive([
  "申請駐地記者 / 專欄",
  "投稿店家資訊",
  "投稿活動",
  "工商合作",
  "其他",
]);

const inputInfo = reactive({
  item: "",
  name: "",
  contact: "",
  text: "",
});
</script>

<style>
.el-textarea__inner {
  height: 48px;
  border: solid 1px #8db3c8;
  border-radius: 6px;
}

.el-input__wrapper {
  height: 48px;
  border: solid 1px #8db3c8;
  border-radius: 6px;
}
</style>

<style lang="scss" scoped>
.contact {
  padding: 120px 0px 200px;
  background-color: #f6f9fc;

  &-outer {
  }

  &-title {
  }

  &-box {
    width: 812px;
    margin: 60px auto 0px;
    padding: 60px 128px;
    background-color: white;
    border-radius: 8px;
  }

  &-head {
    font-size: 18px;
    font-weight: bold;
  }
  &-title-box {
    display: flex;
  }
  &-text {
    margin-top: 12px;
    color: #4d7083;
  }

  &-row {
    display: flex;
    align-items: center;
    margin-top: 36px;
  }

  &-icon {
    margin-right: 8px;
    font-size: 18px;
  }

  &-name {
    margin-right: 37px;
    font-size: 18px;
  }

  &-select {
    width: 400px;
    border-radius: 6px;
  }

  &-input {
    width: 400px;
    border-radius: 6px;
  }

  &-textarea {
    width: 400px;
    border-radius: 6px;
  }

  &-btn-box {
    display: flex;
    justify-content: flex-end;
    margin-top: 36px;
  }

  &-btn {
    width: 101px;
    height: 53px;
    margin-right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #bcbcbc;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
}

@media screen and (max-width: 1200px) {
  .contact {
    &-box {
      width: 90%;
      margin: 24px auto 0px;
      padding: 24px;
    }
    &-title {
      width: 100%;
      margin: 0;
    }
    &-head {
      font-family: NotoSansCJKtc;
      font-size: 16px;
      font-weight: bold;
      line-height: 1.88;
      letter-spacing: 1.6px;
    }
    &-title-box {
      margin-bottom: 9px;
    }
    &-text {
      font-family: NotoSansCJKtc;
      font-size: 16px;
      line-height: 1.88;
      letter-spacing: 1.6px;
      text-align: center;
    }
    &-row {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 24px;
    }
    &-select {
      width: 100%;
    }
    &-input {
      width: 100%;
    }
    &-textarea {
      width: 100%;
    }
    &-btn-box {
      justify-content: flex-start;
      margin-top: 24px;
    }
    &-btn {
      font-family: NotoSansCJKtc;
      font-size: 15px;
      font-weight: 500;
      line-height: 2.4;
      letter-spacing: 1.5px;
      width: 79px;
      height: 42px;
    }
  }
}
</style>
