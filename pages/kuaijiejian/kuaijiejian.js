const keyList = [{
    number: 'Ctrl+S',
    describe: '保存'
  },
  {
    number: 'Ctrl+C',
    describe: '复制'
  },
  {
    number: 'Ctrl+V',
    describe: '粘贴'
  },
  {
    number: 'Ctrl+X',
    describe: '剪切'
  },
  {
    number: 'Ctrl+Z',
    describe: '撤销'
  },
  {
    number: 'Ctrl+Y',
    describe: '重做'
  },
  {
    number: 'Ctrl+F',
    describe: '查找'
  },
  {
    number: 'Ctrl+G',
    describe: '查找下一个'
  },
  {
    number: 'Ctrl+Shift+F',
    describe: '替换'
  },
  {
    number: 'Alt+Left',
    describe: '上一级'
  },
];

Page({
  data: {
    keyList: []
  },
  onLoad() {
    this.setData({
      keyList: keyList
    })
  }
})