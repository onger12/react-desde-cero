import { useEffect } from "react";
import { CharGrid } from "./CharGrid";
import { CharacterItem } from "./components/CharacterItem";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"


export const BrakingBadQuotes = () => {

    const { counter, onChangeCounter } = useCounter();
    const { data, isLoading} = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    const { quote, author } = !!data && data[0];

    const { character } = useFetch(`https://www.breakingbadapi.com/api/characters?name=${ author.split(' ')[0] }`);

    return (
        <>
            <h1>Braking Bad Quotes</h1>
            <button className="btn btn-primary" onClick={ onChangeCounter } disabled={ isLoading }>Next</button>

            <hr />
            { isLoading ? 
                (<div className="alert alert-info text-center">
                    Loading...
                </div>) : 
                (<blockquote className="blockquote text-end">
                    <p className="mb-3">{ quote }</p>
                    <footer className="blockquote-footer">{ author }</footer>
                    <CharacterItem { ...data[0] } />
                </blockquote>)
            }
            
        </>    
    )
}
