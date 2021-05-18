<template>
  <el-dialog title="TODO登録" :visible.sync="isVisible">
    <div class="input-area">
      <el-row align="middle">
        <el-col :span="24">
          <el-input v-model="form.contents" class="input" placeholder="TODO" />
        </el-col>
        <el-col :span="12">
          <el-date-picker v-model="form.start" class="date" type="date" placeholder="開始日" />
        </el-col>
        <el-col :span="12">
          <el-date-picker v-model="form.end" class="date" type="date" placeholder="終了日" />
        </el-col>
      </el-row>
      <div style="margin-top: 20px; text-align: right">
        <el-button type="primary" @click="save">
          登録
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>
<script lang="ts">
import Vue from 'vue';
import { Loading } from 'element-ui';
import { Todo } from '../types/todo';

export default Vue.extend({
  data(): { isVisible: boolean; form: any; todo: Todo | null } {
    return {
      isVisible: false,
      form: {
        contents: null,
        start: null,
        end: null,
      },
      todo: null,
    };
  },
  methods: {
    show(todo: Todo | null = null) {
      this.todo = todo;
      if (todo) {
        Object.assign(this.form, todo);
      } else {
        Object.keys(this.form).forEach(key => (this.form[key] = null));
      }

      this.isVisible = true;
    },
    async save() {
      const loading = Loading.service({ text: '登録中' });
      let result = null;
      if (this.todo) {
        const data: Todo = Object.assign({ ...this.todo }, this.form);
        result = await this.$api.updateTodo(data);
      } else {
        result = await this.$api.addTodo(this.form);
      }
      this.$emit('updated', result.data);
      loading.close();

      this.isVisible = false;
    },
  },
});
</script>
<style scoped>
.dialog {
  width: 600px;
  max-width: 95%;
}
.date {
  width: 100%;
}
</style>
