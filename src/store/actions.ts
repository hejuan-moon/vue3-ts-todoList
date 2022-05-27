import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO_LIST,SET_TODO_STATUS,SET_TODO_DOING } from "./actionTypes";

interface ICtx {
    commit: Commit,
    state: IState
}


export default {
    [SET_TODO]({ commit }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo)
    },
    [SET_TODO_LIST]({ commit }: ICtx, todoList: ITodo[]): void {
        commit(SET_TODO_LIST, todoList)
    },
    [REMOVE_TODO_LIST]({ commit }: ICtx, id: number): void {
        commit(REMOVE_TODO_LIST, id)
    },
    [SET_TODO_STATUS]({ commit }: ICtx, id: number): void {
        commit(SET_TODO_STATUS, id)
    },
    [SET_TODO_DOING]({ commit }: ICtx, id: number): void {
        commit(SET_TODO_DOING, id)
    },
}