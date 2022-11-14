import { useState } from "react"



export const AddTodo = ( { dispatch, onNewTodo }) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInput = ({ target }) => {
        const { value } = target;
        setInputValue(value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault()
        
        if( inputValue === '' ) return
        
        const todo = {
            id: new Date().getTime(),
            todo: inputValue,
            done: false,
        }

        // dispatch(todo);
        onNewTodo(todo);
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
                />
                <button className="btn btn-outline-primary my-2">Agregar</button>
            </form>
        </div>
    )
}
