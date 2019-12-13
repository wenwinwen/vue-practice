<template>
    <div>
        <!--顶部滑动条-->
        <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id==0?' mui-active':'']" v-for="item in cates" :key="item.id" @click="getl(item.id)" >
							{{item.title}}
						</a>
					</div>
				</div>
           </div>

           <!--图片列表区域-->
           <ul class="photo-list">
          <router-link to="/home/photoinfo" v-for="item in list" :key="item.id" tag="li">
             <img v-lazy="item.img_url">
             <div class="info">
                 <h1 class="info-title">{{item.title}}</h1>.
                 <div class="info-body">{{item.zhaiyao}}</div>
             </div>
          </router-link>
             </ul>
    </div>
</template>

<script>
import mui from '../../lib/js/mui.js'
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
export default {
    data(){
        return{
            cates:[],//所有分类的列表数组
            list:[]
        };
    },
    created(){
        this.getall()
        //默认进入页面，就主动请求所有图片列表的数据
        this.getl(0)
    },
    mounted(){//当组件中的dom结构被渲染好并放到页面中后，会执行这个钩子函数
        //如果要操作元素,最好在mounted里面，因为，这里时候的dom元素是最新的
        //2.初始化滑动组件
        mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getall(){
            //获取所有的图片分类
            this.$http.get('share.json').then(result =>{
                if(result.body.status === 0){
                    result.body.message.unshift({title:'全部',id:0});
                    this.cates= result.body.message
                }
            })
        },
        getl(cateId){//根据分类id,获取图片列表
           this.$http.get("listpic"+cateId+".json").then(result =>{
                if(result.body.status === 0){
                    this.list= result.body.message
                }
            })
        }
        }
    }
</script>

<style scoped>
*{

    touch-action: pan-y
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo-list li{
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0  0 6px #999;
    position: relative
}
.photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
}
.photo-list img{
     width: 100%;
     vertical-align: middle
} 
.info{
    color: white;
    text-align: center;
    position: absolute;
    bottom: 0px;
    background-color: rgba(0,0,0,0.4);
    max-height: 84px;
}
.info-title{
font-size: 14px;
}
.info-body{
font-size: 13px;
}

</style>