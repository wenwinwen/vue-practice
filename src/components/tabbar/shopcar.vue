<template>
    <div class="shopcar-containner">
       <div class="good-list">
            <div class="mui-card" v-for="(item,i) in goodlist" :key="i">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id] )" v-model="$store.getters.getGoodsSelected[item.id]"></mt-switch>
                        <img :src="item.thumb_path" width="300px" alt="" >
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p class="haha">
                                <span class="price">￥{{item.sell_price}}</span>
                                <mm :init="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></mm>
                                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
                            </p>

                             
                        </div>
					</div>
				</div>
		</div>
       </div>
        <div class="mui-card">
				 
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuang">
						<div class="left"> <p>总计(不含运费)</p>
                        <p>已勾选商品<span class="red">{{$store.getters.getamount.count}}</span> 件,总价￥<span class="red">{{$store.getters.getamount.amount}}</span></p>
                        </div>
                          <mt-button type="danger">去结算</mt-button>
					</div>
                     
				</div>
				 
		</div>
    </div>
</template>

<script>
 
import mm from "../subcomponents/shopcarbox.vue"
export default{
    data(){
        return{
            goodlist:[]
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
      getGoodsList(){
          var idArr=[];
          this.$store.state.car.forEach(item=>idArr.push(item.id))
          if(idArr.length <=0){
              return;
          }
          this.$http.get('final.json').then(result=>{
               this.goodlist= result.body.message;
          })
      },
      remove(id, index){
          //点击删除，把商品从store中根据传递的id删除，同时，把当前组件中的goodslist中，对应要删除的那个商品，使用index来删除
          this.goodlist.splice(index, 1);
          this.$store.commit('removeFormCar', id)
      },
      selectedChanged(id, val){
          //每当点击开关，把最新的开关状态,同步到store中
          this.$store.commit("updateGoodsSelected", {id, selectd: val})
      }

    },
    components:{
       mm
    }
    
}
</script>

<style scoped>
 

.shopcar-containner{
    background-color: #eee;
    overflow: hidden;
}
.good-list img{
    width: 60px;
    height: 60px;

}
.good-list h1{
    font-size: 13px;
}
.good-list .info .price{
      color: red;
      font-weight: bold
}
.mui-card-content-inner{
    display: flex;
    align-items: center
}
.info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.jiesuang{
    display: flex;
    justify-content: space-between;
    align-items: center
}
.red{
    color:red;
    font-weight: bold;
    font-size: 16px;
}
 
</style>