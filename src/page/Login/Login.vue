<template>
  <div class="login-container">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <UserInfoForm
          :isLogin="getAccountStatus"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserInfoForm from '@/components/UserInfoForm';

export default {
  name: 'Login',
  components: {
    UserInfoForm,
  },
  computed: {
    getAccountStatus() {
      return this.$route.name === 'SignIn';
    },
  },
};
</script>

<style lang="less">
.el-row {
  margin: 0;
  padding: 20px;
  // height: 100%;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #d3dce6;
}
.login-container {
  height: 740px;
  // height: 100%;
  width: 100%;
  padding: 1% 0;
  background-color: #f4f2fc;
}
</style>
