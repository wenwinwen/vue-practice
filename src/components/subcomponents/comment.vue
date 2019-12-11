<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容(最多120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

         <div class="cmt-list">
             <div class="cmt-item" v-for="(item,i) in comments" :key="i"> 
                 <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time}}
                 </div>
                 <div class="cmt-body">
                   {{item.content === 'underfined'? '用户很懒什么也没留下':item.content}}
                 </div>
             </div>
             
         </div>

        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>

<script>
import{Toast} from "mint-ui"
export default {
    data(){
        return{
            pageIndex:1,//默认展示第一页数据
            comments:[]//所有的评论数据
        }
    },
    created(){
        this.getComment()
    },
    methods:{
        getComment(){//获取评论
            this.$http.get("com"+this.pageIndex+".json").then(result=>{
                if(result.body.status === 0){
                    //每当新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据拼接上新数据
                    this.comments= this.comments.concat(result.body.message)
                }else{
                 Toast("获取评论失败 !")
                }
            })
        },
        getmore(){
            this.pageIndex++;
            this.getComment();
        }
    },
    props:["id"]
}
</script>


<style scoped>
 
h3{
    padding-top: 10px;
    font-size: 18px;
}
textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;

}
.cmt-list{
    margin-top: 5px 0;
}
.cmt-item{
font-size: 13px
}
.cmt-title{
background-color: #ccc;
line-height: 30px;
margin-top: 10px;
}
.cmt-body{
    line-height: 35px;
    text-indent: 2em
}


</style>