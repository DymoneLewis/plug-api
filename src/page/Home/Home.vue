<template>
  <div>
    <el-carousel
      height="400px"
      :interval="5000"
      arrow="always"
      trigger="click">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="fast-entry">
      <h1>Fast Entry</h1>
      <el-row :gutter="20">
        <el-col :span="6"><div class="fast-entry-item">权限申请</div></el-col>
        <el-col :span="6"><div class="fast-entry-item">我的工作台</div></el-col>
        <el-col :span="6"><div class="fast-entry-item">API搜索</div></el-col>
        <el-col :span="6"><div class="fast-entry-item">文档中心</div></el-col>
      </el-row>
      <h1>Api Recommendation</h1>
      <el-row :gutter="20">
        <el-col :span="12" v-for="item in hotApiList" :key="item.id">
          <ApiCard :apiInfo="item" class="api-recommend-item"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import ApiCard from '@/components/ApiCard';
import * as apiServer from '@/service/api';

export default {
  name: 'Home',
  components: {
    ApiCard,
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      hotApiList: [],
    };
  },
  mounted() {
    this.getApiInfo();
  },
  methods: {
    getApiInfo() {
      apiServer.getApiInfo().then((res) => {
        this.hotApiList = res.data;
      }).catch((err) => {
        throw err;
      });
    },
  },
};
</script>
<style lang="less">
.fast-entry {
  margin:30px 0 50px 0;
  // height: 180px;s
  padding: 1%;
  .el-row {
    margin-bottom: 20px;
    height: 100%;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-item {
    padding: 20%;
    border: 1px solid #ececec;
    border-radius: 6px;
    font-size: 20px;
    transition: .5s;
    &:hover {
      box-shadow: 0 0 8px #cdcdcd;
    }
  }
  // .api-recommend-item {
  //   border: 1px solid #ececec;
  //   transition: .5s;
  //   &:hover {
  //     box-shadow: 0 0 8px #ececec;
  //   }
  // }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
