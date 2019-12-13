
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
1.getcomments

## 实现点击加载更多评论的功能
1. 为加载更多按钮绑定事件，在事件中，请求下一页数据
2. 点击加载更多，让pageIndex++，然后重新调用this.getcomments()方法 重新获取最新一页的数据
3. 为了防止新数据覆盖老数据的情况，我们在点击加载更多的时候，每当获取到新的数据，应该让老数据调用数组的const方法，凭借上新数组

## 发表评论
1. 把文本框做双向事件绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空，则toast提示用户 评论内容不能为空
4. 通过 vue-resource 发送一个请求，把评论内容提交给服务器
5. 当发表评论可以，重新刷新列表，以查看最新的评论
+ 如果调用getcomments方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
+ 换一种思路:当评论成功狗，在客户端，手动拼接出一个最新的评论对象，然后调用数组的unshift方法，把最新的评论追加到data中comments的开头;这样，就能完美实现刷新评论列表的需求


## 改造图片分析按钮为 路由的链接并显示对应的组件页面

## 绘制图片列表 组件页面结构并美化样式
1. 制作顶部的滑动条
2. 制作 底部的图片列表

## 制作顶部滑动条的坑
1. 需要借助于MUI中的tab-top-webview-main.html 
2. 需要把slider 区域的mui-fullscreen类去掉
3. 滑动条无法正常触发滑动，通过检查官方文档，这是一个js组件，需要被初始化
  + 导入mui-js
  + 调用官方提供的方式去初始化 mui-scroll 
4. 我们在初始化 滑动条的时候，导入的mui.js ， 但是控制台报错,因为mui.js中用到caller 等东西，但是，webpack打包好的bundle.js中，默认是启用严格模式，所以，这两者冲突了
+ 解决方法 1.把mui.js中非严格模式的代码改掉，不显示，或者把webpack打包时候的严格模式禁用
+ npm install babel-plugin-transform-remove-strict-mode
+ 移除严格模式
+ 对于滑动报警，原因是chrome为了提高页面的滑动流畅度而新出的东西
+ 使用{touch-action: pay-y} 用于是否允许用户操作，以及如何响应用户操作
5. 刚进入图片分享页面的时候，滑动条无法正常工作，发现如果要初始化滚动条，必须要等dom元素加载完毕，所以，我们把初始化滑动条的代码，搬到mounted生命周期函数中
6. 当滑动条调试好了，发现 tabbar无法正常工作了，这时候,我们需要把每个tabbar按钮的mui-tab-item的样式 重新改一下名字
7. 获取所有分类，并渲染分类列表


## 制作图片列表区域
1. 图片列表需要使用冷加载技术 我们可以使用mint-ui提供的现成的组件'lazy-load'
2. 根据'lazy-load'的使用文档，尝试使用
3. 渲染图片列表数据

## 实现图片列表的懒加载和样式美化

## 实现了点击图片跳转图片详情的页面
1. 在改造li成router-link的时候，需要使用tag属性指定要渲染为哪种元素

## 实现详情页面的布局和美化,同时获取数据渲染页面
