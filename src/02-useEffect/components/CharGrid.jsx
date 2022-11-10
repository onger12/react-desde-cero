import { CharacterItem } from './CharacterItem';
import { useFetch } from '../../hooks/useFetch';

const url = 'https://www.breakingbadapi.com/api/characters';

export const CharGrid = () => {

    const {data, isLoading} = useFetch(url);

    return (
        <div className="char-grid">
            {
                isLoading ? 
                (<div className="alert alert-info text-center">Loading...</div>) :
                (data.map(char => <CharacterItem { ...char } />))
            }
        </div>
    )
}
