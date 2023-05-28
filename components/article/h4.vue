<template>
    <div class="box">
        <div class="title">小標題</div>
        <img class="wave" src="@/assets/img/other/deco_wave.png" alt="logo">
        <div class="context">
            為創造一個永續的創意發生機制，2021年星濱山成立「永晝海濱美術館」，透過藝術、教育以及地方故事整合，沿著海港構築一座地域型的無牆美術館。2022年主題為「　　　　　　　　　　　　　　　　　　　」，共10組展覽內容、多場導覽，一起探尋基隆山海貌。
        </div>
        <div class="item-box">
            <div class="item">
                <div class="number">1.</div>
                <div class="item-content">進駐正濱漁港，將插畫、錄像、植物、攝影藝術創作，結合漁網師傅、海女、修船廠師傅等當地職人專業。</div>
            </div>
            <div class="item">
                <div class="number">2.</div>
                <div class="item-content">教育以及地方故事整合，沿著海港構築一座地域型的無牆美術。</div>
            </div>
            <div class="item">
                <div class="number">3.</div>
                <div class="item-content">進駐正濱漁港，將插畫、錄像、植物、攝影藝術創作，結合漁網師傅、海女、修船廠師傅等當地職人專業。</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 60px;
    width: 644px;

    .title {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
        margin-bottom: 12px;
    }

    .wave {
        width: 90px;
        height: 6px;
        margin-bottom: 36px;
    }

    .context {
        font-size: 17px;
        letter-spacing: 1.7px;
        margin-bottom: 30px;
    }

    .item-box {
        padding-left: 16px;

        .item {
            margin-bottom: 20px;
            display: flex;
            align-items: flex-start;

            .number {
                font-size: 17px;
                letter-spacing: 1.7px;
                color: #339fc3;
                margin-right: 12px;
            }

            .item-content {
                font-size: 17px;
                letter-spacing: 1.7px;
            }
        }
    }

}

@media screen and (max-width: 1200px) {
    .box {
        margin-top: 100px;
        width: 100%;
        padding: 0 30px;

        .title {
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 1px;
            margin-bottom: 12px;
        }

        .wave {
            margin-bottom: 34px;
        }

        .context {
            width: 100%;
            font-size: 16px;
            letter-spacing: 1.6px;
            margin-bottom: 20px;
        }

        .item-box {
            padding-left: 12px;

            .item {
                margin-bottom: 16px;
                display: flex;
                align-items: flex-start;

                .number {
                    font-size: 16px;
                    letter-spacing: 1.6px;
                    margin-right: 12px;
                }

                .item-content {
                    font-size: 16px;
                    letter-spacing: 1.6px;
                }
            }
        }

    }
}</style>