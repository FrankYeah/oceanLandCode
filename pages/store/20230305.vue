<template>
  <articleOuter>
    <articlePre />
   
  
    <articleMain>
      <articleInfo />
      <articleH1 />
      <articleH2 />
      <articleH3 />
      <articleH4 />
      <articleDeco />
      <articleImg />
      <articleContent1 />
      <articleMobileFix/>
    </articleMain>

    <articleAuthor />
    <articleDeco2 />
    <articleRecommend :list="list"/> 
    <articleFix />

  </articleOuter>
</template>

<script lang="ts" setup>

const storeList = reactive([
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    tag: ['綠葉環繞', '不限時'],
    bg: ['https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg', 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/91472862/73a0aa62-5266-4dfb-aaff-e9751f79f667.jpg'],
    location: '基隆市仁愛區仁二路 236 號',
    tel: '02 2428 1159',
    time: `平日：11:00–20:00<br>假日：11:00–22:00`
  },
])
const tourList = reactive([
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
    writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
    writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
    writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
    writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
    writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
    writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  },
  { 
    name: '見書店',
    url: '20230305',
    des: '基隆的文化綠洲──以綠植、乾燥花及木家具陳設的書店空間，令人備感愜意自在。',
    bg: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/46978637/4d0a92f6-f101-4057-92bc-c3b2269d589a.jpg',
    writer: 'https://tour.klcg.gov.tw/media/klcgtour/restaurants/82310881/39f9250e-54c9-4614-9c65-3fdcebd61b13.jpg'
  },
])
const list = {
  storeList:storeList,
  tourList:tourList
}
</script>

<style lang="scss" scoped>

.article {
  
}

@media( max-width: 1023px ){

.article {

}
}

</style>
