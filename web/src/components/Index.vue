<template>
  <div class="index">
    <van-row type="flex" justify="center">
      <van-col span="3" align="center" class="text-c">
        <h2>首页</h2>
      </van-col>
      <van-col span="18">
        <van-search shape="round" :placeholder="keyWord" v-model="search" />
      </van-col>
      <van-col span="3" align="center">
        <h3>消息</h3>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      keyWord: "请输入关键词"
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