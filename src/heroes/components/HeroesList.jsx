
import { getHeroesByPublisher } from '../helpers';
import { HeroeCard } from './HeroeCard';


export const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher );

    return (
        <>
            <div className="heroes-list">
                {
                    heroes.map( heroe => (
                        <HeroeCard key={ heroe.id } { ...heroe } />
                    ))
                }
            </div>
        </>
    )
}
