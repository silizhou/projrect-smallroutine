// pages/project1/project1.js
Page({
  come_baby: function(event) {
    wx.switchTab({
      url: '../index/index',
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    lo: "https://img02.hua.com/wx_imgs/wxmp_home_topbanner.png",
    imgUrls: [
      
      "https://img02.hua.com/slider/wxmp_cate_06.jpg",
      "https://img02.hua.com/slider/wxmp_cate_03.jpg",
      "https://img02.hua.com/slider/wxmp_cate_02.jpg",
      "https://img02.hua.com/slider/wxmp_cate_04.jpg",
      "https://img02.hua.com/slider/wxmp_cate_05.jpg",
      "https://img02.hua.com/slider/wxmp_cate_01.jpg"

    ],
    footer: [
      {
        id: 0,
        name: '首页'
      },
      {
        id: 1,
        name: '分类'
      },
      {
        id: 2,
        name: '定制'
      },
      {
        id: 3,
        name: '我的'
      },
    ]
  },

  banner(){
    wx.navigateTo({
      url: '/pages/project2/project2'
    })
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
      url: "/pages/project1/project1"
    })
  },
  user() {
    wx.navigateTo({
      url: "/pages/project5/project5"
    })
  },
  /** nb 
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})