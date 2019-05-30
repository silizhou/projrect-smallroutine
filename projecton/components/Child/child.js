// components/Child/child.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

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
      url: "/pages/index/index"
    })
  },
  user() {
    wx.navigateTo({
      url: "/pages/index/index"
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
