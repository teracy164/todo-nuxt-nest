<template>
  <el-dialog title="TODO登録" :visible.sync="isVisible">
    <div v-if="isVisible" class="input-area">
      <el-row align="middle">
        <el-col :span="24">
          <el-input v-model="form.contents" class="input" placeholder="TODO" />
        </el-col>
        <el-col :span="12">
          <el-date-picker v-model="start" class="date" type="date" placeholder="開始日" />
        </el-col>
        <el-col :span="12">
          <el-date-picker v-model="end" class="date" type="date" placeholder="終了日" />
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
import moment from 'moment';
import { Component, Vue } from 'nuxt-property-decorator';
import { Loading } from 'element-ui';
import { Todo } from '../types/todo';

@Component
export default class EditDialog extends Vue {
  isVisible = false;
  todo: Todo | null = null;
  form: Omit<Todo, 'id'> = {
    contents: '',
    start: null,
    end: null,
    isCompleted: false,
  };

  get start(): string | null {
    return this.form.start || null;
  }

  set start(value: string | null) {
    this.form.start = value ? moment(value).format('YYYY-MM-DD') : null;
  }

  get end(): string | null {
    return this.form.end || null;
  }

  set end(value: string | null) {
    this.form.end = value ? moment(value).format('YYYY-MM-DD') : null;
  }

  show(todo: Todo | null = null) {
    this.todo = todo;
    if (todo) {
      Object.assign(this.form, todo);
    } else {
      this.form = {
        contents: '',
        start: null,
        end: null,
        isCompleted: false,
      };
    }

    this.isVisible = true;
  }

  async save() {
    const loading = Loading.service({ text: '登録中' });
    let result = null;
    if (this.todo) {
      const data: Todo = Object.assign({ ...this.todo }, this.form);
      result = await this.$api.updateTodo(data);
    } else {
      result = await this.$api.addTodo(this.form as Todo);
    }
    this.$emit('updated', result.data);
    loading.close();

    this.isVisible = false;
  }
}
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
