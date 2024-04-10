// index.js
Page({
    data: {
      buttons: [
        {
          id: 1,
          image: "path/to/simpleCalculation",
          name: "简易计算",
        },
        // ... add more buttons ...
      ],
      currentIndex: 0,
    },
  
    simpleCalculation: function () {
      wx.navigateTo({
        url: '/pages/simplify/simplify', // 这里填写对应的页面路径
      });
    },
    scientificCalculation: function () {
        wx.navigateTo({
          url: '/pages/science/science', // 这里填写对应的页面路径
        });
      },
    digitalConversion: function () {
        wx.navigateTo({
          url: '/pages/jinzhizhaunhuan/jinzhizhaunhuan', // 这里填写对应的页面路径
        });
      },
      shijianzhaunhuan: function () {
        wx.navigateTo({
          url: '/pages/shijianzhaunhuan/shijianzhaunhuan', // 这里填写对应的页面路径
        });
      },
      bmijisuan: function () {
        wx.navigateTo({
          url: '/pages/BMIjisuan/BMIjisuan', // 这里填写对应的页面路径
        });
      },
      huilu: function () {
        wx.navigateTo({
          url: '/pages/huilvzhuanhuan/huilvzhuanhuan', // 这里填写对应的页面路径
        });
      },
      chenghu: function () {
        wx.navigateTo({
          url: '/pages/chenghujisuan/chenghujisuan', // 这里填写对应的页面路径
        });
      },
      kuaijiejian: function () {
        wx.navigateTo({
          url: '/pages/kuaijiejian/kuaijiejian', // 这里填写对应的页面路径
        });
      },
      integralDifferentiation: function () {
        wx.navigateTo({
          url: '/pages/weijifen/weijifen', // 这里填写对应的页面路径
        });
      },
      matrixOperation: function () {
        wx.navigateTo({
          url: '/pages/juzhen/juzhen', // 这里填写对应的页面路径
        });
      },
      solvingEquation: function () {
        wx.navigateTo({
          url: '/pages/jiefangcheng/jiefangcheng', // 这里填写对应的页面路径
        });
      },
      simplify: function () {
        wx.navigateTo({
          url: '/pages/huajian/huajian', // 这里填写对应的页面路径
        });
      },
      valueInput: function () {
        wx.navigateTo({
          url: '/pages/shuzhishuru/shuzhishuru', // 这里填写对应的页面路径
        });
      },
      geshui: function () {
        wx.navigateTo({
          url: '/pages/geshuijisuan/geshuijisuan', // 这里填写对应的页面路径
        });
      },
      fangdai: function () {
        wx.navigateTo({
          url: '/pages/fangdaijisuan/fangdaijisuan', // 这里填写对应的页面路径
        });
      },
    swiperChange: function (event) {
      this.setData({
        currentIndex: event.detail.current,
      });
    },
    handleButtonTap: function (event) {
      const buttonId = event.currentTarget.dataset.id;
      const buttons = this.data.buttons;
      for (const button of buttons) {
        if (button.id === buttonId) {
          this.setData({
            currentIndex: buttonId,
          });
          break;
        }
      }
    },
  });
  