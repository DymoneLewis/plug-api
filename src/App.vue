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
            <img alt="PlugApi logo" src="./public/logo.png" class="nav-menu-logo">
          </el-menu-item>
          <el-menu-item index="Home">首页</el-menu-item>
          <el-menu-item index="ApiList">API列表</el-menu-item>
          <el-menu-item index="MyWorkbench">我的工作台</el-menu-item>        </el-menu>
        <el-dropdown class="nav-userInfo" @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar
             shape="square"
             :src="getUserAvatar">
             {{userInfo.username.slice(0,2)}}
            </el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="quit">退出</el-dropdown-item>
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
import _ from 'lodash';
import { mapState } from 'vuex';
import storejs from 'store';

export default {
  name: 'App',
  computed: {
    ...mapState(['userInfo']),
    isSignIn() {
      return this.$route.name === 'SignIn' || this.$route.name === 'SignUp';
    },
    getActiveIndex() {
      return this.$route.name;
    },
    getUserAvatar() {
      return this.userInfo.head;
    },
  },
  mounted() {
    if (!_.isEmpty(storejs.get('user'))) {
      this.$store.dispatch('getUserInfo', storejs.get('user').userInfo);
    } else {
      storejs.set('user', {});
    }
  },
  methods: {
    $_handleSelect(index) {
      this.$_jumpToPage(index);
    },
    $_jumpToPage(name) {
      this.$router.push({ name });
    },
    handleCommand(command) {
      if (command === 'quit') {
        this.$store.commit('initUserInfo', {
          account: '',
          username: '',
          head: '',
          role: '',
          introduction: '',
        });
        this.$router.push({ name: 'SignIn' });
      }
    },
  },
};
</script>

<style lang="less">
/* 设置滚动条的样式 */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #efefef;
    border-radius: 16px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 16px;
    background: #dcdcdc;
    -webkit-box-shadow: inset 0 0 6px #dcdcdc;
}
::-webkit-scrollbar-thumb:window-inactive {
    background: #acacac;
}
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
