// pages/user/index.js
Page({
    data: {
      userinfo:{},
      defaultSize: 'default',
      disabled: false,
      plain: false,
      loading: false,
    },
    onShow(){
      const userinfo=wx.getStorageSync("userinfo");
      this.setData({userinfo});
        
    }
  })
  
  