// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: "search",
    navList:[
      { title: "领优惠券", src: "../../utils/images/nav1.png" },
      { title: "京东拼购", src: "../../utils/images/nav2.png" },
      { title: "找折扣", src: "../../utils/images/nav3.png" },
      { title: "挑礼物", src: "../../utils/images/nav4.png" },
      { title: "定制频道", src: "../../utils/images/nav5.png" }
    ],
    wnyxList:[
      { title: "男女装馆", msg: "3件7折", src: "../../utils/images/wnyx1.png" },
      { title: "医药健康馆", msg: "在线问诊", src: "../../utils/images/wnyx2.png" },
      { title: "手机馆", msg: "iPhone 8", src: "../../utils/images/wnyx3.png" },
      { title: "京东超市", msg: "好货低至9.9折", src: "../../utils/images/wnyx4.png" },
      { title: "生鲜馆", msg: "买一赠一", src: "../../utils/images/wnyx5.png" },
      { title: "运动馆", msg: "专业的选择", src: "../../utils/images/wnyx6.png" },
      { title: "鞋靴馆", msg: "低至4折", src: "../../utils/images/wnyx7.png" },
      { title: "家居馆", msg: "满减再送券", src: "../../utils/images/wnyx8.png" }
    ],
    nav2List:[
      { title: "BRAND", msg: "优选大牌" },
      { title: "HOT", msg: "优选热销" },
      { title: "GOOD", msg: "优选好货" }
    ],
    num:0,
    nav2list:[
      { 
        ziying:"",
        title:"萨洛蒙（Salomon）越野跑水袋背包双肩包配双软水瓶ADV SKIN 12 SET 黑色392640 XL", 
        price:1048,
        priceCut:"直降350元",
        discount:"9.6折", 
        img:"../../utils/images/product1.png",
        logo:"../../utils/images/logo1.png", 
        store:"SALOMON专卖店", 
        tubiao:"../../utils/images/jh.png"
      },
      { 
        ziying: "",
        title: "飞利浦（PHILIPS）飞利浦V989移动联通双4G手机 翻盖手机 尊爵黑 标配", 
        price: 1256, 
        priceCut: "直降43元", 
        discount: "9.6折", 
        img: "../../utils/images/product2.png",
        logo: "../../utils/images/logo2.png", 
        store: "易道手机专营店", 
        tubiao: "../../utils/images/jh.png"
      },
      { 
        ziying: "自营",
        title: "沙宣（VS）卷直发器 卷直两用陶瓷16mm陶瓷面板 卷发棒 卷发器 VSCS69PICN ",
        price: 169,
        priceCut: "直降80元",
        discount: "6.7折",
        img: "../../utils/images/product3.png",
        logo: "../../utils/images/logo3.png",
        store: "沙宣品牌官方旗舰店",
        tubiao: "../../utils/images/jh.png"
      },
      { 
        ziying: "",
        title: "SAMSUNG 三星 Galaxy A9 （SM-A9100） 手机魔幻金 4G+32GB 【全网通4G】",
        price: 2169,
        priceCut: "直降100元",
        discount: "9.5折",
        img: "../../utils/images/product4.png",
        logo: "../../utils/images/logo4.png",
        store: "长宏时代手机专营店",
        tubiao: "../../utils/images/jh.png"
      }
    ],
    rexiaoList:[
      {
        ziying: "自营",
        title: "Apple iPhone 6 32GB 金色 移动联通电信4G手机",
        price: 2299,
        priceCut: "直降100元",
        discount: "",
        img: "../../utils/images/rexiao1.png",
        logo: "../../utils/images/rx.png",
        store: "手机热销前十",
        tubiao: "../../utils/images/jh.png"
      },
      {
        ziying: "自营",
        title: "奔腾 （POVOS） 卷直发器 卷发棒 直发卷发干湿两用卷发器 PR5073",
        price: 39,
        priceCut: "直降80元",
        discount: "",
        img: "../../utils/images/rexiao2.png",
        logo: "../../utils/images/rx.png",
        store: "卷/直发器热销前十",
        tubiao: "../../utils/images/jh.png"
      },
      {
        ziying: "自营",
        title: "WELLHOUSE 臂包 手机包跑步包男女户外运动臂套骑行腕包黑色L",
        price: 22,
        priceCut: "",
        discount: "",
        img: "../../utils/images/rexiao3.png",
        logo: "../../utils/images/rx.png",
        store: "背包热销前十",
        tubiao: "../../utils/images/jh.png"
      },
      {
        ziying: "自营",
        title: "Apple iPhone 8 Plus（A1864）64GB 金色 移动联通电信4G手机",
        price: 6688,
        priceCut: "直降80元",
        discount: "",
        img: "../../utils/images/rexiao4.png",
        logo: "../../utils/images/rx.png",
        store: "手机热销前十",
        tubiao: "../../utils/images/jh.png"
      }
    ],
    haohuoList:[
      {
        ziying: "自营",
        title: "南极人 （Nanjiren） 女士内裤女95%棉质透气舒适甜美可爱",
        price: 39,
        haoping: "99.1%好评",
        img: "../../utils/images/haohuo1.png"
      },
      {
        ziying: "自营",
        title: "骆驼（CAMEL）登山包背包 户外旅行背包双肩背包徒步背包 40L 1F01018 黑色",
        price: 179,
        haoping: "96.9%好评",
        img: "../../utils/images/haohuo2.png"
      },
      {
        ziying: "自营",
        title: "小米 （MI） 小米5X 手机 玫瑰金 全网通（4G RAM + 64G ROM）标准版",
        price: 1399,
        haoping: "98.6%好评",
        img: "../../utils/images/haohuo3.png"
      },
      {
        ziying: "自营",
        title: "南极人 （Nanjiren） 女士内裤女95%棉质透气舒适甜美可爱",
        price: 39,
        haoping: "99.1%好评",
        img: "../../utils/images/haohuo1.png"
      },
      {
        ziying: "自营",
        title: "骆驼（CAMEL）登山包背包 户外旅行背包双肩背包徒步背包 40L 1F01018 黑色",
        price: 179,
        haoping: "96.9%好评",
        img: "../../utils/images/haohuo2.png"
      },
      {
        ziying: "自营",
        title: "小米 （MI） 小米5X 手机 玫瑰金 全网通（4G RAM + 64G ROM）标准版",
        price: 1399,
        haoping: "98.6%好评",
        img: "../../utils/images/haohuo3.png"
      }
    ],
    scrollTop: 0,
    scrollY:""
  },
  scroll:function(e){
    this.setData({
      scrollY: e.detail.scrollTop
    });
    console.log(e.detail.scrollTop);
  },
  handleClick: function (e) {
    this.setData({
      num: e.currentTarget.dataset.index
    })
  },
  search: function(){
    this.setData({
      search: "search1"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
   // this.search();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// test:function(e){
//   console.log(e);
//   this.setData({
//     search:'search1'
//   })
//   console.log(this.data)
// },
// test0:function(e){
//   console.log(e.changedTouches[0].pageY);
// },
    /**test */
  /**
   * 用户点击右上角分享
   */