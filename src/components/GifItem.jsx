
export const GifItem = ( {title = 'gif', url, id} ) => {

    console.log( {title, id, url} )
    
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p> {title.trim() !== '' ? title : 'Expert Gif'} </p>
    </div>
  )
}
