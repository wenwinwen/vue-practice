<template>
    <div>
    <!-- 轮播图-->
      <!-- 在组件中，使用v-for循环的话，一定要使用key-->
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in lunbotuList" :key="index">
            <img :src="item" alt="">
        </mt-swipe-item>
    </mt-swipe>

    <!--6宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
    </div>
</template>

<script>
import{Toast} from 'mint-ui'
export default{
    data(){
        return{
         lunbotuList:[]
        };
    },
    created(){
      this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$http.get('pic.json').then(result =>{
              if(result.status === 200 ) {
                  console.log(result);
                  this.lunbotuList= result.body.img;
              }else{
                 Toast('加载轮播图失败')
              }
            })
        }
    }
}
</script>

<style scoped>
.mint-swipe{
    height: 200px;
}
 
.mint-swipe-item img{
         width: 100%;
         height: 100%;
     }
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    background-color: white;
    border: none
}
.mui-media-body{
    font-size: 13px
}
</style>
