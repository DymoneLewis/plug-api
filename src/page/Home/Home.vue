/* eslint-disable vue/valid-v-bind */
<template>
  <div>
    <el-container>
      <el-header class="nav">
        <el-menu
          :default-active="activeIndex"
          class="nav-menu"
          mode="horizontal"
          @select="$_handleSelect">
          <el-menu-item index="0" disabled>
            <img alt="PlugApi logo" src="./logo.png" class="nav-menu-logo">
          </el-menu-item>
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">API列表</el-menu-item>
          <el-menu-item index="3">我的工作台</el-menu-item>
          <el-menu-item index="4">开发文档</el-menu-item>
        </el-menu>
        <el-dropdown class="nav-userInfo">
          <span class="el-dropdown-link">
            <el-avatar> user </el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人资料</el-dropdown-item>
            <el-dropdown-item>权限申请</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <el-carousel
         height="400px"
         :interval="5000"
         arrow="always"
         trigger="click">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
        <div class="fastEntry">
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple">快速入口</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">快速入口</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">快速入口</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">快速入口</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <div class="grid-content bg-purple"></div></el-col>
            <el-col :span="24">
              <div class="grid-content bg-purple-light"></div></el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      logoUrl: './logo.png',
    };
  },
  methods: {
    $_handleSelect(index) {
      switch (index) {
        case 1: this.$_jumpToPage('Home'); break;
        case 2: this.$_jumpToPage('ApiList'); break;
        case 3: this.$_jumpToPage('MyWorkbench'); break;
        case 4: this.$_jumpToPage('Documents'); break;
        default: break;
      }
    },
    $_jumpToPage(name) {
      this.$router.push({ name });
    }
  },
};
</script>
<style lang="less">
.el-main {
  overflow: hidden;
}
.el-menu.el-menu--horizontal {
  border-bottom-width: 0;
}
.nav {
  padding: 0;
  display:flex;
  justify-content: space-between;
  height: 60px;
  box-shadow: 0 0 5px #cdcdcd;
  &-menu {
    height: 60px;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    &-logo {
      float: left;
      display: block;
      height: 50px;
      margin: 5px 50px 0 0 ;
    }
    .el-menu-item.is-disabled {
      opacity: 0.65;
    }
  }
  &-userInfo {
    margin-top: 10px;
    margin-right: 20px;
  }
}
.fastEntry {
  margin:30px 0;
  height: 180px;
  padding: 2%;
  .el-row {
    margin-bottom: 20px;
    height: 100%;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    height: 100%;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    height: 100%;
  }
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
