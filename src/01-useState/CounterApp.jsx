

import { useState } from 'react';


export const CounterApp = () => {

    const [{ counter1, counter2, counter3 }, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const handleClick = () => {
        setCounter( prevCounter => ({
            counter1: prevCounter.counter1 + 1,
            counter2: prevCounter.counter2 / 0.5,
            counter3: prevCounter.counter3 - 1,
        }))
    }

    return (
        <>
            <h1>Counter1: { counter1 }</h1>
            <h1>Counter2: { counter2 }</h1>
            <h1>Counter3: { counter3 }</h1>

            <hr />

            <button className='btn' onClick={ handleClick }>+1</button>
        </>
    )
}
