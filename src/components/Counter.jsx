import React from "react";
import PropTypes from 'prop-types'
import { useState } from "react";

const Counter = ({ value }) => {
    const [counter, setCounter] = useState( value )

    const handleAdd = () => setCounter( counter + 1 );
    const handleSubstract = () => setCounter( counter - 1 );
    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button aria-label="btn-+1" onClick={ handleAdd }> +1 </button>
            <button aria-label="btn--1" onClick={ handleSubstract }> -1 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> reset </button>
        </>
    )
}


Counter.propTypes = {
    value: PropTypes.number.isRequired
}

Counter.defaultProps = {
    value: 0
}

export default Counter