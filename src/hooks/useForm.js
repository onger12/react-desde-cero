import { useState } from "react"


export const useForm = ( initialState ) => {

    const [formState, setFormState] = useState( initialState );

    const onInputChange = ( { target } ) => {

        const { value, name } = target;

        setFormState({
            ...formState,
            [ name ] : value,
        });

        console.log({ value, name });
    }

    return {
        ...formState,
        formState,
        onInputChange,
    }
}
