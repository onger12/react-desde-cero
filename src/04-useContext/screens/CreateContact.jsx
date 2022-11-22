import { useFetch } from "../../hooks/useFetch"


export const CreateContact = () => {

    const { nombre, apellido, celular, onInputChange } = useFetch({
        nombre: '',
        apellido: '',
        celular: '',
    })

    return (
        <div className="container">
            <form className="d-flex flex-column">
                <h2 className="text-center">Datos</h2>
                <input 
                    className="form-control my-1" 
                    name="nombre" 
                    type="text" 
                    placeholder="nombre"
                    value={ nombre }
                    onChange={ onInputChange }
                />
                <input 
                    className="form-control my-1" 
                    name="apellido" 
                    type="text" 
                    placeholder="apellido"
                    value={ apellido }
                    onChange={ onInputChange }
                />
                <input 
                    className="form-control my-1" 
                    name="celular" 
                    type="number" 
                    placeholder="celular"
                    value={ celular }
                    onChange={ onInputChange }
                />
                <button 
                    className="btn btn-primary align-self-center"
                >
                    Crear
                </button>
            </form>
        </div>
    )
}
