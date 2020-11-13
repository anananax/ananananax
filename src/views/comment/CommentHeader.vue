<template>
  <div class="Comment">
    <div class="Store-score">
      <div class="num">{{ list.delivery }}</div>
      <div>商家评分</div>
    </div>
    <div class="Store-comment">
            <div>口味 <Star :num="list.flavor"></Star> {{ list.flavor }} 分</div>
            <div>包装 <Star :num="list.packing"></Star> {{ list.packing }}分</div>   
    </div>
    <div class="courier-comment">
      <div class="num">{{list.score}}</div>
      <div>配送评分</div>
    </div>
  </div>
</template>

<script>
import Star from "@/components/Star";
export default {
    props:['list'],
  components: {
    Star,
  },
};
</script>

<style lang="scss" scoped>
.Comment {
  display: flex;
  padding: 0.3rem;
  .Store-score {
    width: 1.86rem;
    text-align: center;
    font-size: 0.28rem;
    .num {
      color: #ffb000;
      font-size: 0.54rem;
      font-weight: bold;
      line-height: 0.54rem;
    }
  }
  .Store-comment {
    flex: 1;
    display: flex;
    font-size: 0.26rem;
    div {
      flex: 1;
      margin-right:0.1rem ;
    }
  }
  .courier-comment {
    width: 1.86rem;
    text-align: center;
    font-size: 0.28rem;
    .num {
      color: #999;
      font-size: 0.54rem;
      font-weight: bold;
      line-height: 0.54rem;
    }
  }
}
</style>