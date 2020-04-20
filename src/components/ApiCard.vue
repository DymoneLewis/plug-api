<template>
  <div class="api-card-container">
    <el-card class="box-card" v-if="isSmallCard">
      <div slot="header" class="clearfix">
        <span>{{apiInfo.title}}</span>
      </div>
      <div>
        <p>{{apiInfo.intro}}</p>
        <span>{{apiInfo.owner[0].username}}</span>
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
        </el-col>
        <el-col :span="8">
          <p
           v-for="(item, index) in apiInfo.owner"
           :key="index">开发者：<a>{{item.username}}</a></p>
          <span>评分:
            <el-rate
              v-model="apiInfo.rate"
              disabled
              show-score
              text-color="#ff9900"
              :score-template="apiInfo.score">
            </el-rate>
          </span>
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
    };
  },
};
</script>

<style lang="less">
.api-rate {
  margin-left: 40%;
  display: inline-block;
}
</style>
