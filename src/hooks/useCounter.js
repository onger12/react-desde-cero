import { useState } from "react"


export const useCounter = () => {

    const [ counter, setCounter ] = useState(1);

    const onChangeCounter = () => {
        setCounter( counter + 1);
    }

    return ({
        counter,
        onChangeCounter,
    })
}
