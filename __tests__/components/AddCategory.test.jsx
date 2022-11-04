import { render, screen, fireEvent, debug } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe( 'Testeando <AddCategory />', () => {

    const setup = () => {
        const utils = render( <AddCategory /> );
        const input = screen.getByLabelText( 'search-input' );
        const form = screen.getByLabelText( 'form' );

        return {
            input,
            form,
            ...utils
        }
    }
    
    test('debe hacer match con el snapshot', () => {
        const { container } = setup();
        expect( container ).toMatchSnapshot();
    })
    
    test('input.value debe actualizarse con el evento onChange', () => {
        const { input } = setup();
        const value = 'Braking Bad';
        fireEvent.change( input, { target : { value } } );
        
        expect( input.value ).toBe( value );
    })

    test('el form debe enviar el input.value con el evento onSubmit', () => {
        const { input, form } = setup();
        const value = 'Braking Bad';

        fireEvent.change( input, { target : { value } } );


        console.log( input.value );
        expect( input.value ).toBe( value );
    })
})