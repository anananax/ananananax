<template>
    <div id="Menu">
        <div id="List-Left">
            <ul>
                <li v-for="obj in nav" :key="obj.id">{{obj.name}}</li>
            </ul>
        </div>
        <div id="List-right">
            <div v-for="(obj,index) in goods" :key="index">
            <h2 id="wenzi">{{obj.name}}</h2>
            <ul>
                <li class="MenuMsg" v-for="prod in obj.content" :key="prod.id">
                    <img :src="prod.img" alt="">
                    <div id="Msg">
                        <div id="Msg-Name">{{prod.name}}</div>
                        <div id="Msg-Info">
                            {{prod.info}}
                        </div>
                        <div id="Msg-Sale">月售{{prod.num}}+&nbsp;&nbsp;&nbsp;赞{{prod.up}}</div>
                        <div> 
                            <span id="Sale">¥&nbsp;{{prod.price}}&nbsp;</span>
                            <span id="kg">/约{{prod.company}}</span>
                        </div>
                    </div>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                nav:[],
                goods:[]
            }
        },
        created(){
            axios.get(`http://admin.gxxmglzx.com/tender/test/get_nav?id=${this.$route.query.id}`)
            .then((res)=>{
                console.log(res.data.data);
                this.nav=res.data.data.nav;
                this.goods=res.data.data.goods;
            })
        }
    }
</script>

<style lang="scss" scoped>
    #Menu{
        font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
        .MenuMsg{
            padding-bottom: 22px;
        }
        #wenzi{
            line-height: 36px;
            font-size: 12px;
        }
        display: flex;
        #List-Left{
            flex: 1;
            li{
                width: 1.6rem;
                height: 1rem;
                box-sizing: border-box;
                text-align: center;
                padding-top: 9px;
                padding-bottom: 22px;
                background-color:#f5f5f5 ;
            }
        }
        #List-right{
            flex: 3;
           
            ul{
                li{
                    display: flex;
                    img{
                        width:1.5rem;
                        height: 1.5rem;
                    }
                    #Msg{
                        flex: 1;
                        width:0;
                        margin-left:5px ;
                        #Msg-Name{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 16px;
                            color: #333333;
                            font-weight: bold;
                            font-family: "PingFangSC-Medium", "Hiragino Sans GB", Arial, Helvetica, "\5B8B\4F53", sans-serif;
                            line-height: 22.5px;
                            margin-bottom: 2px;
                        }
                        #Msg-Info{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            margin-bottom: 3px;
                            height: 15px;
                            line-height: 15px;
                            width: 100%;
                            font-size: 11px;
                            color: #666;
                        }
                        #Msg-Sale{
                            margin-bottom: 3px;
                            height: 15px;
                            line-height: 15px;
                            width: 100%;
                            font-size: 11px;
                            color: #666;
                        }  
                        #Sale{
                            height: 21.5px;
                            line-height: 21.5px;
                            color: #fb4e44;
                            font-size: 18px;
                            font-family: "PingFangSC-Medium", "Hiragino Sans GB", Arial, Helvetica, "\5B8B\4F53", sans-serif;
                        }
                        #kg{
                            color: #999;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
</style>