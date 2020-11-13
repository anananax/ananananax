<template>
    <div>
        <ul>
            <li v-for="obj in List" :key="obj.id" >
                <img :src="obj.img" alt="">
                <p>{{obj.name}}</p>
                
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                List: []
            }
        },
        created(){
            axios.get("http://admin.gxxmglzx.com/tender/test/get_type")
            .then((res)=>{
                console.log(res.data);
                var result=res.data;
                if(result.errcode==200){
                    this.List=result.data;
                }
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
</script>

<style lang="scss" scoped>
    ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    li{
        width: 20%;
        margin:2.5% 0;
        text-align: center;
        font-size:0.18rem ;
    }
    img{
        width:0.75rem;
    }
</style>