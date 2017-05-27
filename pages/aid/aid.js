var sliderWidth = 110; // 需要设置slider的宽度，用于计算中间位置

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
    }
});