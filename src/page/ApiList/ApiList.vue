<template>
  <div>
    <ApiFilter
      @filterApi="$_getApiInfo"
    />
    <el-divider/>
    <div v-show="apiList.length === 0">
      <h2>No Data</h2>
    </div>
    <div class="api-list">
      <el-row :gutter="20">
        <el-col :span="12" v-for="item in apiList" :key="item.id">
          <ApiCard :apiInfo="item" class="api-list-card"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import ApiFilter from '@/components/ApiFilter';
import ApiCard from '@/components/ApiCard';
import * as apiServer from '@/service/api';

export default {
  name: 'ApiList',
  components: {
    ApiFilter,
    ApiCard,
  },
  data() {
    return {
      apiList: [],
    };
  },
  mounted() {
    this.$_getApiInfo();
  },
  methods: {
    $_getApiInfo(params = {}) {
      apiServer.getHotApiInfo(params).then((res) => {
        this.apiList = res.data;
      }).catch((err) => {
        throw err;
      });
    },
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
