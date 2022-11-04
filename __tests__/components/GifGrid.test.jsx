
import { render } from '@testing-library/react';

import { GifGrid } from '../../src/components/GifGrid';

describe('Testeando <GifGrid />', () => {

    const category = "Braking Bad";

    const setup = () => {
        const utils = render( <GifGrid category={ category } /> );

        return ({
            ...utils,
        })
    }

    test('debe recibir la prop category obligatoria y de tipo string', () => {
        setup();

    })
})
