Page({
    data: {
      decimalNumber: 0,
      binaryNumber: 0,
      hexadecimalNumber: 0,
      binaryResult: '',
      octalResult: '',
      hexResult: '',
      decimalResult: ''
    },
    // 十进制转其他进制
    convertToBinary: function() {
      let number = this.data.decimalNumber;
      let binaryResult = "";
      while (number > 0) {
        binaryResult = (number % 2) + binaryResult;
        number = Math.floor(number / 2);
      }
      this.setData({
        binaryResult: binaryResult
      });
    },
    convertToOctal: function() {
      let number = this.data.decimalNumber;
      let octalResult = "";
      while (number > 0) {
        octalResult = (number % 8) + octalResult;
        number = Math.floor(number / 8);
      }
      this.setData({
        octalResult: octalResult
      });
    },
    convertToHex: function() {  
      let number = this.data.decimalNumber;  
      let hexChars = '0123456789ABCDEF'; // 十六进制字符集  
      let hexResult = '';  
      
      while (number > 0) {  
        // 取出当前数的最低4位（即十六进制的一位）  
        let hexDigit = number & 0xF; // 使用位与操作来获取最低4位  
        hexResult = hexChars.charAt(hexDigit) + hexResult; // 将对应的十六进制字符添加到结果字符串的前面  
        number >>>= 4; // 无符号右移4位，相当于除以16  
      }  
      
      // 如果结果为空，则表示原数为0，直接返回'0'  
      if (hexResult === '') {  
        hexResult = '0';  
      }  
      
      this.setData({  
        hexResult: hexResult  
      });  
    },
    // 其他进制转十进制
    convertToDecimal: function() {
      let binary = this.data.binaryNumber;
      let octal = this.data.octalNumber;
      let hexadecimal = this.data.hexadecimalNumber;
      let decimalResult = 0;
      
      if (binary) {
        decimalResult = parseInt(binary, 2); // 二进制转十进制
      } else if (octal) {
        decimalResult = parseInt(octal, 8); // 八进制转十进制
      } else if (hexadecimal) {
        decimalResult = parseInt(hexadecimal, 16); // 十六进制转十进制
      }
      this.setData({
        decimalResult: decimalResult
      });
    },
    // 输入框输入触发的方法
    decimalInput: function(e) {
      this.setData({
        decimalNumber: e.detail.value
      });
    },
    binaryInput: function(e) {
      this.setData({
        binaryNumber: e.detail.value
      });
    },
    octalInput: function(e) {
      this.setData({
        octalNumber: e.detail.value
      });
    },
    hexadecimalInput: function(e) {
      this.setData({
        hexadecimalNumber: e.detail.value
      });
    }
  });