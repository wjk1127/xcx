 const app = getApp()

 Page({
   data: {
     background: ["https://img.yituyu.com/gallery/1216/12_aBuX7wG0.jpg!w1500", "https://img.yituyu.com/gallery/1216/18_nZHjp9Hn.jpg!w1500", "https://img.yituyu.com/gallery/1216/14_hRC5Hg41.jpg!w1500"],
    a:[],
     gridList: [],
     isShowMask: false,
     maskList: {}
   },
   onLoad: function (options) {
     this.getGridList()
   },
   getGridList() {
     wx.request({
       url: 'https://www.escook.cn/categories',
       method: 'GET',
       success: res => {
         this.setData({
           a:res.data.slice(0,5),
          gridList: res.data
         })
       }
     })
   },
   showMask(e) {
     let maskList = e.currentTarget.dataset.item
     this.setData({
       isShowMask: true,
       maskList
     })
   },
   hideMask() {
     this.setData({
       isShowMask: false,
       maskList: {}
     })
   }
 })