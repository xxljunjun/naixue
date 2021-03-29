// index.js
Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200
  },
  gotoshop(){
    wx.switchTab({
      url: "/pages/carts/carts"
    })
  },
  gotomer(e){
    wx.navigateTo({
      url: "/pages/components/index/members/members",
    })
  },
  gotopoint(){
    wx.navigateTo({
      url: "/pages/components/index/gards/gards",
    })
  },
  onLoad: function () {
    var that = this; 
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../images/head.jpg"
        },
        {
          "id": 2,
          "imgurl": "../../images/head.jpg"
        },
        {
          "id": 3,
          "imgurl": "../../images/head.jpg"
        },
        {
          "id": 4,
          "imgurl": "../../images/head.jpg"
        }
      ]
    }; 
    that.setData({
      lunboData: data.datas
    })
  },
})
