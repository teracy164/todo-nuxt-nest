<template>
  <el-dialog title="TODO登録" :visible.sync="isVisible" @closed="afterClosed">
    <div class="input-area">
      <el-form ref="form" :model="form" :rules="rules" label-width="60px">
        <el-form-item label="内容" prop="contents">
          <el-input v-model="form.contents" />
        </el-form-item>
        <el-form-item label="期間" prop="period">
          <el-col :span="11">
            <el-date-picker v-model="start" class="date" type="date" placeholder="開始日" />
          </el-col>
          <el-col style="text-align: center" :span="2">
            〜
          </el-col>
          <el-col :span="11">
            <el-date-picker v-model="end" class="date" type="date" placeholder="終了日" />
          </el-col>
        </el-form-item>
      </el-form>
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
import { Loading, Form } from 'element-ui';
import { Todo } from '~/openapi';

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

  rules = {
    contents: [
      { required: true, message: '必須項目です', trigger: 'blur' },
      { max: 30, message: '30文字以内で入力してください', trigger: 'blur' },
    ],
    start: [{ required: true }],
    period: [
      {
        validator: (_rule: any, _value: any, callback: Function) => {
          if (!this.start && !this.end) {
            callback(new Error('開始／終了どちらかは入力してください'));
          } else {
            callback();
          }
        },
        trigger: 'change',
      },
    ],
  };

  get start(): string | null {
    return this.form.start || null;
  }

  set start(value: string | null) {
    // DatePickerの時刻が00:00:00+0900で帰ってくるため、年月日だけ切り出す
    this.form.start = value ? moment(value).format('YYYY-MM-DD') : null;
  }

  get end(): string | null {
    return this.form.end || null;
  }

  set end(value: string | null) {
    // DatePickerの時刻が00:00:00+0900で帰ってくるため、年月日だけ切り出す
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

  afterClosed() {
    (this.$refs.form as Form).resetFields();
  }

  async save() {
    const valid = await (this.$refs.form as Form).validate();
    if (!valid) {
      return;
    }

    const loading = Loading.service({ text: '登録中' });
    let retData = null;
    try {
      if (this.todo) {
        const data: Todo = Object.assign({ ...this.todo }, this.form);
        const result = await this.$api.updateTodo(this.todo.id, data);
        retData = result.data;
      } else {
        const result = await this.$api.addTodo([this.form as Todo]);
        if (result.data?.length) {
          retData = result.data[0];
        }
      }
      loading.close();
      this.$emit('updated', retData);
      this.isVisible = false;
    } catch (error) {
      this.$message.error('登録に失敗しました');
      loading.close();
    }
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
