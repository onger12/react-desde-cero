

import { Todo } from './Todo';


export const TodoList = ({ todos, onDeleteTodo, onModifyTodo }) => {
    return (
        <div className="col-7">
            <ul className="list-group">
                {
                    todos.length === 0 
                        ? <h3><i>Aun no tienes TODOS!</i></h3>
                        : todos.map( (todo) => (
                                <Todo 
                                    key={ todo.id } 
                                    todo={ todo } 
                                    onDeleteTodo={ onDeleteTodo }
                                    onModifyTodo={ onModifyTodo }
                                />
                          ))
                }
            </ul>
        </div>
    )
}
