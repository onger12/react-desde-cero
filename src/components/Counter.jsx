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
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button onClick={ handleReset }> reset </button>
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