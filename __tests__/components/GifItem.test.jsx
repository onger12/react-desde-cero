import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Testeando <GifItem />', () => {

    const title = '';
    const url = 'https://giphy.com/brakingbad';

    const setup = () => {
        const utils = render ( 
            <GifItem 
                title={ title }
                url={ url } 
            /> 
        );

        const pTitle = utils.getByLabelText( 'p-title' );
        const img = utils.getByLabelText( 'gif-img' );

        return ({
            pTitle,
            img,
            ...utils,
        })
    }
    
    test('debe tener title obligatorios y ser de tipo string', () => {
        setup();
    })

    test('el titulo debe renderizarse en un <p>', () => { 
        const { pTitle } = setup();

        expect( pTitle.innerHTML.trim() ).toBe( title || 'Expert Gif');
    })
    test('el url debe ser pasado como argumento <img src={ url } />', () => { 
        const { img } = setup();

        expect( img.src ).toBe( url );
    })
})