import { getImagen } from "../../src/base-pruebas/11-async-await"


describe('Testeando 11-async-await', () => {
    test('getImagen() debe retornar un URL', async () => {
        const url = await getImagen();
        expect( typeof url ).toBe( 'string' );
    })
})