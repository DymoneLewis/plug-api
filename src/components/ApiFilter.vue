<template>
  <div>
    <el-form label-width="80px" class="api-filter-form" label-position="top">
      <el-form-item label="关键词搜索" class="api-filter-form-keyword">
        <el-input v-model="filter.title" placeholder="请输入关键词" class="api-filter-form-keyword-input"/>
      </el-form-item>
      <el-form-item label="评分" class="api-filter-form-item">
        <el-radio v-model="filter.rate" :label="1">1</el-radio>
        <el-radio v-model="filter.rate" :label="2">2</el-radio>
        <el-radio v-model="filter.rate" :label="3">3</el-radio>
        <el-radio v-model="filter.rate" :label="4">4</el-radio>
        <el-radio v-model="filter.rate" :label="5">5</el-radio>
      </el-form-item>
      <el-form-item class="api-filter-form-button">
        <el-button
         type="primary"
         plain
         @click="$_handleClick">重置</el-button>
        <el-button
         type="primary"
         @click="() => {this.$emit('filterApi', filter);}">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ApiFilter',
  data() {
    return {
      filter: {
        title: '',
        rate: '',
        status: 7,
      },
    };
  },
  methods: {
    $_handleClick() {
      this.filter = {
        title: '',
        rate: '',
      };
      this.$emit('filterApi');
    },
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
    width: 80%;
    margin: 0 10%;
    display: inline-flex;
    justify-content: flex-end;
  }
}
</style>
