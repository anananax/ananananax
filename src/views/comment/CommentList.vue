<template>
    <div id="box">
        <div id="list-box">
            <div :class="{active:obj.id==typeId}" v-for="obj in list.label" :key="obj.id" @click="change(obj.id)">{{obj.name}}{{"("+obj.count+")"}}</div>
        </div>
        <div id="comment" v-for="obj in list.rate" :key= obj.id>
            <img :src="obj.portrait" alt="">
            <div>
                <div id="top">
                    <div id="left">
                        {{obj.name}}  
                    </div>
                    <div id="right">
                        {{obj.time}}
                    </div>
                </div>
                <div id="minute">
                    {{obj.duration}}分钟送达
                </div>
                <div id="comment1">
                    {{obj.content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data(){
            return{
                typeId:1
            }
        },
        props:["list"],
        methods:{
            change(id){
                this.$emit("update",id),
                this.typeId=id
            }
        }
    }
</script>

<style lang="scss" scoped>
    #minute{
        color: #FFB000;
    }
    #box{
        
        #list-box{
            padding: 0.2rem;
            .active{
                border-color: #FFB000;
                background-color: #ffe;
            }
            div{
                padding: 0.1rem 0.2rem;
                display: inline-block;
                border-radius:0.3rem ;
                border: 1px solid #bbb; 
                margin: 0.05rem  0.1rem;
            }
            
        }
        #top{
            margin: 0.1rem 0;
            overflow: hidden;
            #left{
                float: left;
                font-size: 16px;
                }
                #right{
                    float: right;
                    font-size: 12px;
                    color: #898989;
                } 
        }
        
        #comment{
            display: flex;
            margin-bottom: 0.1rem;
            img{
                width:0.8rem ;
                height: 0.8rem;
                border-radius:50% ;
                margin-left:0.2rem ;
                margin-right: 0.2rem;      
                }

        }
        #comment1{
            font-size: 14px;
            line-height: 20px;
            color: #2f2f2f;
            padding-top: 14px;
            padding-bottom: 8px;
        }
    }
</style>