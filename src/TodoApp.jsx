

import { AddTodo, TodoList } from './components';
import { useTodo } from './hooks';

export const TodoApp = () => {

    const { todos, onDeleteAllTodos, onModifyTodo, onNewTodo, onDeleteTodo, todosCompletados, cantidadTodos } = useTodo();

    return (
        <>
            <h1>TodoApp <code>({ todos.length })</code></h1><small>Completadas: { todosCompletados }</small> <br/>
            <button className="btn btn-warning my-2" onClick={ onDeleteAllTodos }>Limpiar</button>
            <hr/>

            <div className="row">
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ onDeleteTodo }
                    onModifyTodo={ onModifyTodo }
                />
                <AddTodo 
                    onNewTodo={ onNewTodo }
                    todos={ todos }
                />
            </div>
        </>
    )
}
