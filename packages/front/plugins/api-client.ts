import { Todo } from "~/types/todo";

const BASE = "/api";
const API_TODO = `${BASE}/todos`;

export default ({ $axios }: { $axios: any }, inject: Function) => {
  const apis = {
    getTodos: (): Promise<Todo> => $axios.get(API_TODO),
    addTodo: (todo: Todo): Promise<Todo> => $axios.post(API_TODO, todo),
    updateTodo: (todo: Todo): Promise<Todo> =>
      $axios.put(`${API_TODO}/${todo.id}`, todo),
    updatePertialTodo: (todo: Todo): Promise<Todo> =>
      $axios.patch(`${API_TODO}/${todo.id}`, todo),
    deleteTodo: (todoId: number): Promise<void> =>
      $axios.delete(`${API_TODO}/${todoId}`)
  };
  inject("api", apis);
};
