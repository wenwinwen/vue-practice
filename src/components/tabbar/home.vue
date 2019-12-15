<template>
    <div>
    <!-- 轮播图-->
      <!-- 在组件中，使用v-for循环的话，一定要使用key-->
    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

    <!--6宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photolist">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
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
import swiper from '../subcomponents/swiper.vue'
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
              if(result.body.status === 0 ) {
                  
                  this.lunbotuList= result.body.message;

              }else{
                 Toast('加载轮播图失败')
              }
            })
        }
    },
    components:{
        swiper
    }
}
</script>

<style scoped>

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    background-color: white;
    border: none
}
.mui-media-body{
    font-size: 13px
}

</style>
