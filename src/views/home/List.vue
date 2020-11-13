<template>
  <div>
    <ul>
      <li v-for="obj in List" :key="obj.id" @click="toPage(obj.id)">
        <div id="Left-Logo">
          <img :src="obj.img" alt="" />
        </div>
        <div id="Right-Msg" >
          <div id="Right-Msg-Top" class="clearfix">
            <div id="TradeName">
              <div>{{ obj.name }}</div>
            </div>
            <div id="LevelStar">
              <Star :num="obj.score"></Star>
            </div>
            <div id="Left">
              <span id="Score">{{ obj.score }}</span>
              <span id="Sale">月售{{ obj.num }}+</span>
            </div>
            <div id="Right">
              <span id="Mimute">{{ obj.minute }}分钟</span>
              <span id="Cutoff">|</span>
              <span id="Distance">{{ obj.distance }}</span>
            </div>
          </div>
          <div id="Right-Msg-Bottom">
            <div id="Price">
                <span id="present">起送¥{{obj.price}}</span>
                <span id="Cutoff">|</span>
                <span id="delivery">配送¥{{obj.fee}}</span>
                <span id="Cutoff">|</span>
                <span id="per">人均¥{{obj.per_capita}}</span>
            </div>
            
          </div>
        </div>
      </li>
    </ul>
      <img class="loading" v-show="IsShow" src="@/assets/loading.jpg" alt="">
  </div>
</template>

<script>
import axios from "axios";
import Star from '@/components/Star'
export default {
  data() {
    return {
      List: [],
      PageNum:0,
      IsShow:true,
      isFinished:false
    };
  },
  components:{
    Star
  },
  created() {
    this.getData();
    window.onscroll = () => {
      var scrollTop = Math.floor(document.documentElement.scrollTop);//滚动条高度
      var clientHeight = document.documentElement.clientHeight;//可视区高度
      var scrollHeight = document.documentElement.scrollHeight;//整个页面的高度
      if((scrollTop + clientHeight == scrollHeight) && !this.isFinished ){//页面到底了 并且 数据没有加载完
            console.log("早安打工人")
            this.IsShow = true; //loading
            this.getData();
      }
    }
  },
  methods:{
      getData(){
        axios.get(
        "https://bird.ioliu.cn/v1?url=http://admin.gxxmglzx.com/tender/test/get_store/axios?current="+this.PageNum+"&size=10"
      )
      .then((res) => {
        var result = res.data;
        this.List = [...this.List,...result.data.list]
        this.PageNum++;
        this.IsShow = false;
        if(this.List.length == res.data.data.total)
        {
              this.isFinished = true
        }

      })
      .catch((error) => {
        console.log(error);
      });
      },
      toPage(id){
          this.$router.push({
            path:"/detail",
            query:{
              id     
            }
            });
      }
  }
};
</script>

<style lang="scss" scoped>
.clearfix::after{
            content: "";
            display: block;
            clear: both;
        }
#Cutoff 
{
      margin: 0 3px;
      height: 6px;
      width: 1px;
      color: #ccc;
}
li {
    font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    display: flex;
    padding: 0 10px;
        #Left-Logo {
            width: 76px;
            height: 57px;
            position: relative;
            box-sizing: border-box;
            margin-right: 8px;
            img {
            width: 76px;
            height: 57px;
            }
  }
  #Right-Msg{width: 100%;}
  #Right-Msg-Top {

    #TradeName div {
      font-size: 16px;
      color: #333;
      line-height: 1.4;
      white-space: nowrap;
      overflow: hidden;
      font-weight: 600;
    }
    #Score {
      margin: 0 0.1rem;
    }
    #Left {
      float: left;
    }
    #Right {
      float: right;
    }
  }
  #Right-Msg-bottom{
      #Price{
          margin-top:10px ;
      }
  }
  
}
.loading{
    width: 25%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
  }
</style>