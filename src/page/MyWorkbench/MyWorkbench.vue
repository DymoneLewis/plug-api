<template>
  <div>
    <el-dialog
      title="提示"
      v-if="dialogVisible"
      :visible.sync="dialogVisible"
      @close="$_getMyApiInfo"
      width="70%"
    >
      <BasicStep
        :steps="steps"
        :formInfo="getFormInfo"
      />
    </el-dialog>
    <el-tabs class="workbench" v-model="activeName" tab-position="left">
      <el-tab-pane label="开发工作台" name="first" class="workbench-tab">
        <el-button @click="$_handleClick(1)">新建api</el-button>
        <BasicTable
          class="workbench-tab-table"
          :tableOption="$_getKeyListFromData(myData)"
          :tableData="myData"
          :tableOperate="myOperator"
          @updateTable="$_getMyApiInfo"
        />
      </el-tab-pane>
      <el-tab-pane label="审核工作台" name="third" class="workbench-tab">
        <BasicTable
          class="workbench-tab-table"
          :border="true"
          :tableOption="$_getKeyListFromData(auditData)"
          :tableData="auditData"
          :tableOperate="auditOperator"
           @updateTable="$_getAuditApiInfo"
        />
      </el-tab-pane>
      <el-tab-pane label="测试工作台" name="fourth" class="workbench-tab">
        <BasicTable
          class="workbench-tab-table"
          :border="true"
          :tableOption="$_getKeyListFromData(testData)"
          :tableData="testData"
          :tableOperate="testOperator"
           @updateTable="$_getTestApiInfo"
        />
      </el-tab-pane>
      <el-tab-pane label="我的审批" name="fifth" class="workbench-tab">
        <el-button @click="$_handleClick(0)">新建申请</el-button>
        <BasicTable
          class="workbench-tab-table"
          :border="true"
          :tableOption="$_getKeyListFromData(appilcationData, true)"
          :tableData="appilcationData"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import storejs from 'store';
import BasicStep from '@/components/BasicStep';
import BasicTable from '@/components/BasicTable';
import { stepFormMap } from '@/config/config/stepForm';
import { apiInfo2zh } from '@/config/enum/apiInfo';
import { application2zh } from '@/config/enum/application';
import * as apiServer from '@/service/api';


export default {
  name: 'MyWorkbench',
  components: {
    BasicStep,
    BasicTable,
  },
  data() {
    return {
      activeName: 'first',
      dialogVisible: false,
      steps: [],
      myData: [],
      myOperator: [
        {
          key: 'detail',
          label: '查看',
        },
        {
          key: 'submit',
          label: '发布',
        },
        {
          key: 'delete',
          label: '删除',
        },
        {
          key: 'update',
          label: '修改',
        },
      ],
      auditData: [],
      auditOperator: [
        {
          key: 'audit',
          label: '审核',
        },
      ],
      testData: [],
      testOperator: [
        {
          key: 'test',
          label: '测试',
        },
      ],
      appilcationData: [
        {
          id: 1,
          createTime: '2020-05-01',
          status: 1,
          role: 'api测试',
          detail: 'test',
        },
      ],
      apiSteps: [
        {
          key: 'apiBaiscInfo',
          title: '信息填写',
          description: '填写API的基础信息',
        },
        {
          key: 'apiAttributes',
          title: '属性设置',
          description: '设置API属性（包括请求方法、host、传参）',
        },
        {
          key: 'apiExample',
          title: '创建示例',
          description: '举个例子吧！',
        },
        {
          key: 'apiSubmit',
          title: '保存API',
          description: '保存创建的api',
        },
      ],
      permissionSteps: [
        {
          key: 'createPermission',
          title: '权限申请',
          description: '填写表单并提交权限申请',
        },
        {
          key: 'submitPermission',
          title: '提交成功',
          description: '等待权限审批通过',
        },
      ],
    };
  },
  computed: {
    getFormInfo() {
      const formInfo = this.$data.steps.map((item) => stepFormMap[item.key]);
      return formInfo;
    },
  },
  watch: {
    activeName: {
      immediate: true,
      handler(newVal) {
        switch (newVal) {
          case 'first':
            this.$_getMyApiInfo(); break;
          case 'third':
            this.$_getAuditApiInfo(); break;
          case 'fourth':
            this.$_getTestApiInfo(); break;
          default:
            break;
        }
      },
    },
  },
  mounted() {
    this.$_getMyApiInfo();
    this.$_getAuditApiInfo();
    this.$_getTestApiInfo();
  },
  methods: {
    $_getKeyListFromData(data, isOtherPart) {
      if (!data || data.length === 0) {
        return [];
      }
      return Object.keys(data[0]).map((item) => ({
        key: item,
        label: isOtherPart ? application2zh(item) : apiInfo2zh(item),
      }));
    },
    $_handleClick(type) {
      if (type > 0) {
        this.$data.steps = this.$data.apiSteps;
      } else {
        this.$data.steps = this.$data.permissionSteps;
      }
      console.log(this.$data.steps);
      this.$data.dialogVisible = true;
    },
    $_getMyApiInfo() {
      const user = storejs.get('user');
      apiServer.getApiInfo({ owner: user.userInfo.username }).then((res) => {
        this.myData = res.data;
      }).catch((err) => {
        throw err;
      });
    },
    $_getAuditApiInfo() {
      apiServer.getApiInfo({ status: 1 }).then((res) => {
        this.auditData = res.data;
      })
        .catch((err) => {
          throw err;
        });
    },
    $_getTestApiInfo() {
      apiServer.getApiInfo({ status: 3 }).then((res) => {
        this.testData = res.data;
      })
        .catch((err) => {
          throw err;
        });
    },
  },
};
</script>
<style lang="less">
a {
  text-decoration: none;
  color:inherit;
}
.el-tabs--left .el-tabs__header.is-left {
  position: sticky;
  position: -webkit-sticky;
  left: 2px;
  top: 20px;
}
.workbench {
  margin: 2% 10%;
  &-tab {
    padding: 5px;
    &-table {
      width: 100%;
      display: inline-block;
      // box-shadow: 0 0 4px #d3d3d3;
    }
    &-button {
      float: right;
      margin:1% 0;
    }
  }
}
</style>
