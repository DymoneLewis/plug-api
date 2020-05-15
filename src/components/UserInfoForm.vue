<template>
  <div class="userInfo">
    <h1>{{isLogin ? '登录' : '注册'}}</h1>
    <el-form
     :model="ruleForm"
     :rules="rules"
     ref="ruleForm"
     label-width="100px"
     label-position="top"
     class="userInfo-form">
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="ruleForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item v-if="!isLogin" label="确认密码" prop="doubleCheck">
        <el-input show-password v-model="ruleForm.doubleCheck" placeholder="请重复输入密码"></el-input>
      </el-form-item>
      <!-- <el-form-item v-if="isLogin" label="滑动验证">
        <SlideVerify/>
      </el-form-item> -->
    </el-form>
    <div class="button-group">
      <el-button
       plain
       type="primary"
       class="submit"
       @click="$_submitForm()">{{getSubmitText ? 'Log In' : 'Sign In'}}</el-button>
      <el-button
       type="primary"
       plain
       class="submit"
       v-if="isLogin"
       @click="$_jumpToOther(-1)">Sign in</el-button>
    </div>
  </div>
</template>

<script>
import storejs from 'store';
import { mapState } from 'vuex';
// import SlideVerify from '@/components/SlideVerification';
import * as userApi from '@/service/user';

export default {
  name: 'userInfoForm',
  components: {
    // SlideVerify,
  },
  props: {
    isLogin: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapState(['userInfo']),
    getSubmitText() {
      return this.$props.isLogin ? 1 : 0;
    },
  },
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
        doubleCheck: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        doubleCheck: [
          { required: true, message: '请输入重复密码', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    $_submitForm() {
      if (!this.ruleForm.username || !this.ruleForm.password) {
        this.$notify.error({
          title: '提示',
          message: '用户名和密码不能为空',
          offset: 100,
        });
        return;
      }

      if (this.getSubmitText) {
        userApi.login(this.ruleForm).then((res) => {
          if (res.data.errno !== 200) {
            this.$notify.error({
              title: '提示',
              message: res.data.errmsg,
              offset: 100,
            });
            return;
          }
          storejs.set('user', { userInfo: res.data.data, token: res.data.token });
          this.$notify({
            title: '提示',
            message: '登录成功',
            type: 'success',
            offset: 100,
          });
          this.$store.dispatch('getUserInfo', res.data.data);
          this.$_jumpToOther(1);
        }).catch((err) => {
          throw err;
        });
        return;
      }
      userApi.register(this.ruleForm).then((res) => {
        console.log(res);
        if (res.data.errno === 133333) {
          this.$notify.error({
            title: '提示',
            message: res.data.errmsg,
            offset: 100,
          });
          return;
        }
        this.$notify({
          title: '提示',
          message: '注册成功',
          type: 'success',
          offset: 100,
        });
        this.$_jumpToOther(0);
      }).catch((err) => {
        throw err;
      });
    },
    $_jumpToOther(signed) {
      if (signed > 0) {
        this.$router.push({ name: 'Home' });
        return;
      }
      if (signed < 0) {
        this.$router.push({ name: 'SignUp' });
        return;
      }
      this.$router.push({ name: 'SignIn' });
    },
  },
};
</script>

<style lang="less">
.userInfo {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 0 5px #cdcdcd;
  height: 80%;
  width: 50%;
  padding: 5%;
  margin: auto;
  &-form {
    height: 90%;
    margin: 10px;
    width: 90%;
    .el-form-item {
      margin-bottom: 10px;
    }
  }
}
.button-group {
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
}
.submit {
  width: 60%;
  border-radius: 25px;
}
</style>
