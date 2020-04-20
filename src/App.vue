<template>
  <div id="app">
    <el-container>
      <el-header class="nav" v-show="!isSignIn">
        <el-menu
          :default-active="getActiveIndex"
          class="nav-menu"
          mode="horizontal"
          @select="$_handleSelect">
          <el-menu-item index="0" disabled>
            <img alt="PlugApi logo" src="./asset/logo.png" class="nav-menu-logo">
          </el-menu-item>
          <el-menu-item index="Home">首页</el-menu-item>
          <el-menu-item index="ApiList">API列表</el-menu-item>
          <el-menu-item index="MyWorkbench">我的工作台</el-menu-item>
          <el-menu-item index="Documents">开发文档</el-menu-item>
        </el-menu>
        <el-dropdown class="nav-userInfo">
          <span class="el-dropdown-link">
            <el-avatar> user </el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    isSignIn() {
      return this.$route.name === 'SignIn' || this.$route.name === 'SignUp';
    },
    getActiveIndex() {
      return this.$route.name;
    },
  },
  methods: {
    $_handleSelect(index) {
      this.$_jumpToPage(index);
    },
    $_jumpToPage(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
.app {
  // height: 1440px;
  width: 100%;
}
.el-main {
  margin: 0;
  padding: 0;
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
</style>
