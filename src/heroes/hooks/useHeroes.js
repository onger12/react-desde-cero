
import { useEffect, useState } from 'react';
import { getHeroeByQuery } from '../helpers';


export const useHeroes = ( query ) => {

    const [ heroes, setHeroes ] = useState( [] );
    const [ sinResultados, setSinResultados ] = useState( false );
    
    useEffect( () => {
        if( query === " ") return
        if( query === "" ) return setHeroes( [] );
        const heroes = getHeroeByQuery( query );
        if( heroes.length === 0 ) {
            setSinResultados( true );
            setHeroes( [] );
            return
        }
        setHeroes( heroes );
        setSinResultados( false );
    }, [ query ] )

    return {
        heroes,
        sinResultados,
    }
}