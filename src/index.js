//入口文件
import Vue from 'vue'
import app from './app.vue'

//按需导入mint-UI中的组件
import{Header} from 'mint-ui'
Vue.component(Header.name,Header)



//导入mui的样式
import './lib/css/mui.min.css'

var vm = new Vue({
    el:'#app',
    render:c => c(app)
})