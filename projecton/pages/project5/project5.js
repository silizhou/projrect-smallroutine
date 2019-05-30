// pages/project5/project5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[],
    // one:[],
    two:[],
    three:[],
    four:[],
    five:[]

  },
  home() {
    wx.navigateTo({
      url: "/pages/project2/project2"
    })
  },
  fenlei() {
    wx.navigateTo({
      url: "/pages/project3/project3"
    })
  },
  diy() {
    wx.navigateTo({
      url: "/pages/project5/project5"
    })
  },
  user() {
    wx.navigateTo({
      url: "/pages/project6/project6"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ceb9351d910de59a72e0ba7/example/classify',
      success:(res)=>{
        console.log(res.data)
        this.setData({
          detail:res.data,
          // one: res.data[0].Content,
          two: res.data[1].Content,
         three: res.data[2].Content,
          four: res.data[3].Content,
          five: res.data[4].Content
        })
      }
    })
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
  onShareAppMessage: function () {

  }
})