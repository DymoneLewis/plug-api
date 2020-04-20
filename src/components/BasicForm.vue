<template>
  <div>
    <el-form>
      <el-form-item v-for="item in formInfo" :key="item.key" label="item.label">
        <el-input
         v-model="formData[item.key]"
         v-if="item.type === 'text' || item.type === 'textarea'"
         :type="item.type">
        </el-input>
        <el-select v-if="item.type === 'option'" v-model="formData[item.key]">
          <el-option
           v-for="option in item.option"
           :label="option.label"
           :value="option.value"
           :key="option.key">
          </el-option>
        </el-select>
        <el-checkbox-group v-if="item.type === 'checkbox'" v-model="formData[item.key]">
          <el-checkbox
           v-for="checkbox in checkboxList"
           :key="checkbox.key"
           :label="checkbox.label">
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'BasicForm',
  props: {
    formInfo: {
      type: Array
    }
  },
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    onSubmit() {
      this.$emit('submitForm', this.formData);
    }
  }
}
</script>

<style>

</style>