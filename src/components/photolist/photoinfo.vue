<template>
    <div class="photoinfo-contain">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time}}</span>
            <span>点击次数:{{photoinfo.click}}</span>
        </p>
        <hr>
        <!--缩略图-->
         <vue-preview height="100px" width="150px" :slides="list" @close="handleClose" v-for="(item,i) in list" :key="i"></vue-preview>
        <!--图片内容区域--->
        <div class="content" v-html="photoinfo.content"></div>

        <!--放置一个现成的评论子组件-->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
//导入评论子组件
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return{
            id: this.$route.params.id, //从路由中获取到的图片id
            photoinfo:{},
            pageIndex:1,
            list:[] // 缩略图数组
        }
    },
    created(){
      this.getphotoInfo()
      this.getThumbs()
    },
    methods:{
        getphotoInfo(){
            //获取图片详情
            this.$http.get('haha.json').then(result =>{
                if(result.body.status === 0){
                    this.photoinfo= result.body.message[0]
                }
            })
        },
        getThumbs(){
            this.$http.get('picshar.json').then(result=>{
                if(result.body.status === 0){
                    //循环每个图片数据，补全图片的宽和高
                    result.body.message.forEach(item=> {
                        item.w=600
                        item.h=400
                    })
                    //把完整的数据保存到list中
                    this.list=result.body.message
                }
            })
        },
        handleClose () {
        console.log('close event')
      }
    },
    components:{
        //注册评论子组件
        'cmt-box':comment
    }
}
</script>

<style scoped>
.photoinfo-contain{
    padding: 3px

}
.photoinfo-contain h3{
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
}
.subtitle{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
.content{
    font-size: 13px;
    line-height: 30px;
}
</style>