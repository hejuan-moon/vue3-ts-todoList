<template>
  <div class="wrapper">
    <Todo-input />  
    <Todo-list :todoList="todoList" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { Store, useStore } from "vuex";
import TodoInput from "./components/TodoInput/index.vue";
import TodoList from "./components/TodoList/index.vue";
import { IuserTodo, useTodo } from "./hooks";

export default defineComponent({
  components: {
    TodoInput,
    TodoList,
  },
  name: "App",
  setup() {
    const { setTodoList }: IuserTodo = useTodo();
    const store: Store<any> = useStore();
    onMounted(() => {
      setTodoList();
    });

    return {
      todoList: computed(() => store.state.list),
    };
  },
});
</script>

<style>

</style>
