//入口文件
import Vue from 'vue'
import app from './app.vue'

//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//每次刚进入网站，肯定会调用main.js在刚调用的时候，先从本地存储中，把购物车的数据读出来放到storage中
var car =JSON.parse(localStorage.getItem('car')||'[]')
var store = new Vuex.Store({
  state:{//this.$store.state.***
  car: car//将购物车中商品的数据，用一个数组存储起来,在car数组中，存储一些商品的对象，咱们可以暂时将这个商品对象，设计成这个样子{id:商品id, count: 要购买的数量 , price:商品的单价，selected:false}
  },
  mutations:{
  //this.$store.commit('方法的名称','按需传递唯一参数')
  addToCar(state,goodsinfo){
    //点击加入购物车，把商品信息，保存到store中的car上
    //1.如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
    //2.如果没有,则直接把商品数据，push到car中即可
    
    //假如 在购物车中,没有找到对应的商品
    var flag = false
    state.car.some(item=>{
      if(item.id === goodsinfo.id){
        item.count+=parseInt(goodsinfo.count)
        flag= true
        return true
      }
    })
    //如果最终循环完毕,得到的flag还是false，则把商品数据直接push到购物车中
    if(!flag){
      state.car.push(goodsinfo)
    }
    //当更新car之后，把car数组，存储到本地的localStorage中
    localStorage.setItem('car',JSON.stringify(state.car))
  },
  updateGoodsInfo(state,goodsinfo){
     state.car.some(item=>{
       if(item.id == goodsinfo.id){
         item.count= parseInt(goodsinfo.count)
         return true
       }
     })
     //当修改完商品的数量，把最新的购物车数据，保存到本地存储
     localStorage.setItem('car',JSON.stringify(state.car))
  },
  removeFormCar(state,id){
    //根据id，从store中的购物车中删除对应的那条商品数据
    state.car.some((item, i)=>{
      if(item.id == id){
         state.car.splice(i ,1)
         return true
      }
    })
    //将删除完毕的后的，最新的购物车数据，同步到本地存储中
    localStorage.setItem('car',JSON.stringify(state.car))
  },
  updateGoodsSelected(state, info){
    state.car.some(item=>{
      if(item.id == info.id){
        item.selectd= info.selectd
      }
    })
    //把最新的所有购物车商品保存到store中去
    localStorage.setItem('car',JSON.stringify(state.car))
  }
  },
  getters:{
  //this.$store.getters.****
  //相对于计算属性,也相当于filters
  getAllCount(state){
    var c = 0;
    state.car.forEach(item=>{
      c+= item.count
    })
    return c
  },
  getGoodsCount(state){
    var o={}
    state.car.forEach(item =>{
      o[item.id]= item.count
    })
    return o
  },
  getGoodsSelected(state){
    var o = {}
    state.car.forEach(item=>{
      o[item.id]= item.selectd
    })
    return o 
  },
  getamount(state){
    var o = {
      count:0,
      amount:0
    }
    state.car.forEach(item=>{
      if(item.selectd){
        o.count += item.count
        o.amount += item.price*item.count
      }
    })
    return o 
  }
  }
})


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
    },
    store//挂载store状态


})