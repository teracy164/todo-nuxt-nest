<template>
  <el-row class="todo" :class="{ completed: todo.isCompleted, 'is-over': isOver }">
    <el-col :span="24" :sm="18" class="contents">
      <p>{{ todo.contents }}</p>
      <p>({{ todo.start | dateFormat }}〜{{ todo.end | dateFormat }})</p>
    </el-col>
    <el-col :span="24" :sm="6" class="btn-area">
      <el-tooltip class="item" effect="dark" :content="todo.isCompleted ? '未完に戻します' : '完了にします'" placement="bottom">
        <el-button
          :type="todo.isCompleted ? '' : 'primary'"
          :class="{
            'el-icon-check': !todo.isCompleted,
            'el-icon-refresh-left': todo.isCompleted,
            completed: todo.isCompleted,
          }"
          circle
          @click="completed()"
        />
      </el-tooltip>
      <el-button type="primary" class="el-icon-edit" circle @click="$refs.editDialog.show(todo)" />
      <el-button type="danger" class="el-icon-delete" circle @click="deleteTodo()" />
    </el-col>
    <EditDialog ref="editDialog" @updated="$emit('updated', $event)" />
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import moment from 'moment';
import { Loading } from 'element-ui';
import { Todo } from '../types/todo';
import { dateFormat } from '../filters/date';

@Component({
  filters: {
    dateFormat,
  },
})
export default class TodoItem extends Vue {
  @Prop({ required: true })
  todo: Todo | undefined;

  get isOver() {
    return this.todo?.end ? moment().isAfter(this.todo.end, 'date') : false;
  }

  async completed() {
    if (!this.todo) {
      return;
    }

    const loading = Loading.service({});
    await this.$api.updatePertialTodo({
      id: this.todo.id,
      isCompleted: !this.todo.isCompleted,
    });

    loading.close();
    this.$emit('completed');
  }

  async deleteTodo() {
    if (!this.todo) {
      return;
    }

    try {
      await this.$confirm('削除してよろしいですか？', {
        confirmButtonText: '削除',
        confirmButtonClass: 'el-button--danger',
        cancelButtonText: 'キャンセル',
        type: 'warning',
      });

      const loading = Loading.service({});
      await this.$api.deleteTodo(this.todo.id);
      loading.close();

      this.$emit('deleted');
    } catch (err) {
      // delete cancel
    }
  }
}
</script>

<style scoped lang="scss">
.todo {
  padding: 10px;
  border-bottom: 1px solid lightgray;

  &.is-over {
    background-color: rgb(255, 240, 240);
  }
  &.completed {
    background-color: rgb(200, 200, 200);
  }

  .btn-area {
    text-align: right;

    .completed {
      background-color: rgba(0, 0, 0, 0);
    }
    .completed:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
