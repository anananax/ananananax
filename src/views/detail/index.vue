<template>
    <div class="bs-wrapper">
        <div class="bs-content">
            <Header></Header>
            <van-tabs v-model="active" animated title-active-color="orange" line-height="1.5px" color="rgb(244,218,94)" line-width="30px" >
                <van-tab :title="'点餐'">
                    <Order></Order>
                </van-tab>
                <van-tab :title="'评论'">
                    <Comment></Comment>
                </van-tab>
                <van-tab :title="'商家'">
                    <Store></Store>
                </van-tab>
            </van-tabs>
        </div>
        
        
    </div>
</template>

<script>
import Header from "./Header"
import Comment from "@/views/comment/index"
import Order from "@/views/order/index"
import Store from "./Store"
import BetterScroll from 'better-scroll'

    export default {
        data() {
            return{
                active:0,
            }
        },
        components:{
            Header,
            Order,
            Comment,
            Store
        },
        mounted(){
            setTimeout(()=>{
                let bs = new BetterScroll('.bs-wrapper', {
                    click:true,
                })
            },1000)
        }
        
        
        
    }
</script>

<style lang="scss" scoped>
    .bs-wrapper{
        height: 100vh;
        overflow: hidden;
    }
</style>