import { useNavigate } from "react-router-dom"


export const LoginPage = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate("/marvel");
    }

    return (
        <div className="container">
            <h1>Bienvendio</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ onLogin }
                >
                    Login
                </button>
        </div>
    )
}
