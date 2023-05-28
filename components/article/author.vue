<template>
  <div class="article-author">
    <div class="article-author-head-box">
      <div class="article-author-line-short"></div>
      <div class="article-author-head">AUTHOR</div>
      <div class="article-author-line-short"></div>
    </div>
    <div class="article-author-box">
      <div class="article-author-logo-box">
        <div class="article-author-logo"></div>
      </div>
      <div class="article-author-column">
        <div class="article-author-title">特約作者</div>
        <div class="article-author-name">西打藍</div>
        <div class="article-author-text">我喜歡寫字，工作前三年，我在雜誌、報社、網路媒體擔任文字記者，跑過移民工、人文、科技線，也曾至越南、印尼、美國採訪。</div>
        <div class="article-author-row">
          <a class="article-author-href" :href="``" target="_blank">
            <img class="article-author-icon" src="@/assets/img/author/author_email_n.png" alt="deco_wave">
          </a>
          <a class="article-author-href" :href="``" target="_blank">
            <img class="article-author-icon" src="@/assets/img/author/author_web_n.png" alt="deco_wave">
          </a>
          <a class="article-author-href" :href="``" target="_blank">
            <img class="article-author-icon" src="@/assets/img/author/author_ig_n.png" alt="deco_wave">
          </a>
          <a class="article-author-href" :href="``" target="_blank">
            <img class="article-author-icon" src="@/assets/img/author/author_fb_n.png" alt="deco_wave">
          </a>
        </div>
      </div>
    </div>
    <div class="mobile-box">
      <div class="title-box">
        <div class="author-box">
          <div class="logo"></div>
        </div>
        <div class="title-text-box">
          <div class="title1">特約作者</div>
          <div class="title2">西打藍</div>
        </div>
      </div>
      <div class="content">我喜歡寫字，工作前三年，我在雜誌、報社、網路媒體擔任文字記者，跑過移民工、人文、科技線。</div>
      <div class="btn-box">
        <a class="icon-href" :href="``">
          <img class="icon" src="@/assets/img/author/author_email_n.png" alt="deco_wave">
        </a>
        <a class="icon-href" :href="``" target="_blank">
          <img class="icon" src="@/assets/img/author/author_web_n.png" alt="deco_wave">
        </a>
        <a class="icon-href" :href="``" target="_blank">
          <img class="icon" src="@/assets/img/author/author_ig_n.png" alt="deco_wave">
        </a>
        <a class="icon-href" :href="``" target="_blank">
          <img class="icon" src="@/assets/img/author/author_fb_n.png" alt="deco_wave">
        </a>
      </div>
    </div>
    <div class="article-author-line"></div>
  </div>
</template>

<script setup>

const props = defineProps(['en'])

</script>

<style lang="scss" scoped>
.article {

  &-author {
    max-width: 812px;
    margin: 106px auto 0px;

    &-head-box {
      display: flex;
      align-items: center;
    }

    &-line-short {
      width: 45%;
      height: 1px;
      background-color: #7ca1b5;
    }

    &-head {
      margin: 0px 18px;
      font-size: 36px;
      font-weight: bold;
      color: #7ca1b5;
    }

    &-box {
      display: flex;
      margin: 20px 84px 36px;
    }

    &-logo-box {
      width: 76px;
      height: 76px;
      border-radius: 100%;
      border: solid 1px #48b4d8;
    }

    &-logo {
      width: 76px;
      height: 76px;
      background-color: #70b3ee;
      border-radius: 100%;
    }

    &-column {
      margin-left: 22px;
    }

    &-title {
      font-size: 14px;
      color: #7ca1b5;
    }

    &-name {
      margin-top: 4px;
      font-size: 20px;
      font-weight: bold;
    }

    &-text {
      width: 548px;
      margin-top: 12px;
    }

    &-row {
      margin-top: 24px;
      display: flex;
      align-items: center;
    }

    &-href {
      margin-right: 12px;
    }

    &-icon {
      width: 36px;
      height: 36px;
    }

    &-line {
      height: 1px;
      background-color: #7ca1b5;
    }

  }

}
.mobile-box {
  display: none;
}
@media screen and (max-width: 1200px) {
  .article {
    &-author {
      max-width: 330px;
      margin: auto;

      &-box {
        display: none;
      }

      .mobile-box {
        padding: 18px 16px 30px 16px;
        display: block;

        .title-box {
          display: flex;
          align-items: center;
          margin-bottom: 16px;

          .author-box {
            width: 84px;
            height: 84px;
            border-radius: 50%;
            background-color: #70b3ee;
            margin-right: 16px;
          }

          .title-text-box {
            .title1 {
              font-size: 14px;
              font-weight: 500;
              letter-spacing: 1.4px;
              color: #7ca1b5;
            }

            .title2 {
              font-size: 20px;
              font-weight: bold;
              letter-spacing: 1px;
            }
          }
        }



        .content {
          font-size: 15px;
          letter-spacing: 1.5px;
          margin-bottom: 36px;
        }

        .btn-box {
          display: flex;

          .icon-href {
            margin-right: 12px;
            width: 36px;
            height: 36px;
            overflow: hidden;

            .icon {
              width: 36px;
              height: 36px;
            }
          }
        }
      }

    }
  }

}
</style>
