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
import { Swipe, SwipeItem ,Button,Lazyload } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


//安装我们的图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//定义全局过滤器
import moment from 'moment'
Vue.filter('dataFormat', function(datastr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(datastr).format(pattern)
})

//导入vue-resource用于数据获取
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root='../../../static'
Vue.http.options.emulateJSON = true;
 
Vue.use(Lazyload);



//导入axios
import axios from 'axios';
Vue.prototype.$axios = axios;
 

//导入mui的样式
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'


//导入自己的router.js路由模块
import router from './router.js' 

 

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router, //把路由挂载到实例上
    http: {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }

})