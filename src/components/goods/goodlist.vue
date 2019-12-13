<template>
<div class="goods-list">
<div class="good-item" v-for="(item,i) in goodslist" :key="i">
    <img :src="item.url" alt="">
    <h1 class="title">{{item.title}}</h1>
    <div class="info">
       <p class="price">
           <span class="now">{{item.sell_price}}</span>
           <span class="old">{{item.market_price}}</span>
       </p>
   <p class="sell">
       <span>热卖中</span>
       <span>剩{{item.stock_quantity}}件</span>
   </p>
    </div>
</div>

<mt-button type="danger" size="large" @click="getmore" >加载更多</mt-button>
</div>    
</template>

<script>
export default {
    data(){
        //这个data是往自己组件内部,挂载一些私有数据的
        return{
            pageindex:1,
            goodslist:[]
        }

    },
    created(){
        this.getgoodslist();
    },
    methods:{
        getgoodslist(){
            //获取商品列表
            this.$http.get("goods"+this.pageindex+".json").then(result=>{
                if(result.body.status === 0){
                    this.goodslist= this.goodslist.concat(result.body.message)
                }
            })
        },
        getmore(){
            this.pageindex++
            this.getgoodslist();
        }
    }
}
</script>


<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
     
}
.good-item{
    width: 49%;
    border: 1px solid #cccccc;
    box-shadow: 0 0 8px #cccccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
}
.good-item img{
    width: 100%;

}
.title{
    font-size: 14px;
}
.info{
    background-color: #eee;
}
p{
    margin: 0;
    padding: 5px;
}
.now{
    color: red;
    font-weight: bold;
    font-size: 16px;
}
.old{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
}
.sell{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}
</style>
