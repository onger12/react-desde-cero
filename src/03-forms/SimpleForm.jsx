import { useForm } from "../hooks/useForm"



export const SimpleForm = () => {

    const { formState, username, email, password, onInputChange } = useForm({
        username : '',
        email : '',
        password : '',
    });


    return (
        <>
            <form>
                <h1>Simple form with hook</h1>
                <input 
                    className="form-control mt-2"
                    type="text"
                    name="username"
                    placeholder="username"
                    value={ username }
                    onChange={ onInputChange }
                />
                <input 
                    className="form-control mt-2"
                    type="email"
                    name="email"
                    placeholder="email@any.com"
                    value={ email }
                    onChange={ onInputChange }
                />
                <input 
                    className="form-control mt-2"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={ password }
                    onChange={ onInputChange }
                />
            </form>
        </>
    )
}
