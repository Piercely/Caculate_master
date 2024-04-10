Page({
    data: {},
    onLoad() {},
    backToHome() {
      wx.switchTab({
        url: '/pages/index/index',
      });
    },
  });