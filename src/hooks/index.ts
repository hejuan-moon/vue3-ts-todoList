import { SET_TODO, SET_TODO_LIST, REMOVE_TODO_LIST, SET_TODO_STATUS,SET_TODO_DOING} from '@/store/actionTypes';
import { Store, useStore } from 'vuex';
import { ITodo, TODO_STATUS } from '../typings'


interface IuserTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number) => void;
    setDiong: (id:number) => void
}

interface IUserStorage {
    getLocalList: () => ITodo[],
    setLocalList: (todoList: ITodo[]) => void
}

function useTodo(): IuserTodo {
    const store: Store<any> = useStore()
    const { setLocalList, getLocalList }: IUserStorage = useLocalStroge()
    const todoList: ITodo[] = getLocalList()

    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO, todo)
        setLocalList(store.state.list)
    }
    function setTodoList() {
        store.dispatch(SET_TODO_LIST, todoList)
    }
    function removeTodo(id: number): void {
        store.dispatch(REMOVE_TODO_LIST, id)
        setLocalList(store.state.list)
    }
    function setStatus(id: number): void {
        store.dispatch(SET_TODO_STATUS, id)
        setLocalList(store.state.list)
    }
    function setDiong(id:number):void {
        store.dispatch(SET_TODO_DOING, id)
        setLocalList(store.state.list)
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDiong
    }

}

function useLocalStroge(): IUserStorage {
    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem('todoList') || "[]")
    }
    function setLocalList(todoList: ITodo[]): void {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }
    return {
        getLocalList,
        setLocalList
    }
}

export {
    useTodo,
    IuserTodo,
    useLocalStroge
}