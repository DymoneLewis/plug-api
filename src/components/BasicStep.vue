<template>
  <div>
    <el-steps :active="active" finish-status="success" class="step-container">
      <el-step
       v-for="(step, index) in steps"
       :title="step.title"
       :key="index"
       :description="step.description || ''">
       </el-step>
    </el-steps>
    <BasicForm
      v-if="active !== steps.length-1"
      :formInfo="formInfo[active]"
      @submitForm="$_submitForm"/>
    <div v-if="active === steps.length-1" class="step-tip">
      <h2>操作成功</h2>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import * as apiServer from '@/service/api';
import BasicForm from './BasicForm';

export default {
  name: 'BasicStep',
  components: {
    BasicForm,
  },
  props: {
    steps: {
      type: Array,
    },
    formInfo: {
      type: Array,
    },
  },
  computed: {
    getStepContext() {
      if (this.active === this.$props.steps.length - 1) {
        return '返回首页';
      }
      return this.active === this.$props.steps.length - 2 ? '提交' : '下一步';
    },
  },
  data() {
    return {
      active: 0,
      formData: {
        title: '',
        path: '',
        schemes: '',
        method: '',
        params: [],
        output: {},
        status: 1,
        rate: 0,
        example: '',
        intro: '',
        owner: '',
        createTime: '',
        submitTime: '',
        auditTime: '',
        testTime: '',
      },
    };
  },
  methods: {
    $_getStepContext(active) {
      return active;
    },
    $_submitForm(formData) {
      console.log('active', this.$data.active, this.$props.steps.length);
      this.$data.formData = _.assign({}, this.$data.formData, formData);
      console.log('formData', this.$data.formData);
      if (this.$data.active === this.$props.steps.length - 2) {
        this.$data.formData.createTime = new Date();
        console.log('formData', this.$data.formData.createTime);
        apiServer.createApi(this.$data.formData);
      }
      this.$data.active += 1;
    },
  },
};
</script>

<style>
.step-container {
  width:80%;
  margin: 5% 10%;
}
.step-tip {
  width: 20%;
  margin: 10% 40%;
}
</style>
