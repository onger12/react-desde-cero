


import { useEffect, useState } from "react"


export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null,
    })

    const getData = async () => {
        
        setState({
            ...state,
            isLoading: true,
        })

        const data = await fetch( url ).then( res => res.json());

        setState({
            ...state,
            data,
            isLoading: false,
        })
    }

    useEffect( () => {
        getData();
    }, [ url ])


    return ({
        ...state,
        state,
    })
}
