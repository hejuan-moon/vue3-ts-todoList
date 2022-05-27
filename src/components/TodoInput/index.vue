<template>
  <div>
    <input type="text" v-model="todoValue" @keyup="setTodoValue" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
import { useTodo, IuserTodo } from "../../hooks";
export default defineComponent({
  name: "TodoInput",
  setup() {
    const todoValue = ref<string>("");
    const { setTodo }: IuserTodo = useTodo();
    const setTodoValue = (e: KeyboardEvent) => {
      if (e.code === "Enter" && todoValue.value.trim().length) {
        setTodo(todoValue.value);
        todoValue.value = "";
      }
    };
    return {
      todoValue,
      setTodoValue,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>