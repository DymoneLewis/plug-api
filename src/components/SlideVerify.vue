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
    ></slide-verify>
    <div>{{msg}}</div>
  </div>
</template>
<script>
export default {
  name: 'SlideVerify',
  data() {

  }
}
</script>
<<style lang="less">
  
</style>