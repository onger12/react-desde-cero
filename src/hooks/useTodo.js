import { useEffect, useReducer, useRef } from 'react';
import { todoReducer } from '../reducers';
import { initialState } from '../data';

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
};

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );
    const todosCompletados = useRef(0);
    const cantidadTodos = useRef(todos.length);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
        todosCompletados.current = todos.filter(todo => !todo.done).length
    }, [todos])
    

    const onNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        };

        dispatch( action );
    }

    const onDeleteTodo = ( todo ) => {
        
        const action = {
            type : '[TODO] delete todo',
            payload: todo
        };

        dispatch( action );
    }

    const onModifyTodo = ( todo ) => {
        const action = {
            type : '[TODO] patch todo',
            payload : todo
        };

        dispatch( action );
    }

    const onDeleteAllTodos = () => {
        const res = confirm('Está seguro que desea limpiar los todos?')
        const action = {
            type : '[TODO] delete all todos'
        }
        res && dispatch( action );
        return
    }

    return {
        todos,
        onDeleteAllTodos,
        onDeleteTodo,
        onModifyTodo,
        onNewTodo,
        todosCompletados : todosCompletados.current,
    }
}