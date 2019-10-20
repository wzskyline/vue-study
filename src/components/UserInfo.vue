<template>
  <div class="UserInfo">
    <div v-show="this.show" class="userPage">
      <div class="userImg" v-img="val.url" v-for=" val in imgs" :key="val.url"></div>
      <div class="line"><span class="name">name:</span><span class="nameValue">bobi</span></div>
      <div class="line"><span class="address">address:</span><span class="addressValue">101.skyline,skyWay</span></div>

      <div class="clickInfo" :title="time" @click="testClick">
        点击记录信息(for循环展示)
        <ol>
          <li v-for="e in list" :key="e.index"> {{formatInfo(e)}} </li>
        </ol>
      </div>
    </div>

  </div>
</template>

<script>
  import common from '../assets/common.js';
  import axios from 'axios'
  export default {
    name: 'UserInfo',
    data() {
      return {
        userinfo: {},
        show: false,
        list: [],
        time: formatTime(Date.now()),
        imgs:[{
          
          url:"https://www.imooc.com/static/img/index/logo.png"}]
      }
    },
    created() {
      var _this = this;
      console.log(this.GLOBAL.OperateList)
      common.$on('userInfo', res => {
        console.log("收到消息", res)
        this.show = res.show;
        this.list = _this.GLOBAL.OperateList;

        console.log(this.GLOBAL.OperateList)
        console.log(this.list)
        //common.$emit('userShow',{show:!this.show});  //can not 
        this.backShotToHeader()
      })
      axios.get("http://quan.suning.com/getSysTime.do").then(function(res) {
        console.log(res.data)
      });
      this.$axios.get("http://quan.suning.com/getSysTime.do").then(function(res) {
        console.log(res.data)
      });
    },
    methods: {
      backShotToHeader() {
        console.log(this.$data.show)
        common.$emit('userShow', {
          show: this.show
        });
      },
      beforeMount() {
        //this.getData();
      },
      formatInfo(e) {
        return "第" + e.index + "次点击 ,开始于" + formatTime(e.openTime) + ",结束于" + formatTime(e.closeTime) + "，停留 " + e
          .keepTime + "秒"
      },
      testClick() {
        alert("第一次点击时间为:" + this.time)
      }

    },
    // 局部过滤器
    filters: {
      filterName: function (value, format) {}
    },
     watch: {
       'show': function(val, oldVal) {
           console.log('当前值为：' + val, '旧值为：' + oldVal)
       }
     }
  }


  function formatTime(time) {
    var date = new Date(time)
    var month = date.getMonth() < 10 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1);
    var day = date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate();
    var hour = date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours();
    var min = date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes();
    var sec = date.getSeconds() < 10 ? ("0" + date.getSeconds()) : date.getSeconds();

    //return date.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
    return hour + ":" + min + ":" + sec;
  };

</script>

<style>
  .userPage {
    height: 500px;
    border-radius: 25px;
    padding: 20px;
    float: right;
    position: absolute;
    top: 30px;
    right: 10px;
    animation: fadeinout 2s linear forwards;
    opacity: 0;
    background-color: darkred;
  }

  .userImg {
    width: 100px;
    height: 100px;
    background-color: darkorange;
    border-radius: 25px;
  }

  .line,
  span {
    margin: 10px;
  }

  /* more */

  @-webkit-keyframes fadeinout {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeinout {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }

</style>
