import Vue from 'vue';
import { Context, Plugin } from '@nuxt/types';
import { Todo } from '~/types/todo';
import { Response } from '~/types/http';

declare module 'vue/types/vue' {
  interface Vue {
    $api: {
      getTodos: () => Promise<Response<Todo[]>>;
      addTodo: (todo: Todo) => Promise<Response<Todo>>;
      updateTodo: (todo: Todo) => Promise<Response<Todo>>;
      updatePertialTodo: (todo: Partial<Todo>) => Promise<Response<Todo>>;
      deleteTodo: (todoId: number) => Promise<Response<void>>;
    };
  }
}

const BASE = '/api';
const API_TODO = `${BASE}/todos`;

const plugin: Plugin = (context: Context) => {
  Vue.prototype.$api = {
    getTodos: (): Promise<Response<Todo[]>> => context.$axios.get(API_TODO),
    addTodo: (todo: Todo): Promise<Response<Todo>> => context.$axios.post(API_TODO, todo),
    updateTodo: (todo: Todo): Promise<Response<Todo>> => context.$axios.put(`${API_TODO}/${todo.id}`, todo),
    updatePertialTodo: (todo: Partial<Todo>): Promise<Todo> => context.$axios.patch(`${API_TODO}/${todo.id}`, todo),
    deleteTodo: (todoId: number): Promise<Response<void>> => context.$axios.delete(`${API_TODO}/${todoId}`),
  };
};

export default plugin;
