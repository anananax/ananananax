<template>
    <div id="Option">
        <ul>
            <li>
                综合排序
            </li>
            <li>
                销量最高
            </li>
            <li>
                距离最近
            </li>
            <li>
                筛选
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #Option::before{
        content: ' ';
        width: 100%;
        height: 1px;
        background: #e4e4e4;
        transform-origin: 0 0;
        transform: scaleY(0.5);
        position: absolute;
        left: 0;
        top: 0;
}
    #Option::after{
        content: ' ';
        width: 100%;
        height: 1px;
        background: #e4e4e4;
        transform-origin: 0 0;
        transform: scaleY(0.5);
        position: absolute;
        left: 0;
        bottom: 0;
}
#Option{
    position: relative;
    background-color: #fff;
}
    
    li{
        position: relative;
        display: inline-block;
        width: 25%;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        color:#666;
        font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
    }
</style>