<template>
  <div class="index">
    <van-row type="flex" justify="center">
      <van-col span="3" align="center" class="text-c">
        <h2>首页</h2>
      </van-col>
      <van-col span="18">
        <van-search shape="round" placeholder="请输入搜索关键词" v-model="search" />
      </van-col>
      <van-col span="3" align="center">消息</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    war() {}
  }
};
</script>

<style scoped>
.text-c {
  line-height: 3.5rem;
}
</style>