import VueRouter from 'vue-router'

//导入对应的路由组件
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import shopcar from './components/tabbar/shopcar.vue'


var router = new VueRouter({
    routes:[//配置路由规则的
    {path:'/',redirect:'/home'},
    {path:'/home', component:home},
    {path:'/member', component:member},
    {path:'/shopcar', component:shopcar},
    {path:'/search', component:search}

    ],
    linkActiveClass:'mui-active'//覆盖默认的路由高亮类，默认的类叫做router-link-active
})

//把路由对象挂载出去
export default router