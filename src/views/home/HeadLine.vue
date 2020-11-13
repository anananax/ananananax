<template>
    <div id="header">
        <span>附近商家</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #header{
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
        text-align: center;
        span{
            font-size: 0.29rem;
            font-weight: 800;
            font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
        }
        ::before{
            content: '';
            height: 0.01rem;
            margin-bottom: 0.08rem;
            width: 30px;
            background: #666;
            margin-right: 3px;
            display: inline-block;
        }
        ::after{
            content: '';
            height: 0.01rem;
            margin-bottom: 0.08rem;
            width: 30px;
            background: #666;
            margin-left: 3px;
            display: inline-block;
        }
    }
    
   
</style>