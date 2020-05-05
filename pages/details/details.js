// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情数据
    videoInfo: null,
    // 推荐视频数据
    videoOtherInfo: []
  },

  // 获取视频详情数据
  getVideoInfo: function (id) {
    let that = this
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoDetail?id=1',
      success(res) {
        if (res.data.code === 0) {
          that.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    })
  },

  // 获取推荐视频数据
  getVideoOterInfo: function(id){
    let that = this
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/otherList',
      success(res) {
        if(res.data.code === 0){
          that.setData({
            videoOtherInfo:res.data.data.otherList
          })
        }
      } 
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideoInfo(options.id)
    this.getVideoOterInfo(options.id)
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