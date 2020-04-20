<template>
  <div>
    <ApiFilter/>
    <el-divider/>
    <div class="api-list">
      <el-row :gutter="20">
        <el-col :span="12">
          <ApiCard class="api-list-card"/>
        </el-col>
        <el-col :span="12">
          <ApiCard class="api-list-card"/>
        </el-col>
        <el-col :span="12">
          <ApiCard class="api-list-card"/>
        </el-col>
        <el-col :span="12">
          <ApiCard class="api-list-card"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import ApiFilter from '@/components/ApiFilter';
import ApiCard from '@/components/ApiCard';

export default {
  name: 'ApiList',
  components: {
    ApiFilter,
    ApiCard,
  },
};
</script>
<style lang="less">
.api-list {
  width: 80%;
  margin: 10px 10%;
  &-card {
    // border: 1px solid #efefef;
    padding: 5px;
    // border-radius: 5px;
    margin-bottom: 20px;
  }
}
</style>
