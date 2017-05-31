Page({
    data: {
        aidtypes:[]
    },
    onLoad: function () {
       this.setData({
         aidtypes:[
             {
               "typesrc":"/images/icon_information_highlight.png",
               "typetext":"name1"
             },
             {
               "typesrc": "/images/icon_information_highlight.png",
               "typetext": "name2"
             },
             {
               "typesrc": "/images/icon_information_highlight.png",
               "typetext": "name3"
             },
             {
               "typesrc": "/images/icon_information_highlight.png",
               "typetext": "name4"
             }
             ,
             {
               "typesrc": "/images/icon_information_highlight.png",
               "typetext": "name5"
             }
             ,
             {
               "typesrc": "/images/icon_information_highlight.png",
               "typetext": "name6"
             },
             {
               "typesrc": "/images/icon_information_highlight.png",
               "typetext": "name7"
             }
           ]
       })
    },
    itemclick:function(event){
      wx.navigateTo({
        url: '/pages/aiddetail/aiddetail?aidid='+ event.currentTarget.dataset.num
      })
    }
});