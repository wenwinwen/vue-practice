<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox" @change="countChanged" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
import mui from '../../lib/js/mui.js'
export default {
    mounter(){
        //初始化数字选择框组件
        mui(".mui-numbox").numbox();
        console.log(this.max)
    },
    methods:{
        countChanged(){
           this.$emit("getcount", parseInt(this.$refs.numbox.value)) 
        }
    },
    props:["max"],
    watch:{
        'max':function(newVal, oldVal){
            //使用jsAPI设置numbox最大值
            mui(".mui-numbox")
            .numbox()
            .setOption('max',newVal)
        }
    }
}
 
</script>

<style scoped>

</style>