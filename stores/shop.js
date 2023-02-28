import { defineStore } from 'pinia'

export const useShopStore = defineStore({
  id: 'shop',
  state: () => ({
    shopList: [],
    shopAll: {
      paint: [
        { name: '畫作1', price: 1000, count: 10, des: '產品描述', img: '', href: 'paint1' },
        { name: '畫作2', price: 2000, count: 5, des: '產品描述', img: '', href: 'paint2' },
        { name: '畫作3', price: 2000, count: 9, des: '產品描述', img: '', href: 'paint3' },
        { name: '畫作4', price: 2000, count: 9, des: '產品描述', img: '', href: 'paint4' },
        { name: '畫作5', price: 2000, count: 9, des: '產品描述', img: '', href: 'paint5' },
      ],
      clothes: [
        { name: '服裝1', price: 1000, count: 10, des: '產品描述', img: '', href: 'clothes1' },
        { name: '服裝2', price: 2000, count: 5, des: '產品描述', img: '', href: 'clothes2' },
        { name: '服裝3', price: 2000, count: 9, des: '產品描述', img: '', href: 'clothes3' },
        { name: '服裝4', price: 2000, count: 9, des: '產品描述', img: '', href: 'clothes4' },
      ],
      book: [
        { name: '以自由之名', price: 1000, count: 10, des: '產品描述', img: '', href: 'book1' },
        { name: '留下來生活', price: 2000, count: 5, des: '產品描述', img: '', href: 'book2' },
        { name: '在遠方醒來', price: 2000, count: 9, des: '產品描述', img: '', href: 'book3' },
      ]
    }
  }),
  actions: {
    addShopItem(item) {
      this.shopList.push(item)
    },
    removeShopItem(index) {
      this.shopList.splice(index, 1)
    }
  },
  persist: {
    key: 'shop', // 設定 localstorage 中的 key
    // 定義要 persist 的狀態
    // 在這裡只 persist shopList 狀態
    // 其他狀態如果需要 persist，也可以在這裡加上去
    state: ['shopList']
  }
})