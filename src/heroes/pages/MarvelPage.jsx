import { HeroesList } from "../components/HeroesList"

const publisher = 'Marvel Comics';

export const MarvelPage = () => {
    return (
        <>
            <h1 className="my-4">MarvelPage</h1>
            <HeroesList publisher={ publisher } />
        </>
    )
}
