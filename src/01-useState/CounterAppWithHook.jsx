import { useCounter } from "./hooks/useCounter"





export const CounterAppWithHook = () => {

    const { counter, increment, decrement, reset } = useCounter( 7 );

    return (
        <>
            <h1>Counter: { counter } </h1>
            <button className="btn btn-primary m-1" onClick={ increment }>+1</button>
            <button className="btn btn-primary m-1" onClick={ reset }>reset</button>
            <button className="btn btn-primary m-1" onClick={ decrement }>-1</button>
        </>        
    )
}
