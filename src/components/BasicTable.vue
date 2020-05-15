<template>
  <div>
  <div v-if="tableData.length === 0">
    No Data
  </div>
  <el-table
    v-else
    :data="getSearchTableData"
    style="height: 100%; width: 100%"
    :stripe="stripe"
    :border="border"
    :max-height="maxHeight"
    :row-class-name="rowClassName"
    >
    <el-table-column
      v-for="item in tableOption"
      :key="item.key"
      :prop="item.key"
      :label="item.label">
      <template slot-scope="scope">
        <span>
          {{item.key === 'status' ? $_getStatus(scope.row[item.key]) : scope.row[item.key]}}
        </span>
      </template>
    </el-table-column>
    <el-table-column
      v-if="tableOperate.length !== 0"
      fixed="right"
      label="操作"
      :width="240">
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          v-for="item in tableOperate"
          :key="item.key"
          type="text"
          size="small"
          @click="$_handleClick(item.key, scope.row)">
          {{item.label}}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    title="修改Api"
    :visible.sync="updateDialogVisible"
    width="90%"
    append-to-body
    destroy-on-close
  >
    <el-form ref="form" :model="tableForm" label-width="80px" label-position="top">
      <el-form-item v-for="item in tableOption" :key="item.key" :label="item.label">
        <el-input
         v-model="tableForm[item.key]"
         :disabled="$_inputDisabled(item.key)"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="$_updateApi">修改</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <el-dialog
    :title="getDialogTitle"
    v-if="dialogVisible"
    :visible.sync="dialogVisible"
    width="90%"
    append-to-body
    destroy-on-close
  >
    <ApiCard
     :isSmallCard="false"
     :apiInfo="getCurrentApiInfo"
    />
    <div v-if="isAudit" class="button-group">
      <el-button type="primary" @click="$_changeStatus(3)">审核通过</el-button>
      <el-button @click="$_changeStatus(5)">审核不通过</el-button>
    </div>
    <div v-if="isTest">
      <div>
        <el-row :gutter="20">
          <el-col :span="12">
            <h3>实际传参</h3>
            <el-form v-show="currentApiInfo.params.length > 0" ref="testParams" :model="testParams" label-width="80px" label-position="left">
              <el-form-item v-for="item in currentApiInfo.params" :key="item.key" :label="item.key">
                <el-input v-model="item.params" style="width: 200px; margin-right:10px;"></el-input>
              </el-form-item>
            </el-form>
            <el-form ref="testQuery" :model="testQuery" label-width="80px" label-position="left">
              <el-form-item v-for="item in currentApiInfo.query" :key="item.key" :label="item.key">
                <el-input v-model="item.query" style="width: 200px; margin-right:10px;"></el-input>
              </el-form-item>
            </el-form>
            <el-button plain type="primary" @click="$_testApi()">测试</el-button>
          </el-col>
          <el-col>
            <h3>实际输出</h3>
            {{getTestResponse}}
          </el-col>
        </el-row>
      </div>
      <el-button type="primary" @click="$_changeStatus(7)">测试通过</el-button>
      <el-button plain type="primary" @click="$_changeStatus(6)">测试不通过</el-button>
    </div>
  </el-dialog>
  </div>
</template>
<script>
import _ from 'lodash';
import * as apiServer from '@/service/api';
import { status2zh } from '@/config/enum/status';
import ApiCard from './ApiCard';

export default {
  name: 'BasicTable',
  components: {
    ApiCard,
  },
  props: {
    stripe: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    maxHeight: {
      type: Number,
      default: 800,
    },
    rowClassName: {
      type: Function,
      default: () => {},
    },
    tableOption: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    tableOperate: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    getSearchTableData() {
      return this.$props.tableData.filter((data) => !this.$data.search
       || this.$_filterSearchResult(data));
    },
    getDialogTitle() {
      return this.$data.dialogTitle;
    },
    getCurrentApiInfo() {
      return this.$data.currentApiInfo;
    },
    getTestResponse() {
      return this.$data.testResponse;
    },
  },
  data() {
    return {
      search: '',
      dialogTitle: '',
      testResponse: '',
      isAudit: false,
      isTest: false,
      updateDialogVisible: false,
      testAreaVisible: false,
      currentApiInfo: {},
      testParams: {},
      testQuery: {},
      queryKeyList: [],
      tableForm: {},
      dialogVisible: false,
    };
  },
  methods: {
    $_handleClose() {
      this.testResponse = '';
    },
    $_getStatus(statusNum) {
      return status2zh(statusNum);
    },
    $_handleClick(operate, payload) {
      if (operate === 'submit') {
        this.$confirm('确认提交审核?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          const { _id } = payload;
          apiServer.updateApi({ _id, data: { status: 1, submitTime: new Date() } }).then(() => {
            this.$message({
              type: 'success',
              message: '提交成功!',
            });
            this.$emit('updateTable');
          }).catch();
        }).catch();
        return;
      }
      if (operate === 'delete') {
        this.$confirm('确认删除该api？该操作不可恢复', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          // deleteApi
          const { title, owner } = payload;
          apiServer.deleteApi({ title, owner }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!',
            });
            this.$emit('updateTable');
          }).catch();
        }).catch();
        return;
      }
      if (operate === 'update') {
        this.$data.updateDialogVisible = true;
        this.$data.currentApiInfo = payload;
        return;
      }
      this.$_initDialogInfo(operate);
      this.$data.currentApiInfo = payload;
    },
    $_initDialogInfo(operate) {
      const dialogTitleList = {
        detail: 'api详情',
        audit: 'api审核',
        test: 'api测试',
      };
      if (operate === 'audit') {
        this.isAudit = true;
        this.isTest = false;
      }
      if (operate === 'test') {
        this.isAudit = false;
        this.isTest = true;
      }
      this.$data.dialogTitle = dialogTitleList[operate];
      this.dialogVisible = true;
    },
    $_filterSearchResult(data) {
      return this.$props.tableOption.some((item) => data[item.key]
        .toString().toLowerCase().includes(this.$data.search.toLowerCase()));
    },
    $_changeStatus(status) {
      const { _id } = this.$data.currentApiInfo;
      let param = {};
      if (status < 6) {
        param = {
          status,
          auditTime: new Date(),
        };
      } else {
        param = {
          status,
          testTime: new Date(),
        };
      }
      apiServer.updateApi({ _id, data: param }).then(() => {
        this.$message({
          type: 'success',
          message: '操作成功!',
        });
        this.dialogVisible = false;
        this.$emit('updateTable');
      }).catch();
    },
    $_testApi() {
      this.$data.currentApiInfo.query.map((item) => {
        this.$data.testQuery[item.key] = item.query;
        return '';
      });
      this.$data.currentApiInfo.params.map((item) => {
        this.$data.testParams[item.key] = item.params;
        return '';
      });
      let query = '';
      let flag = false;
      if (!_.isEmpty(this.$data.testQuery)) {
        if (Object.keys(this.$data.testQuery).length === 1) {
          flag = true;
        }
        Object.keys(this.$data.testQuery).map((item) => {
          query += flag ? `${item}=${this.$data.testQuery[item]}` : `${item}=${this.$data.testQuery[item]}&`;
          return '';
        });
      }
      const param = {
        method: this.$data.currentApiInfo.method,
        url: encodeURI(`${this.$data.currentApiInfo.path}?${query}`),
        data: this.$data.testParams,
      };
      apiServer.testApi(param).then((res) => {
        console.log('test res', res.data);
        this.$data.testResponse = res.data;
      });
    },
    $_updateApi() {
      const {
        _id,
        title,
        path,
        schemes,
        method,
        params,
        output,
        example,
        intro,
      } = this.$data.tableForm;
      const param = {
        _id,
        data: {
          title,
          path,
          schemes,
          method,
          params,
          output,
          example,
          intro,
        },
      };
      apiServer.updateApi(param).then((res) => {
        console.log('update res', res);
        this.$message({
          type: 'success',
          message: '操作成功!',
        });
        this.updateDialogVisible = false;
      });
    },
    $_inputDisabled(key) {
      const disabledList = [
        '_id',
        'status',
        'createTime',
        'submitTime',
        'auditTime',
        'testTime',
        'rate',
      ];
      return disabledList.includes(key);
    },
  },
};
</script>
<style lang="less">
.button-group {
  width: 90%;
  display: flex;
  justify-content: space-around;
}
</style>
