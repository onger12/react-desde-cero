

import { useForm } from '../hooks/useForm';


export const AddProductForm = () => {

    const { formState, onInputChange, nombre, cantidadInicial, puntoReorden, categoria } = useForm({
        nombre: '',
        cantidadInicial: '',
        puntoReorden: '',
        categoria: '',
    })

    return (
        <>
            <form>
                <input
                    className='form-control mt-2'
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={ onInputChange }
                />

                <input
                    className='form-control mt-2'
                    type="text"
                    placeholder="Cantidad inicial"
                    name="cantidadInicial"
                    onChange={ onInputChange }
                />

                <input
                    className='form-control mt-2'
                    type="text"
                    placeholder="Punto de reorden"
                    name="puntoReorden"
                    onChange={ onInputChange }
                />

                <input
                    className='form-control mt-2'
                    type="text"
                    placeholder="Categoría"
                    name="categoria"
                    onChange={ onInputChange }
                />
            </form>
        </>
    )
}
