<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <h1>TODOリスト</h1>
        <div>
          <el-button type="primary" class="el-icon-plus" circle @click="$refs.editDialog.show()" />
        </div>
      </div>
      <div v-for="(todo, index) of todos" :key="index">
        <TodoItem :todo="todo" @updated="loadTodos" @completed="loadTodos" @deleted="loadTodos" />
      </div>
    </div>
    <EditDialog ref="editDialog" @updated="loadTodos" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Loading } from 'element-ui';
import { Todo } from '~/openapi';

@Component
export default class Index extends Vue {
  todos: Todo[] = [];

  mounted() {
    this.loadTodos();
  }

  async loadTodos() {
    const loading = Loading.service({ text: '一覧読込中' });
    const result = await this.$api.getTodos();
    if (result?.status === 200) {
      this.todos = result.data || [];
    }
    loading.close();
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.wrapper {
  width: 100%;
  max-width: 800px;
}
.header {
  display: flex;
  align-items: center;
}
</style>
