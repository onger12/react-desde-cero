import PropTypes from 'prop-types';

export const GifItem = ( {title = 'gif', url, id} ) => {
    
  return (
    <div className="card">
        <img aria-label="gif-img" src={ url } alt={ title } />
        <p aria-label="p-title"> {title.trim() !== '' ? title : 'Expert Gif'} </p>
    </div>
  )
}

GifItem.propTypes = {
  title : PropTypes.string.isRequired,
  url : PropTypes.string.isRequired,
}