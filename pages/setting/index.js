Page({
    data: {
      // 用户信息
      userInfo: {
        avatarUrl: '/assets/images/default_avatar.png',
        nickName: '',
        gender: '男',
      },
    },
    onLoad() {
      this.setData({
        userInfo: wx.getStorageSync('userInfo') || {},
      });
    },
    changeAvatar() {
      const that = this;
      wx.chooseImage({
        count: 1,
        success(res) {
          const tempFilePaths = res.tempFiles[0].tmp_path;
          that.setData({
            ['userInfo.avatarUrl']: tempFilePaths,
          });
          wx.setStorageSync('userInfo', that.data.userInfo);
        }
      })
    },
    bindNicknameInput(e) {
      const newValue = e.detail.value;
      if (newValue !== '') {
        this.setData({
          ['userInfo.nickName']: newValue,
        });
      } else {
        wx.showToast({
          title: '昵称不能为空',
          icon: 'none',
        });
      }
      wx.setStorageSync('userInfo', this.data.userInfo);
    },
    bindGenderChange(e) {
      const newValue = e.detail.value;
      this.setData({
        ['userInfo.gender']: newValue,
      });
      wx.setStorageSync('userInfo', this.data.userInfo);
    },
    saveSetting() {
      wx.showToast({
        title: '保存成功',
        icon: 'success',
      });
    },
  });