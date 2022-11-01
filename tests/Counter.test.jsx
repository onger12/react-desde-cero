import { fireEvent, render, screen } from '@testing-library/react'
import Counter from '../src/components/Counter'

describe('Pruebas en <Counter />', () => {
  
    const value = 10;

    test('debe hacer match con el snapshot', () => {
        
        const { container } = render( <Counter value={ value } /> );
        
        expect( container ).toMatchSnapshot();

    })
    
    test('debe renderizar el valor por defecto pasado por props', () => {
        
        render( <Counter value={ value }/> );
        
        expect( screen.getByText(value) ).toBeTruthy();

    })

    test('debe incrementar el contador cuando se presione el boton +1', () => {
        
        const { container, debug } = render( <Counter value={ value } /> );
        
        fireEvent.click( screen.getByRole('button', { name: "btn-+1" }) );
        
        expect( screen.findByText( value + 1 ) ).toBeTruthy();
    })
    test('debe decrementar el contador cuando se presione el boton -1', () => {
        
        const { container, debug } = render( <Counter value={ value } /> );
        
        fireEvent.click( screen.getByRole('button', { name: "btn--1" }) );
        
        expect( screen.findByText( value - 1 ) ).toBeTruthy();
    })
    test('debe resetear el contador cuando se presione el boton reset', () => {
        
        const { container, debug } = render( <Counter value={ value } /> );

        fireEvent.click( screen.getByRole('button', { name: "btn-+1" }) );
        fireEvent.click( screen.getByRole('button', { name: "btn-+1" }) );
        fireEvent.click( screen.getByRole('button', { name: "btn-+1" }) );
        fireEvent.click( screen.getByRole('button', { name: "btn-reset" }) );

        expect( screen.findByText( value ) ).toBeTruthy();
    })

})