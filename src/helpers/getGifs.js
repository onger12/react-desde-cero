const api_key = 'fbhyaXZZC9wQBjhpYVM4q240gws7TLHM';

export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    
    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url
    }))


    return gifs;
}