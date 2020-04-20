<template>
  <div>
    <slide-verify
      ref="slideblock"
      @again="onAgain"
      @fulfilled="onFulfilled"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
      :accuracy="accuracy"
      :slider-text="text"
      class="slide-verify"
    />
    <div>{{msg}}</div>
  </div>
</template>
<script>
export default {
  name: 'SlideVerification',
  data() {
    return {
      msg: '',
      text: '向右滑动验证',
      accuracy: 5,
    };
  },
  methods: {
    onSuccess() {
      console.log('验证通过');
      this.msg = 'login success';
    },
    onFail() {
      console.log('验证不通过');
      this.msg = '';
    },
    onRefresh() {
      console.log('点击了刷新小图标');
      this.msg = '';
    },
    onFulfilled() {
      console.log('刷新成功啦！');
    },
    onAgain() {
      console.log('检测到非人为操作的哦！');
      this.msg = 'try again';
      // 刷新
      this.$refs.slideblock.reset();
    },
    handleClick() {
      // 父组件直接可以调用刷新方法
      this.$refs.slideblock.reset();
    },
  },
};
</script>
<style lang="less">
  .slide-verify {
    margin: auto;
    canvas {
      border-radius: 5px;
    }
  }
</style>
