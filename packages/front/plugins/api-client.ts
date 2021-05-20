import Vue from 'vue';
import { TodoApi } from '~/openapi';

declare module 'vue/types/vue' {
  interface Vue {
    $api: TodoApi;
  }
}

Vue.prototype.$api = new TodoApi();
