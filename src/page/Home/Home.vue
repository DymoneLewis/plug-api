<template>
  <div>
    <el-carousel
      height="400px"
      :interval="5000"
      arrow="always"
      trigger="click">
      <el-carousel-item>
        <img class="carousel-img" src="../../public/p1.jpg"/>
      </el-carousel-item>
      <el-carousel-item>
        <img class="carousel-img" src="../../public/p0.jpg"/>
      </el-carousel-item>
      <el-carousel-item>
        <img class="carousel-img" src="../../public/p2.jpg"/>
      </el-carousel-item>
    </el-carousel>
    <div class="fast-entry">
      <h1>Fast Entry</h1>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="fast-entry-item">
            <router-link :to="{name: 'Permission'}">权限申请</router-link>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="fast-entry-item">
            <router-link :to="{name: 'MyWorkbench'}">我的工作台</router-link>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="fast-entry-item">
            <router-link :to="{name: 'ApiList'}">API搜索</router-link>
          </div>
        </el-col>
        <!-- <el-col :span="6">
          <div class="fast-entry-item">
            <router-link :to="{name: ''}">文档中心</router-link>
          </div>
        </el-col> -->
      </el-row>
      <h1>Api Recommendation</h1>
      <el-row :gutter="20">
        <el-col :span="12" v-for="item in hotApiList" :key="item.id">
          <div @click="$_handleClick(item)">
            <ApiCard :apiInfo="item" class="api-recommend-item"/>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-dialog
      title="Api详情"
      :visible.sync="dialogVisible"
      width="90%"
      append-to-body
      destroy-on-close
    >
      <ApiCard
      :isSmallCard="false"
      :apiInfo="getCurrentApiInfo"
      />
    </el-dialog>
  </div>
</template>
<script>
import ApiCard from '@/components/ApiCard';
import * as apiServer from '@/service/api';
// import * as commonServer from '@/service/common';

export default {
  name: 'Home',
  components: {
    ApiCard,
  },
  computed: {
    getCurrentApiInfo() {
      return this.$data.currentApiInfo;
    },
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      currentApiInfo: {},
      hotApiList: [],
      dialogVisible: false,
    };
  },
  mounted() {
    this.getHotApiInfo();
  },
  methods: {
    getHotApiInfo() {
      apiServer.getHotApiInfo().then((res) => {
        this.hotApiList = res.data;
      }).catch((err) => {
        throw err;
      });
    },
    $_handleClick(payload) {
      this.$data.currentApiInfo = payload;
      this.dialogVisible = true;
    },
  },
};
</script>
<style lang="less" scope>
.router-link {
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  background-image: -webkit-linear-gradient(left, #3ba3d0, #4380d3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.carousel-img {
  height: 100%;
  width: 100%;
}
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
