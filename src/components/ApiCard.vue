<template>
  <div class="api-card-container">
    <el-card class="box-card" v-if="isSmallCard" @click="$_jumpToDetail()">
      <div slot="header" class="clearfix">
        <span>{{apiInfo.title}}</span>
      </div>
      <div>
        <p>{{apiInfo.intro}}</p>
        <span>{{apiInfo.owner}}</span>
        <el-rate
          class="api-rate"
          v-model="apiInfo.rate"
          disabled
          show-score
          text-color="#ff9900"
          :score-template="apiInfo.score">
        </el-rate>
      </div>
    </el-card>
    <div v-else>
      <el-row :gutter="20">
        <el-col :span="16">
          <h1>{{apiInfo.title}}</h1>
          <span>简介：{{apiInfo.intro}}</span>
          <p>请求地址：{{apiInfo.path}}</p>
        </el-col>
        <el-col :span="8">
          <p>开发者：{{apiInfo.owner}}</p>
          <p>状态：{{apiInfo.status}}</p>
          <span>评分：
            <el-rate
              v-model="apiInfo.rate"
              disabled
              show-score
              text-color="#ff9900"
              :score-template="apiInfo.score">
            </el-rate>
          </span>
        </el-col>
        <el-col :span="24">
          <el-divider/>
        </el-col>
        <el-col :span="12">
          <el-table
            :data="apiInfo.params"
            style="width: 100%">
            <el-table-column
              prop="key"
              label="参数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="value"
              label="参数类型"
              width="180">
            </el-table-column>
            <el-table-column
              prop="desc"
              label="参数释义">
            </el-table-column>
          </el-table>
          <el-table
            :data="apiInfo.query"
            style="width: 100%">
            <el-table-column
              prop="key"
              label="参数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="value"
              label="参数类型"
              width="180">
            </el-table-column>
            <el-table-column
              prop="desc"
              label="参数释义">
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12">
          <p>输入示例</p>
          {{apiInfo.example}}
          <el-divider/>
          <p>输出示例</p>
          {{apiInfo.output}}
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApiCard',
  props: {
    isSmallCard: {
      type: Boolean,
      default: true,
    },
    apiInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    $_jumpToDetail() {
      this.$router.push({ name: 'ApiDetail' });
    },
  },
};
</script>

<style lang="less">
.api-rate {
  margin-left: 40%;
  display: inline-block;
}
</style>
