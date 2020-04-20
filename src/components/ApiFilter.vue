<template>
  <div>
    <el-form label-width="80px" class="api-filter-form" label-position="top">
      <el-form-item label="关键词搜索" class="api-filter-form-keyword">
        <el-input v-model="keyWorks" placeholder="请输入关键词" class="api-filter-form-keyword-input"/>
      </el-form-item>
      <!-- <el-form-item label="发布时间">
        <el-date-picker
          v-model="time"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="分类"  class="api-filter-form-item">
        <el-radio-group>
          <el-checkbox label="备选项3"></el-checkbox>
          <el-checkbox label="备选项6"></el-checkbox>
          <el-checkbox label="备选项9"></el-checkbox>
        </el-radio-group>
      </el-form-item> -->
      <el-form-item label="评分" class="api-filter-form-item">
        <el-radio v-model="radio" :label="1">1</el-radio>
        <el-radio v-model="radio" :label="2">2</el-radio>
        <el-radio v-model="radio" :label="3">3</el-radio>
        <el-radio v-model="radio" :label="4">4</el-radio>
        <el-radio v-model="radio" :label="5">5</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="api-filter-form-button" @click="() => {this.$emit('filterApi', );}">搜索</el-button>
      </el-form-item>
      <el-form-item label="排序方式" class="api-filter-form-item">
        <el-radio v-model="sort" label="1">最多调用</el-radio>
        <el-radio v-model="sort" label="2">最新上传</el-radio>
        <!-- <el-radio label="3">最新</el-radio> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ApiFilter',
  data() {
    return {
      checkList: ['备选项3', '备选项6'],
      filter: {
        keyWorks: '',
        radio: '',
        sort: '',
        time: '',
      }
      
    };
  },
};
</script>

<style lang="less">
.el-form-item {
  margin: 0 10%;
  // width: 90%;
  // margin: 0;
  .el-form-item__label {
    padding: 0;
  }
}
.api-filter-form {
  margin: 30px 0;
  &-keyword {
    .el-form-item__label {
      font-size: 18px;
    }
    &-input {
      width: 70%;
      margin: 10px auto;
      .el-input__inner {
        height: 50px;
      }
    }
  }
  &-item {
    display: inline-block;
  }
  &-button {
    margin-left: 80%;
    width: 120px;
  }
}
</style>
