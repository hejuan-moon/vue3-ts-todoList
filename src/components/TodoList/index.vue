<template>
  <div>
    <todo-item
      v-for="(item, index) of todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDiong="setDiong"
    ></todo-item>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive, ref } from "vue";
import TodoItem from "./item.vue";
import { ITodo } from "@/typings";
import { IuserTodo, useTodo } from "@/hooks";
export default defineComponent({
  name: "TodoList",
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  components: {
    TodoItem,
  },

  setup() {
    const { removeTodo, setStatus, setDiong }: IuserTodo = useTodo();

    return { removeTodo, setStatus, setDiong };
  },
});
</script>
<style scoped lang='scss'>
</style>