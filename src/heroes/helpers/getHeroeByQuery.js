import { heroes } from "../data/heroes"


export const getHeroeByQuery = ( query = '' ) => {
    return heroes.filter( heroe => {
        let infoComprimida = '';
        for (const key in heroe) {
            infoComprimida = infoComprimida + ( heroe[key].toLowerCase() )
        }
        
        if( infoComprimida.includes( query.toLowerCase() ) ) return heroe
    })
}
