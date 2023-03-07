<template>
  <div class="contact">
    <div class="contact-outer">
      <headName class="contact-title" :en="'( JOIN IN )'" :text="'加入 / 合作'" />
      <div class="contact-box">
        <div class="contact-head">收到您的訊息後，我們將盡快回覆您</div>
        <div class="contact-text">以下欄位皆為必填</div>
        
        <div class="contact-row">
          <div class="contact-icon">※</div>
          <div class="contact-name">合作項目</div>
          <el-select class="contact-select"
            v-model="inputInfo.item"
            placeholder="選擇合作項目"
          >
            <el-option
              v-for="(work, index) in workList"
              :key="index"
              :label="work"
              :value="work">
            </el-option>
          </el-select>
        </div>

        <div class="contact-row">
          <div class="contact-icon">※</div>
          <div class="contact-name">您的稱呼</div>
          <el-input class="contact-input"
            v-model="inputInfo.name"
            maxlength="50"
            placeholder="如何稱呼您？"
          ></el-input>
        </div>

        <div class="contact-row">
          <div class="contact-icon">※</div>
          <div class="contact-name">聯繫方式</div>
          <el-input class="contact-input"
            v-model="inputInfo.contact"
            maxlength="50"
            placeholder="LINE / FB / IG / 電子郵件 / 電話"
          ></el-input>
        </div>

        <div class="contact-row">
          <div class="contact-icon">※</div>
          <div class="contact-name">來信說明</div>
          <el-input class="contact-textarea"
            v-model="inputInfo.text"
            maxlength="200"
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 10}"
            placeholder="描述"
          ></el-input>
        </div>

        <div class="contact-btn-box">
          <div class="contact-btn">送出</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const workList = reactive([
    '申請駐地記者 / 專欄', '投稿店家資訊', '投稿活動', '工商合作', '其他'
])

const inputInfo = reactive({
  item: '',
  name: '',
  contact: '',
  text: ''
})

</script>

<style>

.el-textarea__inner {
  height: 48px;
  border: solid 1px #8db3c8;
}

.el-input__wrapper {
  height: 48px;
  border: solid 1px #8db3c8;
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

@media( max-width: 1023px ){

.contact {

}

}

</style>
