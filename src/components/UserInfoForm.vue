<template>
  <div class="userInfo">
    <el-form
     :model="ruleForm"
     :rules="rules"
     ref="ruleForm"
     label-width="100px"
     class="userInfo-form">
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入邮箱或手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" placeholder="请输入密码">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item v-if="!isLogin" label="确认密码" prop="doubleCheck" placeholder="请重复输入密码">
        <el-input v-model="ruleForm.doubleCheck"></el-input>
      </el-form-item>
      <el-form-item>
      </el-form-item>
    </el-form>
    <div class="button-group">
      <el-button
       type="primary"
       class="submit"
       @click="$_jumpToOther(getSubmitText)">{{getSubmitText ? 'Log In' : 'Sign In'}}</el-button>
      <el-button
       type="primary"
       class="submit"
       v-if="isLogin"
       @click="$_jumpToOther(-1)">Sign in</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userInfoForm',
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
        this.$router.push({ name: 'Signin' });
        return;
      }
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style lang="less">
.userInfo {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 0 5px #cdcdcd;
  padding: 10px;
  &-form {
    height: 300px;
    margin: 10px;
    width: 80%;
  }
}
.button-group {
  display: flex;
  justify-content: space-around;
}
.submit {
  width: 20%;
}
</style>
