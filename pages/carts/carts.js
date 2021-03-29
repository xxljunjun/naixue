// pages/carts/carts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseshop:1,
    shopping:[
      {id:1,data:"霸气玉油柑"},
      {id:2,data:"奈雪樱花季"},
      {id:3,data:"奈雪必点"},
      {id:4,data:"霸气鲜果茶"},
      {id:5,data:"宝藏鲜奶茶"},
      {id:6,data:"霸气玉油柑"},
      {id:7,data:"奈雪樱花季"},
      {id:8,data:"奈雪必点"},
      {id:9,data:"霸气鲜果茶"},
      {id:10,data:"宝藏鲜奶茶"},
      {id:11,data:"霸气玉油柑"},
      {id:12,data:"奈雪樱花季"},
      {id:13,data:"奈雪必点"},
      {id:14,data:"霸气鲜果茶"},
      {id:15,data:"宝藏鲜奶茶"},
    ]
  },
  clickshop(e){
    var who =e.target.id
    console.log(e)
    this.setData({
      chooseshop:who
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
   
  }
})