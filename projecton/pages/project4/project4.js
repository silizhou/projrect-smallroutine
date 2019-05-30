// pages/project4/project4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    FlowerList:[]
  },
  click(){
    wx.navigateTo({
      url: '/pages/project5/project5'
      
     
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ceb9351d910de59a72e0ba7/example/listshopping',
      success:(res)=>{
        // console.log(res.data.Datas.FlowerList)
        this.setData({
          FlowerList: res.data.Datas.FlowerList
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