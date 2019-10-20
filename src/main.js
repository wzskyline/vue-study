import Vue from 'vue'
import App from './App'
import router from './router'     //引用

import axios from 'axios'

import global_ from './assets/global' //引用文件
Vue.prototype.GLOBAL = global_        //挂载到Vue实例上面
console.log(global_)
console.log(this.GLOBAL)
 
// 全局过滤器需要先于 实例
Vue.filter('filterName', function (value) {
  // value 表示要过滤的内容
})


// 将 axios 添加到 Vue.prototype 中
Vue.prototype.$axios = axios
Vue.directive('img',{
  inserted:function(el,binding){
    var color= Math.floor(Math.random()*1000000)
    el.style.backgroundColor = "#"+color

    var img = new Image()
    img.src = binding.value
    img.onload= function(){
      el.style.backgroundImage='url(' +binding.value+")"
    }
  }
})
 
// 自定义指令
Vue.directive('img',{
  load(el,binding){
   var color = Math.floor(Math.random()*1000000)
   el.style.background
  }
})
new Vue({
  el: '#app',
  router,                         //传入
  render: h => h(App)
}) 
 