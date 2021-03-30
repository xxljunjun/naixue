/* 返回上一页的点击事件 */
var temp = {
  onclick: function (e) {
    console.log("点击了" ,e)
    wx.navigateBack({
      delta: 1
    })
  }
}
//导出，供外部使用
export default temp