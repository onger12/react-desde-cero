import { Link } from "react-router-dom";


export const HeroeCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const imgUrl = `/assets/${ id }.jpg`;

    return (
        <div className="col animate__fadeIn animate__animated">
            <div className="card heroe-card--card">

                <div className="row no-gutters">
                    <div className="col-5">
                        <img src={ imgUrl } className="card-img" alt={ id } />
                    </div>
                    
                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>
                            { alter_ego !== characters && <p>{ characters }</p> }
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>
                            <Link to={`/hero/${ id }`} className="btn btn-primary animate__animated animate__headShake" > Más... </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
