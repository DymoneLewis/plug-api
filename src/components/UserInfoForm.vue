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
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入邮箱或手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item v-if="!isLogin" label="确认密码" prop="doubleCheck">
        <el-input v-model="ruleForm.doubleCheck" placeholder="请重复输入密码"></el-input>
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
       @click="$_jumpToOther(getSubmitText)">{{getSubmitText ? 'Log In' : 'Sign In'}}</el-button>
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
import SlideVerify from '@/components/SlideVerification';

export default {
  name: 'userInfoForm',
  components: {
    SlideVerify,
  },
  props: {
    isLogin: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    getSubmitText() {
      return this.$props.isLogin ? 1 : 0;
    },
  },
  data() {
    return {
      ruleForm: {
        name: '',
        password: '',
        doubleCheck: '',
      },
      rules: {
        name: [
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
