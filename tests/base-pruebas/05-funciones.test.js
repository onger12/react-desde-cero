import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Testeando 05-funciones', () => {
    test('getUser() debe retornar un objeto (usuario)', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        };

        const returnedUser = getUser();

        expect( testUser ).toEqual(returnedUser)
    })

    test('getUserActive() debe retornar un objeto (usuario) con el nombre pasadoen argumentos seteado', () => {

        //Arrange
        const nombre = "Dujardin";
        const testUser = {
            uid: 'ABC123',
            username: nombre,
        }

        const retornedUser = getUsuarioActivo( nombre )



    })
});