import { IState, ITodo, TODO_STATUS } from "@/typings";
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO_LIST, SET_TODO_STATUS, SET_TODO_DOING } from "./actionTypes";

export default {
    [SET_TODO](state: IState, todo: ITodo): void {
        state.list.unshift(todo)
    },
    [SET_TODO_LIST](state: IState, todoList: ITodo[]): void {
        state.list = todoList
    },
    [REMOVE_TODO_LIST](state: IState, id: number): void {
        // console.log(id, '3',state.list)
        state.list = state.list.filter((e: ITodo) => e.id !== id)
    },
    [SET_TODO_STATUS](state: IState, id: number): void {
        // console.log(id, '3',state.list)
        state.list = state.list.map((item: ITodo) => {
            if (item.id === id) {
                switch (item.status) {
                    case TODO_STATUS.FINISHED:
                        item.status = TODO_STATUS.WILLDO
                        break;
                    case TODO_STATUS.WILLDO:
                    case TODO_STATUS.DOING:
                        item.status = TODO_STATUS.FINISHED
                        break;
                    default:
                        break;
                }
            }
            return item
        })
    },
    [SET_TODO_DOING](state: IState, id: number): void {
        state.list = state.list.map((item: ITodo) => {
            if (item.id !== id) {
                if (item.status === TODO_STATUS.DOING) {
                    item.status = TODO_STATUS.WILLDO
                }
            }

            if (item.id === id) {
                item.status = item.status === TODO_STATUS.WILLDO ? TODO_STATUS.DOING : TODO_STATUS.WILLDO
            }
            return item
        })
    },
}