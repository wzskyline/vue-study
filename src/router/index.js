import Vue from 'vue'
import Router from 'vue-router' 
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
    {
    	path:'/user/:name',
    	name:'user_info',
    	components:{
    		main:UserInfo,
    	}
    }
  ]
})
