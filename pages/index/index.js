Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航栏数据
    navList: [],
    // 导航栏点击索引
    currentIndexNav: 0,
    // 轮播图数据
    swiperList: [],
    // 视频数据
    videoList: []
  },

  // 获取导航栏数据
  getNavList: function () {
    let that = this
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
      success(res) {
        if (res.data.code === 0) {
          that.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
  },

  // 点击导航栏下方高亮 
  activeNav: function (e) {
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },

  // 获取轮播图数据
  getSwiper: function () {
    let that = this
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      success(res) {
        if (res.data.code === 0) {
          that.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })
  },

  // 获取视频数据
  getVideo: function () {
    let that = this
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
      success(res) {
        if(res.data.code === 0){
          that.setData({
            videoList:res.data.data.videoList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1. 获取导航栏数据
    this.getNavList()
    // 2. 获取轮播图数据
    this.getSwiper()
    // 3. 获取视频详情
    this.getVideo()
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