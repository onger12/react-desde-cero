import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ( { category = 'Goku'} ) => {

    const { gifs, isLoading } = useFetchGifs( category );

    return (
        <>
            { isLoading ? 
                <h1>Loading { category } gifs...</h1> : 
                <>
                    <h1> { category } </h1>
                    <div className="card-grid">
                    {
                        gifs.map(gif => (
                            <GifItem
                            key={ gif.id }
                            { ...gif } />
                            ))
                        }

                    </div>
                </>
            }
        </>
    )
}
