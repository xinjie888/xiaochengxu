const app = getApp()

Page({
  data: {
    navList:[
      "热搜推荐",
      "手机数码",
      "女装内衣",
      "男装内衣",
      "家用电器",
      "鞋靴箱包",
      "户外运动",
      "电脑办公",
      "个护化妆",
      "家具建材",
      "家居家纺",
      "母婴童装",
      "生活美食",
      "酒水饮料",
      "钟表奢品",
      "汽车用品",
      "医疗保健",
      "计生情趣",
      "珠宝饰品",
      "生鲜果蔬",
      "图书音像",
      "宠物园艺",
      "全球购"
    ],
    num:0,
    dpsjList:[
      {
        title: "Apple",
        src: "../../utils/images/dpsj1.png"
      },
      {
        title: "小米",
        src: "../../utils/images/dpsj2.png"
      },
      {
        title: "荣耀",
        src: "../../utils/images/dpsj3.png"
      },
      {
        title: "华为",
        src: "../../utils/images/dpsj4.png"
      }, 
      {
        title: "乐视",
        src: "../../utils/images/dpsj5.png"
      }, 
      {
        title: "魅族",
        src: "../../utils/images/dpsj6.png"
      }, 
      {
        title: "OPPO",
        src: "../../utils/images/dpsj7.png"
      }, {
        title: "vivo",
        src: "../../utils/images/dpsj8.png"
      }, 
      {
        title: "三星",
        src: "../../utils/images/dpsj9.png"
      }, 
      {
        title: "努比亚",
        src: "../../utils/images/dpsj10.png"
      }, 
      {
        title: "360手机",
        src: "../../utils/images/dpsj11.png"
      }, 
      {
        title: "联想",
        src: "../../utils/images/dpsj12.png"
      }, 
      {
        title: "一加",
        src: "../../utils/images/dpsj13.png"
      }, 
      {
        title: "锤子",
        src: "../../utils/images/dpsj14.png"
      }, 
      {
        title: "美图",
        src: "../../utils/images/dpsj15.png"
      }
    ],
    rxtcList:[
      { title: "iPhoneX", src: "../../utils/images/rxtc1.png" },
      { title: "荣耀V10", src: "../../utils/images/rxtc2.png" },
      { title: "OPPOR11s", src: "../../utils/images/rxtc3.png" },
      { title: "vivoX20", src: "../../utils/images/rxtc4.png" },
      { title: "华为Mate10", src: "../../utils/images/rxtc5.png" },
      { title: "三星Note8", src: "../../utils/images/rxtc6.png" },
      { title: "坚果Pro2", src: "../../utils/images/rxtc7.png" },
      { title: "iPhone8", src: "../../utils/images/rxtc8.png" },
      { title: "小米Note3", src: "../../utils/images/rxtc9.png" },
      { title: "平板电脑", src: "../../utils/images/rxtc10.png" },
      { title: "手机支架", src: "../../utils/images/rxtc11.png" },
      { title: "蓝牙音箱", src: "../../utils/images/rxtc12.png" },
      { title: "智能手表", src: "../../utils/images/rxtc13.png" },
      { title: "内存卡", src: "../../utils/images/rxtc14.png" },
      { title: "mp3", src: "../../utils/images/rxtc15.png" },
      { title: "行车记录仪", src: "../../utils/images/rxtc16.png" },
      { title: "vr眼镜", src: "../../utils/images/rxtc17.png" },
      { title: "单反相机", src: "../../utils/images/rxtc18.png" }
    ],
    sjpjList:[
      { title: "蓝牙耳机", src: "../../utils/images/sjpj1.png" },
      { title: "移动电源", src: "../../utils/images/sjpj2.png" },
      { title: "苹果周边", src: "../../utils/images/sjpj3.png" },
      { title: "手机耳机", src: "../../utils/images/sjpj4.png" },
      { title: "充电器", src: "../../utils/images/sjpj5.png" },
      { title: "手机贴膜", src: "../../utils/images/sjpj6.png" },
      { title: "数据线", src: "../../utils/images/sjpj7.png" },
      { title: "内存卡", src: "../../utils/images/sjpj8.png" },
      { title: "手机支架", src: "../../utils/images/sjpj9.png" },
      { title: "手机饰品", src: "../../utils/images/sjpj10.png" },
      { title: "自拍杆", src: "../../utils/images/sjpj11.png" },
      { title: "手机壳", src: "../../utils/images/sjpj12.png" },
      { title: "手机指环", src: "../../utils/images/sjpj13.png" },
      { title: "手机电池", src: "../../utils/images/sjpj14.png" },
      { title: "创意配件", src: "../../utils/images/sjpj15.png" }
    ],
    sysxList:[
      { title: "数码相机", src: "../../utils/images/sysx1.png" },
      { title: "微单相机", src: "../../utils/images/sysx2.png" },
      { title: "单反相机", src: "../../utils/images/sysx3.png" },
      { title: "拍立得", src: "../../utils/images/sysx4.png" },
      { title: "运动相机", src: "../../utils/images/sysx5.png" },
      { title: "摄像机", src: "../../utils/images/sysx6.png" },
      { title: "镜头", src: "../../utils/images/sysx7.png" },
      { title: "户外器材", src: "../../utils/images/sysx8.png" },
      { title: "影棚器材", src: "../../utils/images/sysx9.png" },
      { title: "数码相框", src: "../../utils/images/sysx10.png" }
    ],
    znsbList:[
      { title: "智能手环", src: "../../utils/images/znsb1.png" },
      { title: "智能手表", src: "../../utils/images/znsb2.png" },
      { title: "智能眼镜", src: "../../utils/images/znsb3.png" },
      { title: "智能机器人", src: "../../utils/images/znsb4.png" },
      { title: "运动追踪器", src: "../../utils/images/znsb5.png" },
      { title: "健康检测", src: "../../utils/images/znsb6.png" },
      { title: "智能配饰", src: "../../utils/images/znsb7.png" },
      { title: "智能家居", src: "../../utils/images/znsb8.png" },
      { title: "体感车", src: "../../utils/images/znsb9.png" },
      { title: "无人机", src: "../../utils/images/znsb10.png" }
    ],
    yyylList:[
      { title: "耳机/耳麦", src: "../../utils/images/yyyl1.png" },
      { title: "音箱/音响", src: "../../utils/images/yyyl2.png" },
      { title: "收音机", src: "../../utils/images/yyyl3.png" },
      { title: "麦克风", src: "../../utils/images/yyyl4.png" },
      { title: "MP3/MP4", src: "../../utils/images/yyyl5.png" },
      { title: "专业音频", src: "../../utils/images/yyyl6.png" },
      { title: "苹果周边", src: "../../utils/images/yyyl7.png" }
    ],
    dzjyList:[
      { title: "学生平板", src: "../../utils/images/dzjy1.png" },
      { title: "点读机/笔", src: "../../utils/images/dzjy2.png" },
      { title: "早教益智", src: "../../utils/images/dzjy3.png" },
      { title: "录音笔", src: "../../utils/images/dzjy4.png" },
      { title: "电子书", src: "../../utils/images/dzjy5.png" },
      { title: "电子词典", src: "../../utils/images/dzjy6.png" },
      { title: "复读机", src: "../../utils/images/dzjy7.png" }
    ],
    rmssList:[
      { title: "手机", src: "../../utils/images/rmss1.png" },
      { title: "平板电脑", src: "../../utils/images/rmss2.png" },
      { title: "热水器", src: "../../utils/images/rmss3.png" },
      { title: "女装", src: "../../utils/images/rmss4.png" },
      { title: "男装", src: "../../utils/images/rmss5.png" },
      { title: "电视", src: "../../utils/images/rmss6.png" },
      { title: "单肩包", src: "../../utils/images/rmss7.png" },
      { title: "女鞋", src: "../../utils/images/rmss8.png" },
      { title: "男鞋", src: "../../utils/images/rmss9.png" },
      { title: "钟表", src: "../../utils/images/rmss10.png" },
      { title: "孕妇装", src: "../../utils/images/rmss11.png" },
      { title: "家居服", src: "../../utils/images/rmss12.png" },
      { title: "耳机", src: "../../utils/images/rmss13.png" },
      { title: "零食", src: "../../utils/images/rmss14.png" },
      { title: "化妆品", src: "../../utils/images/rmss15.png" }
    ],
    nsrsList:[
      { title: "夹克", src: "../../utils/images/nsrs1.png" },
      { title: "外套", src: "../../utils/images/nsrs2.png" },
      { title: "卫衣", src: "../../utils/images/nsrs3.png" },
      { title: "牛仔裤", src: "../../utils/images/nsrs4.png" },
      { title: "休闲裤", src: "../../utils/images/nsrs5.png" },
      { title: "皮带", src: "../../utils/images/nsrs6.png" },
      { title: "男士袜子", src: "../../utils/images/nsrs7.png" },
      { title: "棒球帽", src: "../../utils/images/nsrs8.png" },
      { title: "太阳镜", src: "../../utils/images/nsrs9.png" },
      { title: "皮鞋", src: "../../utils/images/nsrs10.png" },
      { title: "打火机", src: "../../utils/images/nsrs11.png" },
      { title: "钱包", src: "../../utils/images/nsrs12.png" }
    ],
    vsrsList:[
      { title: "大衣", src: "../../utils/images/vsrs1.png" },
      { title: "打底衫", src: "../../utils/images/vsrs2.png" },
      { title: "连衣裙", src: "../../utils/images/vsrs3.png" },
      { title: "牛仔裤", src: "../../utils/images/vsrs4.png" },
      { title: "短外套", src: "../../utils/images/vsrs5.png" },
      { title: "女士内裤", src: "../../utils/images/vsrs6.png" },
      { title: "口红", src: "../../utils/images/vsrs7.png" },
      { title: "香水", src: "../../utils/images/vsrs8.png" },
      { title: "文胸", src: "../../utils/images/vsrs9.png" },
      { title: "时尚饰品", src: "../../utils/images/vsrs10.png" },
      { title: "护肤套装", src: "../../utils/images/vsrs11.png" },
      { title: "高跟鞋", src: "../../utils/images/vsrs12.png" }
    ],
    shrsList:[
      { title: "床", src: "../../utils/images/vsrs1.png" },
      { title: "被子", src: "../../utils/images/vsrs2.png" },
      { title: "沙发", src: "../../utils/images/vsrs3.png" },
      { title: "茶具", src: "../../utils/images/vsrs4.png" },
      { title: "儿童玩具", src: "../../utils/images/vsrs5.png" },
      { title: "耳机", src: "../../utils/images/vsrs6.png" },
      { title: "汽车用品", src: "../../utils/images/vsrs7.png" },
      { title: "洗衣液", src: "../../utils/images/vsrs8.png" },
      { title: "充电宝", src: "../../utils/images/vsrs9.png" },
      { title: "储物家具", src: "../../utils/images/vsrs10.png" },
      { title: "十字绣", src: "../../utils/images/vsrs11.png" },
      { title: "山地车", src: "../../utils/images/vsrs12.png" }
    ],
    rxplList:[
      { title: "羽绒服", src: "../../utils/images/rxpl1.png" },
      { title: "毛呢大衣", src: "../../utils/images/rxpl2.png" },
      { title: "连衣裙", src: "../../utils/images/rxpl3.png" },
      { title: "针织衫", src: "../../utils/images/rxpl4.png" },
      { title: "毛衣", src: "../../utils/images/rxpl5.png" },
      { title: "打底衫", src: "../../utils/images/rxpl6.png" },
      { title: "棉服", src: "../../utils/images/rxpl7.png" },
      { title: "卫衣", src: "../../utils/images/rxpl8.png" },
      { title: "短外套", src: "../../utils/images/rxpl9.png" },
      { title: "皮草", src: "../../utils/images/rxpl10.png" },
      { title: "羊绒衫", src: "../../utils/images/rxpl11.png" },
      { title: "风衣", src: "../../utils/images/rxpl12.png" },
      { title: "女仔裤", src: "../../utils/images/rxpl13.png" },
      { title: "休闲裤", src: "../../utils/images/rxpl14.png" },
      { title: "半身裙", src: "../../utils/images/rxpl15.png" },
      { title: "衬衫", src: "../../utils/images/rxpl16.png" },
      { title: "套装", src: "../../utils/images/rxpl17.png" },
      { title: "自营女装", src: "../../utils/images/rxpl18.png" },
      { title: "文胸", src: "../../utils/images/rxpl19.png" },
      { title: "内裤", src: "../../utils/images/rxpl20.png" },
      { title: "打底裤", src: "../../utils/images/rxpl21.png" }
    ],
    xptxList:[
      { title: "短袖T恤", src: "../../utils/images/xptx1.png" },
      { title: "长袖T恤", src: "../../utils/images/xptx2.png" },
      { title: "纯棉T恤", src: "../../utils/images/xptx3.png" },
      { title: "印花T恤", src: "../../utils/images/xptx4.png" },
      { title: "纯色T恤", src: "../../utils/images/xptx5.png" },
      { title: "条纹T恤", src: "../../utils/images/xptx6.png" }
    ],
    djdList:[
      { title: "洗衣机", src: "../../utils/images/djd1.png" },
      { title: "电视机", src: "../../utils/images/djd2.png" },
      { title: "冰箱", src: "../../utils/images/djd3.png" },
      { title: "空调", src: "../../utils/images/djd4.png" },
      { title: "家庭影院", src: "../../utils/images/djd5.png" },
      { title: "家电配件", src: "../../utils/images/djd6.png" }
    ]
  },
  handleClick:function(e){
    this.setData({
      num: e.currentTarget.dataset.index
    })
  }
})