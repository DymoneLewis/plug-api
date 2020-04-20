<template>
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step
       v-for="(step, index) in steps"
       :title="step.title"
       :key="index"
       :description="step.description || ''"></el-step>
    </el-steps>
    <BasicForm/>
  </div>
</template>

<script>
import BasicForm from './BasicForm';
export default {
  name: 'BasicStep',
  props: {
    steps: {
      type: Array,
    }
  },
  data() {
    return {
      active: 0
    };
  }
}
</script>

<style>

</style>