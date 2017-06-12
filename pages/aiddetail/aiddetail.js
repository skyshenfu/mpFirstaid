Page({
    data: {
      "video":"",
      "img":"",
      "switchs":[],
      "subfolders": [
      ],
      "scenes": [
      ],
      "duration":0,
    },
    onLoad: function (options) {
      var that = this
      console.log(options)
      wx.request({
        url: options.aidurl,
        method:"GET",
        success:function(res){
          console.log("--------------------------")
          console.log(res.data)
          console.log("--------------------------")
          that.setData({
            "scenes": res.data.scenes,
            "subfolders": res.data.subfolders,
            "switchs": res.data.subfolders!=null ? Array(res.data.subfolders[0].data.length).fill(false):[],
            "video": (res.data.video == null || res.data.video == '') ? "" : (res.data.video.search("https")==0 ? res.data.video : "https://wx.all-help.com/static/html/" + res.data.video),
            "duration": (res.data.VideoDuration == null || res.data.VideoDuration=='') ? 0 : 60 * parseInt(res.data.VideoDuration)[0] + parseInt(res.data.VideoDuration)[1]
          })
        }
      })
    },
    toggle:function(event){
      var index = event.currentTarget.id - 1
      var temparray = this.data.switchs
      var temp=!temparray[index]
      temparray[index]=temp
      this.setData({
        switchs:temparray
      })
    },
    phonecall: function (event) {
        console.log(event)
    }
});