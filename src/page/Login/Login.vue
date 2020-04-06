<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <UserInfoForm/>
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
};
</script>

<style lang="less">
.el-row {
  margin: 20px;
  padding: 20px;
  height: 100%;
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
.grid-content {
  border-radius: 4px;
  padding: 20px;
}
</style>
