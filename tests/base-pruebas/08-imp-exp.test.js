import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Testeando 08-imp-exp', () => {

    test('getHeroeById() debe retornar un objeto (heroe)', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    })

    test('getHeroeById() debe retornar undefined', () => {
        const id = 100;
        const heroe = getHeroeById( id );
        expect( heroe ).toBeFalsy();
    })

    test('getHeroeByOwner() debe retornar un arreglo de 3 posiciones', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        expect( heroes.length ).toBe( 3 );
    })

    test('getHeroeByOwner() debe retornar un arreglo vacío', () => {
        const owner = '';
        const heroes = getHeroesByOwner( owner );
        expect( heroes.length ).toBe( 0 );
    })
})
