import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [ gifs, setGifs ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    useEffect( () => {
        
        const fetchingGfis = async ( category ) => {
            const resp = await getGifs( category );
            setGifs( resp );
            setIsLoading( !isLoading );
        }

        fetchingGfis( category );
        
    }, [])

    return ({
        gifs,
        isLoading,
    })
}
