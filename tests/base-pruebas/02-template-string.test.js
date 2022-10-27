import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('Message debe ser igual a Hola, Dujardin', () => {
        const nombre = 'Dujardin';
        const message = getSaludo( nombre );
        expect(message).toBe(`Hola ${ nombre }`);
    });
});