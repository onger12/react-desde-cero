

export const HeroeBuscadoCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
}) => {
    
    const imgUrl = `/assets/${ id }.jpg`;

    return (
        <div className="container my-4 animate__animated animate__fadeInRight">
            <h3>{ superhero }</h3>
            <p className="my-0">{ alter_ego }</p>
            <p>{ publisher }</p>
            <img className="img-thumbnail" src={ imgUrl } alt={ id } />
        </div>
    )
}
