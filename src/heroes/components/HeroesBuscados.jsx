import { HeroeBuscadoCard } from "./HeroeBuscadoCard"


export const HeroesBuscados = ({ heroes, sinResultados }) => {
    console.log( sinResultados );
    if( heroes.length === 0 && !sinResultados) return <div className="alert alert-primary text-center">Busca algún heroe!</div>
    if( sinResultados ) return <div className="alert alert-danger text-center">No pudimos encontrar tu heroe :c</div>
    return heroes.map( heroe => <HeroeBuscadoCard key={ heroe.id} { ...heroe } /> )
}
