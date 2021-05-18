<template>
  <div class="container">
    <div class="todo-list">
      <div style="display: flex; align-items: center">
        <h1>TODOリスト</h1>
        <div>
          <el-button type="primary" class="el-icon-plus" circle @click="$refs.editDialog.show()" />
        </div>
      </div>
      <el-row v-for="(todo, index) of todos" :key="index" class="todo" :class="{ completed: todo.isCompleted }">
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
              @click="completed(todo)"
            />
          </el-tooltip>
          <el-button type="primary" class="el-icon-edit" circle @click="$refs.editDialog.show(todo)" />
          <el-button type="danger" class="el-icon-delete" circle @click="deleteTodo(todo)" />
        </el-col>
      </el-row>
    </div>
    <EditDialog ref="editDialog" @updated="loadTodos" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Loading } from 'element-ui';
import { Todo } from '../types/todo';
import { dateFormat } from '../filters/date';

interface Data {
  todos: Todo[];
}

export default Vue.extend({
  filters: {
    dateFormat,
  },
  data(): Data {
    return {
      todos: [],
    };
  },
  mounted() {
    this.loadTodos();
  },
  methods: {
    async loadTodos() {
      const loading = Loading.service({ text: '一覧読込中' });
      const result = await this.$api.getTodos();
      if (result?.status === 200) {
        this.todos = result.data || [];
      }
      loading.close();
    },
    async completed(todo: Todo) {
      const loading = Loading.service({});
      const data: Todo = Object.assign({ ...todo }, { isCompleted: !todo.isCompleted });
      await this.$api.updatePertialTodo(data);
      await this.loadTodos();
      loading.close();
    },
    async deleteTodo(todo: Todo) {
      try {
        await this.$confirm('削除してよろしいですか？', {
          confirmButtonText: '削除',
          confirmButtonClass: 'el-button--danger',
          cancelButtonText: 'キャンセル',
          type: 'warning',
        });

        const loading = Loading.service({});
        await this.$api.deleteTodo(todo.id);
        await this.loadTodos();
        loading.close();
      } catch (err) {}
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.todo-list {
  width: 100%;
  max-width: 800px;

  .todo {
    padding: 10px;
    border-bottom: 1px solid lightgray;

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
}
</style>
