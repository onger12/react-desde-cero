
import { useState } from "react";

export const AddCategory = ( { onAddCategory } ) => {

  const [inputValue, setInputValue] = useState('');

  const onSubmit = ( e ) => {
    e.preventDefault();

    if(inputValue.trim().length <= 1) return;

    onAddCategory( inputValue );
    setInputValue( '' );
  }

  const onChangeInput = ({ target }) => {
    setInputValue( target.value );
  }

  return (
    <form onSubmit={ onSubmit } aria-label="form">
      <input 
        aria-label="search-input"
        autoFocus
        value={ inputValue }
        placeholder="Buscar gifs..."
        onChange={ onChangeInput }
      />
    </form>
  )
}