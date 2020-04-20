<template>
  <div>
    <el-tabs class="workbench" v-model="activeName" tab-position="left">
      <el-tab-pane label="开发工作台" name="first" class="workbench-tab">
        <ApiCard  class="workbench-tab-item"/>
        <ApiCard  class="workbench-tab-item"/>
        <ApiCard  class="workbench-tab-item"/>
        <ApiCard  class="workbench-tab-item"/>
        <ApiCard  class="workbench-tab-item"/>
        <ApiCard  class="workbench-tab-item"/>
      </el-tab-pane>
      <el-tab-pane label="接入工作台" name="second" class="workbench-tab">
        <ApiCard  class="workbench-tab-item"/>
        <ApiCard  class="workbench-tab-item"/>
      </el-tab-pane>
      <el-tab-pane label="审核工作台" name="third" class="workbench-tab">
        <ApiCard  class="workbench-tab-item"/>
      </el-tab-pane>
      <el-tab-pane label="测试工作台" name="fourth" class="workbench-tab">
        <ApiCard  class="workbench-tab-item"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ApiCard from '@/components/ApiCard';

export default {
  name: 'MyWorkbench',
  components: {
    ApiCard,
  },
  data() {
    return {
      activeName: 'first',
    };
  },
};
</script>
<style lang="less">
.el-tabs--left .el-tabs__header.is-left {
  position: sticky;
  position: -webkit-sticky;
  left: 2px;
  top: 20px;
}
.workbench {
  margin: 2% 10%;
  &-tab {
    height: 600px;
    padding: 5px;
    &-item {
      width: 46%;
      margin: 2%;
      display: inline-block;
      box-shadow: 0 0 4px #d3d3d3;
    }
  }
}
</style>
