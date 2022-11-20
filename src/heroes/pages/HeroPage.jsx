import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroeById } from '../helpers';


export const HeroPage = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    
    const imgUrl = `/assets/${ id }.jpg`;
    const heroe = getHeroeById( id );
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = heroe;

    const pCharacters = 
        <p className="text-center">
            <b>Personajes: <br/></b>
            { characters }
        </p> 

    if( !heroe ) return <Navigate to="/marvel" />

    const onChangePage = () => {
        navigate(-1)
    }

    return (
        <>
            <div className="my-4">
                <div className="row">
                    <div className="col-6">
                        <img 
                            className="card-img my-2 img-thumbnail animate__animated animate__fadeIn" 
                            src={ imgUrl} 
                            alt={ id } 
                        />
                    </div>
                    <div className="col-6 text-center d-flex flex-column align-items-center justify-content-center .hero-detail--card-text">
                        <h2 className="card-title">
                            { superhero }
                        </h2>
                        <p className="card-text">
                            <b>Alter Ego: <br/></b> 
                            { alter_ego }
                        </p>
                        { alter_ego !== characters && pCharacters }
                        <p className="card-text">
                            <b>Primera apareción en comics:<br /></b>
                            <small className="text-muted"> { first_appearance }</small>
                        </p>
                        <button className="btn btn-primary animate__animated animate__headShake" onClick={ onChangePage }>Volver</button>
                    </div>
                </div>
            </div>
        </>
    )
}
