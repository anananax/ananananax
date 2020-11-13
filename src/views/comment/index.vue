<template>
  <div>
    <CommentHeader :list="list"></CommentHeader>
    <CommentList :list="list" @update="fn"></CommentList>
  </div>
</template>

<script>
import axios from "axios";
import CommentHeader from "./CommentHeader";
import CommentList from "./CommentList";
export default {
  data() {
    return {
      id: this.$route.query.id,
      list: {},

    };
  },
  components: {
    CommentHeader,
    CommentList,
  },
  created() {
    // 请求评论页数据
    // id商家id  type评论类型 1（全部）
    this.getData(1);
  },
  methods: {
    fn(id) {
      //   修改type = id
      this.getData(id);
    },
    getData(typeId) {
      axios
        .get(
          `http://admin.gxxmglzx.com/tender/test/get_info?id=${this.id}&type=${typeId}`
        )
        .then((res) => {
          this.list = res.data.data;
          // this.score.delivery =
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>