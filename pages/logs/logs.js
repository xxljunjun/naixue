// logs.js
Page({
  data: {
    current:true,
    left:"left",
  },
  onLoad() {

  },
  togalanother(e){
    // console.log(e)
    if(e.target.id == "left"){
      this.setData({
        current:true
      })
    }else{
      this.setData({
        current:false
      })
    }
    
  },
})
