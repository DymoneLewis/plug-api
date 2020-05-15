<template>
  <div>
    <BasicStep
      :steps="steps"
      :formInfo="getFormInfo"
    />
  </div>
</template>
<script>
import BasicStep from '@/components/BasicStep';
import { stepFormMap } from '@/config/config/stepForm';

export default {
  name: 'Permission',
  components: {
    BasicStep,
  },
  data() {
    return {
      steps: [
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
      console.log('this is formInfo', formInfo);
      return formInfo;
    },
  },
};
</script>
<style lang="less">
</style>
