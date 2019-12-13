<template>
    <div class="newsinfo">
        <h3 class="title" >{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newsinfo.add_time}}</span>
            <span>点击次数:{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        
        <!--评论区-->
        <comment-box :id="this.id" ></comment-box>
    </div>
</template>


<script>
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return{
            id:parseInt(this.$route.params.id)-13, //将url中传递过来的id值，挂载到data上，方便以后使用
            newsinfo:{}
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){//获取新闻详情
          this.$axios.get('../../../static/newsinfo.json').then(result=>{
              console.log(result)
              if(result.data.status ===0){
                 this.newsinfo= result.data.message[this.id];
              }else{
                
              }
          })
        }
    },
    components:{
        'comment-box':comment
    }
}
</script>

<style scoped>
.newsinfo{
padding: 0 4px
}
.title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red
}
.subtitle{
font-size: 13px;
color: #226aff;
display: flex;
justify-content: space-between;
}

</style>