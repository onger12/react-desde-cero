import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'World of Warcraft']);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes( newCategory ) ) return;
        setCategories(prevCategories => [ newCategory, ...prevCategories])
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={ onAddCategory } />

            {
                categories.map( category => <GifGrid key={category} category={category}/> )
            }
        </>
    )
}
