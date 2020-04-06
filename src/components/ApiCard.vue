<template>
  <div>
    <div>
      <el-row :gutter="20">
        <el-col :span="18">
          <h1>{{apiInfo.title}}</h1>
          <span>简介：{{apiInfo.intro}}</span>
        </el-col>
        <el-col :span="6">
          <p
           v-for="(item, index) in apiInfo.owner"
           :key="index">开发者：<a>{{item.username}}</a></p>
          <span>评分:
            <el-rate
              v-model="apiInfo.score"
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
  data() {
    return {
      apiInfo: {
        title: 'Test',
        intro: 'this is a test api',
        owner: [
          {
            username: 'DymoneLewis',
            email: '111@123.com',
          },
        ],
        score: '3',
        comments: [],
      },
    };
  },
};
</script>

<style lang="less">
</style>
