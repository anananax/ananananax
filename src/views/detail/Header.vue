<template>
  <div id="contaner">
    <div id="Head">
      <img src="../../assets/下载.png" alt="" @click="goback" />
    </div>
    <div id="Logo">
      <div id="SLogo">
        <img :src="List.img" alt="" />
      </div>
      <div id="SMsg">
        <div id="detial">
          <span>{{List.minute}}分钟</span>
          <span>&nbsp;|&nbsp;</span>
          <span>{{List.distance}}</span>
        </div>
        <div id="notice">{{List.sales}}</div>
        <div id="PayEnough">
          <img src="../../assets/满减.png" alt="" />
          {{List.full}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      List:{

      },
    };
  },
  created() {
    axios
      .get(
        //"https://bird.ioliu.cn/v1?url=http://admin.gxxmglzx.com/tender/test/get_store_id/axios?id=" +this.$route.query.id
        `https://bird.ioliu.cn/v1?url=http://admin.gxxmglzx.com/tender/test/get_store_id/axios?id=${this.$route.query.id}`
      )
      .then((res) => {
        console.log(res.data);
        var result = res.data;
        if (result.errcode == 200) {
          this.List=result.data;
          console.log(this.List);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{
    goback(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
#contaner {
  background-color: rgb(46, 47, 59);
  #Head {
    width: 100%;
    height: 1rem;
    img {
      background-size: 20% 30%;
      transform: rotate(180deg);
      margin-top: 5%;
      margin-left: 4%;
    }
  }
  #Logo {
    width: 100%;
    height: 1.2rem;
    display: flex;
    #SLogo {
      flex: 1;
      img {
        margin-top: -5%;
        margin-left: 12%;
        width: 85px;
        height: 64px;
      }
    }
    #SMsg {
      flex: 3;
      #detial {
        margin-left: 5%;
        padding-bottom: 1%;
        span {
          color: #fff;
        }
      }
      #notice {
        margin-left: 5%;
        color: #fff;
        width: 60%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;  
      }
      #PayEnough {
        img {
          width: 15px;
          margin-top: 1%;
        }
        margin-top: 1%;
        margin-left: 5%;
        color: #fff;
      }
    }
  }
}
</style>