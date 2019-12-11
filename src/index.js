//入口文件
import Vue from 'vue'
import app from './app.vue'

//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//按需导入mint-UI中的组件
import{Header} from 'mint-ui'
Vue.component(Header.name,Header)

//引入轮播图
import { Swipe, SwipeItem ,Button } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
//定义全局过滤器
import moment from 'moment'
Vue.filter('dataFormat', function(datastr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(datastr).format(pattern)
})

//导入vue-resource用于数据获取
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root='../../../static'


//导入mui的样式
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'


//导入自己的router.js路由模块
import router from './router.js' 

 

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router //把路由挂载到实例上
})