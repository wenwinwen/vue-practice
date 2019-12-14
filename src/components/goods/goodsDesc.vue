<template>
    <div>
        <h3>{{info.title}}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            info:{}//图文数据
        }

    },
    created(){
     this.getGoodsDesc()
    },
    methods:{
        getGoodsDesc(){
            this.$http.get('desc.json').then(result=>{
                if(result.body.status ===0){
                    this.info = result.body.message[0]
                }
            })
        }
    }
}
</script>

<style scoped>
 h3{
     font-size: 16px;
     columns: #226aff;
     text-align: center;
     margin: 15px 0 ;

 }
 .content{
     width: 100%;
 }
</style>