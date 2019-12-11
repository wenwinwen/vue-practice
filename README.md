
# this is my first project

## created for learning webpack and vue 

### Best wish for myself

#### everything i wanted can be achieved


## [开源协议之间的区别](https://www.cnblogs.com/guxuelong/p/5288390.html)

#### 用命令行把修改过后的代码上传到
1. git add . 
2. git commit -m "提交信息"
3. git push

### 123

## 制作首页app组件
### 完成Header区域,使用的是Mint-ui中的header组件
### 制作底部的tabbar区域,使用的是MUI的Tabbar.html
1. 要在中间区域放置一个 router-view 来展示路径匹配到的组件
 2.  在制作用户购物小图标的时候，操作会相对多一些
   + 先把扩展图标的css样式，拷贝到项目中
   + 拷贝拓展字体库 ttf文件，到项目中
   + 为购物车小图标，添加 样式 mui-icon mui-icon-extra --xxx

## 改造 tabbar为路由 router-link
## 设置路由高亮
## 点击tabbar中的路由链接 展示对应的路由组件
## 制作首页轮播图布局
## 加载首页轮播图数据
1. 获取数据 使用vue-resource
2. 使用vue-resource的this.$http.get获取数据
3. 获取到的数据，要保存到data身上
4. 使用v-for循环渲染每一个item项

## 改造九宫格区域样式

## 改造新闻资讯路由链接 在router中添加 并且在home中更改a为router
1. 绘制界面 使用MUI中的media-list.html
2. 使用vue-resource获取数据
3. 渲染真实数据

## 实现新闻列表点击 跳转到新闻详情
1. 把列表的每一项改造为 router-link ， 同时，在跳转的时候应该提供唯一的标识符
2. 创建新闻详情的组件页面 newsInfo.vue
3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现我们新闻详情的页面布局 和数据渲染


## 单独封装一个comment.vue评论子组件
1. 先创建一个 单独的comment.vue组件模板
2. 在需要使用comment 组件的页面中，先动手导入comment组件
 + import comment from './comment.vue'
3. 在父组件中，使用'components'属性，将刚才导入comment组件，注册为自己的子组件
4. 将注册子组件的时候，注册名称，以标签形式，在页面中引用即可

## 获取所有的评论数据显示到页面中

## 实现点击加载更多评论的功能
1. 为加载更多按钮绑定事件，在事件中，请求下一页数据
2. 点击加载更多，让pageIndex++，然后重新调用this.getcomments()方法 重新获取最新一页的数据
3. 为了防止新数据覆盖老数据的情况，我们在点击加载更多的时候，每当获取到新的数据，应该让老数据调用数组的const方法，凭借上新数组