// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      operand1: null,
      operand2: null,
      operator: null,
      result: null,
      displayData: '0',
      digits: ['x!', 'e', '1/x', '%', '⊕', '√', 'xⁿ', 'π', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '.', 'DEL', 'AC'],
      operators: ['+', '-', '×', '÷', '='],
      status: 0
    },
    handleDigit(e) {
      let digit = e.currentTarget.dataset.info
      if (digit === 'AC') { // 清除，进行状态初始化
        this.setData({
          operand1: null,
          operand2: null,
          operator: null,
          result: null,
          displayData: '0',
          status: 0
        })
        return;
      } else if (digit === 'DEL') { // 单个删除
        let displayData = this.data.displayData;
        if (displayData.length > 1) {
          displayData = displayData.slice(0, -1);
        } else {
          displayData = '0';
        }
        this.setData({
          displayData: displayData
        });
        return;
      } else if (digit === 'x!') { // 阶乘
        let num = +this.data.displayData;
        let result = 1;
        for (let i = 1; i <= num; i++) {
          result *= i;
        }
        this.setData({
          displayData: result.toString()
        });
        return;
      } else if (digit === '^') { // 异或
        let num1 = +this.data.operand1;
        let num2 = +this.data.displayData;
        let result = num1 ^ num2;
        this.setData({
          displayData: result.toString()
        });
        return;
      } else if (digit === '%') { // 求模
        let num1 = +this.data.operand1;
        let num2 = +this.data.displayData;
        let result = num1 % num2;
        this.setData({
          displayData: result.toString()
        });
        return;
      } else { // 键入状态
        switch (this.data.status) {
          // 初始状态：0，主要进行第一个，单个数字的键入
          case 0:
            if (+digit <= 9) {
              // 只能输入数字，展示数字并进入状态1
              this.setData({
                displayData: digit,
                status: 1
              })
            }
            break
            // 输入第一个数字状态：1，主要判断是否完成第一个数字的输入，并进行字符串的拼接
          case 1:
            if (+digit <= 9) { // 输入的是数字，继续进入状态1，进行数字字符串拼接
              this.setData({
                displayData: this.data.displayData + digit,
                status: 1
              })
            } else if (this.data.operators.indexOf(digit) != -1) { // 输入的是运算符号，进入状态2，注意符号不进行展示，将前面的数字和符号进行缓存
              this.setData({
                operand1: this.data.displayData,
                operator: digit,
                status: 2
              })
            }
            break
            // 输入后续数字初始状态：2，与状态0同理，主要进行输入符号后，第一个，单个数字的键入
          case 2:
            if (+digit <= 9) { // 只能输入数字，展示数字并进入状态3
              this.setData({
                displayData: digit,
                status: 3
              })
            }
            break
            // 输入后续数字或符号状态：3，与状态1相似，多了计算前面两个数字的计算结果
          case 3:
            if (+digit <= 9) { // 输入的是数字，继续进入状态3，进行数字字符串拼接
              this.setData({
                displayData: this.data.displayData + digit,
                status: 3
              })
            } else {
              // 输入的是非数字，则先对前两个数字进行相加，此部分分为+-*/符号和等于号，两部分逻辑所有区别
              // 但都需先计算前面两个数的计算结果
              let preDigit = 0
              let num1 = +this.data.operand1
              let num2 = +this.data.displayData
              switch (this.data.operator) { // 取出前面储存的operator，进行计算
                case '+':
                  preDigit = num1 + num2
                  break
                case '-':
                  preDigit = num1 - num2
                  break
                case '×':
                  preDigit = num1 * num2
                  break
                case '÷':
                  preDigit = num1 / num2
                  break
              }
              if (this.data.operators.indexOf(digit) != -1) { // 输入的是运算符号
                // 计算并设置完返回状态2，继续输入数字
                this.setData({
                  operand1: preDigit,
                  operator: digit,
                  displayData: preDigit.toString(),
                  status: 2
                })
              }
              if (digit === '=') { // 输入的是等号
                // 返回状态4，清空前面的操作符号
                this.setData({
                  operand1: preDigit,
                  operator: null,
                  displayData: preDigit.toString(),
                  status: 4
                })
              }
            }
            break
            // 前面按下过等号的状态：4，这个比较特殊
          case 4:
            if (+digit <= 9) { // 再次输入的是数字，返回状态1
              this.setData({
                displayData: digit,
                status: 1
              })
            } else if (this.data.operators.indexOf(digit) != -1) { // 再次输入的是符号，返回状态2
              this.setData({
                operator: digit,
                status: 2
              })
            }
        }
      }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
  
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
  
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
  
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
  
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
  
    }
  })
  