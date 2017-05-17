var sliderWidth = 110; // 需要设置slider的宽度，用于计算中间位置
var listTemplate = {
  "index": 0,
  "totalpage": 0,
  "currentpage": 0,
  "items": [],
  "bottomInVisiable": true
};
Page({
  data: {
    list0: Object.assign({}, listTemplate, { "items": [11, 2, 3, 4, 5, 6] }),
    list1: Object.assign({},listTemplate),
    list2: Object.assign({}, listTemplate),
    list3: Object.assign({}, listTemplate),
    tabs: [" 项一", " 项二", " 项三"," 项四"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    locked: false
  },
  onLoad:function(){
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
          scrollHeight: res.windowHeight
        });
      }
    });
  },
  judgebyindex:function(){
    if (this.data.locked == true){
      return ;
    }else{
      this.data.locked = true
    }
    switch (this.data.activeIndex) {
      case 0:
        var that = this;
        setTimeout(function () {
          if (that.data.list0.items[0] == 1) {
            that.setData({
              list0: Object.assign({},that.data.list0,{"items":[11,2,3,4,5,6]}),
              locked:false
            })
          } else {
            that.setData({
              list0: Object.assign({}, that.data.list0, { "items": [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] }),
              locked: false
            })
          }
          wx.stopPullDownRefresh()
        }, 1000)
        break;
      case 1:
        wx.stopPullDownRefresh()
        break;
      case 2:
        wx.stopPullDownRefresh()
        break;
      case 3:
        wx.stopPullDownRefresh()
        break;
    }
  },
  tabClick: function (e) {
    if(!this.data.locked){
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
      });
    }
  }
  ,
  onPullDownRefresh: function () {
    this.judgebyindex();
  },
  scroll: function () {
    console.log("滑动了...")
  },
  onReachBottom: function () {
    if (!this.data.locked){
      this.data.locked = true
    }else{
      return;
    }
    var that = this;
    console.log("加载")
    wx.showLoading({
      title: '加载中'
    })
    this.setData({
      list0: Object.assign({},that.data.list0,{
        bottomInVisiable:false
      }),
    })
    setTimeout(function () {
      that.data.list0.items.push("new");
      that.data.list0.items.push("new1");
      that.data.list0.items.push("new2");
      that.data.list0.items.push("new3");
      that.data.list0.items.push("new4");
      that.setData({
        list0: Object.assign({}, that.data.list0, {
          bottomInVisiable: true
        }),
        locked:false
      })
      wx.hideLoading();
    }, 2000)
  }
})