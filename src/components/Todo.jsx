


export const Todo = ({ todo, onDeleteTodo, onModifyTodo }) => {

    const { description, done } = todo;

    return (
        <li className="list-group-item d-flex justify-content-between" onClick={ () => onModifyTodo( todo ) }>
            <span className={`align-self-center ${ (done) ? 'text-decoration-line-through' : ''}`}>{ description }</span>
            <button className="btn btn-danger" onClick={ () => onDeleteTodo( todo )}>Borrar</button>
        </li>
    )
}
