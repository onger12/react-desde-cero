


export const Todo = ({ todo = 'todo' }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ todo }</span>
            <button className="btn btn-danger">Borrar</button>
        </li>
    )
}
