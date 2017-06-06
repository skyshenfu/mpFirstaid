Page({
    data: {
        aidtypes:[]
    },
    onLoad: function () {
      var that=this
      wx.request({
        url: 'https://wx.all-help.com/mobile/knowledgeListWX.json',
        method:'POST',
        success: function (res) {
           console.log(res)
           that.setData({ aidtypes: res.data.data.dataList}) 
        }
      },
      )
    },
    itemclick:function(event){
      console.log(event.currentTarget)
      wx.navigateTo({
        url: '/pages/aiddetail/aiddetail?aidid='+ event.currentTarget.dataset.num
      })
    }
});