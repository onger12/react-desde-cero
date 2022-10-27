import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Testeando 06-deses-obj', () => {
    test('usContext deberia retornar un objeto', () => {
        //1. Arrange
        
        const clave = 'Spiderman';
        const nombre = "Piter Parker";
        const edad = 22;
        const rango = 'Soldado';

        //2. Act
        const heroeRetornado = usContext(clave, nombre, edad, rango);

        //Assert
        expect( heroeRetornado ).toEqual( expect.any( Object ) )
    });
});