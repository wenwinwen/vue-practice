<template>
    <div>
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in lunbotuList" :key="index">
        <img :src="item.img" alt="" :class="{full:isfull}">
        </mt-swipe-item>
    </mt-swipe>

    </div>
</template>

<script>
export default {
    props:["lunbotuList","isfull"]
}
</script>

<style scoped>
.mint-swipe{
    height: 200px;
}
 
.mint-swipe-item img{
 
         height: 100%;
     }
     .full{
         width: 100%;
     }
.mint-swipe-item{
    text-align: center;
}
     
</style>