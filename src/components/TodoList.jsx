

import { Todo } from './Todo';


export const TodoList = ({ todos }) => {
    return (
        <div className="col-7">
            <ul className="list-group">
                {
                    todos.map( ({ todo }) => <Todo key={ todo } todo={todo} />)
                }
            </ul>
        </div>
    )
}
