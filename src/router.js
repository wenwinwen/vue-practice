import VueRouter from 'vue-router'

//导入对应的路由组件
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import shopcar from './components/tabbar/shopcar.vue'
import newslist from './components/news/newslist.vue'
import newInfo from './components/news/newsinfo.vue'
import photolist from './components/photolist/photolist.vue'
import photoinfo from './components/photolist/photoinfo.vue'
import goodlist from './components/goods/goodlist.vue'
import goodinfo from './components/goods/goodinfo.vue'
import goodDesc from './components/goods/goodsDesc.vue'
import goodcomment from './components/goods/goodsComment.vue'

var router = new VueRouter({
    routes:[//配置路由规则的
    {path:'/',redirect:'/home'},
    {path:'/home', component:home},
    {path:'/member', component:member},
    {path:'/shopcar', component:shopcar},
    {path:'/search', component:search},
    {path:'/home/newslist', component:newslist},
    {path:'/home/newsinfo/:id',component:newInfo},
    {path:'/home/photolist', component:photolist},
    {path:'/home/photoinfo', component:photoinfo},
    {path:'/home/goodslist', component:goodlist},
    {path:'/home/goodinfo',component:goodinfo},
    {path:'/home/goodsdesc',component:goodDesc},
    {path:'/home/goodcom',component:goodcomment}

    ],
    linkActiveClass:'mui-active'//覆盖默认的路由高亮类，默认的类叫做router-link-active
})

//把路由对象挂载出去
export default router