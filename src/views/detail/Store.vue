<template>
    <div>
        <div id="Header">
            <div id="address">{{list.address}}</div>
            <div id="record">查看食品安全档案</div>
        </div>
        
        <div id="SendTime">配送时间：{{list.delivery_time}}</div>
        <div id="remark">{{list.notice}}</div>
        <div id="serve">{{list.serve}}</div>
        <div id="MJ">{{list.full}}</div>
        <div id="remark2">该商户支持在线支付</div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                list:[],
            }
        },
        created(){
            axios.get(`http://admin.gxxmglzx.com/tender/test/get_store_id/?id=${this.$route.query.id}`)
        .then((res)=>{
            console.log(res);
            this.list=res.data.data;
        })
        .catch((error)=>{
            console.log(error);
        });
    }}
</script>

<style lang="scss" scoped>

#Header{
    margin:0 0.3rem;
    padding-left: 0.48rem;
    #address{
        font-family: mtsi-font;
        font-size: 0.28rem;
        line-height: 0.4rem;
        margin: 0.36rem 0;
    }
    #record{
        font-size: 0.28rem;
        margin-bottom: 0.36rem;
    }
}
#SendTime{
    
    font-size: 14px;
    margin: 0.36rem 0.3rem;
    padding-left: 0.48rem;
}
#remark{
    font-size: 14px;
    margin: 0.36rem 0.3rem;
    padding-left: 0.48rem;
}
#serve{
    font-size: 14px;
    margin: 0.36rem 0.3rem;
    padding-left: 0.48rem;
}
#MJ{
    font-size: 14px;
    margin: 0.36rem 0.3rem;
    padding-left: 0.48rem;
}
#remark2{
    font-size: 14px;
    margin: 0.36rem 0.3rem;
    padding-left: 0.48rem;
}
</style>