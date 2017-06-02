var sliderWidth = 110; // 需要设置slider的宽度，用于计算中间位置
var listTemplate = {
  "index": 0,
  "totalpage": 0,
  "currentpage": 1,
  "items": [],
  "bottomInVisiable": true
};
Page({
  data: {
    list0: Object.assign({}, listTemplate),
    list1: Object.assign({},listTemplate),
    list2: Object.assign({}, listTemplate),
    list3: Object.assign({}, listTemplate),
    tabs: ["专业急救", "医学知识", "养生保健","运动健康"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    locked: false
  },
  netRequest: function (classid,goallist){
    var that=this
    wx.request({
      url: 'https://wx.all-help.com/mobile/article/getArticleListByCid.json',
      method: 'POST',
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      data: {
        'classid': classid
      },
      success: function (res) {
        var name="list"+(classid-1).toString()
        var datajson={}
        datajson[name] = Object.assign({}, ...goallist, {
          items: res.data.data.dataList
        })
        that.setData(datajson)
      }
    })
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
    wx.showLoading({
      title: '请稍后'
    })
    this.netRequest(1,this.data.list0)
    this.netRequest(2, this.data.list0)
    this.netRequest(3, this.data.list0)
    this.netRequest(4, this.data.list0)
    wx.hideLoading()

  },
  judgebyindex:function(goallist){
    if (this.data.locked == true){
      return ;
    }else{
      this.data.locked = true
    }
    var that = this;
    var datajson={}
    var name = "list"+this.data.activeIndex.toString()
    var nextitems = goallist.items.concat(res.data.data.dataList)
    datajson[name] = Object.assign({}, ...goallist, {
      items: nextitems
    })
    that.setData(Object.assign({},datajson,{"locked":false}))
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
    this.judgebyindex(this.data.list0);
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