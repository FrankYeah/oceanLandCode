<template>
    <div class="box">
        <div class="title">陽明海洋文化藝術館</div>
        <img class="wave" src="@/assets/img/other/deco_wave.png" alt="logo">
        <div class="content">為創造一個永續的創意發生機制，2021年星濱山成立「永晝海濱美術館」，透過藝術、教育以及地方故事整合，沿著海港構築一座地域型的無牆美。</div>
        <div class="item-box">
            <div class="item">
                <div class="point-box">
                    <div class="point"></div>
                </div>
                <div class="item-content">進駐正濱漁港，將插畫、錄像、植物、攝影藝術創作，結合漁網師傅、海女、修船廠師傅等當地職人專業。</div>
            </div>
            <div class="item">
                <div class="point-box">
                    <div class="point"></div>
                </div>
                <div class="item-content">教育以及地方故事整合，沿著海港構築一座地域型的無牆美術。</div>
            </div>
            <div class="item">
                <div class="point-box">
                    <div class="point"></div>
                </div>
                <div class="item-content">進駐正濱漁港，將插畫、錄像、植物、攝影藝術創作，結合漁網師傅、海女、修船廠師傅等當地職人專業。</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    margin: auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 644px;

    .title {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
        margin-bottom: 12px;
    }

    .wave {
        margin-bottom: 36px;
        width: 90px;
        height: 6px;
    }

    .content {
        font-size: 17px;
        letter-spacing: 1.7px;
        margin-bottom: 36px;
    }

    .item-box {
        padding-left: 18px;

        .item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;

            .point-box {
                margin-right: 18px;
                height: 26px;
                display: flex;
                align-items: center;

                .point {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: #339fc3;
                }
            }

            .item-content {
                font-size: 17px;
                letter-spacing: 1.7px;
                vertical-align: top;
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    .box {
        width: 100%;
        padding: 0 30px;

        .content {
            width: 100%;
        }

    }
}</style>