import { useState } from "react"

const api_key = 'fbhyaXZZC9wQBjhpYVM4q240gws7TLHM';

export const GifGrid = ( { category = 'Goku'} ) => {

    const [gifs, setGifs] = useState([])

    const fetchingGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=20`;
        const resp = await fetch(url);
        const { data = [] } = await resp.json();

        const gifs = data.map( gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }))

        setGifs( gifs )
    }

    fetchingGifs();

    return (
        <div className="div-category">
            <h1> {category} </h1>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut facere voluptatum vero nihil obcaecati, quas nesciunt exercitationem culpa inventore? </p>

            {
                gifs.map(gif => (
                    <img src={gif.url} alt={gif.title} key={gif.id} />
                ))
            }

        </div>
    )
}
