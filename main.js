import App from './App'

//导入网络请求的包，配置请求响应器和响应拦截器
import { $http } from '@escook/request-miniprogram'

uni.$http = $http
//请求根路径
$http.baseUrl='127.0.0.1:8000'//服务器域名
$http.beforeRequest =function(options){
	uni.showLoading({
		title:'数据加载中...'
	})
}
$http.afterRequest = function () {
  uni.hideLoading()
}

// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif