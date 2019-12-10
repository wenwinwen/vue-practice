var path = require('path')
//如果要配置插件，需要在导出的对象中，挂载一个plugin节点
//在内存中，根据指定的模板页面，生成一份内存中的页面，同时自动把打包好的bundle注入到页面底部
var htmlWebpackPlugin = require('html-webpack-plugin')
//当以命令行形式运行webpack或webpack-dev-server的时候，工具会发现，我们并没有提供要打包
//的文件 入口和出口文件，此时，他会检查项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个配置对象
//然后根据这个对象，进行打包构建
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
 entry:path.join(__dirname,'./src/index.js'),
 output:{
     path:path.join(__dirname,'./dist'),
     filename:'bundle.js'
 },
 plugins:[//所有webpack 插件的配置节点
    new htmlWebpackPlugin({ //所有webpack 插件的配置节点
        template:path.join(__dirname,'./src/index.html'),//指定模板文件路径
        filename:'index.html'//设置生成的内存页面的名称
    }),
    new VueLoaderPlugin()
 ],
 module:{//配置所有第三方loader模块的
    rules:[//第三方模块的匹配规则
          {test:/\.css$/,use:['style-loader','css-loader']},//处理css文件的loader
          {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
          {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7631'},//处理图片路径的loader
          //limit给定的值，是图片的大小，单位是byte，如果我们引用的图片，大于或等于给定的limit值
          //则不会被转为base64格式的字符串，如果图片小于给定的limit值，则会被转为base64的字符串
          {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
          { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
          //配置babel来转换高级的ES语法
          {test:/\.vue$/, use: 'vue-loader' }//处理.vue文件的loader
        ]
 }
//  resolve:{
//      alias:{//设置vue导入时候的包的路径 当使用import vue from 'vue'时候
//         // "vue$":"vue/dist/vue.js"
//      }
 
}