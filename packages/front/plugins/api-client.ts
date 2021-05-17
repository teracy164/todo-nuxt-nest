import { Todo } from "~/types/todo";
import { Response } from "~/types/http";
import { Context, Plugin } from "@nuxt/types";
import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $api: {
      getTodos: () => Promise<Response<Todo[]>>;
      addTodo: (todo: Todo) => Promise<Response<Todo>>;
      updateTodo: (todo: Todo) => Promise<Response<Todo>>;
      updatePertialTodo: (todo: Todo) => Promise<Response<Todo>>;
      deleteTodo: (todoId: number) => Promise<Response<void>>;
    };
  }
}

const BASE = "/api";
const API_TODO = `${BASE}/todos`;

const plugin: Plugin = (context: Context) => {
  Vue.prototype.$api = {
    getTodos: (): Promise<Response<Todo[]>> => context.$axios.get(API_TODO),
    addTodo: (todo: Todo): Promise<Response<Todo>> =>
      context.$axios.post(API_TODO, todo),
    updateTodo: (todo: Todo): Promise<Response<Todo>> =>
      context.$axios.put(`${API_TODO}/${todo.id}`, todo),
    updatePertialTodo: (todo: Todo): Promise<Response<Todo>> =>
      context.$axios.patch(`${API_TODO}/${todo.id}`, todo),
    deleteTodo: (todoId: number): Promise<Response<void>> =>
      context.$axios.delete(`${API_TODO}/${todoId}`)
  };
};

export default plugin;
