

import { useReducer } from 'react';

import { AddTodo, TodoList } from './components';
import { todoReducer } from './reducers';
import { initialState } from './data';



export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState )

    const onNewTodo = ( todo ) => {
        console.log({ todo })
    }

    return (
        <>
            <h1>TodoApp</h1>
            <hr/>

            <div className="row">
                <TodoList todos={ todos }/>
                <AddTodo dispatch={ dispatch } onNewTodo={ onNewTodo } />
            </div>
        </>
    )
}
