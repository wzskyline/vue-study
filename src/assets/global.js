 /*
 准备来放的全局数据
 {
  index     // 有效记录次数 
  openTime  // 点开面板时间
  closeTime // 关闭面板时间
  keepTime  // 停留面板时间
 }
 */
 export default {
   user: {
     name: "bobi",
     age: "24",
     wechat: "wzskyline",
     adress: "xian,china",
   },
   OperateList: [],
   updateLiist(list) {
     this.OperateList = list
     console.log('had update OperateList')
   },
 }
