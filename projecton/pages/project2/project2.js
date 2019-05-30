// pages/project2/project2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    imgUrls:[],
    nav:[],
    newUser:'',
    song:[]
  },
  banner(){
    wx.navigateTo({
      url: '/pages/project1/project1',
    })
  },
  flower(){
    wx.navigateTo({
      url: '/pages/project4/project4',
    })
  },
  home(){
    wx.navigateTo({
      url: "/pages/project2/project2"
    })
  },
  fenlei(){
    wx.navigateTo({
      url: "/pages/project3/project3"
    })
  },
  diy(){
    wx.navigateTo({
      url: "/pages/project5/project5"
    })
  },
  user(){
    wx.navigateTo({
      url: "/pages/project6/project6"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ceb9351d910de59a72e0ba7/example/list',
      success:(res)=>{
        // console.log(res.data.song)
        this.setData({
          imgUrls: res.data.BannerList,
          nav: res.data.iconList,
          newUser:res.data.newUser,
          song: res.data.song
        })
      }
    })
// https://www.easy-mock.com/mock/5ceb9351d910de59a72e0ba7/example/banner
//https://img02.hua.com/m/home/img/m_home_use_friend.png
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