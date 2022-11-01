import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'League of Legends', 'Derivadas', 'World of Warcraft']);

    const onAddCategory = () => {
        // setCategories(categories.concat('Integrales'));
        setCategories( [ ...categories, 'Integrales' ] );
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Buscador */}
            <AddCategory />

            {/* Lista de gifs */}
                {/* Gif Item */}
            
            <button onClick={onAddCategory} >Agregar</button>

            <ol>
                {
                    categories.map( category => <li key={category}> { category } </li> )
                }
            </ol>
        </>
    )
}
