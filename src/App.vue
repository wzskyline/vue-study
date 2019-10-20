<template>
  <div id="app">
  	<cn-header></cn-header>
    <cn-main></cn-main>
    <cn-user></cn-user>
    <router-view name='main'></router-view> 
  </div>
</template>

<script>
import cnHeader from './components/Header'
import cnMain from './components/Main'
import cnUser from './components/UserInfo'
export default {
  name: 'app',
  components:{
    cnHeader,
    cnMain,
    cnUser
  },
}
</script>

<style>
	html {
    background-color: #DDDDDD;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
}
body,div,span,a,p,ul,li {
	margin: 0;
	padding: 0;
}
</style>
