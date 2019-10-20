<template>
  <div class="Header">

    <router-link :to="{name:'root'}">
      <div class="style">风格</div>
    </router-link>

    <div class="button">
      <button v-on:click="changeStyle(0)" class="style1 opention"
        style="background-color: rgb(221, 221, 221);">文件夹风格</button>
      <button v-on:click="changeStyle(1)" class="style2 opention"
        style="background-color: rgb(221, 221, 221);">瀑布流风格</button>
      <button v-on:click="changeStyle(2)" class="style3 opention" style="background-color: blue;">PPT风格</button>
    </div>
    <span v-on:click="userInfo()"><a href="#">用户</a></span>
  </div>
</template>

<script>
  import common from '../assets/common.js';
  export default {
    name: 'Header',
    data() {
      return {
        userShow: false
      }
    },
    created() {
      //使用共有对象进行 接收 用户详细页面状态	
      common.$on('userShow', res => {
        console.log(res)
        this.userShow = res.show;
      })
    },
    methods: {
      changeStyle(index) {
        //使用共有对象进行 分发 事件
        common.$emit('changeStyle', index);
      },
      userInfo() {
        common.$emit('userInfo', {
          user: 'bobi',
          show: !this.userShow
        });

        console.log(this.GLOBAL.OperateList.length,this.GLOBAL.OperateList)
        var tmp = {
          index: this.GLOBAL.OperateList.length + 1,
          openTime: Date.now(),
          closeTime: 0,
          keepTime: 0,
        }
        var tmpList = this.GLOBAL.OperateList
        //如果没有显示 说明需要打开 添加一个记录
        //如果 显示 更新记录
        if (!this.userShow) {
		  console.log("更新记录") 
		  tmp = this.GLOBAL.OperateList[this.GLOBAL.OperateList.length - 1 > -1 ? this.GLOBAL.OperateList.length - 1 : 0] 
		  //tmpList = this.GLOBAL.OperateList.pop()    //bug 
		  tmpList =[]
		  for(var i=0;i< this.GLOBAL.OperateList.length-1;i++){
			tmpList.push(this.GLOBAL.OperateList[i])
		  } 
          tmp = {
            index: tmp.index,
            openTime: tmp.openTime,
            closeTime: Date.now(),
            keepTime: Math.floor((Date.now() - tmp.openTime) / 1000)
		  } 
        }
        tmpList.push(tmp)
        this.GLOBAL.updateLiist(tmpList);
        console.log(this.GLOBAL.OperateList.length,this.GLOBAL.OperateList)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Header {
    background: #5a5555;
    height: 50px;
    flex-direction: row;
  }

  .style,
  .button {
    display: inline;
  }

  a {
    text-decoration: none;
    color: #cbc9c9;
  }

  img {
    max-width: 120px;
    margin-left: 50px;
    margin-top: 10px;
  }

  span {
    float: right;
    margin-right: 50px;
    margin-top: 10px;
  }

</style>
