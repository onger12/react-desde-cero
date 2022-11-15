import { useState } from "react"



export const AddTodo = ( { onNewTodo, todos }) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInput = ({ target }) => {
        const { value } = target;
        setInputValue(value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault()
        
        if( inputValue.trim() === '' ) return
        if( !!(todos.find( todo => todo.description === inputValue )) ) return
        
        const todo = {
            id: new Date().getTime(),
            description: inputValue,
            done: false,
        }

        onNewTodo(todo);

        setInputValue('');
    }

    return (
        <div className="col-5">
            <form onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder="¿Qué hay por hacer?"
                    className="form-control"
                    value={ inputValue }
                    onChange={ onChangeInput }
                    autoFocus
                />
                <button className="btn btn-outline-primary my-2">Agregar</button>
            </form>
        </div>
    )
}
