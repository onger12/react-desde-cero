import { HeroesList } from "../components/HeroesList"

const publisher = 'DC Comics'

export const DcPage = () => {
    return (
        <>
            <h1 className="my-4">DcPage</h1>

            <HeroesList publisher={ publisher } />
        </>
    )
}
