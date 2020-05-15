<template>
  <div>
    <el-form label-position="top">
      <el-form-item v-for="item in formInfo" :key="item.key" :label="item.label">
        <el-input
         v-model="formData[item.key]"
         v-if="item.type === 'text' || item.type === 'textarea' || item.type === 'url'"
         :type="item.type"
         class="form-input">
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
        <div v-if="item.type === 'table'">
          <el-form :model="customizeInfo" ref="customizeInfo">
            <el-form-item
              v-for="(item, index) in customizeInfo.params"
              :label="'param参数' + (index+1)"
              :key="'param' + index"
              :rules="{
                required: true, message: '参数信息不能为空', trigger: 'blur'
              }"
            >
              <el-input
               v-model="item.key"
               class="form-input-param"
               placeholder="请输入参数名"></el-input>
              <el-input
               v-model="item.value"
               class="form-input-param"
               placeholder="请指定参数类型"></el-input>
              <el-input
               v-model="item.desc"
               class="form-input-param-desc"
               placeholder="请输入参数释义"></el-input>
              <el-button @click.prevent="removeCustomizeItem(item)" type="danger">删除</el-button>
            </el-form-item>
            <el-form-item class="form-button-group">
              <el-button @click="addcustomizeItem">新增</el-button>
            </el-form-item>
            <el-form-item
              v-for="(item, index) in customizeInfo.query"
              :label="'query参数' + (index+1)"
              :key="'query' + index"
              :rules="{
                required: true, message: '参数信息不能为空', trigger: 'blur'
              }"
            >
              <el-input
               v-model="item.key"
               class="form-input-param"
               placeholder="请输入参数名"></el-input>
              <el-input
               v-model="item.value"
               class="form-input-param"
               placeholder="请指定参数类型"></el-input>
              <el-input
               v-model="item.desc"
               class="form-input-param-desc"
               placeholder="请输入参数释义"></el-input>
              <el-button @click.prevent="removeCustomizeItem(item)" type="danger">删除</el-button>
            </el-form-item>
            <el-form-item class="form-button-group">
              <el-button @click="addcustomizeItem">新增</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="form-button">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'BasicForm',
  props: {
    formInfo: {
      type: Array,
    },
  },
  data() {
    return {
      formData: {},
      customizeInfo: {
        query: [
          {
            key: '',
            value: '',
            desc: '',
          },
        ],
        params: [
          {
            key: '',
            value: '',
            desc: '',
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.$data.customizeInfo.params[0].key !== '') {
        this.$data.formData.params = this.$data.customizeInfo.params;
      }
      if (this.$data.customizeInfo.query[0].key !== '') {
        this.$data.formData.query = this.$data.customizeInfo.query;
      }
      this.$emit('submitForm', this.formData);
    },
    resetForm(formName) {
      console.log(this.$data[formName]);
    },
    removeCustomizeItem(item) {
      const index = this.$data.customizeInfo.details.indexOf(item);
      if (index !== -1) {
        this.$data.customizeInfo.details.splice(index, 1);
      }
    },
    addcustomizeItem() {
      this.$data.customizeInfo.details.push({
        key: '',
        value: '',
      });
    },
  },
};
</script>

<style lang="less" scoped>
.form-input {
  width: 300px;
  &-param {
    width: 240px;
    margin: 5px;
    &-desc {
      width: 400px;
      margin: 5px;
      margin-right: 20px;
    }
  }
  .el-input__inner {
    display: inline-block;
  }
}
.form-button-group {
  width: 495px;
  display: flex;
  justify-content: flex-end;
}
.form-button {
  margin:30px 0;
}
</style>
