
import { useState } from 'react';
import { HeroesBuscados } from '../components/HeroesBuscados';
import { useForm } from '../hooks/useForm';
import { useHeroes } from '../hooks/useHeroes';

export const SearchPage = () => {

    const { query, onChangeInput } = useForm({ query : '' }); 
    const { heroes, sinResultados } = useHeroes( query );

    console.log( {query} )
    

    return (
        <div className="search-page">
            <div className="search-page--form">
            <h1 className="my-3">Buscar</h1>
                <form onSubmit={ e => { e.preventDefault() } }>
                    <input 
                        className="form-control"
                        name="query"
                        type="text" 
                        placeholder="Busca un heroe..." 
                        value={ query }
                        onChange={ onChangeInput }
                        autoFocus
                    />
                </form>
            </div>
            <div className="search-page--results">
                <HeroesBuscados heroes={ heroes } sinResultados={ sinResultados } />
            </div>
        </div>
    )
}
