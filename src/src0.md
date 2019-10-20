# 目录

## 本阶段介绍

从网页中学习vue后 能尽快 使用单页面写出 doc/jqueryDemo.html  
本案例使用组件进行进一步写出这个案例  

``` code
从<div id="app"> 中看出 页面 模块合成
    header main  user 为兄弟组件
    header 向 main发送通信 更改 page显示状态 切换风格
    header 向 user发送通信 更改 用户详细显示状态 并记录了点击操作的一些信息存到全局数据中
    user 收到信息后 向header 发送信息 更改当前 详细页是否显示

主要使用
    common.$on('userInfo', res => { })
    common.$emit('userShow',{});

更改数据的方法
    this.page = 1;
    console.log(this.$data.page)

页面根据数据渲染
    v-show="this.page[2]"
全局数据
    import global_ from './assets/global' //引用文件
    Vue.prototype.GLOBAL = global_        //挂载到Vue实例上面
    更新方法为调用全局 对象中自定义的方法
    this.GLOBAL.updateLiist(tmpList);
HTML 页面渲染值
    第{{ e.index }}次点击 ,开始与{{ e.openTime }},结束于{{ e.closeTime }}，停留 {{ e.keepTime }}秒 
自定义指令
```
 《Don Coi》《Geisha》《Sanlalala》《Powerful》《Five Hours》《告白の夜》《心如止水》《一曲相思》《我曾》《出山》《猜不透》《绿色》《来自天堂的魔鬼》《你的酒馆对我打了烊》《》《》《》

 https://juejin.im/entry/5a54b747518825734216c3df

 买房流程

1. 三方协议 + 钱 + 银行流水 + 征信报告+收入证明 
2. 网签
3. 面签 银行发贷款后交税
4. 过户 房产证 抵押 (按揭)
按揭 等本金和等本息