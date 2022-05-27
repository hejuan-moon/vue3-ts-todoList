<template>
  <div>
    <input
      type="checkbox"
      :checked="item?.status === FINISHED"
      @click="setStatus(item.id)"
    />
    <span :class="item?.status === FINISHED ? 'line-through' : ''">
      {{ item?.content }}
    </span>
    <button @click="removeTodo(item.id)">删除</button>
    <button
      :class="item?.status === DOING ? 'doing' : 'willdo'"
      v-if="item?.status !== FINISHED"
      @click="setDiong(item.id)"
    >
      {{ item?.status === DOING ? "正在做" : "马上做" }}
    </button>
  </div>
</template>

<script lang='ts'>
import { ITodo, TODO_STATUS } from "@/typings";
import { defineComponent, PropType, reactive, ref } from "vue";

interface IStatusState {
  DOING: TODO_STATUS;
  FINISHED: TODO_STATUS;
  WILLDO: TODO_STATUS;
}

export default defineComponent({
  name: "TodoItem",
  props: {
    item: Object as PropType<ITodo>,  //定义 vue 组件 props 的类型的方法
  },
  setup(props, { emit }) {
    const statusState = <IStatusState>{
      //这是用泛型的方式
      // const statusState: IStatusState = {  //这是普通的方式，都可以
      DOING: TODO_STATUS.DOING,
      FINISHED: TODO_STATUS.FINISHED,
      WILLDO: TODO_STATUS.WILLDO,
    };
    const removeTodo = (id: number): void => {
      emit("removeTodo", id);
    };
    const setStatus = (id: number): void => {
      emit("setStatus", id);
    };
    const setDiong = (id: number): void => {
      emit("setDiong", id);
    };
    return {
      ...statusState,
      removeTodo,
      setStatus,
      setDiong
    };
  },
});
</script>
<style scoped>
.line-through {
  text-decoration: line-through;
}
.doing {
  background: #5c5b5b;
  color: #ccc;
}
.willdo {
  background: orange;
  color: #fff;
}
</style>